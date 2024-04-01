import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
/* empty css                    */
import { S as SponsorHeader } from "./SponsorHeader-Dv8Bz9ew.js";
const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Kategori Peserta", href: "/#kategori-lomba" },
  { name: "Mekanisme Pelaksanaan", href: "/#teknis-lomba" },
  // { name: 'Kontak', href: '#' },
  { name: "Q & A", href: "/qna" }
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
            /* @__PURE__ */ jsx("a", { href: "#", className: "-m-1.5 p-1.5 leading-6", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "SEAQIL Storytelling" }) }),
            navigation.map((item) => /* @__PURE__ */ jsx("a", { href: item.href, className: "text-lg font-semibold leading-6 text-gray-900", children: item.name }, item.name))
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: auth.user ? /* @__PURE__ */ jsx("div", { className: "leading-6 text-md", children: /* @__PURE__ */ jsx(
            Link,
            {
              href: route("dashboard"),
              className: "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] ",
              children: "Dashboard"
            }
          ) }) : /* @__PURE__ */ jsxs("div", { className: "leading-6 text-md", children: [
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
                children: "Registrasi Peserta"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
          /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50" }),
          /* @__PURE__ */ jsxs(Dialog.Panel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("a", { href: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "SEAQIL Storytelling" }) }),
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
                    children: "Registrasi Peserta"
                  }
                )
              ] })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative isolate px-6 pt-16 lg:px-8", children: [
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
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-5 my-28", children: /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "order-start mt-6 w-full md:w-2/5 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex-col gap-6 p-4 shadow=sm", children: /* @__PURE__ */ jsx("img", { className: "w-full", src: category.image, alt: "" }) }),
          /* @__PURE__ */ jsxs("div", { className: "order-end mt-6 text-md w-full md:w-3/5", children: [
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
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl", children: "Mekanisme Pelaksanaan" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row gap-4", children: /* @__PURE__ */ jsxs("div", { className: "order-start mt-6 w-3/4 text-md leading-8 text-gray-600", children: [
          /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside my-6", children: [
            /* @__PURE__ */ jsx("li", { children: "Peserta yang akan mendaftar, terlebih dahulu harus melakukan proses transfer biaya pendaftaran kompetisi sebesar Rp.50.000 per orang ke nomor Virtual Account (VA) Bank BNI 9882 4474 2223 1991 atas nama TRIDAYA OLIMPIADE (Simpan dokumentasi bukti transfer)" }),
            /* @__PURE__ */ jsx("li", { children: "Peserta melakukan pendaftaran kompetisi melalui laman https://kompetisimendongeng.qiteplanguage.org dengan melampirkan bukti transfer pembayaran dalam format file gambar (png, jpg) atau pdf." }),
            /* @__PURE__ */ jsx("li", { children: "Setelah proses pendaftaran, panitia akan melakukan verifikasi bukti pembayaran." }),
            /* @__PURE__ */ jsx("li", { children: "Peserta wajib bergabung ke dalam grup telegram atau whatsapp yang dikirim ke email saat proses pendaftaran." }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Peserta yang lulus proses verifikasi, mengumpulkan karya dengan mekanisme pengumpulan sebagai berikut:",
              /* @__PURE__ */ jsxs("ol", { className: "list-alpha list-inside ml-4", children: [
                /* @__PURE__ */ jsx("li", { children: "a.	Login pada laman https://kompetisimendongeng.qiteplanguage.org menggunakan email dan password yang dikirim ke email pendaftar" }),
                /* @__PURE__ */ jsx("li", { children: "b.	Masuk ke menu “Unggah Karya”  " }),
                /* @__PURE__ */ jsx("li", { children: "c.	Klik tautan unggah karya, kemudian unggah video ke dalam folder google drive yang telah disediakan" }),
                /* @__PURE__ */ jsx("li", { children: "d.	Kembali ke laman unggah karya, lalu contreng (V) pernyataan bahwa peserta telah mengunggah video pada folder yang disediakan" }),
                /* @__PURE__ */ jsx("li", { children: "e.	Klik “Daftarkan”" }),
                /* @__PURE__ */ jsx("li", { children: "f.	Peserta akan menerima email notifikasi unggah hasil karya" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("li", { children: "Peserta yang lulus seleksi awal oleh dewan juri, akan mengikuti seleksi akhir secara langsung baik daring maupun luring." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Linimasa Kompetisi Mendongeng" }),
            /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside", children: [
              /* @__PURE__ */ jsx("li", { children: "Pendaftaran Peserta: 29 Maret - 31 Mei 2024" }),
              /* @__PURE__ */ jsx("li", { children: "Pengumpulan Karya (Penyisihan): 29 Maret—31 Mei 2024" }),
              /* @__PURE__ */ jsx("li", { children: "Pengumuman Finalis: 13 Juni 2024" }),
              /* @__PURE__ */ jsx("li", { children: "Babak Final: 20 Juni 2024" })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("footer", { className: "w-full bg-blue-600 rounded-t-xl", children: /* @__PURE__ */ jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ jsxs("div", { className: "flex-auto w-5/6 items-center justify-center text-center py-16", children: [
        /* @__PURE__ */ jsx("p", { children: "Didukung Oleh:" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-36  p-1 m-1", children: /* @__PURE__ */ jsx("img", { className: "object-cover", src: "/image/sponsors/cgv-cinema.png", alt: "tutwurihandayani" }) }),
          /* @__PURE__ */ jsx("div", { className: "h-12 w-28 p-1 m-1", children: /* @__PURE__ */ jsx("img", { className: "object-contain", src: "/image/sponsors/sierra.png", alt: "upi" }) })
        ] })
      ] }) }) })
    ] })
  ] });
}
export {
  LandingPage as default
};
