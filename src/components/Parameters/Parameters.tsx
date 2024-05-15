import { useState } from "react"
import "./Parameters.css"

export default function Parameters () {
  const [click, setClick] = useState(1)
  return(
    <div>
      <button onClick={() => setClick(click + 1)}>{click}</button>
      <input type="text" />
    </div>
    
  )
}