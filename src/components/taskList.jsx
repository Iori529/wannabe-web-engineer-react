import { useState } from "react";
import Task from "./task";

const TaskList = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([{ name: "講義の課題" }]);
  return (
    //ここにItemコンポーネントを並べる
    <div>
      <h2>To doリスト</h2>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.name}>
              <Task name={task.name} />
            </li>
          );
        })}
      </ul>
      <div>
        <label htmlFor="taskName">
          タスク名:
          <input
            type="text"
            id="taskName"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </label>
        <button
          onClick={() => {
            setTasks((tasks) => [...tasks, { name: taskName }]);
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default TaskList;
