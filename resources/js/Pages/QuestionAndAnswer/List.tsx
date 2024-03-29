import DebouncedInput from "@/Components/DebounceInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import RowContent from "@/Components/Table/RowContent";
import RowHeader from "@/Components/Table/RowHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Category, ExternalServiceConfig, PageProps, QuestionAndAnswer } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo, useState } from "react";
import CreateForm from "./Partials/Form";
import DeleteForm from "./Partials/DeleteForm";
import AdminLayout from "@/Layouts/AdminLayout";

export default function List({ auth, questions = [] }: PageProps<{ questions: QuestionAndAnswer[] }>) {

  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState<{ item?: QuestionAndAnswer, show: boolean }>({ item: undefined, show: false });

  const [showUpdateDialog, setShowUpdateDialog] = useState<{ item?: QuestionAndAnswer, show: boolean }>({ item: undefined, show: false });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const columnHelper = createColumnHelper<QuestionAndAnswer>();

  const columns = useMemo(() => [
    columnHelper.accessor(row => row.question, {
      header: 'Pertanyaan',
      id: 'table-header-question',
      cell: info => info.getValue(),
      footer: props => props.column.id,
      filterFn: 'includesString',
    }),
    columnHelper.accessor(row => row.answer, {
      header: 'Jawaban',
      id: 'table-header-answer',
      cell: info => info.getValue(),
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

  const table = useReactTable({
    columns,
    data: questions,
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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Question And Answers</h2>}>

      <Head title="Admin | Category Management" />

      <div className="py-2">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <div className="my-3 md:mx-2 flex flex-col md:flex-row md:justify-between">
              <div className="md:mx-2 my-2 order-first">
                <PrimaryButton onClick={() => setShowCreateDialog(true)}>Tambah Data</PrimaryButton>
              </div>
              <div className="md:mx-2 my-2 order-last">
                <DebouncedInput
                  value={getColumnFilterValue('table-header-question')}
                  onChange={value => setColumnFilters([{ value, id: 'table-header-question' }])}
                  className="px-2 py-2 font-sm shadow border rounded"
                  placeholder="Cari Pertanyaan"
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
          className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
          onComplete={() => setShowCreateDialog(false)} />
      </Modal>

      {/* update mode */}
      <Modal show={showUpdateDialog.show} onClose={() => setShowUpdateDialog({ item: undefined, show: false })}>
        <CreateForm mode="update"
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