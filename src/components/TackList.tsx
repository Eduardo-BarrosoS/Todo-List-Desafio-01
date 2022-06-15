import style from './TaskList.module.css'
import { Trash, ClipboardText  } from 'phosphor-react'
import { taskList } from '../assets/mocks/Tasks'
import { TaskContainerEmpty } from './TaskContainerEmpty'
import { TaskContainer } from './TaskContainer'


export function TaskList() {

    const hasTask = taskList.length <= 0
    return (
        <>
            <div className={style.taskListContainer}>
                <div className={style.taskNumber}>
                    <div className={style.createdTask}>
                        <p>Tarefas Criadas</p>
                        <span>{taskList.length}</span>
                    </div>
                    <div className={style.completed}>
                        <p>Concluídas</p>
                        <span>{1} de {taskList.length}</span>
                    </div>
                </div>
                <div className={style.tasksContainer}>
                    { hasTask ? <TaskContainerEmpty /> : <TaskContainer /> }
                </div>

            </div>
        </>
    )
}