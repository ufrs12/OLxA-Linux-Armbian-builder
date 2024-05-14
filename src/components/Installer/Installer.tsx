import BasicSettings from "../BasicSettings/BasicSettings";
import Parameters from "../Parameters/Parameters";
import "./Installer.css"
import { Link, Route, Routes } from "react-router-dom";

export default function Installer (){
  return(
    <div className='installer-container'>
      <div className='installer-options'>
        <Link to={"/"} className="options-item">Базовые настройки</Link>
        <Link to={"/"} className="options-item">OLIA</Link>
        <Link to={"/"} className="options-item">OLHA</Link>
        <Link to={"/"} className="options-item">OLTA</Link>
        <Link to={"parameters"} className="options-item">Параметры</Link>
        
        <button className="installer-btn">Завершить</button>
      </div>
      <div className="installer-form">
        <Routes>
          <Route path="/" element={<BasicSettings />}></Route>
          <Route path="*" element={<BasicSettings />}></Route>
          <Route path="*" element={<BasicSettings />}></Route>
          <Route path="*" element={<BasicSettings />}></Route>
          <Route path="parameters" element={<Parameters />}></Route>
        </Routes>
      </div>
    </div>
  )
}