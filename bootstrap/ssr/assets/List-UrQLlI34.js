import { jsxs, jsx } from "react/jsx-runtime";
import { M as Modal } from "./Modal-CHogBQsx.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Head } from "@inertiajs/react";
import { createColumnHelper } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import CategoryForm from "./Form-CDfA_t9B.js";
import DeleteCategory from "./DeleteForm-Dxsv2Yqn.js";
import { A as AdminLayout } from "./AdminLayout-BrsjHSWF.js";
import { T as TableContent } from "./TableContent-DvJaEHPi.js";
import "@headlessui/react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./ConditionalRender-BsoLXbpe.js";
import "@tanstack/match-sorter-utils";
function List({ auth, questions = [] }) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [showUpdateDialog, setShowUpdateDialog] = useState({ item: void 0, show: false });
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row) => row.question, {
      header: "Pertanyaan",
      id: "table-header-question",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.answer, {
      header: "Jawaban",
      id: "table-header-answer",
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
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Question And Answers" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | Category Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsx(
          TableContent,
          {
            data: questions,
            columns,
            headerAction: /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-first", children: /* @__PURE__ */ jsx(PrimaryButton, { onClick: () => setShowCreateDialog(true), children: "Tambah Data" }) })
          }
        ) }) }),
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
