import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
import { A as AdminLayout } from "./AdminLayout-BcMt9wNE.js";
import "react";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-S0g6f67c.js";
function Dashboard({ auth, participation, counts }) {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsxs(
    AdminLayout,
    {
      roles: auth.roles,
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-2", children: /* @__PURE__ */ jsx("div", { className: "w-full mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-lg", children: [
            "Selamat Datang ",
            auth.user.name
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2 my-6 justify-between text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "w-1/4 p-6 border-2 text-center rounded", children: [
              /* @__PURE__ */ jsx("p", { children: "Jumlah Pendaftar " }),
              /* @__PURE__ */ jsx("p", { children: counts.participant_count })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-1/4 p-6 border-2 text-center rounded", children: [
              /* @__PURE__ */ jsx("p", { children: "Jumlah Pendaftar Terverifikasi" }),
              /* @__PURE__ */ jsx("p", { children: counts.verified_participant_count })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-1/4 p-6 border-2 text-center rounded", children: [
              /* @__PURE__ */ jsx("p", { children: "Karya sudah di unggah" }),
              /* @__PURE__ */ jsx("p", { children: counts.uploaded_creation_count })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-1/4 p-6 border-2 text-center rounded", children: [
              /* @__PURE__ */ jsx("p", { children: "Karya belum di unggah " }),
              /* @__PURE__ */ jsx("p", { children: counts.notuploaded_creation_count })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(ConditionalRender, { condition: participation != void 0 && auth.roles.includes("participant"), children: [
            /* @__PURE__ */ jsx("p", { children: "Pendaftaran Anda sudah berhasil. Saat ini sedang dilakukan proses verfikasi pembayaran oleh panitia" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsxs("tbody", { className: "text-lg", children: [
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Pendaftaran Peserta" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.status_verifikasi) == 0, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-green-500 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sudah Mendaftar" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Verifikasi Oleh Panitia" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.status_verifikasi) == 0, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-red-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Belum Verifikasi" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.status_verifikasi) == 1, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-green-500 items-center", children: [
                    ":",
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sudah Verifikasi" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Status Unggah Karya" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: ((_a = participation == null ? void 0 : participation.creation) == null ? void 0 : _a.upload_status) == "0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-red-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Belum Ungah Karya" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: ((_b = participation == null ? void 0 : participation.creation) == null ? void 0 : _b.upload_status) == "1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-500 items-center", children: [
                    ":",
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sudah Ungah Karya" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Seleksi Karya" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: ((_c = participation == null ? void 0 : participation.creation) == null ? void 0 : _c.upload_status) != "2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Proses Seleksi" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: ((_d = participation == null ? void 0 : participation.creation) == null ? void 0 : _d.upload_status) == "2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-500 items-center", children: [
                    ":",
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sudah Ungah Karya" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Sertifikat" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.certificate) == "", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sertifikat Belum Tersedia" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.certificate) != "", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-500 items-center", children: [
                    ":",
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" }) }),
                    /* @__PURE__ */ jsxs("p", { children: [
                      "Sertifikat dapat di unduh pada :",
                      /* @__PURE__ */ jsx("a", { href: participation == null ? void 0 : participation.certificate, children: participation == null ? void 0 : participation.certificate })
                    ] })
                  ] }) })
                ] }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("p", { children: "Silakan bergabung juga ke grup Whatsapp http://xxxx dan telegram http://xxx untuk mendapatkan update informasi terbaru." }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Linimasa Kompetisi Mendongeng" }),
              /* @__PURE__ */ jsxs("ol", { className: "list-decimal list-inside", children: [
                /* @__PURE__ */ jsx("li", { children: "Pendaftaran Peserta: 29 Maret - 31 Mei 2024" }),
                /* @__PURE__ */ jsx("li", { children: "Pengumpulan Karya (Penyisihan): 29 Maret—31 Mei 2024" }),
                /* @__PURE__ */ jsx("li", { children: "Pengumuman Finalis: 13 Juni 2024" }),
                /* @__PURE__ */ jsx("li", { children: "Babak Final: 20 Juni 2024" })
              ] })
            ] })
          ] })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
