import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import Shorter from './Shorter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Layout>
    <Shorter/>
   </Layout>

  </React.StrictMode>,
)
