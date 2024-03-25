import { jsx } from "react/jsx-runtime";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      ...props,
      className: "h-8 w-auto" + props.className,
      src: "https://training.qiteplanguage.org/assets2/images/logo.png"
    }
  );
}
export {
  ApplicationLogo as A
};
