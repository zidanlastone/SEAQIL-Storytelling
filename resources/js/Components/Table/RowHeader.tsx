import { HeaderGroup, flexRender } from "@tanstack/react-table";

export default function RowHeader<T>(headerGroup: HeaderGroup<T>) {
  return (
    <tr id={headerGroup.id}>
      {headerGroup.headers.map((header, index) => {
        return (
          <th key={header.id + '-' + index} colSpan={header.colSpan} className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-left">
            {header.isPlaceholder ? null : flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
          </th>
        )
      }
      )}
    </tr>
  )
}