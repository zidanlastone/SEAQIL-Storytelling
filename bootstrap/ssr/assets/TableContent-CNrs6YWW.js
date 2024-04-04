import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { flexRender, useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
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
      return /* @__PURE__ */ jsx("th", { colSpan: header.colSpan, className: "border-b font-medium py-4 pl-8 pt-0 pb-3 text-slate-400 text-left", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-row text-center" + header.column.getCanSort() ? "cursor-pointer select-none" : "",
          onClick: header.column.getToggleSortingHandler(),
          title: header.column.getCanSort() ? header.column.getNextSortingOrder() === "asc" ? "Sort ascending" : header.column.getNextSortingOrder() === "desc" ? "Sort descending" : "Clear sort" : void 0,
          children: [
            header.isPlaceholder ? null : flexRender(
              header.column.columnDef.header,
              header.getContext()
            ),
            {
              asc: " 🔼",
              desc: " 🔽"
            }[header.column.getIsSorted()] ?? null
          ]
        }
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
function TableContent({ columns, data = [], headerAction, columnFilters = [], setColumnFilters }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10
  });
  const table = useReactTable({
    columns,
    data,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      sorting,
      pagination,
      globalFilter,
      columnFilters
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters ?? void 0,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    globalFilterFn: fuzzyFilter
  });
  return /* @__PURE__ */ jsxs("section", { className: "p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "my-3 md:mx-2 flex flex-col md:flex-row md:justify-between", children: [
      headerAction,
      /* @__PURE__ */ jsx("div", { className: "md:mx-2 my-2 order-last", children: /* @__PURE__ */ jsx(
        DebouncedInput,
        {
          value: globalFilter,
          onChange: (value) => setGlobalFilter(String(value)),
          className: "px-2 py-2 font-sm shadow border rounded",
          placeholder: "Cari Data Global"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full overflow-x-auto", children: [
      /* @__PURE__ */ jsxs("table", { className: "table-auto w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: table.getHeaderGroups().map((headerGroup, index) => /* @__PURE__ */ jsx(RowHeader, { ...headerGroup }, headerGroup.id + "-" + index)) }),
        /* @__PURE__ */ jsx("tbody", { className: "bg-white", children: table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(RowContent, { ...row }, row.id)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "border rounded p-1",
            onClick: () => table.firstPage(),
            disabled: !table.getCanPreviousPage(),
            children: "<<"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "border rounded p-1",
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: "<"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "border rounded p-1",
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage(),
            children: ">"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "border rounded p-1",
            onClick: () => table.lastPage(),
            disabled: !table.getCanNextPage(),
            children: ">>"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { children: "Page" }),
          /* @__PURE__ */ jsxs("strong", { children: [
            table.getState().pagination.pageIndex + 1,
            " of",
            " ",
            table.getPageCount().toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "select",
          {
            className: "border-0 rounded",
            value: table.getState().pagination.pageSize,
            onChange: (e) => {
              table.setPageSize(Number(e.target.value));
            },
            children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ jsxs("option", { value: pageSize, children: [
              "Show ",
              pageSize
            ] }, pageSize))
          }
        )
      ] })
    ] })
  ] });
}
export {
  TableContent as T
};
