import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { A as ApplicationLogo, D as Dropdown, N as NavbarCloseButton } from "./NavbarCloseButton-DhZx8MiO.js";
import { Link, usePage, Head } from "@inertiajs/react";
import UpdateUserForm from "./UpdateUserForm-CCt-MlQv.js";
import AdminUpdatePasswordForm from "./AdminUpdatePasswordForm-Cyub-cYk.js";
import "@headlessui/react";
import "./InputError-cRVTeK4i.js";
import "./InputLabel-uXgJWz9w.js";
import "./PrimaryButton-C-TDjBGq.js";
import "./TextInput-CL99szxP.js";
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function Sidebar() {
  const menus = usePage().props.auth.menus;
  return /* @__PURE__ */ jsx("div", { className: "hidden md:block w-1/6 bg-white h-screen sticky top-0 left-0 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 mt-16 justify-center w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route("profile.edit"), active: route().current("profile.edit"), children: "Profile" }) }),
    /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route("creation.index"), active: route().current("creation.index"), children: "Profile" }) }),
    menus && menus.map((item) => /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route(item.route), active: route().current(item.route), children: item.name }) }, item.route)),
    /* @__PURE__ */ jsx("div", { className: "hidden space-x-8 sm:-my-px sm:ms-10 sm:flex", children: /* @__PURE__ */ jsx(NavLink, { href: route("participant.index"), active: route().current("participant.index"), children: "Sertifikat" }) })
  ] }) });
}
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "block h-9 w-auto fill-current text-gray-800" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ms-6", children: /* @__PURE__ */ jsx("div", { className: "ms-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx(NavbarCloseButton, { user }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-me-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "pt-2 pb-3 space-y-1", children: /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-5/6 overflow-y-scroll", children: [
        header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-8xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
        children
      ] })
    ] }) })
  ] });
}
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
