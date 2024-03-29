import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function CategoryForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    question: (item == null ? void 0 : item.question) || "",
    answer: (item == null ? void 0 : item.answer) || ""
  });
  const submit = (e) => {
    console.log(data);
    e.preventDefault();
    if (mode == "create") {
      post(route("admin.question-and-answer.store"), { forceFormData: false });
    } else if (mode == "update" && item != void 0) {
      patch(route("admin.question-and-answer.update", { question_and_answer: item == null ? void 0 : item.id }), { forceFormData: false });
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
      /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "question", value: "Pertannyaan" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
            name: "description",
            id: "description",
            rows: 3,
            defaultValue: data.question,
            onChange: (e) => setData("question", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.question })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-2", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "answer", value: "Jawaban" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            className: "w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
            name: "description",
            id: "description",
            rows: 3,
            defaultValue: data.answer,
            onChange: (e) => setData("answer", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.answer })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" }) })
    ] })
  ] });
}
export {
  CategoryForm as default
};
