import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function DeleteCategory({ className, item, onComplete }) {
  const { data, delete: destroy, reset, processing, setData, errors, recentlySuccessful, wasSuccessful } = useForm({
    question: (item == null ? void 0 : item.question) || ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    if (item != void 0) {
      destroy(route("admin.question-and-answer.destroy", { question_and_answer: item.id }), {
        preserveScroll: true,
        onSuccess: () => reset(),
        onError: (errors2) => {
          console.log(errors2);
        }
      });
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
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Kategori" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Apakah Anda yakin ingin menghapus kategori ini?" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "mt-6 space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Delete" }),
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Saved." })
          }
        )
      ] })
    ] })
  ] });
}
export {
  DeleteCategory as default
};
