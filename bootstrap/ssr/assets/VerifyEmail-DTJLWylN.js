import { jsxs, jsx } from "react/jsx-runtime";
import { G as Guest } from "./GuestLayout-C4N_HPME.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { useForm, Head, Link } from "@inertiajs/react";
import "./SponsorHeader-DapnRJ5n.js";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Email Verification" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 text-sm text-gray-600", children: [
      /* @__PURE__ */ jsx("p", { children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("p", { children: "Terima kasih sudah mendaftar! Sebelum memulai anda di harapkan untuk melakukan verifikasi alamat surel anda dengan menekan tombol yang kami kirim ke alamat surel anda. Jika anda tidak menerima surel, kami dengan senang hati mengirim yang lainnya." })
    ] }),
    status === "verification-link-sent" && /* @__PURE__ */ jsxs("div", { className: "mb-4 font-medium text-sm text-green-600", children: [
      "A new verification link has been sent to the email address you provided during registration.",
      /* @__PURE__ */ jsx("br", {}),
      "Sebuah surel untuk melakukan verifikasi alamat surel sudah kami kirim berdasarkan data yang anda isi ketika mendaftar"
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
export {
  VerifyEmail as default
};
