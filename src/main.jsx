import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Prerendered pages already contain markup; the 404 page is rendered fresh.
if (container.hasChildNodes() && !document.title.startsWith('Page Not Found')) hydrateRoot(container, app)
else createRoot(container).render(app)
