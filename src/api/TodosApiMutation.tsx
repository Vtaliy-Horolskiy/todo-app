function TodosApiMutation(newTodo){
  return (
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=15',{
      method:"POST",
      body: JSON.stringify(newTodo),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    }).then((res) => res.json())
  )
}

export default TodosApiMutation;