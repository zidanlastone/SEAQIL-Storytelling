import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useState, useContext, Fragment as Fragment$1 } from "react";
import { Transition, Dialog, Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Link } from "@inertiajs/react";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      ...props,
      className: "h-8 w-auto mx-auto" + props.className,
      src: "/image/sponsors/tutwuri-handayani.png"
    }
  );
}
const DropDownContext = createContext({
  open: false,
  setOpen: () => {
  },
  toggleOpen: () => {
  }
});
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function NavbarCloseButton({ user }) {
  return /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
      children: [
        user.name,
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "ms-2 -me-0.5 h-4 w-4",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                clipRule: "evenodd"
              }
            )
          }
        )
      ]
    }
  ) });
}
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
        value: "portrait-slider",
        label: "Portrait Slider",
        href: route("portrait-slider.index")
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
    /* @__PURE__ */ jsx(Transition.Root, { show: mobileFiltersOpen, as: Fragment$1, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-40 lg:hidden", onClose: setMobileFiltersOpen, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
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
          as: Fragment$1,
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
              /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("administrator") || roles.includes("operator"), children: filters.map((section) => /* @__PURE__ */ jsx(Disclosure, { as: "div", className: "border-t border-gray-200 px-4 py-6", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
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
              ] }) }, section.id)) }),
              /* @__PURE__ */ jsx(Link, { method: "post", as: "button", href: route("logout"), className: "block ml-2 px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700", children: "Logout" })
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
          /* @__PURE__ */ jsx(ConditionalRender, { condition: roles.includes("administrator") || roles.includes("operator"), children: filters.map((section) => /* @__PURE__ */ jsx(Disclosure, { as: "div", className: "border-b border-gray-200 py-2", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
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
