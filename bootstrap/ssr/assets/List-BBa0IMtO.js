import { jsx, jsxs } from "react/jsx-runtime";
import { M as Modal } from "./Modal-CHogBQsx.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Head } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import UploadCreationForm from "./UploadCreationForm-DQ4X_vGJ.js";
import CreationForm from "./CreationForm-BSu32chd.js";
import DeleteCreation from "./DeleteCreation-Ctj_a1v9.js";
import { A as AdminLayout } from "./AdminLayout-DmQ6hQui.js";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
import { T as TableContent } from "./TableContent-zRVHdZtT.js";
import "@headlessui/react";
import "./Checkbox-B46RnHis.js";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./TextInput-CL99szxP.js";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-DhZx8MiO.js";
import "@tanstack/match-sorter-utils";
function List({ auth, creations = [], creation = void 0 }) {
  console.log(creations, creation);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [showUpdateDialog, setShowUpdateDialog] = useState({ item: void 0, show: false });
  useState("");
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row) => row.id, {
      header: "No",
      cell: (info) => parseInt(info.row.id) + 1
    }),
    columnHelper.accessor((row) => {
      var _a, _b;
      return (_b = (_a = row == null ? void 0 : row.participant) == null ? void 0 : _a.user) == null ? void 0 : _b.name;
    }, {
      header: "Nama Peserta",
      id: "table-header-participant_user",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => {
      var _a, _b;
      return (_b = (_a = row == null ? void 0 : row.participant) == null ? void 0 : _a.category) == null ? void 0 : _b.category_name;
    }, {
      header: "Kategori Lomba",
      id: "table-header-category-category_name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => {
      var _a, _b;
      return (_b = (_a = row == null ? void 0 : row.participant) == null ? void 0 : _a.language) == null ? void 0 : _b.name;
    }, {
      header: "Bahasa",
      id: "table-header-category-language_name",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.title, {
      header: "Judul Karya",
      id: "table-header-title",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row == null ? void 0 : row.upload_status, {
      header: "Status Upload",
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
    columnHelper.accessor((row) => row.upload_location, {
      header: "Tautan karya",
      id: "table-header-upload_location",
      cell: (info) => {
        if (info.getValue() != null) {
          return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => {
            if (info.getValue() != null) {
              window.open(info.getValue());
            }
          }, children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" }) }) }) }, info.getValue());
        }
        return null;
      },
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
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: auth.roles.includes("participant") ? "Unggah Karya Video" : "Unggah Karya Video Peserta" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | Karya Peserta" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsxs("div", { className: "w-full mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsxs(ConditionalRender, { condition: auth.roles.includes("participant"), children: [
            /* @__PURE__ */ jsx("p", { children: "Peserta berhak mengunggah satu video dengan ketentuan" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc ml-4 my-4", children: [
              /* @__PURE__ */ jsx("li", { children: "Durasi maksimal 8 menit" }),
              /* @__PURE__ */ jsx("li", { children: "Resolusi video minimal 1920x1080 piksel" })
            ] }),
            /* @__PURE__ */ jsx(ConditionalRender, { condition: creation != void 0, children: /* @__PURE__ */ jsx(UploadCreationForm, { item: creation, mode: "update" }) })
          ] }),
          /* @__PURE__ */ jsx(ConditionalRender, { condition: auth.roles.includes("administrator") || auth.roles.includes("operator"), children: /* @__PURE__ */ jsx(
            TableContent,
            {
              data: creations,
              columns,
              headerAction: /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) })
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(Modal, { show: showCreateDialog, onClose: () => setShowCreateDialog(false), children: /* @__PURE__ */ jsx(
          CreationForm,
          {
            mode: "create",
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            onComplete: () => setShowCreateDialog(false)
          }
        ) }),
        /* @__PURE__ */ jsx(Modal, { show: showUpdateDialog.show, onClose: () => setShowUpdateDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          CreationForm,
          {
            mode: "update",
            item: showUpdateDialog.item,
            className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
            onComplete: () => setShowUpdateDialog({ item: void 0, show: false })
          }
        ) }),
        /* @__PURE__ */ jsx(Modal, { show: showDeleteDialog.show, onClose: () => setShowDeleteDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          DeleteCreation,
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
