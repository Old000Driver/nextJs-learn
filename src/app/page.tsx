"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    const r = await (await fetch("/api/todos", {})).json();
    setTodos(r.data);
    console.log(r);
  };
  useEffect(() => {
    fetchData();
    // setTodos(await fetchData());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/todos", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const { data } = await res.json();

    setTodos(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" className="border p-2" />
        <button type="submit" className="border p-2 ml-2">
          提交
        </button>
      </form>
      <ul className="leading-8 mt-4">
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
