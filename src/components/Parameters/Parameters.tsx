import { Controller, useForm } from "react-hook-form"
import "./Parameters.css"
import { build } from "../Installer/Installer";
import React from "react";

interface LanFormInput {
  lanip: string;
  lansubnet: string;
  langate: string;
}

export default function Parameters () {
  const { control, watch, setValue } = useForm<LanFormInput>({
    defaultValues: {
      lanip: build.lanip,
      lansubnet: build.lansubnet,
      langate: build.langate
  }});

  build.lanip = watch('lanip');
  build.lansubnet = watch('lansubnet');  
  build.langate = watch('langate');  

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>, 
  //   field: any
  // ) => {
  //   // const input = e.target;
  //   // const parts = input.value.split('.'); // Ограничиваем длину каждой части до 3 цифр
  //   // if (parts.length > 4) {return}; // Не более 4 частей
  //   // const numbers = parts.map(part => {
  //   //   const num = parseInt(part, 10);
  //   //   return isNaN(num) ? 0 : num > 255 ? 255 : num; 
  //   // });

  //   field.onChange(e.target.value);
  //   setValue(field.name, e.target.value);
  //   console.log(field.name);
  // }

  const InputMask: React.FC <(
    { name: string }
  )> = ({ name }) => {
    return(
      <Controller 
        name={name as 'lanip' | 'lansubnet' | 'langate'}
        control={control}
        render={({ field }) => (
          <input 
            {...field}
            type="text" 
            onChange={(e) => {
              field.onChange(e);
              setValue(name as 'lanip' | 'lansubnet' | 'langate', e.target.value);
            }} 
          />
        )}
      />
    )
  }

  const fields = [
    { name: "lanip" },
    { name: "lansubnet" },
    { name: "langate" }
  ]

  return(
    <form>
      {fields.map((field) => (
        <InputMask key={field.name} name={field.name} />
      ))}
    </form>
  )
}