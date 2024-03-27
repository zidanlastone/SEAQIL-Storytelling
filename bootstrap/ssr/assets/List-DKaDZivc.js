import { jsx, jsxs } from "react/jsx-runtime";
import { M as Modal } from "./Modal-4z2vzv2h.js";
import { A as Authenticated } from "./AuthenticatedLayout-C8mUBdke.js";
import { Head } from "@inertiajs/react";
import { createColumnHelper, useReactTable, getCoreRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { useState, useMemo } from "react";
import SliderForm from "./CreationForm-BaAOy8zR.js";
import DeleteSlider from "./DeleteCreation-_ZyhWxgk.js";
import "@headlessui/react";
import "./ApplicationLogo-Jk81KQHW.js";
import "./Checkbox-B46RnHis.js";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./PrimaryButton-C-TDjBGq.js";
import "./TextInput-CL99szxP.js";
function List({ auth, creations = [] }) {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState({ item: void 0, show: false });
  const [showUpdateDialog, setShowUpdateDialog] = useState({ item: void 0, show: false });
  const [columnFilters, setColumnFilters] = useState([]);
  const columnHelper = createColumnHelper();
  const columns = useMemo(() => [
    columnHelper.accessor((row) => row.title, {
      header: "Judul Karya",
      id: "table-header-title",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id,
      filterFn: "includesString"
    }),
    columnHelper.accessor((row) => row.upload_location, {
      header: "Lokasi Upload",
      id: "table-header-upload_location",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.upload_status, {
      header: "Status Upload",
      id: "table-header-description",
      cell: (info) => info.getValue(),
      footer: (props) => props.column.id
    }),
    columnHelper.accessor((row) => row.id, {
      id: "table-header-action",
      header: "Aksi",
      cell: (_props) => /* @__PURE__ */ jsx("div", {}, _props.getValue()),
      footer: (props) => props.column.id
    })
  ], []);
  useReactTable({
    columns,
    data: creations,
    state: {
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters
  });
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Karya Peserta" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | Category Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsxs("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Unggah Karya Video" }),
          /* @__PURE__ */ jsx("p", { children: "Peserta berhak mengunggah satu video dengan ketentuan" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc ml-4 my-4", children: [
            /* @__PURE__ */ jsx("li", { children: "Durasi maksimal 8 menit" }),
            /* @__PURE__ */ jsx("li", { children: "Resolusi video minimal 1920x1080 piksel" })
          ] }),
          /* @__PURE__ */ jsx(SliderForm, {})
        ] }) }) }),
        /* @__PURE__ */ jsx(Modal, { show: showCreateDialog, onClose: () => setShowCreateDialog(false) }),
        /* @__PURE__ */ jsx(Modal, { show: showUpdateDialog.show, onClose: () => setShowUpdateDialog({ item: void 0, show: false }) }),
        /* @__PURE__ */ jsx(Modal, { show: showDeleteDialog.show, onClose: () => setShowDeleteDialog({ item: void 0, show: false }), children: /* @__PURE__ */ jsx(
          DeleteSlider,
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
