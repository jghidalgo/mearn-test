import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Task1',
        date: 'Feb 2nd at 2:30pm',
        reminder: 'true'
    },
    {
        id: 2,
        text: 'Task2',
        date: 'Feb 3nd at 3:30pm',
        reminder: 'true'
    },
    {
        id: 3,
        text: 'Task3',
        date: 'Feb 4nd at 4:30pm',
        reminder: 'true'
    }
])

//Delete task
const deleteTask = (id) => {
       setTasks(tasks.filter((task)=>task.id !== id))
}

  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} onDelete = {deleteTask} />
    </div>
  );
}

export default App;
