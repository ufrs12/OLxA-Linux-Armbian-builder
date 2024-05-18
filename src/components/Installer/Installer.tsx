import "./Installer.css"
import BasicSettings from "../BasicSettings/BasicSettings";
import Parameters from "../Parameters/Parameters";
import { Link, Route, Routes } from "react-router-dom";
import { Armbian } from "../../models/Armbian";
import { Build } from "../../models/Build";

//export const ArmbianContext = React.createContext(new Armbian("24", ["1", "2"]));
export const armbian = new Armbian();
export var build = new Build(armbian.boards[0].name, armbian.boards[0].kernels[0]);

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