import style from './TaskList.module.css'

import { taskList } from '../assets/mocks/Tasks'
import { TaskContainerEmpty } from './TaskContainerEmpty'
import { TaskContainer } from './TaskContainer'


export function TaskList() {

    const taskContent = taskList.map(task => {
        return <TaskContainer key={task.id+1} checked={task.checked} content={task.content} /> 
    })

    const taskCompleted = taskList.filter(completed => {
        return completed.checked === true
    })
    const completedTaskNumber = taskCompleted.length

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
                        <span>{completedTaskNumber} de {taskList.length}</span>
                    </div>
                </div>
                <div className={style.tasksContainer}>
                    { hasTask ? <TaskContainerEmpty /> : taskContent}
                </div>
            </div>
        </>
    )
}