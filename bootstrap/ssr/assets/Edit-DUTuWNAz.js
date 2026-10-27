import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import UpdatePasswordForm from "./UpdatePasswordForm-DrKUbUhL.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-CA0_yiXA.js";
import UpdateProfileDetailInformation from "./UpdateProfileDetailnformation-Ds-i3qqu.js";
import { A as AdminLayout } from "./AdminLayout-vXn9m_-t.js";
import "react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./PrimaryButton-C-TDjBGq.js";
import "./TextInput-CL99szxP.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./ConditionalRender-BsoLXbpe.js";
function Edit({ auth, mustVerifyEmail, status, profile }) {
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      participation: auth.participation,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileDetailInformation,
            {
              profile,
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
