import { jsxs, jsx } from "react/jsx-runtime";
import { D as DebouncedInput, R as RowHeader, a as RowContent } from "./RowHeader-DZs0yCuy.js";
import { M as Modal } from "./Modal-4z2vzv2h.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { A as Authenticated } from "./AuthenticatedLayout-C8mUBdke.js";
import { Link, Head } from "@inertiajs/react";
import { createColumnHelper, useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useState } from "react";
import CreateUserForm from "./CreateUserForm-CwwUwFTa.js";
import AdminDeleteUserForm from "./AdminDeleteUserForm-DvvVQVzg.js";
import "@headlessui/react";
import "./ApplicationLogo-Jk81KQHW.js";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./TextInput-CL99szxP.js";
function List({ auth, users = [], roles = [] }) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [columnFilters, setColumnFilters] = useState([]);
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor((row) => row.name, {
      header: "Nama",
      id: "table-header-name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.email, {
      header: "Email",
      id: "table-header-email",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.email_verified_at, {
      header: "Verifikasi Email",
      id: "table-header-email_verification",
      cell: (info) => new Date(info.getValue()).toLocaleString(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.created_at, {
      header: "Created At",
      id: "table-header-created_at",
      cell: (info) => new Date(info.getValue()).toLocaleString(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.id, {
      id: "table-header-action",
      header: "Aksi",
      cell: (_props) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Link, { type: "button", className: "px-3 py-1 mr-1 bg-yellow-500 rounded-md text-white", href: route("admin.users.edit", { user: _props.getValue() }), children: "Edit" }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "px-3 py-1 mr-1 bg-red-500 rounded-md text-white", onClick: () => setShowDeleteDialog({ item: _props.row.original, show: true }), children: "Hapus" })
      ] }, _props.getValue()),
      footer: (props) => props.column.id
    })
  ];
  const table = useReactTable({
    columns,
    data: users,
    state: {
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters
  });
  const getColumnFilterValue = (columnId) => {
    let data = table.getState().columnFilters.find((item) => item.id = columnId);
    if (data != void 0)
      return data.value;
    return "";
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "User Management" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | User Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsxs("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "my-3 md:mx-2 flex flex-col md:flex-row md:justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) }),
            /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-last", children: /* @__PURE__ */ jsx(
              DebouncedInput,
              {
                value: getColumnFilterValue("table-header-name"),
                onChange: (value) => setColumnFilters([{ value, id: "table-header-name" }]),
                className: "px-2 py-2 font-sm shadow border rounded",
                placeholder: "Cari semua kolom"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(RowHeader, { ...headerGroup }, headerGroup.id)) }),
            /* @__PURE__ */ jsx("tbody", { className: "bg-white", children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(RowContent, { ...row }, row.id)) })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsx(Modal, { show: showCreateDialog, onClose: () => setShowCreateDialog(false), children: /* @__PURE__ */ jsx(CreateUserForm, { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", onComplete: () => setShowCreateDialog(false), roles }) }),
        /* @__PURE__ */ jsx(Modal, { show: showDeleteDialog.show, onClose: () => setShowDeleteDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(AdminDeleteUserForm, { user: showDeleteDialog.item, className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", onComplete: () => setShowDeleteDialog({ item: void 0, show: false }) }) })
      ]
    }
  );
}
export {
  List as default
};
