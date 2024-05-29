import "./Installer.css"
import BasicSettings from "../BasicSettings/BasicSettings";
import OLIA from "../OLIA/OLIA";
import OLHA from "../OLHA/OLHA";
import OLTA from "../OLTA/OLTA";
import Parameters from "../Parameters/Parameters";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Armbian } from "../../models/Armbian";
import { Build } from "../../models/Build";
import DownloadFile from "./GenerateZIP";
import React from "react";
// import { logo } from "../../assets.";
// import { system } from "../../assets/";
import x from "../../assets/x.svg";
import olia from "../../assets/I.svg";
import olha from "../../assets/H.svg";
import olta from "../../assets/T.svg";
import arm from "../../assets/Arm.svg";
import sett from "../../assets/Set.svg";
import olxa from "../../assets/olxa1.svg";
import youtube from "../../assets/youtube.svg";
import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";

export const armbian = new Armbian();
export const build = new Build(armbian.armVersion, armbian.boards[0].name, armbian.boards[0].kernels[0]);

export default function Installer (){
  const location = useLocation();
  const isActive = (path: string) => location.pathname === `/${path}`;

  const NavLink: React.FC<({
    name: string, title: string, img: string
  })> = ({name, title, img}) => {
    return(
      <Link to={name} className={`options-item ${isActive(name) ? 'active' : ''}`}>
        <img src={img} className="options-item-img"/><span>{title}</span>
      </Link>
    )}

  return(
    <div className='installer-container'>
      <div className="installer-header">
        <div>
          <img className="logo" src={olxa} />
        </div>
        <div className="title">
          <p>OLxA Linux Armbian Builder</p> 
        </div>
        <div className="socials">
          <a href="https://www.youtube.com/watch?v=70KjBs9PBvc&list=PLTikPLD2idDUiVIWqESOJQMt4NExaFTpc"><img src={youtube} /></a>
          <a href="https://t.me/ruolia"><img src={telegram} /></a>
          <a href="https://github.com/ufrs12/OLxA-Linux-Armbian-builder"><img src={github} /></a>
        </div>
      </div>
      <div className="installer-main">
        <div className='installer-options'>
          <NavLink name="system" title="Система" img={arm}/>
          <NavLink name="olxa" title="OLxA" img={x}/>
          <NavLink name="olia" title="OLIA" img={olia}/>
          <NavLink name="olha" title="OLHA" img={olha}/>
          <NavLink name="olta" title="OLTA" img={olta}/>
          <NavLink name="parameters" title="Параметры" img={sett}/>
          <button onClick={DownloadFile} className="installer-btn">Завершить</button>
        </div>
        <div className="installer-form">
          <Routes>
            <Route path="system" element={<BasicSettings />}></Route>
            <Route path="olia" element={<OLIA />}></Route>
            <Route path="olha" element={<OLHA />}></Route>
            <Route path="olta" element={<OLTA />}></Route>
            <Route path="parameters" element={<Parameters />}></Route>
          </Routes>
        </div>
      </div>
      
    </div>
  )
}