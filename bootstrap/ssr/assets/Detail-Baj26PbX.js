import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { A as AdminLayout } from "./AdminLayout-fl1m4Isu.js";
import { Head } from "@inertiajs/react";
import "react";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-DhZx8MiO.js";
import "./ConditionalRender-BsoLXbpe.js";
function Detail({
  auth,
  participant
}) {
  console.log(participant);
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Detail Partisipan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Detail Partisipan" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 lg:px-8 space-y-6", children: /* @__PURE__ */ jsx("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsx("div", { className: "my-2 mx-2", children: /* @__PURE__ */ jsx(InputLabel, { children: "Nama Peserta" }) }) }) }) }) })
      ]
    }
  );
}
export {
  Detail as default
};
