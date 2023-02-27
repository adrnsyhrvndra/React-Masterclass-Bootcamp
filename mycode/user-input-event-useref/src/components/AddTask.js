import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({tasks,setTasks}) => {

    const [taskValue, setTaskValue] = useState("");
    const [progress,setProgress] = useState(false);

    const handleChange = (event) => {

        setTaskValue(event.target.value);

    }

    const handleReset = () => {

      setTaskValue('');
      setProgress(false);

    }

    const handleSubmit = (e) => {

      e.preventDefault();

      const task = {

        id: Math.floor(Math.random() * 100000),
        name: taskValue,
        completed:  Boolean(progress)

      }

      console.log(task);
      
      setTasks([...tasks,task]);
      
      handleReset();

    }

    const handleSelect = (e) => {

      setProgress(e.target.value);

    }

  return (

    <section className="addtask">

        <form onSubmit={handleSubmit}>

            <label htmlFor="task">Task Name</label>

            <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue}/>

            <select onChange={handleSelect} value={progress}>

              <option value="false">Pending</option>
              <option value="true">Completed</option>

            </select>
            
            <span className="reset" onClick={handleReset}>Reset</span>

            <button type="submit">Add Task</button>

        </form>

        <p>{taskValue.length} - Word Count </p>

        <p>{taskValue}</p>

    </section>

  )

}
