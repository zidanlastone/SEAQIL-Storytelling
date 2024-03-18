import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import TableColumn from "./Partials/TableColumn";


export default function List({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {

  return <AuthenticatedLayout
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User</h2>}>

    <Head title="Profile" />

    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
          <div className="relative rounded-xl overflow-auto">
          <table className="table-auto">
            <thead>
              <tr>
                <TableColumn colHeading={true}>Nama</TableColumn>
                <TableColumn colHeading={true}>Email</TableColumn>
                <TableColumn colHeading={true}>Password</TableColumn>
                <TableColumn colHeading={true}>Role</TableColumn>
                <TableColumn colHeading={true}>Action</TableColumn>
              </tr>
            </thead>
            <tbody> 
              <tr>
               <TableColumn>Nama</TableColumn>
               <TableColumn>Email</TableColumn>
               <TableColumn>Password</TableColumn>
               <TableColumn>Role</TableColumn>
               <TableColumn>
                <div className="d-flex flex-row">
                  <button type="button" className="px-2 py-1 rounded-2 shadow-sm text-yellow-800">Edit</button>
                  <button type="button">Delete</button>
                </div>
               </TableColumn>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>

  </AuthenticatedLayout>
}