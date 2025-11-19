import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    // load saved tasks
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  // Save tasks anytime they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a task
  const addTask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), name: text }]);
    setText("");
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

        {/* Input + Button */}
        <div className="flex mb-4">
          <input
            className="flex-1 border rounded-l-lg px-4 py-2"
            placeholder="Enter task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border"
              >
                <span>{task.name}</span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-600 font-semibold"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;