import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { useState, Fragment } from "react";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { A as ApplicationLogo, D as Dropdown, N as NavbarCloseButton } from "./NavbarCloseButton-DhZx8MiO.js";
import { Link } from "@inertiajs/react";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
const subCategories = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profil", href: route("profile.edit") }
];
const filters = [
  {
    id: "partisipan",
    name: "Peserta Lomba",
    options: [
      {
        value: "participant",
        label: "Peserta Lomba",
        href: route("participant.index")
      },
      {
        value: "creation",
        label: "Karya Peserta",
        href: route("creation.index")
      },
      {
        value: "certificate",
        label: "Sertifikat",
        href: route("creation.index")
      }
    ]
  },
  {
    id: "master-data",
    name: "Master Data",
    options: [
      {
        value: "slider",
        label: "Slider",
        href: route("slider.index")
      },
      {
        value: "kategori",
        label: "Kategori",
        href: route("category.index")
      },
      {
        value: "bahasa",
        label: "Bahasa",
        href: route("language.index")
      },
      {
        value: "jenjang-pendidikan",
        label: "Jenjang Pendidikan",
        href: route("level-of-participant.index")
      },
      {
        value: "question-and-answer",
        label: "Question and Answer",
        href: route("admin.question-and-answer.index")
      },
      {
        value: "page_section",
        label: "Page Section",
        href: route("admin.page_section.index")
      }
    ]
  },
  {
    id: "settings",
    name: "Pengaturan",
    options: [
      {
        value: "external-service-config",
        label: "External Service",
        href: route("admin.external-service-config.index")
      },
      {
        value: "role",
        label: "Role",
        href: route("admin.role.index")
      },
      {
        value: "permission",
        label: "Permission",
        href: route("admin.permission.index")
      }
    ]
  }
];
function AdminLayout({ children, user, header, roles }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "bg-white", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Transition.Root, { show: mobileFiltersOpen, as: Fragment, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-40 lg:hidden", onClose: setMobileFiltersOpen, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment,
          enter: "transition-opacity ease-linear duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-linear duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40 flex", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment,
          enter: "transition ease-in-out duration-300 transdiv",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "transition ease-in-out duration-300 transdiv",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Filters" }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400",
                  onClick: () => setMobileFiltersOpen(false),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                    /* @__PURE__ */ jsx(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-4 border-t border-gray-200", children: [
              /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Categories" }),
              /* @__PURE__ */ jsxs("ul", { role: "list", className: "px-2 py-3 font-medium text-gray-900", children: [
                subCategories.map((category) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: category.href, className: "block px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700", children: category.name }) }, category.name)),
                /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("participant"), children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("creation.index"), className: "block px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700", children: "Unggah Karya" }) }) }),
                /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("administrator") || roles.includes("operator"), children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("admin.users.index"), className: "block px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700", children: "Pengguna" }) }) })
              ] }),
              /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("administrator") || roles.includes("operator"), children: filters.map((section) => /* @__PURE__ */ jsx(Disclosure, { as: "div", className: "border-t border-gray-200 px-4 py-6", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                /* @__PURE__ */ jsx("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ jsxs(Disclosure.Button, { className: "flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: section.name }),
                  /* @__PURE__ */ jsx("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsx(MinusIcon, { className: "h-5 w-5", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(PlusIcon, { className: "h-5 w-5", "aria-hidden": "true" }) })
                ] }) }),
                /* @__PURE__ */ jsx(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: section.options.map((option, optionIdx) => /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Link, { href: option.href, children: /* @__PURE__ */ jsx(
                  "label",
                  {
                    htmlFor: `filter-mobile-${section.id}-${optionIdx}`,
                    className: "ml-3 min-w-0 flex-1 text-gray-500",
                    children: option.label
                  }
                ) }) }, option.value)) }) })
              ] }) }, section.id)) })
            ] })
          ] })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b border-gray-200 py-2", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0 flex-start items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden flex-end sm:flex sm:items-center sm:ms-6", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx(NavbarCloseButton, { user }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 md:hidden lg:hidden",
            onClick: () => setMobileFiltersOpen(true),
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Filters" }),
              /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: !mobileFiltersOpen ? "inline-flex" : "hidden",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: mobileFiltersOpen ? "inline-flex" : "hidden",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { "aria-labelledby": "products-heading", className: "pb-24 pt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden lg:block", children: [
          /* @__PURE__ */ jsx("h3", { className: "sr-only", children: "Menu" }),
          /* @__PURE__ */ jsxs("ul", { role: "list", className: "sticky space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900", children: [
            subCategories.map((category) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: category.href, children: category.name }) }, category.name)),
            /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("participant"), children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("creation.index"), children: "Unggah Karya" }) }) }),
            /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("administrator") || roles.includes("operator"), children: /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: route("admin.users.index"), children: "Pengguna" }) }) })
          ] }),
          /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("administrator") || roles.includes("operator"), children: filters.map((section) => /* @__PURE__ */ jsx(Disclosure, { as: "div", className: "border-b border-gray-200 py-2", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ jsxs(Disclosure.Button, { className: "flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: section.name }),
              /* @__PURE__ */ jsx("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsx(MinusIcon, { className: "h-5 w-5", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(PlusIcon, { className: "h-5 w-5", "aria-hidden": "true" }) })
            ] }) }),
            /* @__PURE__ */ jsx(Disclosure.Panel, { className: "pt-3", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: section.options.map((option, optionIdx) => /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx(Link, { href: option.href, className: "ml-3 text-sm text-gray-600", children: option.label }) }, option.value)) }) })
          ] }) }, section.id)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
          header && /* @__PURE__ */ jsx("header", { className: "bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-8xl mx-auto sm:px-6 space-y-6 py-4", children: header }) }),
          children
        ] })
      ] }) })
    ] })
  ] }) });
}
export {
  AdminLayout as A
};
