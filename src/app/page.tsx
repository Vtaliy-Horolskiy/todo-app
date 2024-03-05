"use client"
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import TodosApi from "@/api/TodosApi";
import SkeletonLayout from "@/components/SkeletonLayout";
import TodoList from "@/components/TodoList";

function Todos() {

  const {isLoading, error, data} = useQuery({
    queryKey: ['todo'],
    queryFn: TodosApi
  });

  if(isLoading) return <SkeletonLayout/>

  if(error) return <div>There was an error!</div>

  return (
    <>
      <TodoList data={data}/>
    </>
  );
}

export default Todos;
