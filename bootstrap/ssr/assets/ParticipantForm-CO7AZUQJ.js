import { jsxs, jsx } from "react/jsx-runtime";
import { C as ComboBoxInput } from "./ComboBoxInput-Cjtp4iA-.js";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { useForm } from "@inertiajs/react";
import { useEffect, useMemo, useState } from "react";
import "@headlessui/react";
function ParticipantForm({
  onComplete,
  className,
  item,
  mode = "create",
  users,
  categories,
  languages,
  level_of_participants
}) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    user_id: (item == null ? void 0 : item.user_id) || null,
    payment_receipt: void 0,
    status_verifikasi: item == null ? void 0 : item.status_verifikasi,
    category_id: (item == null ? void 0 : item.category_id) || null,
    language_id: (item == null ? void 0 : item.language_id) || null,
    level_of_participant_id: (item == null ? void 0 : item.level_of_participant_id) || null,
    certificate: item == null ? void 0 : item.certificate
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("participant.store"), { forceFormData: true });
    } else if (mode == "update" && item != void 0) {
      patch(route("participant.update", { participant: item == null ? void 0 : item.id }), { forceFormData: true });
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == "function") {
        onComplete();
      }
    }
  }, [wasSuccessful]);
  const combo_user = useMemo(() => {
    if (typeof users != void 0) {
      return users.map((item2) => ({ id: item2.id, value: item2.name }));
    }
    return [];
  }, [users]);
  const combo_category = useMemo(() => {
    if (typeof categories != void 0) {
      return categories.map((item2) => ({ id: item2.id, value: item2.category_name }));
    }
    return [];
  }, [categories]);
  const combo_languages = useMemo(() => {
    if (typeof languages != void 0) {
      return languages.map((item2) => ({ id: item2.id, value: item2.name }));
    }
    return [];
  }, [languages]);
  const combo_level_of_participants = useMemo(() => {
    if (typeof level_of_participants != void 0) {
      return level_of_participants.map((item2) => ({ id: item2.id, value: item2.level_name }));
    }
    return [];
  }, [level_of_participants]);
  const [selectedLOP, setSelectedLOP] = useState(combo_level_of_participants.find((x) => x.id == (item == null ? void 0 : item.level_of_participant_id)) || null);
  const [selectedUser, setSelectedUser] = useState(combo_user.find((x) => x.id == (item == null ? void 0 : item.user_id)) || null);
  const [selectedCategory, setSelectedCategory] = useState(combo_category.find((x) => x.id == (item == null ? void 0 : item.category_id)) || null);
  const [selectedLanguage, setSelectedLanguage] = useState(combo_languages.find((x) => x.id == (item == null ? void 0 : item.language_id)) || null);
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Tambah Data Tingkatan Partisipan" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "user_id", value: "Pilih User" }),
        /* @__PURE__ */ jsx(
          ComboBoxInput,
          {
            data: combo_user,
            id: "user_id",
            onChange: (value) => {
              setSelectedUser(value);
              setData("user_id", value.id);
            },
            value: selectedUser
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.payment_receipt, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "category_id", value: "Pilih Kategori" }),
        /* @__PURE__ */ jsx(
          ComboBoxInput,
          {
            data: combo_category,
            id: "category_id",
            onChange: (value) => {
              setSelectedCategory(value);
              setData("category_id", value.id);
            },
            value: selectedCategory
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.payment_receipt, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "language_id", value: "Pilih Bahasa" }),
        /* @__PURE__ */ jsx(
          ComboBoxInput,
          {
            data: combo_languages,
            id: "language_id",
            onChange: (value) => {
              setSelectedLanguage(value);
              setData("language_id", value.id);
            },
            value: selectedLanguage
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.payment_receipt, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "level_of_participant_id", value: "Pilih Tingkatan Partisipan" }),
        /* @__PURE__ */ jsx(
          ComboBoxInput,
          {
            data: combo_level_of_participants,
            id: "level_of_participant_id",
            onChange: (value) => {
              setSelectedLOP(value);
              setData("level_of_participant_id", value.id);
            },
            value: selectedLOP
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.payment_receipt, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "image", value: "Bukti Pembayaran" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "image",
            type: "file",
            name: "payment_receipt",
            className: "my-2 block w-full",
            autoComplete: "image",
            isFocused: true,
            onChange: (e) => {
              if (e.target.files) {
                setData("payment_receipt", e.target.files[0]);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.payment_receipt, className: "mt-2" }),
        (item == null ? void 0 : item.payment_receipt) && /* @__PURE__ */ jsxs("p", { children: [
          "File Sebelumnya: ",
          item == null ? void 0 : item.payment_receipt
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "certificate", value: "Link Sertifikat" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.certificate,
            className: "my-2 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("certificate", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.certificate, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "status_verifikasi", value: "Status Verifikasi" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "status_verifikasi-l", children: [
            /* @__PURE__ */ jsx("input", { type: "radio", id: "status_verifikasi-l", name: "status_verifikasi", value: 0, checked: data.status_verifikasi == 0, onChange: (e) => setData("status_verifikasi", 0) }),
            " Tidak Terverifikasi"
          ] }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "status_verifikasi-p", children: [
            /* @__PURE__ */ jsx("input", { type: "radio", id: "status_verifikasi-p", name: "status_verifikasi", value: 1, checked: data.status_verifikasi == 1, onChange: (e) => setData("status_verifikasi", 1) }),
            " Sudah Terverifikasi"
          ] })
        ] }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.status_verifikasi })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" }) })
    ] })
  ] });
}
export {
  ParticipantForm as default
};
