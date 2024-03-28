import { jsxs, jsx } from "react/jsx-runtime";
import { P as PrimaryButton } from "./PrimaryButton-C-TDjBGq.js";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";
function DeleteParticipant({ className, item, onComplete }) {
  const { data, delete: destroy, reset, processing, setData, errors, recentlySuccessful, wasSuccessful } = useForm({
    user_id: item == null ? void 0 : item.user_id
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (item != void 0) {
      destroy(route("participant.destroy", { participant: item.id }), {
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
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Partisipan" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Apakah Anda yakin ingin menghapus partisipan ini?" })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit, className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
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
    ] }) })
  ] });
}
export {
  DeleteParticipant as default
};
