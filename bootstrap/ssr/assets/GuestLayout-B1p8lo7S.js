import { jsxs, jsx } from "react/jsx-runtime";
import { S as SponsorHeader } from "./SponsorHeader-BCMBrPbk.js";
import { Link } from "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(SponsorHeader, {}) }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-md md:max-w-2xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg", children })
  ] });
}
export {
  Guest as G
};
