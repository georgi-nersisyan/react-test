import './App.css'
import TopBanner from './components/topBanner'
import Summary from './components/summary'

function App() {
  return (
    <div className='flex justify-center items-center p-5'>
      <div className='w-full p-5 rounded-2xl flex flex-col gap-6 bg-gray-900'>
        <TopBanner />
        
        <Summary />
      </div>
    </div>
  )
}

export default App
