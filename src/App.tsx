import styles from './App.module.css'
import './global.css'

import { AddTask } from './components/AddTask'
import { TaskList } from './components/TackList'
import { Header } from './components/Header'

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

