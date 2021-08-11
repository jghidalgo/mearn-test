const tasks = [
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
]
const Tasks = () => {
    return (
        <>
        {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}    
        </>
    )
}

export default Tasks
