
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './global.css'
import './index.module.scss'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(<BrowserRouter><App /></BrowserRouter>)
