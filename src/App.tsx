import styles from './App.module.css'
import './global.css'

import { AddTask } from './components/AddTask'
import { TaskList } from './components/TackList'
import { Header } from './components/Header'
import { taskList } from './assets/mocks/Tasks'

export function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <Header />

        <AddTask />

        <TaskList />
      </div>
    
    </>
  )
}

