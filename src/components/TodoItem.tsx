import React from 'react';
import { List, Checkbox, Button, Text, Icon } from '@shopify/polaris';
import { DeleteIcon } from '@shopify/polaris-icons';
function todoItem({todoItem, removeTodos, changeStatus}) {

  return (
    <List.Item>
      <Text as='div' alignment='justify' textDecorationLine={todoItem.completed ? "line-through" : ''}>
        <Checkbox
          label={todoItem.title}
          checked={todoItem.completed}
          onChange={()=> {changeStatus(todoItem.id, todoItem.completed)}}
        />
      </Text>
      <Button variant="primary"
              tone="critical"
              textAlign='right'
              onClick={()=>{removeTodos(todoItem.id)}}>
        <Icon
          source={DeleteIcon}
          tone="base"
        />
      </Button>
    </List.Item>
  )
}

export default todoItem;