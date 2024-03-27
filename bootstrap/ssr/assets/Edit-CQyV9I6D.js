import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-C8mUBdke.js";
import { Head } from "@inertiajs/react";
import UpdateUserForm from "./UpdateUserForm-CCt-MlQv.js";
import AdminUpdatePasswordForm from "./AdminUpdatePasswordForm-Cyub-cYk.js";
import "react";
import "./ApplicationLogo-Jk81KQHW.js";
import "@headlessui/react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./PrimaryButton-C-TDjBGq.js";
import "./TextInput-CL99szxP.js";
function Detail({ auth, user }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "User Detail" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | User Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdateUserForm, { user, className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(AdminUpdatePasswordForm, { user, className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Detail as default
};
