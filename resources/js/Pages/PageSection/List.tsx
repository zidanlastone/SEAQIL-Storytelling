import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Category, ExternalServiceConfig, Language, PageProps, PageSection, QuestionAndAnswer } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import CreateForm from "./Partials/Form";
import DeleteForm from "./Partials/DeleteForm";
import AdminLayout from "@/Layouts/AdminLayout";
import { fuzzyFilter } from "@/utils/useFilterTable";

export default function List({ auth, page_sections = [], languages = [] }: PageProps<{ page_sections: PageSection[], languages: Language[] }>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: PageSection, show: boolean }>({ item: undefined, show: false });

  const [showUpdateDialog, setShowUpdateDialog] = useState<{ item?: PageSection, show: boolean }>({ item: undefined, show: false });

  const [globalFilter, setGlobalFilter] = useState<string>('');

  const columnHelper = createColumnHelper<PageSection>();

  const columns = useMemo(() => [
    columnHelper.accessor(row => row.section, {
      header: 'Section',
      id: 'table-header-section',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    // columnHelper.accessor(row => row.content, {
    //   header: 'Content',
    //   id: 'table-header-question',
    //   cell: info => info.renderValue(),
    //   footer: props => props.column.id,
    //   filterFn: 'includesString',
    // }),
    columnHelper.accessor(row => row.language_id, {
      header: 'language_id',
      id: 'table-header-question',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
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

  const table = useReactTable({
    columns,
    data: page_sections,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
  });

  return (
    <AdminLayout
      roles={auth.roles}
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Page Section</h2>}>

      <Head title="Admin | Page Section Management" />

      <div className="py-2">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <div className="my-3 md:mx-2 flex flex-col md:flex-row md:justify-between">
              <div className="md:mx-2 my-2 order-first">
                <PrimaryButton onClick={() => setShowCreateDialog(true)}>Tambah Data</PrimaryButton>
              </div>
              <div className="md:mx-2 my-2 order-last">
                <DebouncedInput
                  value={globalFilter}
                  onChange={value => setGlobalFilter(String(value))}
                  className="px-2 py-2 font-sm shadow border rounded"
                  placeholder="Cari Data Global"
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
        <CreateForm mode="create"
          languages={languages}
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowCreateDialog(false)} />
      </Modal>

      {/* update mode */}
      <Modal show={showUpdateDialog.show} onClose={() => setShowUpdateDialog({ item: undefined, show: false })}>
        <CreateForm mode="update"
          languages={languages}
          item={showUpdateDialog.item}
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} />
      </Modal>

      {/* update delete prompt */}
      <Modal show={showDeleteDialog.show} onClose={() => setShowDeleteDialog({ item: undefined, show: false })}>
        <DeleteForm
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          item={showDeleteDialog.item} onComplete={() => setShowDeleteDialog({ item: undefined, show: false })} />
      </Modal>
    </AdminLayout>
  )
}