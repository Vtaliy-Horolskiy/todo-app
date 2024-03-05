function TodosApi(){
  return fetch('https://jsonplaceholder.typicode.com/todos/?_limit=15').then((res) => res.json())
}

export default TodosApi;