import { useForm } from "react-hook-form";
import { build } from "../Installer/Installer";
import "./OLxA.css";
import zabbix from "../../assets/zabbix.svg"
import webmin from "../../assets/webmin.svg"

interface OLxAFormInput{
  zabbix: boolean,
  webmin: boolean
}

export default function OLxA (){
  const { watch, setValue } = useForm<OLxAFormInput>({
    defaultValues: {
      zabbix: build.olxa.zabbix,
      webmin: build.olxa.webmin
  }});

  build.olxa.zabbix = watch('zabbix');
  build.olxa.webmin = watch('webmin');

  return(
    <form>
      <section>
        <label>
          zabbix:
          <input
            type="checkbox"
            checked={build.olxa.zabbix}
            onChange={(e) => {
              build.olxa.zabbix = e.target.checked
              setValue('zabbix', e.target.checked)
            }}
          />
        </label>
        <label>
          webmin:
          <input
            type="checkbox"
            checked={build.olxa.webmin}
            onChange={(e) => {
              build.olxa.webmin = e.target.checked
              setValue('webmin', e.target.checked)
            }}
          />
        </label>
      </section>
    </form>
  )
}