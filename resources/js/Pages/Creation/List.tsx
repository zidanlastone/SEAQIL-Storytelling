import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Category, Creation, PageProps, Slider } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import UploadCreationForm from './Partials/UploadCreationForm';
import CreationForm from "./Partials/CreationForm";
import DeleteSlider from "./Partials/DeleteCreation";
import AdminLayout from "@/Layouts/AdminLayout";
import ConditionalRender from "@/Components/ConditionalRender";
import { fuzzyFilter } from "@/utils/useFilterTable";
import TableContent from "@/Components/Table/TableContent";

type CreationProps = {
  creations: Creation[],
  creation?: Creation
};

export default function List({ auth, creations = [], creation = undefined }: PageProps<CreationProps>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: Creation, show: boolean }>({ item: undefined, show: false });

  const [showUpdateDialog, setShowUpdateDialog] = useState<{ item?: Creation, show: boolean }>({ item: undefined, show: false });


  const [globalFilter, setGlobalFilter] = useState<string>('');

  const columnHelper = createColumnHelper<Creation>();

  const columns = useMemo(() => [
    columnHelper.accessor(row => row.id, {
      header: "No", cell: info => parseInt(info.row.id) + 1,
      filterFn: 'includesString'
    }),
    columnHelper.accessor(row => row?.participant?.user?.name, {
      header: 'Nama Peserta',
      id: 'table-header-participant_user',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row?.participant?.category?.category_name, {
      header: 'Kategori Lomba',
      id: 'table-header-category-category_name',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row?.participant?.language?.name, {
      header: 'Bahasa',
      id: 'table-header-category-language_name',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.title, {
      header: 'Judul Karya',
      id: 'table-header-title',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),

    columnHelper.accessor(row => row?.upload_status, {
      header: 'Status Upload',
      id: 'table-header-description',
      cell: info => {
        if (info.getValue() == "1") {
          return <span className="px-3 py-1 rounded bg-green-400 shadow">Sudah</span>
        } else {
          return <span className="px-3 py-1 rounded bg-yellow-400 shadow">Belum</span>
        }
      },
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.upload_location, {
      header: 'Tautan karya',
      id: 'table-header-upload_location',
      cell: (info) => {
        if (info.getValue() != null) {
          return (
            <div key={info.getValue()}>
              <button type="button" onClick={() => {
                if (info.getValue() != null) {
                  window.open(info.getValue())
                }
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
          )
        }
        return null;
      },
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.id, {
      id: 'table-header-action',
      header: 'Aksi',
      cell: (_props) => (
        <div key={_props.getValue()}>
          <button
            type="button"
            className="px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white"
            onClick={() => setShowUpdateDialog({ item: _props.row.original, show: true })}>
            Edit
          </button>
          <button
            type="button"
            className="px-3 py-1 mr-1 bg-red-500 rounded-md text-white"
            onClick={() => setShowDeleteDialog({ item: _props.row.original, show: true })}>
            Hapus
          </button>
        </div>
      ),
      footer: props => props.column.id,
    }),
  ], []);

  return (
    <AdminLayout
      roles={auth.roles}
      user={auth.user}
      participation={auth.participation}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{auth.roles.includes('participant') ? 'Unggah Karya Video' : 'Unggah Karya Video Peserta'}</h2>}>

      <Head title="Admin | Karya Peserta" />

      <div className="py-2">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">

          <ConditionalRender condition={auth.roles.includes('participant')}>
            <p>Peserta berhak mengunggah satu video dengan ketentuan</p>
            <ul className="list-disc ml-4 my-4">
              <li>Karya berbentuk video dengan format *.mp4</li>
              <li>Karya merupakan buatan sendiri</li>
              <li>Video dibuat dengan resolusi 1080p dan berdurasi maksimal 8 menit</li>
              <li>Ukuran file video tidak melebihi 200MB</li>
            </ul>

            <ConditionalRender condition={creation != undefined} >
              <UploadCreationForm item={creation} mode="update" />
            </ConditionalRender>
          </ConditionalRender>

          <ConditionalRender condition={auth.roles.includes('administrator') || auth.roles.includes('operator')}>
            {creations && (
              <TableContent <Creation>
                data={creations}
                columns={columns}
                headerAction={
                  <div className="md:mx-2 my-2 order-first">
                    <PrimaryButton onClick={() => setShowCreateDialog(true)}>Tambah Data</PrimaryButton>
                  </div>}
              />
            )} 
          </ConditionalRender>
        </div>
      </div>

      {/* Create mode */}
      <Modal show={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
        <CreationForm mode="create"
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowCreateDialog(false)} />
      </Modal>

      {/* update mode */}
      <Modal show={showUpdateDialog.show} onClose={() => setShowUpdateDialog({ item: undefined, show: false })}>
        <CreationForm mode="update"
          item={showUpdateDialog.item}
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowUpdateDialog({ item: undefined, show: false })} />
      </Modal>

      {/* update delete prompt */}
      <Modal show={showDeleteDialog.show} onClose={() => setShowDeleteDialog({ item: undefined, show: false })}>
        <DeleteSlider
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          item={showDeleteDialog.item} onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} />
      </Modal>
    </AdminLayout>
  )
}