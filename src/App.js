import React from 'react'
import { useState} from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

    const [ showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shoopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        }
    ])

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder =(id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {
            id: id, ...task
        }
        setTasks([...tasks, newTask])
    }

    return ( <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
            {showAddTask && <AddTask addTask={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/> : 'No Tasks To Show'}
    </div> 
    )
}

export default App