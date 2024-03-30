import { jsxs, jsx } from "react/jsx-runtime";
import { f as fuzzyFilter, D as DebouncedInput, R as RowHeader, a as RowContent } from "./useFilterTable-BSX8uWJL.js";
import { M as Modal } from "./Modal-CHogBQsx.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Head } from "@inertiajs/react";
import { createColumnHelper, useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import CategoryForm from "./CategoryForm-BsJMqshO.js";
import DeleteCategory from "./DeleteCategory-4pLXERhg.js";
import { A as AdminLayout } from "./AdminLayout-fl1m4Isu.js";
import "@tanstack/match-sorter-utils";
import "@headlessui/react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./TextInput-CL99szxP.js";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-DhZx8MiO.js";
import "./ConditionalRender-BsoLXbpe.js";
function List({ auth, categories = [] }) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [showUpdateDialog, setShowUpdateDialog] = useState({ item: void 0, show: false });
  const [globalFilter, setGlobalFilter] = useState("");
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row) => row.category_name, {
      header: "Nama kategori",
      id: "table-header-category_name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.image, {
      header: "Image",
      id: "table-header-image",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.id, {
      id: "table-header-action",
      header: "Aksi",
      cell: (_props) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white",
            onClick: () => setShowUpdateDialog({ item: _props.row.original, show: true }),
            children: "Edit"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "px-3 py-1 mr-1 bg-red-500 rounded-md text-white",
            onClick: () => setShowDeleteDialog({ item: _props.row.original, show: true }),
            children: "Hapus"
          }
        )
      ] }, _props.getValue()),
      footer: (props) => props.column.id
    })
  ], []);
  const table = useReactTable({
    columns,
    data: categories,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter
  });
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Kategori" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | Category Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsxs("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "my-3 md:mx-2 flex flex-col md:flex-row md:justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) }),
            /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-last", children: /* @__PURE__ */ jsx(
              DebouncedInput,
              {
                value: globalFilter,
                onChange: (value) => setGlobalFilter(String(value)),
                className: "px-2 py-2 font-sm shadow border rounded",
                placeholder: "Cari Data Global"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: table.getHeaderGroups().map((headerGroup, index) => /* @__PURE__ */ jsx(RowHeader, { ...headerGroup }, headerGroup.id + "-" + index)) }),
            /* @__PURE__ */ jsx("tbody", { className: "bg-white", children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(RowContent, { ...row }, row.id)) })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsx(Modal, { show: showCreateDialog, onClose: () => setShowCreateDialog(false), children: /* @__PURE__ */ jsx(
          CategoryForm,
          {
            mode: "create",
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            onComplete: () => setShowCreateDialog(false)
          }
        ) }),
        /* @__PURE__ */ jsx(Modal, { show: showUpdateDialog.show, onClose: () => setShowUpdateDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          CategoryForm,
          {
            mode: "update",
            item: showUpdateDialog.item,
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            onComplete: () => setShowDeleteDialog({ item: void 0, show: false })
          }
        ) }),
        /* @__PURE__ */ jsx(Modal, { show: showDeleteDialog.show, onClose: () => setShowDeleteDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          DeleteCategory,
          {
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            item: showDeleteDialog.item,
            onComplete: () => setShowDeleteDialog({ item: void 0, show: false })
          }
        ) })
      ]
    }
  );
}
export {
  List as default
};
