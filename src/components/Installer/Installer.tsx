import "./Installer.css"
import { Link } from "react-router-dom";

export default function Installer (){
  return(
    <div className='installer-container'>
      <div className='installer-options'>
        <Link to={"home"}>Базовые настройки</Link>
        {/* <button onClick={() => setContent(<p>Не работает</p>)}>OLIA</button>
        <button onClick={() => setContent(<p>Не работает</p>)}>OLHA</button>
        <button onClick={() => setContent(<p>Не работает</p>)}>OLTA</button>
        <button onClick={() => setContent(<Parameters />)}>Параметры</button> */}

        <button>Получить сборщик</button>
      </div>
      <div className="installer-content">
        
      </div>
    </div>
  )
}