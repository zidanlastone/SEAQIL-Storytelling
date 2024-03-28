import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Roles, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react";
import CreateUserForm from "./Partials/CreateUserForm";
import AdminDeleteUserForm from "./Partials/AdminDeleteUserForm";
import AdminLayout from "@/Layouts/AdminLayout";


export default function List({ auth, users = [], roles = [] }: PageProps<{ users: User[], roles: Roles[] }>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: User, show: boolean }>({ item: undefined, show: false });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columnHelper = createColumnHelper<User>();
  const columns = [
    columnHelper.accessor(row => row.name, {
      header: 'Nama',
      id: 'table-header-name',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.email, {
      header: 'Email',
      id: 'table-header-email',
      cell: info => info.getValue(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.email_verified_at, {
      header: 'Verifikasi Email',
      id: 'table-header-email_verification',
      cell: info => new Date(info.getValue() as string).toLocaleString(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.created_at, {
      header: 'Created At',
      id: 'table-header-created_at',
      cell: info => new Date(info.getValue() as string).toLocaleString(),
      footer: props => props.column.id,
    }),
    columnHelper.accessor(row => row.id, {
      id: 'table-header-action',
      header: 'Aksi',
      cell: (_props) => (
        <div key={_props.getValue()}>
          <Link type="button" className="px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white" href={route('admin.users.edit', { user: _props.getValue() })}>Edit</Link>
          <button type="button" className="px-3 py-1 mr-1 bg-red-500 rounded-md text-white" onClick={() => setShowDeleteDialog({ item: _props.row.original, show: true })}>Hapus</button>
        </div>
      ),
      footer: props => props.column.id,
    }),
  ];

  const table = useReactTable({
    columns,
    data: users,
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
                  value={getColumnFilterValue('table-header-name')}
                  onChange={value => setColumnFilters([{ value, id: 'table-header-name' }])}
                  className="px-2 py-2 font-sm shadow border rounded"
                  placeholder="Cari semua kolom"
                />
              </div>
            </div>


            <div className="w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  {table.getHeaderGroups().map(headerGroup => <RowHeader key={headerGroup.id} {...headerGroup} />)}
                </thead>
                <tbody className="bg-white">
                  {table.getRowModel().rows.map(row => <RowContent key={row.id} {...row} />)}
                </tbody>
              </table>
            </div>

          </section>
        </div>
      </div>

      <Modal show={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
        <CreateUserForm className="p-4 sm:p-8 bg-white shadow sm:rounded-lg" onComplete={() => setShowCreateDialog(false)} roles={roles} />
      </Modal>

      <Modal show={showDeleteDialog.show} onClose={() => setShowDeleteDialog({ item: undefined, show: false })}>
        <AdminDeleteUserForm user={showDeleteDialog.item} className="p-4 sm:p-8 bg-white shadow sm:rounded-lg" onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} />
      </Modal>
    </AdminLayout>
  )
}