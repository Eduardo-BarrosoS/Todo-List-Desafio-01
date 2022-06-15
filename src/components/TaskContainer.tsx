import style from './TaskContainer.module.css'
import { Trash  } from 'phosphor-react'

import { taskList } from '../assets/mocks/Tasks'

export function TaskContainer() {

    return (
        <>
           <div className={ style.task}>
                <input type="checkbox" name=""/>
                <p>
                    {taskList[0].content}
                </p>
                <Trash size={16} alt='Lixeira' className={style.trash}/>
            </div> 
        </>
    )
}