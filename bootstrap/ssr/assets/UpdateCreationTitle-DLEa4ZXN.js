import { jsxs, jsx } from "react/jsx-runtime";
import { C as ConditionalRender } from "./ConditionalRender-BsoLXbpe.js";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
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
  return /* @__PURE__ */ jsxs("form", { onSubmit, className: "flex flex-col", children: [
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
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(InputLabel, { children: "Link Karya" }),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "upload_location",
          name: "upload_location",
          value: data.upload_location,
          className: "my-2 block w-full",
          autoComplete: "title",
          isFocused: true,
          onChange: (e) => setData("upload_location", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.upload_location })
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
export {
  UpdateCreationTitle as default
};
