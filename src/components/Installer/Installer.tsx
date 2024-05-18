import "./Installer.css"
import BasicSettings from "../BasicSettings/BasicSettings";
import Parameters from "../Parameters/Parameters";
import { Link, Route, Routes } from "react-router-dom";
import { Armbian } from "../../models/Armbian";
import React from "react";

export const ArmbianContext = React.createContext({});

export default function Installer (){
  return(
    <div className='installer-container'>
      <div className='installer-options'>
        <Link to={"/"} className="options-item">Базовые настройки</Link>
        <Link to={"olia"} className="options-item">OLIA</Link>
        <Link to={"olha"} className="options-item">OLHA</Link>
        <Link to={"olta"} className="options-item">OLTA</Link>
        <Link to={"parameters"} className="options-item">Параметры</Link>
        
        <button className="installer-btn">Завершить</button>
      </div>
      <div className="installer-form">
        <ArmbianContext.Provider value={new Armbian("24", ["1", "2"])}>
          <Routes>
            <Route path="/" element={<BasicSettings />}></Route>
            <Route path="olia" element={<BasicSettings />}></Route>
            <Route path="olha" element={<BasicSettings />}></Route>
            <Route path="olta" element={<BasicSettings />}></Route>
            <Route path="parameters" element={<Parameters />}></Route>
          </Routes>
        </ArmbianContext.Provider>
      </div>
    </div>
  )
}