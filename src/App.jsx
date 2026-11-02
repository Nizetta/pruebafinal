import {RouterProvider} from 'react-router-dom'
import router from './routes/routes.jsx'
import HoraComer from './componetes/HoraComer.jsx'


function App() {
 
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <HoraComer />
    </>
  )
}

export default App
