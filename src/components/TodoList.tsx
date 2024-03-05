import React, {useState} from "react";
import {Layout, LegacyCard, List, Page, Text, LegacyStack} from "@shopify/polaris";
import TodoItem from "@/components/TodoItem";
import FilteredTodos from "@/components/FilteredTodos";
import AddTodoItem from "@/components/AddTodoItem";
import SearchTodoItem from "@/components/SearchTodoItem";
function TodoList({data}) {

  let [todos, setTodos] = useState(data);
  let [filter, setFilter] = useState('all');

  function removeTodos(id) {
    let filteredTodos = todos.filter(t=> t.id !== id);
    setTodos(filteredTodos);
  }

  function addTodo(title){
    let random = Math.floor(Math.random() * (Math.floor(100000) - Math.ceil(15) + 1) + Math.ceil(15));
    let newTodo = {
      id: random,
      title: title,
      completed: false
    };
    let newDataTodos = [newTodo , ...todos];
    setTodos(newDataTodos);
  }

  function changeStatus(todoId, completed){
    let todoChange = todos.find(t => t.id === todoId);
    if(todoChange){
      todoChange.completed = !completed;
    }
    setTodos([...todos])
  }

  function searchTodoList(value) {
    let searchTodo = todos.filter(t => t.title.toLowerCase().includes(value.toLowerCase()));
    if(searchTodo.length != 0){
      setTodos(searchTodo);
    }else{
      setTodos([]);
    }
  }

  let filteredTodolist = todos;
  if(filter === 'completed'){
    filteredTodolist = todos.filter(t => t.completed === true);
  }
  if(filter === 'active'){
    filteredTodolist = todos.filter(t => t.completed === false);
  }

  function changeFilter(value){
    setFilter(value);
  }

  return(
    <>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <LegacyCard title="Todo List" sectioned>
              <List type="bullet">
                { filteredTodolist.length != 0 ? <FilteredTodos changeFilter={changeFilter}/> : ''}
                {
                  filteredTodolist.length != 0 ? filteredTodolist?.map((todoItem) => (
                    <TodoItem key={todoItem.id}
                              removeTodos={removeTodos}
                              todoItem={todoItem}
                              changeStatus={changeStatus}
                    />
                  )) : <LegacyStack vertical><Text variant="bodyLg" as="p" alignment="center">Search result is empty</Text></LegacyStack>
                }
              </List>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <LegacyCard title="Add todo" sectioned>
              <AddTodoItem addTodo={addTodo}/>
            </LegacyCard>
            <LegacyCard title="Search todo" sectioned>
              <SearchTodoItem searchTodoList={searchTodoList}/>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  )
}

export default TodoList;