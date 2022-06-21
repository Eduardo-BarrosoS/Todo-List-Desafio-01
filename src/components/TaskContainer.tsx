import style from './TaskContainer.module.css'
import { Cake, Trash  } from 'phosphor-react'
import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
// import { newTask } from './AddTask'

// import { taskList } from '../assets/mocks/Tasks'

interface ITaskContainer {
    content: string;
    checked: boolean;
}

export function TaskContainer({ content, checked}: ITaskContainer) {
    
    const [isChecked, setIsChecked] = useState(Boolean)
    
    function eventCheck(event: ChangeEvent<HTMLInputElement>) {
        setIsChecked(event.target.checked)
    }

    return (
        <>
           <div className={ style.task}>
                <input onChange={eventCheck} checked={checked}  type="checkbox" name=""/>
                <p>
                    {content}
                </p>
                <Trash size={16} alt='Lixeira' className={style.trash}/>
            </div> 
        </>
    )
}

