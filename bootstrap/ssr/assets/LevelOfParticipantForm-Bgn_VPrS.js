import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function LevelOfParticipantForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    level_name: (item == null ? void 0 : item.level_name) || "",
    description: (item == null ? void 0 : item.description) || ""
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("level-of-participant.store"), { forceFormData: true });
    } else if (mode == "update" && item != void 0) {
      patch(route("level-of-participant.update", { level_of_participant: item == null ? void 0 : item.id }), { forceFormData: true });
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
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Tambah Data Tingkatan Partisipan" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "category_name", value: "Nama Tingkatan Partisipan" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "name",
            name: "name",
            value: data.level_name,
            className: "my-2 block w-full",
            autoComplete: "name",
            isFocused: true,
            onChange: (e) => setData("level_name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.level_name, className: "mt-2" })
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
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" }) })
    ] })
  ] });
}
export {
  LevelOfParticipantForm as default
};
