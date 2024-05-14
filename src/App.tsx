import './App.css'
import { BrowserRouter } from "react-router-dom";
import Installer from './components/Installer/Installer';

export default function App() {
  return (
    <>
      <main className='wrapper'>
        <BrowserRouter>
          <Installer />
        </BrowserRouter>
      </main>
    </>
  )
}

