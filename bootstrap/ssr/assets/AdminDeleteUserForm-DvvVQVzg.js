import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useRef, useEffect } from "react";
function AdminDeleteUserForm({ className, user, onComplete }) {
  const emailInput = useRef(null);
  const { data, setData, errors, delete: destroy, reset, processing, progress, recentlySuccessful, wasSuccessful } = useForm({
    email: (user == null ? void 0 : user.email) || "",
    email_confirmation: ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    if (user != void 0) {
      destroy(route("admin.users.destroy", { user: user.id }), {
        preserveScroll: true,
        onSuccess: () => reset(),
        onError: (errors2) => {
          var _a;
          if (errors2.email) {
            reset("email", "email_confirmation");
            (_a = emailInput.current) == null ? void 0 : _a.focus();
          }
        }
      });
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == "function") {
        onComplete();
      }
    }
  }, [wasSuccessful]);
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Delete User" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Apakah Anda yakin ingin menghapus User ini?" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "email",
            onChange: (e) => setData("email", e.target.value),
            required: true,
            disabled: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email Confirmation" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email_confirmation",
            value: data.email_confirmation,
            className: "mt-1 block w-full",
            autoComplete: "email",
            onChange: (e) => setData("email_confirmation", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email_confirmation, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Delete" }),
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
  AdminDeleteUserForm as default
};
