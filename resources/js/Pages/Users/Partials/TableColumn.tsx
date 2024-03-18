import { ReactNode } from "react";

export default function TableColumn({ className = '', children, colHeading = false }: { className?: string, children: ReactNode, colHeading?: boolean }) {
  if (colHeading) {
    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
      {children}
    </th>
  }
  return (
    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
      {children}
    </td>
  )
}