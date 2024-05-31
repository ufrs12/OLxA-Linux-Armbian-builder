import "./Parameters.css"
import { Controller, useForm } from "react-hook-form"
import { build } from "../Installer/Installer";
import React, { useCallback } from "react";

interface LanFormInput {
  lanipchange: boolean;
  lannchange: boolean;
  lanip: string;
  lansubnet: string;
  langate: string;
}

export default function Parameters () {
  const { control, watch, setValue } = useForm<LanFormInput>({
    defaultValues: {
      lanipchange: build.lanipchange,
      lannchange: build.lannchange,
      lanip: build.lanip,
      lansubnet: build.lansubnet,
      langate: build.langate
  }});

  build.lanipchange = watch('lanipchange');
  build.lannchange = watch('lannchange');
  build.lanip = watch('lanip');
  build.lansubnet = watch('lansubnet');  
  build.langate = watch('langate');  

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    field: any
  ) => {
    const input = e.target;
    let formattedValue = input.value;
    const parts = formattedValue.split(".");
    
    if (input.value === "." || (input.value.at(-1) === "." && input.value.at(-2) === ".")) return;
    if (/[^0-9.]/.test(input.value)) return
    if (parts.length === 4 && parts[3].length > 3) return
    if (parts.length > 4) return

    if (parts.length < 4){
      formattedValue = formattedValue.replace(/(\d{3})(?=\d)/g, "$1.");
    }
    
    setValue(field.name, formattedValue);
    field.onChange(formattedValue);
  };

  const InputMask: React.FC <(
    { name: string }
  )> = useCallback(({ name }) => {
    return(
      <Controller
        name={name as "lanip" | "lansubnet" | "langate"}
        control={control}
        render={({ field }) => (
          <input 
            {...field}
            type="text" 
            value={field.value}
            disabled={!build.lanipchange}
            onChange={(e) => (handleInputChange(e, field))}
          />
        )}
      />
    )},[])

  return(
    <form>
      <section>
        <label>
          Включить/Выключить ввод:
          <input
            type="checkbox"
            checked={build.lanipchange}
            onChange={(e) => {
              build.lanipchange = e.target.checked
              setValue('lanipchange', e.target.checked)
            }}
          />
        </label>
        <InputMask name="lanip"/>
        <InputMask name="lansubnet"/>
        <InputMask name="langate"/>
      </section>
    </form>
  )
}