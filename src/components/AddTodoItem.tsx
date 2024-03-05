import React, {useState, useCallback} from 'react';
import { TextField, Icon, Button } from '@shopify/polaris';
import { PlusIcon } from '@shopify/polaris-icons';
function AddTodoItem({addTodo}) {

  const [value, setValue] = useState<string>('');
  const [error , setError ] = useState<string>('');

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setError('');
    },
    [],
  );

  const addTodoItem = () => {
    if(value.trim() !== '') {
      addTodo(value);
      setValue('');
    }else {
      setError('Store name is required');
    }
  }

  return (
    <>
      <TextField
        value={value}
        onChange={handleChange}
        error={error}
        autoComplete="off"
      />
      <Button variant="primary"
              onClick={addTodoItem}
              disabled={!value}>
        <Icon
          source={PlusIcon}
          tone="base"
        />
      </Button>
    </>

  )
}

export default AddTodoItem;