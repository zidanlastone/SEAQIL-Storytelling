import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { A as Authenticated } from "./AuthenticatedLayout-w3Y7jFdq.js";
import DeleteUserForm from "./DeleteUserForm-CzoMIIkc.js";
import UpdatePasswordForm from "./UpdatePasswordForm-DdHk15Gt.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-CueWc815.js";
import UpdateProfileDetailInformation from "./UpdateProfileDetailnformation-yFEn0QKq.js";
import "react";
import "./ApplicationLogo-t-7Hr4ud.js";
import "@headlessui/react";
import "./TextInput-DEceFrFw.js";
import "./InputLabel-uXgJWz9w.js";
import "./Modal-4z2vzv2h.js";
import "./PrimaryButton-C-TDjBGq.js";
function Edit({ auth, mustVerifyEmail, status, profile }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
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
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
