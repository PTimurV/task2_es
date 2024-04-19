import { useState } from 'react'

import './App.css'
import { MainCard } from './components/MainCard/MainCard'
import {Competents} from "./components/Competents/Сompetents"
 function App() {
  const [count, setCount] = useState(0)

  const [texts, setTexts] = useState([
    'JavaScript: хорошая база',
    'React: могу сделать простой фронт для веб приложения',
    'Node js: могу сделать простой бэк для веб приложения',
    'Есть опыт проектирования баз данных',
  ]);

  const [competensWant, setCompetensWant] = useState([
    'JavaScript: на высоком уровне',
    'React на уровне сложных веб приложений',
    'Работа в команде',
    'Коммуникацию на высоком уровне',
    'Научится защищать проекты',
    'Проектировать хорошие веб приложения с нуля',
    'Node js на уровне сложных веб приложений',
    'Проектирование сложных и правильных баз данных',
    'Правильную архитектуру веб приложений',
    'Алгоритмы для оптимизации работы веб приложений',
  ]);


  




  return (
    <>
    <div className='myinfo'>
      <MainCard />
      <Competents texts={texts} topic = "Мои компетенции:" />
    </div>
      
      <Competents texts={competensWant} topic = "Хотел бы изучить:" />
    </>
  )
}

export default App
