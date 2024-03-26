import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-t-7Hr4ud.js";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
/* empty css                    */
import { S as SponsorHeader } from "./SponsorHeader-CMGWAJKN.js";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Kategori Peserta", href: "#kategori-lomba" },
  { name: "Tata Cara Partisipasi ", href: "#teknis-lomba" }
  // { name: 'Kontak', href: '#' },
  // { name: 'FAQ', href: '#' },
];
function LandingPage({ auth, laravelVersion, phpVersion, category }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "SEAQIL Storytelling" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
      /* @__PURE__ */ jsxs("header", { className: "absolute inset-x-0 top-0 z-50", children: [
        /* @__PURE__ */ jsx(SponsorHeader, {}),
        /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between px-6 pt-2 lg:px-8", "aria-label": "Global", children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
              onClick: () => setMobileMenuOpen(true),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
                /* @__PURE__ */ jsx(Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex lg:gap-x-12", children: [
            /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5 leading-6", children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "SEAQIL Storytelling" }),
              /* @__PURE__ */ jsx(ApplicationLogo, { className: "h-8 w-auto" })
            ] }),
            navigation.map((item) => /* @__PURE__ */ jsx("a", { href: item.href, className: "text-sm font-semibold leading-6 text-gray-900", children: item.name }, item.name))
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: auth.user ? /* @__PURE__ */ jsx("div", { className: "leading-6 text-sm", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("dashboard"),
              className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ",
              children: "Dashboard"
            }
          ) }) : /* @__PURE__ */ jsxs("div", { className: "leading-6 text-sm", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: route("login"),
                className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ",
                children: [
                  "Log in ",
                  /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("register.participant"),
                className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ",
                children: "Register Participant"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
          /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50" }),
          /* @__PURE__ */ jsxs(Dialog.Panel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "SEAQIL Storytelling" }),
                /* @__PURE__ */ jsx(ApplicationLogo, { className: "h-8 w-auto" })
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                  onClick: () => setMobileMenuOpen(false),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                    /* @__PURE__ */ jsx(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsxs("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
              /* @__PURE__ */ jsx("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                  children: item.name
                },
                item.name
              )) }),
              auth.user ? /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("dashboard"),
                  className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                  children: "Dashboard"
                }
              ) }) : /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("login"),
                    className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                    children: "Log in"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("register.participant"),
                    className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white",
                    children: "Register"
                  }
                )
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative isolate px-6 pt-10 lg:px-8", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e78282] to-[#4e42f7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
                style: {
                  clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-5 my-16", children: /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "order-start mt-6 w-full md:w-1/4 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex-col gap-6 p-4 shadow=sm", children: /* @__PURE__ */ jsx("img", { className: "w-full", src: category.image, alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "order-end mt-6 text-md w-full md:w-3/4", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl my-4", children: category.category_name }),
            /* @__PURE__ */ jsx("p", { className: " leading-8 text-gray-600", children: category.description })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e78282] to-[#4e42f7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
                style: {
                  clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 my-16", id: "teknis-lomba", children: /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl", children: "Teknis Pelaksanaan Lomba" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row gap-4", children: /* @__PURE__ */ jsxs("div", { className: "order-start mt-6 w-3/4 text-md leading-8 text-gray-600", children: [
          /* @__PURE__ */ jsx("p", { children: "Batas waktu pendaftaran: 25 April 2024" }),
          /* @__PURE__ */ jsx("p", { children: "Teknikal Meeting dan Webinar: 27 April 2024" }),
          /* @__PURE__ */ jsx("p", { children: "Pengumpulan Karya Video Lomba: 27 April - 11 Mei 2024" }),
          /* @__PURE__ */ jsx("p", { children: "Babak Final: 21 Mei 2024 " }),
          /* @__PURE__ */ jsx("p", { children: "Biaya pendaftaran lomba sebesar Rp.50.000 per orang. Pastikan telah melakukan transfer pembayaran biaya pendaftaran sebelum mengisi form data peserta ini. Transfer dapat dilakukan melalui rekening Virtual Account BNI 9882 4474 2223 1991 Atas Nama TRIDAYA OLIMPIADE." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("footer", { className: "w-full bg-blue-600 rounded-t-xl", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsxs("div", { className: "flex-auto w-5/6 items-center justify-center text-center py-6", children: [
        /* @__PURE__ */ jsx("p", { children: "Our Sponsors:" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-36  p-1 m-1", children: /* @__PURE__ */ jsx("img", { className: "object-cover", src: "/image/sponsors/cgv-cinema.png", alt: "tutwurihandayani" }) }),
          /* @__PURE__ */ jsx("div", { className: "h-12 w-28 p-1 m-1", children: /* @__PURE__ */ jsx("img", { className: "object-contain", src: "/image/sponsors/sierra.png", alt: "upi" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8", children: "Copyright ©2024 All rights reserved" })
      ] }) }) })
    ] })
  ] });
}
export {
  LandingPage as default
};
