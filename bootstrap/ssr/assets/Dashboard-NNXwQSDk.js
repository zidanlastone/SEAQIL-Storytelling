import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
import { A as AdminLayout } from "./AdminLayout-DmQ6hQui.js";
import "react";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./NavbarCloseButton-DhZx8MiO.js";
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
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.status_verifikasi) != null, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-green-500 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sudah Mendaftar" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Verifikasi Oleh Panitia" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.status_verifikasi) == "0" && ((participation == null ? void 0 : participation.reject_reason) == null || (participation == null ? void 0 : participation.reject_reason) == ""), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Sedang Verifikasi" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.reject_reason) != "" || (participation == null ? void 0 : participation.reject_reason) != null || (participation == null ? void 0 : participation.reject_reason) != void 0, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-red-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsxs("p", { children: [
                      "Ditolak, ",
                      participation == null ? void 0 : participation.reject_reason
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.status_verifikasi) == "1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-green-500 items-center", children: [
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
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: ((_b = participation == null ? void 0 : participation.creation) == null ? void 0 : _b.upload_status) == "1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-green-500 items-center", children: [
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
                    /* @__PURE__ */ jsx("p", { children: "Belum Seleksi" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: ((_d = participation == null ? void 0 : participation.creation) == null ? void 0 : _d.upload_status) == "2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-500 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Proses Seleksi" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Sertifikat" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-center", children: [
                  ":",
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.certificate) == null || (participation == null ? void 0 : participation.certificate) == "", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-yellow-600 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" }) }),
                    /* @__PURE__ */ jsx("p", { children: "Belum Tersedia" })
                  ] }) }),
                  /* @__PURE__ */ jsx(ConditionalRender, { condition: (participation == null ? void 0 : participation.certificate) != null && (participation == null ? void 0 : participation.certificate) != "", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row text-blue-500 items-center", children: [
                    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" }) }),
                    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: participation == null ? void 0 : participation.certificate, target: "_blank", children: "Unduh" }) })
                  ] }) })
                ] }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsxs("p", { children: [
              "Silakan bergabung juga ke grup Whatsapp  ",
              /* @__PURE__ */ jsx("a", { className: "text-blue-400", href: "https://bit.ly/PesertaKompetisiMendongeng2024 ", target: "_blank", children: "https://bit.ly/PesertaKompetisiMendongeng2024" }),
              "dan telegram ",
              /* @__PURE__ */ jsx("a", { className: "text-blue-400", href: "https://bit.ly/PesertaKompetisiMendongeng2024_Tele", target: "_blank", children: "https://bit.ly/PesertaKompetisiMendongeng2024_Tele" }),
              " untuk mendapatkan update informasi terbaru."
            ] }),
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
