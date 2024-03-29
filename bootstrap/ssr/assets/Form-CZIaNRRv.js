import { jsxs, jsx } from "react/jsx-runtime";
import { C as ComboBoxInput } from "./ComboBoxInput-Cjtp4iA-.js";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { useForm } from "@inertiajs/react";
import { useEffect, useMemo, useState } from "react";
import "@headlessui/react";
function CategoryForm({ onComplete, className, item, mode = "create", languages = [] }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    language_id: (item == null ? void 0 : item.language_id) || 0,
    section: (item == null ? void 0 : item.section) || "",
    content: (item == null ? void 0 : item.content) || ""
  });
  const submit = (e) => {
    console.log(data);
    e.preventDefault();
    if (mode == "create") {
      post(route("admin.page_section.store"), { forceFormData: false });
    } else if (mode == "update" && item != void 0) {
      patch(route("admin.page_section.update", { page_section: item == null ? void 0 : item.id }), { forceFormData: false });
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == "function") {
        onComplete();
      }
    }
  }, [wasSuccessful]);
  const combo_languages = useMemo(() => {
    if (typeof languages != void 0) {
      return languages.map((item2) => ({ id: item2.id, value: item2.name }));
    }
    return [];
  }, [languages]);
  const [selectedLanguage, setSelectedLanguage] = useState(combo_languages.find((x) => x.id == (item == null ? void 0 : item.language_id)) || null);
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Tambah Data Section" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "language_id", value: "Pilih Bahasa" }),
        /* @__PURE__ */ jsx(
          ComboBoxInput,
          {
            data: combo_languages,
            id: "language_id",
            onChange: (value) => {
              setSelectedLanguage(value);
              setData("language_id", value.id);
            },
            value: selectedLanguage
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.language_id, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "section", value: "Section" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "section",
            name: "section",
            value: data.section,
            className: "my-2 block w-full",
            autoComplete: "section",
            isFocused: true,
            onChange: (e) => setData("section", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.section, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "content", value: "Conent" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
            name: "description",
            id: "description",
            rows: 3,
            defaultValue: data.content,
            onChange: (e) => setData("content", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.content })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" }) })
    ] })
  ] });
}
export {
  CategoryForm as default
};
