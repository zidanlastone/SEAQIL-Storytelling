import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-DEceFrFw.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function SliderForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    title: (item == null ? void 0 : item.title) || "",
    source: void 0,
    description: (item == null ? void 0 : item.description) || "",
    type: (item == null ? void 0 : item.type) || ""
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
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Tambah Data Kategori" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "category_name", value: "Nama Slider" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.title,
            className: "my-2 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("title", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.title, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "type", value: "Tipe Slider" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "type-l", children: [
            /* @__PURE__ */ jsx("input", { type: "radio", id: "type-l", name: "type", value: "image", checked: data.type == "image", onChange: (e) => setData("type", "image") }),
            " Image"
          ] }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "type-p", children: [
            /* @__PURE__ */ jsx("input", { type: "radio", id: "type-p", name: "type", value: "video", checked: data.type == "video", onChange: (e) => setData("type", "video") }),
            " Video"
          ] })
        ] }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.type })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "address", value: "Deskripsi" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
            name: "description",
            id: "description",
            rows: 3,
            defaultValue: data.description,
            onChange: (e) => setData("description", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "image", value: "Gambar Kategori" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "image",
            type: "file",
            name: "image",
            className: "my-2 block w-full",
            autoComplete: "image",
            isFocused: true,
            onChange: (e) => {
              if (e.target.files) {
                setData("source", e.target.files[0]);
              }
            },
            required: mode == "create"
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.source, className: "mt-2" }),
        (item == null ? void 0 : item.source) && /* @__PURE__ */ jsxs("p", { children: [
          "File Sebelumnya: ",
          item == null ? void 0 : item.source
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Tambah Data" }) })
    ] })
  ] });
}
export {
  SliderForm as default
};
