import { React, useMemo, useState } from "react";
import { useAsyncDebounce } from "react-table";

export function GlobalFilter(
    {
        globalFilter,
        setGlobalFilter
    }) {

const [value, setValue] = useState(globalFilter)

const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
}, 200)

  return <div>
      <Label>Search By Common Name...</Label>
      <Input
      value={value || ""}
      onChange={(e=>{
          setValue(e.target.value)
          onChange(e.target.value)
      })}
      />
      
  </div>;
}
