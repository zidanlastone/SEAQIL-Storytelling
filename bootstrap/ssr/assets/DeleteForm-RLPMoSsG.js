import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function DeleteCategory({ className, item, onComplete }) {
  const { data, delete: destroy, reset, processing, setData, errors, recentlySuccessful, wasSuccessful } = useForm({
    section: (item == null ? void 0 : item.section) || ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    if (item != void 0) {
      destroy(route("admin.page_section.destroy", { page_section: item.id }), {
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
