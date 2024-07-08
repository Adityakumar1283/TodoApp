import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className=' container mx-auto my-5 rounded-xl p-3 bg-violet-100'>
          <h1 className=' text-xl font-bold'>Your Task</h1>
      </div>
    </>
  )
}

export default App
