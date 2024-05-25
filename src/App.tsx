import './App.css'
import './fonts.css'
import { BrowserRouter } from "react-router-dom";
import Installer from './components/Installer/Installer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main className='wrapper'>
          <Installer />
        </main>
      </BrowserRouter>
    </>
  )
}

