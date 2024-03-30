import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { flexRender } from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);
  return /* @__PURE__ */ jsx("input", { ...props, value, onChange: (e) => setValue(e.target.value) });
}
function RowContent(row) {
  return /* @__PURE__ */ jsx("tr", { children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx("td", { className: "border-b border-slate-100 p-4 pl-8 text-slate-500", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id);
}
function RowHeader(headerGroup) {
  return /* @__PURE__ */ jsx("tr", { id: headerGroup.id, children: headerGroup.headers.map(
    (header, index) => {
      return /* @__PURE__ */ jsx("th", { colSpan: header.colSpan, className: "border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left", children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id + "-" + index);
    }
  ) });
}
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank
  });
  return itemRank.passed;
};
export {
  DebouncedInput as D,
  RowHeader as R,
  RowContent as a,
  fuzzyFilter as f
};
