import './App.css'
import { Button } from './components/ui/button'
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams"

function App() {

  return (
    <>
      <div className="h-[40rem] w-full bg-white relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Digizura Technologies
          </h1>
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}

export default App
