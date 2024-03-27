import { jsx, jsxs } from "react/jsx-runtime";
import { C as Checkbox } from "./Checkbox-B46RnHis.js";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function SliderForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    title: (item == null ? void 0 : item.title) || "Karya 1",
    upload_location: (item == null ? void 0 : item.upload_location) || "",
    upload_status: (item == null ? void 0 : item.upload_status) || "0"
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("slider.store"), { forceFormData: true });
    } else if (mode == "update" && item != void 0) {
      patch(route("slider.update", { slider: item == null ? void 0 : item.id }), { forceFormData: true });
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == "function") {
        onComplete();
      }
    }
  }, [wasSuccessful]);
  return /* @__PURE__ */ jsx("section", { className, children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(InputLabel, { className: "text-2xl font-semibold", htmlFor: "title", children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, eius." }),
      /* @__PURE__ */ jsxs(InputLabel, { className: "text-xl font-semibold", htmlFor: "title", children: [
        "Tautan Unggah Video: ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("a", { href: "", className: "text-blue-400", children: "https://docs.google.com/spreadsheets/d/1TBLdFubH7Fmp6W4UBDd2ZEY1H-yIxp5z4-V3DplY220/edit#gid=1280851324" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "upload_status", children: [
        /* @__PURE__ */ jsx(Checkbox, { className: "mr-2", id: "upload_status", name: "upload_status", onChange: (e) => setData("upload_status", e.target.value) }),
        "Saya sudah mengunggah video pada tautan google drive yang disediakan panitia"
      ] }),
      /* @__PURE__ */ jsx(InputError, { message: errors.upload_status, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "", disabled: processing, children: "Daftarkan Karya" }) })
  ] }) });
}
export {
  SliderForm as default
};
