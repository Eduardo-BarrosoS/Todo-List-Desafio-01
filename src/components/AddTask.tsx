import style from './AddTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { Component } from 'react';

export function AddTask(){ 

    return (
        <>
            <div className={style.add}>
                <input type="text" placeholder='Adicione uma nova tarefa'/>
                <button>
                    <p>Criar</p>
                    <PlusCircle alt="Circulo com sinal de mais dentro" />
                </button>
            </div>
        </>
    )
}