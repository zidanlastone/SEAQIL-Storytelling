import { jsx } from "react/jsx-runtime";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      ...props,
      className: "h-8 w-auto mx-auto" + props.className,
      src: "/image/sponsors/tutwuri-handayani.png"
    }
  );
}
export {
  ApplicationLogo as A
};
