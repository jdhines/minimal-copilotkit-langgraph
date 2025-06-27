import '@copilotkit/react-ui/styles.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CopilotKit } from '@copilotkit/react-core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CopilotKit
      runtimeUrl="http://localhost:4000/copilotkit"
      agent="sample_agent"
    >
      <App />
    </CopilotKit>
  </StrictMode>,
)
