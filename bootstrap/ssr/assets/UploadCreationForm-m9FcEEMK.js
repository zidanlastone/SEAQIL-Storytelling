import { jsx, jsxs } from "react/jsx-runtime";
import { C as Checkbox } from "./Checkbox-B46RnHis.js";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";
function UpdateCreationTitle({ item, updateMode, setUpdateMode }) {
  const { data, setData, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm({
    title: (item == null ? void 0 : item.title) || "",
    upload_status: (item == null ? void 0 : item.upload_status) || "0",
    upload_location: (item == null ? void 0 : item.upload_location) || ""
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (item != void 0) {
      patch(route("creation.update", { creation: item == null ? void 0 : item.id }));
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof setUpdateMode == "function") {
        setTimeout(() => setUpdateMode(false), 1e3);
      }
    }
  }, [wasSuccessful]);
  if (!updateMode) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold  text-gray-700", children: data.title }),
      /* @__PURE__ */ jsx(ConditionalRender, { condition: (item == null ? void 0 : item.upload_status) == "0", children: /* @__PURE__ */ jsx("button", { type: "button", className: "ml-2", onClick: () => setUpdateMode(!updateMode), children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" }) }) }) })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: "flex flex-row", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { children: "Judul Karya" }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "title",
          name: "title",
          value: data.title,
          className: "my-2 block w-full",
          autoComplete: "title",
          isFocused: true,
          onChange: (e) => setData("title", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
      /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Ubah Data" }),
      /* @__PURE__ */ jsx(
        Transition,
        {
          show: recentlySuccessful,
          enter: "transition ease-in-out",
          enterFrom: "opacity-0",
          leave: "transition ease-in-out",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 ml-2", children: "Saved." })
        }
      )
    ] })
  ] });
}
function UploadCreationForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, patch, processing, errors, wasSuccessful } = useForm({
    title: (item == null ? void 0 : item.title) || "Karya 1",
    upload_location: (item == null ? void 0 : item.upload_location) || "",
    upload_status: (item == null ? void 0 : item.upload_status) || "0"
  });
  const [updateMode, setUpdateMode] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (mode == "update" && item != void 0) {
      patch(route("creation.update", { creation: item == null ? void 0 : item.id }));
    }
  };
  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == "function") {
        setTimeout(onComplete, 1e3);
      }
    }
  }, [wasSuccessful]);
  return /* @__PURE__ */ jsx("section", { className, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(UpdateCreationTitle, { item, updateMode, setUpdateMode }) }),
    /* @__PURE__ */ jsx(ConditionalRender, { condition: !updateMode, children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx(ConditionalRender, { condition: (item == null ? void 0 : item.upload_status) != "1", children: /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(InputLabel, { className: "text-2xl font-semibold", htmlFor: "title", children: [
        "Tautan Unggah Video: ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("a", { href: item == null ? void 0 : item.upload_location, target: "_blank", className: "text-blue-400", children: item == null ? void 0 : item.upload_location })
      ] }) }) }),
      /* @__PURE__ */ jsxs(ConditionalRender, { condition: (item == null ? void 0 : item.upload_status) != "1", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(InputLabel, { htmlFor: "upload_status", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                className: "mr-2",
                id: "upload_status",
                name: "upload_status",
                required: true,
                checked: data.upload_status == "1",
                onChange: (e) => {
                  if (e.target.checked) {
                    setData("upload_status", "1");
                  } else {
                    setData("upload_status", "0");
                  }
                }
              }
            ),
            "Saya sudah mengunggah video pada tautan google drive yang disediakan panitia"
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.upload_status, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { disabled: processing, children: "Daftarkan Karya" }) })
      ] }),
      /* @__PURE__ */ jsx(ConditionalRender, { condition: (item == null ? void 0 : item.upload_status) == "1", children: /* @__PURE__ */ jsx(InputLabel, { className: "w-1/2 text-xl font-semibold text-center mx-auto", htmlFor: "title", children: "Terima kasih sudah melakukan konfirmasi bahwa anda sudah mengunggah video pada tempat yang kami sediakan." }) })
    ] }) })
  ] }) });
}
export {
  UploadCreationForm as default
};
