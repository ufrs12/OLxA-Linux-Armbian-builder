import './App.css'
import BasicSettings from './components/BasicSettings/BasicSettings';
import Installer from './components/Installer/Installer'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <main className='wrapper'>
        <BrowserRouter>
            <Routes>
              <Route path="*" element={<Installer />}></Route>
              <Route path="home" element={<BasicSettings />}></Route>
            </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

