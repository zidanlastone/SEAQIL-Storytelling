import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-C8mUBdke.js";
import { Head } from "@inertiajs/react";
import { C as ConditionalRender } from "./ConditionalRender-BtHY1tZZ.js";
import "react";
import "./ApplicationLogo-Jk81KQHW.js";
import "@headlessui/react";
function Dashboard({ auth, roles }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "p-6 text-gray-900", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-lg", children: [
            "Selamat Datang ",
            auth.user.name
          ] }),
          /* @__PURE__ */ jsxs(ConditionalRender, { condition: auth.roles.includes("participant"), children: [
            /* @__PURE__ */ jsx("p", { children: "Pendaftaran Anda sudah berhasil. Saat ini sedang dilakukan proses verfikasi pembayaran oleh panitia" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("table", { children: /* @__PURE__ */ jsxs("tbody", { children: [
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Pendaftaran Peserta" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: ":Sudah mendaftar" }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Verifikasi Oleh Panitia" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: ": Proses Verifikasi" }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Status Unggah Karya" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: ": Proses Verifikasi" }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Seleksi Karya" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: ": Proses Verifikasi" }) })
              ] }),
              /* @__PURE__ */ jsxs("tr", { children: [
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: "Sertifikat" }) }),
                /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("p", { children: ": Sertifikat" }) })
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
