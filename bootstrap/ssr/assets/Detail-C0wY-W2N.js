import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { A as AdminLayout } from "./AdminLayout-DNKnB601.js";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import UpdateCreationTitle from "./UpdateCreationTitle-QE-bBAGk.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./ConditionalRender-BsoLXbpe.js";
import "./InputError-cRVTeK4i.js";
import "./PrimaryButton-C-TDjBGq.js";
function Detail({
  auth,
  participant
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  console.log(participant);
  const [updateMode, setUpdateMode] = useState(false);
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Detail Partisipan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Detail Partisipan" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsx("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Nama Peserta" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: participant.user.name, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Email Peserta" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: participant.user.email, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Jenis Kelamin" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: ((_a = participant.user.profile) == null ? void 0 : _a.gender) == "L" ? "Laki-Laki" : "Perempuan", readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Nomor WhatsApp" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_b = participant.user.profile) == null ? void 0 : _b.whatsapp_contact, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Nomor WhatsApp Orang Tua" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_c = participant.user.profile) == null ? void 0 : _c.parent_contact, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Institusi" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_d = participant.user.profile) == null ? void 0 : _d.institution, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Negara Asal" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_e = participant.user.profile) == null ? void 0 : _e.country, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Provinsi" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_f = participant.user.profile) == null ? void 0 : _f.province, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Kabupaten / Kota" }),
            /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_g = participant.user.profile) == null ? void 0 : _g.city, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Alamat Lengkap" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                className: "w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
                name: "description",
                id: "description",
                rows: 3,
                defaultValue: (_h = participant.user.profile) == null ? void 0 : _h.address,
                readOnly: true
              }
            )
          ] }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsx("h1", { children: "Data Registrasi" }) }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:grid-cols-2", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsx(UpdateCreationTitle, { item: participant == null ? void 0 : participant.creation, updateMode, setUpdateMode }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(InputLabel, { children: "Kategori" }),
                /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_i = participant.category) == null ? void 0 : _i.category_name, readOnly: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(InputLabel, { children: "Bahasa" }),
                /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_j = participant.language) == null ? void 0 : _j.name, readOnly: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(InputLabel, { children: "Jenjang Pendidikan" }),
                /* @__PURE__ */ jsx(TextInput, { className: "w-full", value: (_k = participant.level_of_participant) == null ? void 0 : _k.level_name, readOnly: true })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx(InputLabel, { children: "Bukti Pembayaran" }),
            /* @__PURE__ */ jsxs("a", { className: "justify-center", href: participant.payment_receipt_path, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx("img", { className: "w-1/2 rounded ", src: participant.payment_receipt_path, alt: participant.payment_receipt_path }),
              participant.payment_receipt_path
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "status_verifikasi", value: "Status Verifikasi" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "status_verifikasi-l", children: [
                /* @__PURE__ */ jsx("input", { type: "radio", id: "status_verifikasi-l", name: "status_verifikasi", readOnly: true, value: 0, checked: participant.status_verifikasi == "0" }),
                " Belum Terverifikasi"
              ] }),
              /* @__PURE__ */ jsxs("label", { htmlFor: "status_verifikasi-p", children: [
                /* @__PURE__ */ jsx("input", { type: "radio", id: "status_verifikasi-p", name: "status_verifikasi", readOnly: true, value: 1, checked: participant.status_verifikasi == "1" }),
                " Sudah Terverifikasi"
              ] })
            ] })
          ] })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Detail as default
};
