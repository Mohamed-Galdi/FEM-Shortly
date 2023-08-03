import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p className="text-base font-shortly text-shortly_pr_cyan sm:text-shortly_sec_red bg-shortly_pr_darkViolet border-shortly_sec_red border-2">
        hello from vs code
      </p>
    </>
  )
}

export default App
