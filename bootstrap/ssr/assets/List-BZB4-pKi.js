import { jsx, jsxs } from "react/jsx-runtime";
import { M as Modal } from "./Modal-CHogBQsx.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Head } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import ParticipantForm from "./ParticipantForm-DfGfxSYd.js";
import DeleteParticipant from "./DeleteParticipant-DxRUmp79.js";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
import { A as AdminLayout } from "./AdminLayout-DmQ6hQui.js";
import { T as TableContent } from "./TableContent-zRVHdZtT.js";
import "@headlessui/react";
import "./ComboBoxInput-Cjtp4iA-.js";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./TextInput-CL99szxP.js";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-DhZx8MiO.js";
import "@tanstack/match-sorter-utils";
function List({
  auth,
  participants = [],
  users,
  languages,
  categories,
  level_of_participant,
  can
}) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [showUpdateDialog, setShowUpdateDialog] = useState({ item: void 0, show: false });
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row) => row.id, {
      header: "No",
      cell: (info) => parseInt(info.row.id) + 1,
      sortingFn: "alphanumeric"
    }),
    columnHelper.accessor((row) => row.user.name, {
      header: "Nama Partisipan",
      id: "table-header-participant_name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString",
      sortingFn: "alphanumeric"
    }),
    columnHelper.accessor((row) => {
      var _a;
      return (_a = row.category) == null ? void 0 : _a.category_name;
    }, {
      header: "Kategori",
      id: "table-header-category",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString",
      sortingFn: "alphanumeric"
    }),
    columnHelper.accessor((row) => {
      var _a;
      return (_a = row.language) == null ? void 0 : _a.name;
    }, {
      header: "Bahasa",
      id: "table-header-language",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString",
      sortingFn: "alphanumeric"
    }),
    // columnHelper.accessor(row => row.level_of_participant?.level_name, {
    //   header: 'Tingkatan Partisipan',
    //   id: 'table-header-level_of_participant',
    //   cell: info => info.getValue(),
    //   footer: props => props.column.id,
    //   filterFn: 'includesString',
    // }),
    // columnHelper.accessor(row => row.payment_receipt, {
    //   header: 'Bukti Bayar',
    //   id: 'table-header-payment_receipt',
    //   cell: info => (
    //     <a href={'/storage/' + info?.getValue() as string}>Lihat</a>
    //   ),
    // }),
    // columnHelper.accessor(row => row.certificate, {
    //   header: 'Sertifikat',
    //   id: 'table-header-certificate',
    //   cell: info => info.getValue(),
    //   footer: props => props.column.id,
    //   filterFn: 'includesString',
    // }),
    columnHelper.accessor((row) => row.status_verifikasi, {
      header: "Status Verifikasi",
      id: "table-header-description",
      cell: (info) => {
        if (info.getValue() == "1") {
          return /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded bg-green-400 shadow", children: "Sudah" });
        } else {
          return /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded bg-yellow-400 shadow", children: "Belum" });
        }
      },
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.id, {
      id: "table-header-action",
      header: "Aksi",
      cell: (_props) => /* @__PURE__ */ jsx(ConditionalRender, { condition: can["edit.participant"], children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "px-3 py-1 mr-1 bg-blue-500 rounded-md text-white",
            onClick: () => {
              window.open(route("participant.show", { participant: _props.getValue() }));
            },
            children: "Detail"
          }
        ),
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
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Partisipan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Partisipan" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsx(
          TableContent,
          {
            data: participants,
            columns,
            headerAction: /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(ConditionalRender, { condition: can["edit.participant"], children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) }) })
          }
        ) }) }),
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
