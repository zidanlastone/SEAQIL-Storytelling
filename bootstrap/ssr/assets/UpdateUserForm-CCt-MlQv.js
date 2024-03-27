import { jsx, jsxs } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import "react";
function toLocalDatetime(dateString) {
  if (typeof dateString == "string") {
    return new Date(dateString).toISOString().replace("Z", "");
  }
  return (/* @__PURE__ */ new Date()).toISOString().replace("Z", "");
}
function UpdateUserForm({ user, className }) {
  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
    email_verified_at: user.email_verified_at,
    created_at: user.created_at
  });
  const submit = (e) => {
    e.preventDefault();
    patch(route("admin.users.update"));
  };
  return /* @__PURE__ */ jsx("section", { className, children: /* @__PURE__ */ jsxs("div", { className: "relative rounded overflow-auto", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Profile Information" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Detail mengenai akun pengguna" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-6 space-y-6 max-w-xl", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Name" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            className: "mt-1 block w-full",
            value: data.name,
            onChange: (e) => setData("name", e.target.value),
            required: true,
            isFocused: true,
            autoComplete: "name"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            className: "mt-1 block w-full",
            value: data.email,
            onChange: (e) => setData("email", e.target.value),
            required: true,
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email_verified_at", value: "Email Verified At" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email_verified_at",
            type: "datetime-local",
            className: "mt-1 block w-full",
            value: toLocalDatetime(data.email_verified_at),
            onChange: (e) => setData("email_verified_at", e.target.value),
            required: true,
            autoComplete: "date"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.email_verified_at })
      ] }),
      data.created_at ? /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "created_at", value: "Created At" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "datetime-local",
            className: "mt-1 block w-full",
            value: toLocalDatetime(data.created_at),
            onChange: (e) => setData("created_at", e.target.value),
            autoComplete: "date",
            disabled: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.created_at })
      ] }) : null,
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
  ] }) });
}
export {
  UpdateUserForm as default
};
