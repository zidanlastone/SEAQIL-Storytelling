import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function CreationForm({ onComplete, className, item, mode = "create" }) {
  var _a;
  const { data, setData, post, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm({
    title: (item == null ? void 0 : item.title) || "Karya 1",
    upload_location: (item == null ? void 0 : item.upload_location) || "",
    upload_status: (item == null ? void 0 : item.upload_status) || "0"
  });
  const submit = (e) => {
    e.preventDefault();
    if (mode == "create") {
      post(route("creation.store"));
    } else if (mode == "update" && item != void 0) {
      patch(route("creation.update", { creation: item == null ? void 0 : item.id }));
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == "function") {
        setTimeout(onComplete, 2e3);
      }
    }
  }, [wasSuccessful]);
  return /* @__PURE__ */ jsxs("section", { className, children: [
    /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs("h2", { className: "text-lg font-medium text-gray-900", children: [
      " ",
      mode == "create" ? "Tambah" : "Ubah",
      " Data Karya Peserta"
    ] }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "participant_name", value: "Nama Peserta" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "participant_name",
            name: "participant_name",
            value: (_a = item == null ? void 0 : item.participant) == null ? void 0 : _a.user.name,
            className: "my-2 block w-full",
            autoComplete: "participant_name",
            isFocused: true,
            disabled: true,
            readOnly: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "title", value: "Judul Karya" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "title",
            name: "title",
            value: data.title,
            className: "my-2 block w-full",
            autoComplete: "title",
            isFocused: true,
            onChange: (e) => setData("title", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.title, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "upload_location", value: "Lokasi Upload" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "title",
            name: "upload_location",
            value: data.upload_location,
            className: "my-2 block w-full",
            autoComplete: "upload_location",
            isFocused: true,
            onChange: (e) => setData("upload_location", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.upload_location, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "upload_status", value: "Status Unggah" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: "upload_status-l", children: [
            /* @__PURE__ */ jsx("input", { type: "radio", id: "upload_status-l", name: "upload_status", value: "0", checked: data.upload_status == "0", onChange: (e) => setData("upload_status", "0") }),
            " Belum Upload"
          ] }),
          /* @__PURE__ */ jsxs("label", { htmlFor: "upload_status-p", children: [
            /* @__PURE__ */ jsx("input", { type: "radio", id: "upload_status-p", name: "upload_status", value: "1", checked: data.upload_status == "1", onChange: (e) => setData("upload_status", "1") }),
            " Sudah Upload"
          ] })
        ] }),
        /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.upload_status })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        /* @__PURE__ */ jsx(
          Transition,
          {
            show: recentlySuccessful,
            enter: "transition ease-in-out",
            enterFrom: "opacity-0",
            leave: "transition ease-in-out",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mr-2", children: "Saved." })
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" })
      ] })
    ] })
  ] });
}
export {
  CreationForm as default
};
