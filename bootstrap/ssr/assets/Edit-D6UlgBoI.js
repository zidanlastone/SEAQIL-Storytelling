import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import UpdateUserForm from "./UpdateUserForm-BV9YRP2P.js";
import AdminUpdatePasswordForm from "./AdminUpdatePasswordForm-v5IuqO1J.js";
import { A as AdminLayout } from "./AdminLayout-CJEJ2cQN.js";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./PrimaryButton-C-TDjBGq.js";
import "./SelectInput-DYknGnd7.js";
import "react";
import "./TextInput-CL99szxP.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./ConditionalRender-BsoLXbpe.js";
function Detail({ auth, user, roles = [] }) {
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "User Detail" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Admin | User Management" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdateUserForm, { roles, user, className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(AdminUpdatePasswordForm, { user, className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Detail as default
};
