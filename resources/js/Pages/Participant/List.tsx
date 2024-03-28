import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Category, Language, LevelOfParticipant, PageProps, Participant, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import ParticipantForm from "./Partials/ParticipantForm";
import DeleteParticipant from "./Partials/DeleteParticipant";
import ConditionalRender from "@/Components/ConditionalRender";
import AdminLayout from "@/Layouts/AdminLayout";

type Can = {
  [key: string]: boolean
}

export default function List({ auth, participants = [], users, languages, categories, level_of_participant, can }: PageProps<{
  participants: Participant[],
  users: User[],
  languages: Language[],
  categories: Category[],
  level_of_participant: LevelOfParticipant[],
  can: Can
}>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: Participant, show: boolean }>({ item: undefined, show: false });

  const [showUpdateDialog, setShowUpdateDialog] = useState<{ item?: Participant, show: boolean }>({ item: undefined, show: false });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columnHelper = createColumnHelper<Participant>();


  const columns = useMemo(() => [
    columnHelper.accessor(row => row.user.name, {
      header: 'Nama Partisipan',
      id: 'table-header-participant_name',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.category?.category_name, {
      header: 'Kategori',
      id: 'table-header-category',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.language?.name, {
      header: 'Bahasa',
      id: 'table-header-language',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.level_of_participant?.level_name, {
      header: 'Tingkatan Partisipan',
      id: 'table-header-level_of_participant',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.payment_receipt, {
      header: 'Bukti Bayar',
      id: 'table-header-payment_receipt',
      cell: info =>  (
        <a href={'/storage/' + info?.getValue() as string}>Lihat</a>
      ),
    }),
    columnHelper.accessor(row => row.certificate, {
      header: 'Sertifikat',
      id: 'table-header-certificate',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.status_verifikasi, {
      header: 'Status Verifikasi',
      id: 'table-header-status_verifikasi',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.id, {
      id: 'table-header-action',
      header: 'Aksi',
      cell: (_props) => (
        <ConditionalRender key={_props.getValue()} condition={can['edit.participant']}>
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
        </ConditionalRender>
      ),
      footer: props => props.column.id,
    }),
  ], []);

  const table = useReactTable({
    columns,
    data: participants,
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
    <AdminLayout
      roles={auth.roles}
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Partisipan</h2>}>

      <Head title="Tingkatan Partisipan" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <div className="my-3 md:mx-2 flex flex-col md:flex-row md:justify-between">
              <div className="md:mx-2 my-2 order-first">
                <ConditionalRender condition={can['edit.participant']}>
                  <PrimaryButton onClick={() => setShowCreateDialog(true)}>Tambah Data</PrimaryButton>
                </ConditionalRender>
              </div>
              <div className="md:mx-2 my-2 order-last">
                <DebouncedInput
                  value={getColumnFilterValue('table-header-participant_name')}
                  onChange={value => setColumnFilters([{ value, id: 'table-header-participant_name' }])}
                  className="px-2 py-2 font-sm shadow border rounded"
                  placeholder="Cari Tingkatan Partisipan"
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
            </div>

          </section>
        </div>
      </div>

      {/* Create mode */}
      <Modal show={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
        <ParticipantForm mode="create"
          users={users}
          categories={categories}
          languages={languages}
          level_of_participants={level_of_participant}
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowCreateDialog(false)} />
      </Modal>

      {/* update mode */}
      <Modal show={showUpdateDialog.show} onClose={() => setShowUpdateDialog({ item: undefined, show: false })}>
        <ParticipantForm mode="update"
          item={showUpdateDialog.item}
          users={users}
          categories={categories}
          languages={languages}
          level_of_participants={level_of_participant}
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowUpdateDialog({ item: undefined, show: false })} />
      </Modal>

      {/* update delete prompt */}
      <Modal show={showDeleteDialog.show} onClose={() => setShowDeleteDialog({ item: undefined, show: false })}>
        <DeleteParticipant
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          item={showDeleteDialog.item} onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} />
      </Modal>
    </AdminLayout>
  )
}