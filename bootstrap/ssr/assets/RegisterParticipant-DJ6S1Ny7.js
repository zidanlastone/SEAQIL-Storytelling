import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { G as Guest } from "./GuestLayout-B1p8lo7S.js";
import { T as TextInput, I as InputError } from "./TextInput-DEceFrFw.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { C as ComboBoxInput } from "./ComboBoxInput-Cjtp4iA-.js";
import "./SponsorHeader-BCMBrPbk.js";
import "@headlessui/react";
function RegisterParticipant({
  languages,
  categories,
  level_of_participants
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    // detail informasi penguna
    gender: "L",
    whatsapp_contact: "",
    parent_contact: "",
    institution: "",
    country: "",
    province: "",
    city: "",
    address: "",
    // partisipasi lomba
    payment_receipt: void 0,
    category_id: 0,
    language_id: 0,
    level_of_participant_id: 0
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register.participant"));
  };
  const combo_category = useMemo(() => {
    if (typeof categories != void 0) {
      return categories.map((item) => ({ id: item.id, value: item.category_name }));
    }
    return [];
  }, [categories]);
  const combo_languages = useMemo(() => {
    if (typeof languages != void 0) {
      return languages.map((item) => ({ id: item.id, value: item.name }));
    }
    return [];
  }, [languages]);
  const combo_level_of_participants = useMemo(() => {
    if (typeof level_of_participants != void 0) {
      return level_of_participants.map((item) => ({ id: item.id, value: item.level_name }));
    }
    return [];
  }, [level_of_participants]);
  const [selectedLOP, setSelectedLOP] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "w-5/6 mx-auto my-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-lg", children: "Formulir Registrasi Peserta" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-col-2 my-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nama Lengkap" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "name",
                name: "name",
                value: data.name,
                className: "mt-1 block w-full",
                autoComplete: "name",
                isFocused: true,
                onChange: (e) => setData("name", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Alamat Surel" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                className: "mt-1 block w-full",
                autoComplete: "username",
                onChange: (e) => setData("email", e.target.value),
                placeholder: "Contoh: email@gmail.com",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Kata Sandi" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password",
                type: "password",
                name: "password",
                value: data.password,
                className: "mt-1 block w-full",
                autoComplete: "new-password",
                onChange: (e) => setData("password", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Konfirmasi Kata Sandi" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password_confirmation",
                type: "password",
                name: "password_confirmation",
                value: data.password_confirmation,
                className: "mt-1 block w-full",
                autoComplete: "new-password",
                onChange: (e) => setData("password_confirmation", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("hr", { className: "my-4" }),
          /* @__PURE__ */ jsx("br", {})
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "my-2 text-lg", children: "Detail Informasi" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "gender", value: "Jenis Kelamin" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "gender-l", children: [
                /* @__PURE__ */ jsx("input", { type: "radio", id: "gender-l", name: "gender", value: "L", checked: data.gender == "L", onChange: (e) => setData("gender", "L") }),
                " Laki-Laki"
              ] }),
              /* @__PURE__ */ jsxs("label", { htmlFor: "gender-p", children: [
                /* @__PURE__ */ jsx("input", { type: "radio", id: "gender-p", name: "gender", value: "P", checked: data.gender == "P", onChange: (e) => setData("gender", "P") }),
                " Perempuan"
              ] })
            ] }),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.gender })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "whatsapp_contact", value: "Nomor Whatsapp" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "whatsapp_contact",
                type: "tel",
                className: "mt-1 block w-full",
                value: data.whatsapp_contact,
                onChange: (e) => setData("whatsapp_contact", e.target.value),
                autoComplete: "phone"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.whatsapp_contact })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "parent_contact", value: "Nomor Whatsapp Orang Tua (Khusus jenjang SD, SMP, SMA dan Sederajat)" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "parent_contact",
                type: "tel",
                className: "mt-1 block w-full",
                value: data.parent_contact,
                onChange: (e) => setData("parent_contact", e.target.value),
                required: true,
                autoComplete: "phone"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.parent_contact })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "institution", value: "Institusi" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "institution",
                type: "text",
                className: "mt-1 block w-full",
                value: data.institution,
                onChange: (e) => setData("institution", e.target.value),
                required: true,
                placeholder: "Contoh: Universitas Indonesia",
                autoComplete: "institution"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.parent_contact })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "country", value: "Negara Asal Partisipan" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "country",
                type: "text",
                className: "mt-1 block w-full",
                value: data.country,
                onChange: (e) => setData("country", e.target.value),
                required: true,
                placeholder: "Contoh: Indonesia",
                autoComplete: "country"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.institution })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "province", value: "Provinsi" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "province",
                type: "text",
                className: "mt-1 block w-full",
                value: data.province,
                onChange: (e) => setData("province", e.target.value),
                required: true,
                placeholder: "Contoh: Jawa Barat",
                autoComplete: "province"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.province })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "city", value: "Kabupaten / Kota" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "city",
                type: "text",
                className: "mt-1 block w-full",
                value: data.city,
                onChange: (e) => setData("city", e.target.value),
                required: true,
                placeholder: "Contoh: Bogor",
                autoComplete: "city"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.city })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "address", value: "Alamat Lengkap" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                className: "w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
                name: "address",
                id: "address",
                rows: 3,
                defaultValue: data.address,
                onChange: (e) => setData("address", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.address })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("hr", { className: "my-4" }),
          /* @__PURE__ */ jsx("h2", { className: "my-2 text-lg", children: "Data Partisipasi Lomba" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
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
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
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
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "level_of_participant_id", value: "Pilih Jenjang Pendidikan" }),
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
          /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
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
            /* @__PURE__ */ jsx(InputError, { message: errors.payment_receipt, className: "mt-2" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Already registered?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Register" })
      ] })
    ] })
  ] });
}
export {
  RegisterParticipant as default
};
