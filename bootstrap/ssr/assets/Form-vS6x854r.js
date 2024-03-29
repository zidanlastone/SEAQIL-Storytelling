import { jsxs, jsx } from "react/jsx-runtime";
import { I as InputError } from "./InputError-cRVTeK4i.js";
import { I as InputLabel } from "./InputLabel-uXgJWz9w.js";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { T as TextInput } from "./TextInput-CL99szxP.js";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function CategoryForm({ onComplete, className, item, mode = "create" }) {
  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm({
    service_name: (item == null ? void 0 : item.service_name) || "",
    protocol: (item == null ? void 0 : item.protocol) || "",
    host: (item == null ? void 0 : item.host) || "",
    port: (item == null ? void 0 : item.port) || 0,
    timeout: (item == null ? void 0 : item.timeout) || 0,
    username: (item == null ? void 0 : item.username) || "",
    password: (item == null ? void 0 : item.password) || ""
  });
  const submit = (e) => {
    console.log(data);
    e.preventDefault();
    if (mode == "create") {
      post(route("admin.external-service-config.store"), { forceFormData: false });
    } else if (mode == "update" && item != void 0) {
      patch(route("admin.external-service-config.update", { external_service_config: item == null ? void 0 : item.id }), { forceFormData: false });
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
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "service_name", value: "Nama Service" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "service_name",
            name: "service_name",
            value: data.service_name,
            className: "my-2 block w-full",
            autoComplete: "service_name",
            isFocused: true,
            onChange: (e) => setData("service_name", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.service_name, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "protocol", value: "Protokol" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "protocol",
            name: "protocol",
            value: data.protocol,
            className: "my-2 block w-full",
            autoComplete: "protocol",
            isFocused: true,
            onChange: (e) => setData("protocol", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.protocol, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "host", value: "Host" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "host",
            name: "host",
            value: data.host,
            className: "my-2 block w-full",
            autoComplete: "host",
            isFocused: true,
            onChange: (e) => setData("host", e.target.value),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.host, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "port", value: "port" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            id: "port",
            name: "port",
            value: data.port,
            className: "my-2 block w-full",
            autoComplete: "port",
            isFocused: true,
            onChange: (e) => setData("port", parseInt(e.target.value)),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.port, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "timeout", value: "timeout" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            type: "number",
            id: "timeout",
            name: "timeout",
            value: data.timeout,
            className: "my-2 block w-full",
            autoComplete: "timeout",
            isFocused: true,
            onChange: (e) => setData("timeout", parseInt(e.target.value)),
            required: true
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.timeout, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "username", value: "username" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "username",
            name: "username",
            value: data.username,
            className: "my-2 block w-full",
            autoComplete: "username",
            isFocused: true,
            onChange: (e) => setData("username", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.username, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            name: "password",
            value: data.password,
            className: "my-2 block w-full",
            autoComplete: "password",
            isFocused: true,
            onChange: (e) => setData("password", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-end mt-4", children: /* @__PURE__ */ jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: mode == "create" ? "Tambah Data" : "Ubah Data" }) })
    ] })
  ] });
}
export {
  CategoryForm as default
};
