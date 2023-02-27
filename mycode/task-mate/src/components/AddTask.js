

export const AddTask = ({tasklist,setTaskList,task,setTask}) => {

    const handleSubmit = (e) => {

        e.preventDefault();

        if (task.id) {
            
            const date = new Date();

            const updateTask = tasklist.map((todo) => (

                todo.id === task.id ? {
                    id:task.id,
                    name:task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }  : todo 

            ));

            setTaskList(updateTask);

            setTask({});
            
        }else{

            const date = new Date();
            console.log(e.target.task.value);
            console.log(date);
            const newTask = {
                id: date.getTime(),
                name : e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...tasklist,newTask]);
    
            // After Submit Empty The Input Again
            // e.target.task.value = "";
            setTask({});

        }

    }

    return (

        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input onChange={ e => setTask({...task,name:e.target.value}) } value={task.name || ""} type="text" name='task' autoComplete='off' placeholder='add task' maxLength="25"/>
                <button type="submit">{ task.id ? "Update" : "Add" }</button>
            </form>
        </section>

    )

}
