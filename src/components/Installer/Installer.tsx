import BasicSettings from "../BasicSettings/BasicSettings";
import Parameters from "../Parameters/Parameters";
import "./Installer.css"
import { Link, Route, Routes } from "react-router-dom";

export default function Installer (){
  <div className='installer-container'>
    <div className='installer-options'>
      <Link to={"/"}>Базовые настройки</Link>
      <Link to={"/"}>OLIA</Link>
      <Link to={"/"}>OLHA</Link>
      <Link to={"/"}>OLTA</Link>
      <Link to={"parameters"}>Параметры</Link>
      
      <button>Получить сборщик</button>
    </div>
    <Routes>
      <Route path="/" element={<BasicSettings />}></Route>
      <Route path="*" element={<BasicSettings />}></Route>
      <Route path="*" element={<BasicSettings />}></Route>
      <Route path="*" element={<BasicSettings />}></Route>
      <Route path="parameters" element={<Parameters />}></Route>
    </Routes>
  </div>
}