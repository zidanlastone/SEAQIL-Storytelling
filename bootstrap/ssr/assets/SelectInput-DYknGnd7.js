import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
const SelectInput = forwardRef(function SelectInput2({ className = "", isFocused = false, children, ...props }, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "select",
    {
      ...props,
      className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" + className,
      ref: localRef,
      children
    }
  );
});
export {
  SelectInput as S
};
