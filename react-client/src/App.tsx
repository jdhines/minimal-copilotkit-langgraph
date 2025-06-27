import { CopilotChat } from '@copilotkit/react-ui'

import { useCopilotChat } from '@copilotkit/react-core'
import React from 'react';

function App() {
  const { reset, visibleMessages } = useCopilotChat();

  React.useEffect(() => {
    console.log("Visible messages:", visibleMessages);
  }, [visibleMessages]);

  return (
    <>
      {/* <div className="min-h-screen w-full mx-auto"> */}
      <div>
        <button onClick={reset}>New chat</button>
      {/* </div> */}
      <CopilotChat
        instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
        labels={{
          title: "Sidebar Assistant",
          initial: "How can I help you today?",
        }}
      >
          {/* <div className="flex gap-8 justify-center mb-6">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="h-24 w-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="h-24 w-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]" alt="React logo" />
            </a>
          </div>
          <h1 className="text-5xl font-bold mb-4">Vite + React</h1>
          <CounterCard />
          <p className="text-neutral-400 mt-8">
            Click on the Vite and React logos to learn more
          </p> */}
      </CopilotChat>
        </div>
    </>
  )
}

export default App
