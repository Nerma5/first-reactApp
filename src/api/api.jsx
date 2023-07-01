export const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    return null;
  }
};

export const deleteTodo = async (toDoId) => {
  try {
    const respone = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${toDoId}`,
      {
        method: "DELETE",
      }
    );
    if (respone.ok) {
      return true;
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.error("error", error);
  }
};
