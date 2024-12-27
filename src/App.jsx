import { useState } from 'react'
import './App.css'
import TiptapEditor from './components/Tiptop'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <TiptapEditor />
   </>
  )
}

export default App
