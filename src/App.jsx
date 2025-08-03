import Card from './Components/Card'
import Toggler from './Components/Toggler'
import { ThemeContextProvider } from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeContextProvider>
      <div className='p-5 w-full min-h-screen flex items-center justify-center'>
      <div className='w-full sm:w-1/2 lg:w-1/3 gap-3 flex flex-col items-end justify-center'>
      <Toggler />
      <Card />
      </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
