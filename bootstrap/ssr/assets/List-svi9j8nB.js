import { jsx, jsxs } from "react/jsx-runtime";
import { D as DebouncedInput, R as RowHeader, a as RowContent } from "./RowHeader-DZs0yCuy.js";
import { M as Modal } from "./Modal-4z2vzv2h.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Head } from "@inertiajs/react";
import { createColumnHelper, useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import ParticipantForm from "./ParticipantForm-CQw2kMIw.js";
import DeleteParticipant from "./DeleteParticipant-DxRUmp79.js";
import { C as ConditionalRender, A as AdminLayout } from "./AdminLayout-Cqv_UyxI.js";
import "@headlessui/react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./TextInput-CL99szxP.js";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-S0g6f67c.js";
function List({ auth, participants = [], users, languages, categories, level_of_participant, can }) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [showUpdateDialog, setShowUpdateDialog] = useState({ item: void 0, show: false });
  const [columnFilters, setColumnFilters] = useState([]);
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row) => row.user.name, {
      header: "Nama Partisipan",
      id: "table-header-participant_name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => {
      var _a;
      return (_a = row.category) == null ? void 0 : _a.category_name;
    }, {
      header: "Kategori",
      id: "table-header-category",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => {
      var _a;
      return (_a = row.language) == null ? void 0 : _a.name;
    }, {
      header: "Bahasa",
      id: "table-header-language",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => {
      var _a;
      return (_a = row.level_of_participant) == null ? void 0 : _a.level_name;
    }, {
      header: "Tingkatan Partisipan",
      id: "table-header-level_of_participant",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.payment_receipt, {
      header: "Bukti Bayar",
      id: "table-header-payment_receipt",
      cell: (info) => /* @__PURE__ */ jsx("a", { href: "/storage/" + (info == null ? void 0 : info.getValue()), children: "Lihat" })
    }),
    columnHelper.accessor((row) => row.certificate, {
      header: "Sertifikat",
      id: "table-header-certificate",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.status_verifikasi, {
      header: "Status Verifikasi",
      id: "table-header-status_verifikasi",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.id, {
      id: "table-header-action",
      header: "Aksi",
      cell: (_props) => /* @__PURE__ */ jsx(ConditionalRender, { condition: can["edit.participant"], children: /* @__PURE__ */ jsxs("div", { children: [
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
      ] }, _props.getValue()) }, _props.getValue()),
      footer: (props) => props.column.id
    })
  ], []);
  const table = useReactTable({
    columns,
    data: participants,
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
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Partisipan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Tingkatan Partisipan" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsxs("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "my-3 md:mx-2 flex flex-col md:flex-row md:justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(ConditionalRender, { condition: can["edit.participant"], children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-last", children: /* @__PURE__ */ jsx(
              DebouncedInput,
              {
                value: getColumnFilterValue("table-header-participant_name"),
                onChange: (value) => setColumnFilters([{ value, id: "table-header-participant_name" }]),
                className: "px-2 py-2 font-sm shadow border rounded",
                placeholder: "Cari Tingkatan Partisipan"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "table-auto w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: table.getHeaderGroups().map((headerGroup, index) => /* @__PURE__ */ jsx(RowHeader, { ...headerGroup }, headerGroup.id + "-" + index)) }),
            /* @__PURE__ */ jsx("tbody", { className: "bg-white", children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(RowContent, { ...row }, row.id)) })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsx(Modal, { show: showCreateDialog, onClose: () => setShowCreateDialog(false), children: /* @__PURE__ */ jsx(
          ParticipantForm,
          {
            mode: "create",
            users,
            categories,
            languages,
            level_of_participants: level_of_participant,
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            onComplete: () => setShowCreateDialog(false)
          }
        ) }),
        /* @__PURE__ */ jsx(Modal, { show: showUpdateDialog.show, onClose: () => setShowUpdateDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          ParticipantForm,
          {
            mode: "update",
            item: showUpdateDialog.item,
            users,
            categories,
            languages,
            level_of_participants: level_of_participant,
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            onComplete: () => setShowUpdateDialog({ item: void 0, show: false })
          }
        ) }),
        /* @__PURE__ */ jsx(Modal, { show: showDeleteDialog.show, onClose: () => setShowDeleteDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          DeleteParticipant,
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
