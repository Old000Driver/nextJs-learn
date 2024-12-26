import { addTodo, getTodos } from "./action";

export default async function Page() {
  const todos = await getTodos();
  return (
    <div>
      <form action={addTodo}>
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
