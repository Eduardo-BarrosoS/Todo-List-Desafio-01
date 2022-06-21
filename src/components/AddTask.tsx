import style from './AddTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, InvalidEvent, useState } from 'react'
// import { setTaskList, taskList } from '../assets/mocks/Tasks'

// interface EventType {
//     event: String;
// }


export function AddTask(){ 


    const [task, setTask] = useState([''])
    const [newTask, setNewTask] = useState('')

    const addTaskIsEmpty = newTask.length === 0 

    function handleNewTask() {
        setTask( [...task, newTask])
    }

    
    console.log(task)

    function addNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTask(event.target.value)
    }

    function handleIfIsInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('preencha o campo com uma Task')
    }

    return (
        <>
            <div  className={style.add}>
                <textarea 
                    name="" 
                    id="" 
                    placeholder='Adicione uma nova tarefa'
                    onChange={addNewTask}
                    onInvalid={handleIfIsInvalid}
                    required
                >

                </textarea>
                <button onClick={handleNewTask} disabled={addTaskIsEmpty}>
                    <p>Criar</p>
                    <PlusCircle alt="Circulo com sinal de mais dentro" />
                </button>
            </div>
        </>
    )
}
