import "./Installer.css"
import BasicSettings from "../BasicSettings/BasicSettings";
import OLIA from "../OLIA/OLIA";
import OLHA from "../OLHA/OLHA";
import OLTA from "../OLTA/OLTA";
import Parameters from "../Parameters/Parameters";
import { Link, Route, Routes } from "react-router-dom";
import { Armbian } from "../../models/Armbian";
import { Build } from "../../models/Build";
import DownloadFile from "./GenerateZIP";

export const armbian = new Armbian();
export const build = new Build(armbian.armVersion, armbian.boards[0].name, armbian.boards[0].kernels[0], armbian.boards[0].lanName);

export default function Installer (){
  return(
    <div className='installer-container'>
      <div className='installer-options'>
        <Link to={"/"} className="options-item">Базовые настройки</Link>
        <Link to={"olia"} className="options-item">OLIA</Link>
        <Link to={"olha"} className="options-item">OLHA</Link>
        <Link to={"olta"} className="options-item">OLTA</Link>
        <Link to={"parameters"} className="options-item">Параметры</Link> 
        <button onClick={DownloadFile} className="installer-btn">Завершить</button>
      </div>
      <div className="installer-form">
        <Routes>
          <Route path="/" element={<BasicSettings />}></Route>
          <Route path="olia" element={<OLIA />}></Route>
          <Route path="olha" element={<OLHA />}></Route>
          <Route path="olta" element={<OLTA />}></Route>
          <Route path="parameters" element={<Parameters />}></Route>
        </Routes>
      </div>
    </div>
  )
}