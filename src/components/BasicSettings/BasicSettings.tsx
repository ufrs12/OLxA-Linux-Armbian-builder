import "./BasicSettings.css"

// interface MyForm{
//   board: string,
//   core: string
//   apps: string[]
// }

export default function BasicSettings (){
  function a (value: string){console.log(1, value)}
  return(
    <div className="basic-settings">
      <form action="">
        <label htmlFor="">
          <p>Плата:</p>
          <select name="" id="">
            <option value="">1.1</option>
            <option value="">1.2</option>
          </select>
        </label>
        <label htmlFor="">
          <p>Версия ядра:</p>
          <select onChange={() => a}>
            <option value="1">2.1</option>
            <option value="2">2.2</option>
          </select>
        </label>
      </form>
    </div>
  )
}