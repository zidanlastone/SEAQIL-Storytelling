import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Participant, Roles, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react";


export default function List({ auth, participant = [] }: PageProps<{ participant: Participant[] }>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: Participant, show: boolean }>({ item: undefined, show: false });

  const [globalFilter, setGlobalFilter] = useState<string>('');

  const columnHelper = createColumnHelper<Participant>();
  const columns = [
    columnHelper.accessor(row => row.category_id, {
      header: 'Kategori',
      id: 'table-header-category',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.language_id, {
      header: 'Bahasa',
      id: 'table-header-language',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.level_of_participant_id, {
      header: 'Tingkatan Pendidikan',
      id: 'table-header-level_of_participant_id',
      cell: info => new Date(info.getValue() as string).toLocaleString(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.payment_receipt, {
      header: 'Bukti Pembayaran',
      id: 'table-header-payment_receipt',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.certificate, {
      header: 'Sertifikat',
      id: 'table-header-certificate',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.status_verifikasi, {
      header: 'Status Verifikasi',
      id: 'table-header-status_verifikasi',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.id, {
      id: 'table-header-action',
      header: 'Aksi',
      cell: (_props) => (
        <div key={_props.getValue()}>
          <Link type="button" className="px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white" href={route('admin.users.edit', { item: _props.getValue() })}>Edit</Link>
          <button type="button" className="px-3 py-1 mr-1 bg-red-500 rounded-md text-white" onClick={() => setShowDeleteDialog({ item: _props.row.original, show: true })}>Hapus</button>
        </div>
      ),
      footer: props => props.column.id,
    }),
  ];

  const table = useReactTable({
    columns,
    data: participant,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User Management</h2>}>

      <Head title="Admin | User Management" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <div className="my-3 md:mx-2 flex flex-col md:flex-row md:justify-between">
              <div className="md:mx-2 my-2 order-first">
                <PrimaryButton onClick={() => setShowCreateDialog(true)}>Tambah Data</PrimaryButton>
              </div>
              <div className="md:mx-2 my-2 order-last">
                <DebouncedInput
                  value={globalFilter ?? ''}
                  onChange={value => setGlobalFilter(String(value))}
                  className="px-2 py-2 font-sm shadow border rounded"
                  placeholder="Cari semua kolom"
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

    </AuthenticatedLayout>
  )
}