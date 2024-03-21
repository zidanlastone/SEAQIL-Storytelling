import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps, Roles, User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { createColumnHelper, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useState } from "react";
import CreateUserForm from "./Partials/CreateUserForm";
import AdminDeleteUserForm from "./Partials/AdminDeleteUserForm";


export default function List({ auth, users = [], roles = [] }: PageProps<{ users: User[], roles: Roles[] }>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ user?: User, show: boolean }>({ user: undefined, show: false });

  const [globalFilter, setGlobalFilter] = useState<string>('');

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
          {/* <Link type="button" className="px-3 py-1 mr-1 bg-blue-500 rounded-md text-white" href={route('admin.users.show', {user: _props.getValue()} )}>Detail</Link> */}
          <Link type="button" className="px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white" href={route('admin.users.edit', { user: _props.getValue() })}>Edit</Link>
          <button type="button" className="px-3 py-1 mr-1 bg-red-500 rounded-md text-white" onClick={() => setShowDeleteDialog({ user: _props.row.original, show: true })}>Hapus</button>
        </div>
      ),
      footer: props => props.column.id,
    }),
  ];

  const table = useReactTable({
    columns,
    data: users,
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
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <div className="relative rounded-xl overflow-auto w-100">
              <div className="my-3 mx-2 flex flex-row justify-between">
                <div className="mr-2">
                  <PrimaryButton onClick={() => setShowCreateDialog(true)}>Tambah Data</PrimaryButton>
                </div>
                <div className="mr-2 w-1/5 order-last">
                  <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={value => setGlobalFilter(String(value))}
                    className="px-2 py-2 font-sm shadow border rounded"
                    placeholder="Cari semua kolom"
                  />
                </div>
              </div>
              <table className="table-auto">
                <thead>
                  {table.getHeaderGroups().map(headerGroup => <RowHeader {...headerGroup} />)}
                </thead>
                <tbody className="bg-white">
                  {table.getRowModel().rows.map(row => <RowContent {...row} />)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showCreateDialog} onClose={() => setShowCreateDialog(false)}>
        <CreateUserForm className="p-4 sm:p-8 bg-white shadow sm:rounded-lg" onComplete={() => setShowCreateDialog(false)} roles={roles} />
      </Modal>

      <Modal show={showDeleteDialog.show} onClose={() => setShowDeleteDialog({ user: undefined, show: false })}>
        <AdminDeleteUserForm user={showDeleteDialog.user} className="p-4 sm:p-8 bg-white shadow sm:rounded-lg" onComplete={() => setShowDeleteDialog({ user: undefined, show: false })} />
      </Modal>
    </AuthenticatedLayout>
  )
}