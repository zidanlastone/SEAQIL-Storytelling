import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-DEceFrFw.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function DeleteCategory({ className, item, onComplete }) {
  const { data, delete: destroy, reset, processing, setData, errors, recentlySuccessful, wasSuccessful } = useForm({
    category_name: (item == null ? void 0 : item.category_name) || ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    if (item != void 0) {
      destroy(route("category.destroy", { category: item.id }), {
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
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "image", value: "Gambar Kategori" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "image",
            type: "text",
            name: "category_name",
            value: data.category_name,
            className: "my-2 block w-full",
            autoComplete: "category_name",
            isFocused: true,
            onChange: (e) => setData("category_name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.category_name, className: "mt-2" })
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
