import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function CategoryForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    name: (item == null ? void 0 : item.name) || "",
    code: (item == null ? void 0 : item.code) || ""
  });
  const submit = (e) => {
    console.log(data);
    e.preventDefault();
    if (mode == "create") {
      post(route("language.store"), { forceFormData: false });
    } else if (mode == "update" && item != void 0) {
      patch(route("language.update", { language: item == null ? void 0 : item.id }), { forceFormData: false });
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
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Tambah Data Bahasa" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nama Bahasa" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.name,
            className: "my-2 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "code", value: "Kode Bahasa" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "code",
            name: "code",
            value: data.code,
            className: "my-2 block w-full",
            autoComplete: "code",
            isFocused: true,
            onChange: (e) => setData("code", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.code, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" }) })
    ] })
  ] });
}
export {
  CategoryForm as default
};
