import "./OLIA.css"

import { useForm } from "react-hook-form";
import { build } from "../Installer/Installer";
import "./OLIA.css";
// import zabbix from "../../assets/zabbix.svg"
// import webmin from "../../assets/webmin.svg"

interface OLIAFormInput{
  scada: boolean,
  plc: boolean
}

export default function OLIA (){
  const { watch, setValue } = useForm<OLIAFormInput>({
    defaultValues: {
      scada: build.olia.scada,
      plc: build.olia.plc
  }});

  build.olia.scada = watch('scada');
  build.olia.plc = watch('plc');

  return(
    <>
      <form>
        <section>
          <label>
            scada:
            <input
              type="checkbox"
              checked={build.olia.scada}
              onChange={(e) => {
                build.olia.scada = e.target.checked
                setValue('scada', e.target.checked)
              }}
            />
          </label>
          <label>
            plc:
            <input
              type="checkbox"
              checked={build.olia.plc}
              onChange={(e) => {
                build.olia.plc = e.target.checked
                setValue('plc', e.target.checked)
              }}
            />
          </label>
        </section>
      </form>
    </>
  )
}