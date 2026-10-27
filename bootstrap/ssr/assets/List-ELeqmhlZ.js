import { jsxs, jsx } from "react/jsx-runtime";
import { M as Modal } from "./Modal-CHogBQsx.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Link, Head } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";
import CreateUserForm from "./CreateUserForm-uIq4C2VE.js";
import AdminDeleteUserForm from "./AdminDeleteUserForm-dhuAKa3P.js";
import { A as AdminLayout } from "./AdminLayout-vXn9m_-t.js";
import { T as TableContent } from "./TableContent-DvJaEHPi.js";
import "@headlessui/react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./SelectInput-DYknGnd7.js";
import "./TextInput-CL99szxP.js";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./ConditionalRender-BsoLXbpe.js";
import "@tanstack/match-sorter-utils";
function List({ auth, users = [], roles = [] }) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
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
  console.log(users);
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "User Management" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | User Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 space-y-6", children: /* @__PURE__ */ jsx(
          TableContent,
          {
            data: users,
            columns,
            headerAction: /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) })
          }
        ) }) }),
        /* @__PURE__ */ jsx(Modal, { show: showCreateDialog, onClose: () => setShowCreateDialog(false), children: /* @__PURE__ */ jsx(CreateUserForm, { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", onComplete: () => setShowCreateDialog(false), roles }) }),
        /* @__PURE__ */ jsx(Modal, { show: showDeleteDialog.show, onClose: () => setShowDeleteDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(AdminDeleteUserForm, { user: showDeleteDialog.item, className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", onComplete: () => setShowDeleteDialog({ item: void 0, show: false }) }) })
      ]
    }
  );
}
export {
  List as default
};
