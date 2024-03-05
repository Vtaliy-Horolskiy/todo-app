import {TextField} from "@shopify/polaris";
import React, {useCallback, useState} from "react";

function SearchTodoItem({searchTodoList}){
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((newValue: string) => {
      setValue(newValue);
      searchTodoList(newValue);
    },
    [],
  );

  return(
    <>
      <TextField
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    </>
  )
}

export default SearchTodoItem;