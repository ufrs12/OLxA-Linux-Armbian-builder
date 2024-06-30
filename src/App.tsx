import './App.css'
import './fonts.css'
import { HashRouter } from "react-router-dom";
import Installer from './components/Installer/Installer';

export default function App() {
  return (
    <>
      <HashRouter>
        <main className='wrapper'>
          <Installer />
        </main>
      </HashRouter>
    </>
  )
}

