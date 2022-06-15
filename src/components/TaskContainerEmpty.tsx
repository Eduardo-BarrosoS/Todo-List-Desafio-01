import style from './TaskContainerEmpty.module.css'
import { ClipboardText  } from 'phosphor-react'

export function TaskContainerEmpty() {
    return (
        <>
            <div className={style.taskContainerEmpty}>
                <ClipboardText className={style.imgList} weight="light" size={56}/>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </>
    )
}