import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { usePage, useForm, Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import "react";
function UpdateProfileDetailInformation({ mustVerifyEmail, status, className = "", profile }) {
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    gender: (profile == null ? void 0 : profile.gender) || "L",
    whatsapp_contact: (profile == null ? void 0 : profile.whatsapp_contact) || "",
    parent_contact: (profile == null ? void 0 : profile.parent_contact) || "",
    institution: (profile == null ? void 0 : profile.institution) || "",
    country: (profile == null ? void 0 : profile.country) || "",
    province: (profile == null ? void 0 : profile.province) || "",
    city: (profile == null ? void 0 : profile.city) || "",
    address: (profile == null ? void 0 : profile.address) || "",
    password: (profile == null ? void 0 : profile.pwd) || ""
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update.detail"));
  };
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Detail Informasi Pengguna" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Ubah Informasi lengkap mengenai profil anda" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 grid grid-rows-2 gap-4 w-full", children: [
      /* @__PURE__ */ jsxs("div", { children: [
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
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "whatsapp_contact", value: "Nomor Whatsapp" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "whatsapp_contact",
            type: "tel",
            className: "mt-1 block w-full",
            value: data.whatsapp_contact,
            onChange: (e) => setData("whatsapp_contact", e.target.value),
            required: true,
            autoComplete: "phone"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.whatsapp_contact })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "parent_contact", value: "Nomor Whatsapp Orang Tua" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "parent_contact",
            type: "tel",
            className: "mt-1 block w-full",
            value: data.parent_contact,
            onChange: (e) => setData("parent_contact", e.target.value),
            autoComplete: "phone"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.parent_contact })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "institution", value: "Institusi" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "institution",
            type: "text",
            className: "mt-1 block w-full",
            value: data.institution,
            onChange: (e) => setData("institution", e.target.value),
            placeholder: "Contoh: Universitas Indonesia",
            autoComplete: "institution"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.institution })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "country", value: "Negara" }),
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
      /* @__PURE__ */ jsxs("div", { children: [
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
      /* @__PURE__ */ jsxs("div", { children: [
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
      /* @__PURE__ */ jsxs("div", { children: [
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
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "info_password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "info_password",
            value: data.password,
            onChange: (e) => setData("password", e.target.value),
            type: "password",
            className: "mt-1 block w-full",
            autoComplete: "new-password"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      mustVerifyEmail && user.email_verified_at === null && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm mt-2 text-gray-800", children: [
          "Your email address is unverified.",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("verification.send"),
              method: "post",
              as: "button",
              className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: "Click here to re-send the verification email."
            }
          )
        ] }),
        status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mt-2 font-medium text-sm text-green-600", children: "A new verification link has been sent to your email address." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Save" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
export {
  UpdateProfileDetailInformation as default
};
