import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Category, PageProps, Slider } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import CreationForm from "./Partials/CreationForm";
import DeleteSlider from "./Partials/DeleteCreation";

export default function List({ auth, creations = [] }: PageProps<{ creations: any[] }>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: Slider, show: boolean }>({ item: undefined, show: false });

  const [showUpdateDialog, setShowUpdateDialog] = useState<{ item?: Slider, show: boolean }>({ item: undefined, show: false });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columnHelper = createColumnHelper<any>();

  const columns = useMemo(() => [
    columnHelper.accessor(row => row.title, {
      header: 'Judul Karya',
      id: 'table-header-title',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.upload_location, {
      header: 'Lokasi Upload',
      id: 'table-header-upload_location',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.upload_status, {
      header: 'Status Upload',
      id: 'table-header-description',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.id, {
      id: 'table-header-action',
      header: 'Aksi',
      cell: (_props) => (
        <div key={_props.getValue()}>
          {/* <button
            type="button"
            className="px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white"
            onClick={() => setShowUpdateDialog({ item: _props.row.original, show: true })}>
            Edit
          </button> */}
          {/* <button
            type="button"
            className="px-3 py-1 mr-1 bg-red-500 rounded-md text-white"
            onClick={() => setShowDeleteDialog({ item: _props.row.original, show: true })}>
            Hapus
          </button> */}
        </div>
      ),
      footer: props => props.column.id,
    }),
  ], []);

  const table = useReactTable({
    columns,
    data: creations,
    state: {
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
  });

  const getColumnFilterValue = (columnId: string): string => {
    let data = table.getState().columnFilters.find(item => item.id = columnId)
    if (data != undefined) return data.value as string;
    return '';
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Karya Peserta</h2>}>

      <Head title="Admin | Category Management" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <h2 className="text-lg font-semibold">Unggah Karya Video</h2>
            <p>Peserta berhak mengunggah satu video dengan ketentuan</p>
            <ul className="list-disc ml-4 my-4">
              <li>Durasi maksimal 8 menit</li>
              <li>Resolusi video minimal 1920x1080 piksel</li>
            </ul>

            

            <CreationForm />

            {/* <div className="my-3 md:mx-2 flex flex-col md:flex-row md:justify-between">
              <div className="md:mx-2 my-2 order-first">
                <PrimaryButton onClick={() => setShowCreateDialog(true)}>Submit Data</PrimaryButton>
              </div>
              <div className="md:mx-2 my-2 order-last">
                <DebouncedInput
                  value={getColumnFilterValue('table-header-category_name')}
                  onChange={value => setColumnFilters([{ value, id: 'table-header-category_name' }])}
                  className="px-2 py-2 font-sm shadow border rounded"
                  placeholder="Cari Nama Kategori"
                />
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  {table.getHeaderGroups().map((headerGroup, index) => <RowHeader key={headerGroup.id + '-' + index} {...headerGroup} />)}
                </thead>
                <tbody className="bg-white">
                  {table.getRowModel().rows.map(row => <RowContent key={row.id} {...row} />)}
                </tbody>
              </table>
            </div> */}

          </section>
        </div>
      </div>

      {/* Create mode */}
      <Modal show={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
        {/* <CreationForm mode="create"
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowCreateDialog(false)} /> */}
      </Modal>

      {/* update mode */}
      <Modal show={showUpdateDialog.show} onClose={() => setShowUpdateDialog({ item: undefined, show: false })}>
        {/* <CreationForm mode="update"
          item={showUpdateDialog.item}
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} /> */}
      </Modal>

      {/* update delete prompt */}
      <Modal show={showDeleteDialog.show} onClose={() => setShowDeleteDialog({ item: undefined, show: false })}>
        <DeleteSlider
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          item={showDeleteDialog.item} onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} />
      </Modal>
    </AuthenticatedLayout>
  )
}