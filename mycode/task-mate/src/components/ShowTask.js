

export const ShowTask = ({tasklist,setTaskList,task,setTask}) => {

    const emptyList = () => {

        setTaskList([]);

    }

    const deleteFunction = (id) => {

        const updatedTaskList = tasklist.filter(todo => todo.id !== id);

        console.log(updatedTaskList);

        setTaskList(updatedTaskList);

    }

    const editFunction = (id) => {

        const selectedTask = tasklist.find(todo => todo.id === id);

        console.log(selectedTask);

        setTask(selectedTask);

    }

    return (

        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span> 
                </div>
                <button className="clearAll" onClick={ emptyList }>Clear All</button>
            </div>
            <ul>
                {tasklist.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className='name'>{todo.name}</span>
                            <span className='time'>{todo.time}</span>
                        </p>
                        <i onClick={() => editFunction(todo.id)} className='bi bi-pencil-square'></i>
                        <i onClick={() => deleteFunction(todo.id)} className='bi bi-trash'></i>
                    </li>
                ))}
            </ul>
        </section>

    )

}
