import BasicSettings from "../BasicSettings/BasicSettings";
import Parameters from "../Parameters/Parameters";
import "./Installer.css"
import { Link, Route, Routes } from "react-router-dom";

import { Armbian } from "../../assets/armdata/v23/Armbian";
export default function Installer (){
  const t = new Armbian("23", ["1", "2"])
  function a(){console.log(t);}
  
  return(
    <div className='installer-container'>
      <div className='installer-options'>
        <Link to={"/"} className="options-item">Базовые настройки</Link>
        <Link to={"olia"} className="options-item">OLIA</Link>
        <Link to={"olha"} className="options-item">OLHA</Link>
        <Link to={"olta"} className="options-item">OLTA</Link>
        <Link to={"parameters"} className="options-item">Параметры</Link>
        
        <button className="installer-btn" onClick={a}>Завершить</button>
      </div>
      <div className="installer-form">
        <Routes>
          <Route path="/" element={<BasicSettings />}></Route>
          <Route path="olia" element={<BasicSettings />}></Route>
          <Route path="olha" element={<BasicSettings />}></Route>
          <Route path="olta" element={<BasicSettings />}></Route>
          <Route path="parameters" element={<Parameters />}></Route>
        </Routes>
      </div>
    </div>
  )
}