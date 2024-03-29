import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment as Fragment$1 } from "react";
function ComboBoxInput({ data, value, onChange, placeholder, ...props }) {
  const [query, setQuery] = useState("");
  const filteredData = query === "" ? data : data.filter((item) => {
    return item.value.toLowerCase().includes(query.toLowerCase());
  });
  return /* @__PURE__ */ jsx(Combobox, { value, onChange, ...props, children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Combobox.Input,
      {
        as: Fragment$1,
        onChange: (event) => setQuery(event.target.value),
        displayValue: (item) => item !== null ? item.value : "",
        children: /* @__PURE__ */ jsx("input", { type: "text", className: "w-full rounded", placeholder: placeholder ? placeholder : "Harap pilih data..." })
      }
    ),
    /* @__PURE__ */ jsx(
      Transition,
      {
        show: open,
        enter: "transition duration-100 ease-out",
        enterFrom: "transform scale-95 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-75 ease-out",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-95 opacity-0",
        children: /* @__PURE__ */ jsx(Combobox.Options, { static: true, children: filteredData.map((item) => /* @__PURE__ */ jsx(Combobox.Option, { value: item, className: "w-full p-2 bg-white hover:bg-gray-300 rounded border-b-2", children: item.value }, item.id)) })
      }
    )
  ] }) });
}
export {
  ComboBoxInput as C
};
