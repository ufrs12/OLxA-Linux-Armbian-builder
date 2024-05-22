import { Controller, useForm } from "react-hook-form"
import "./Parameters.css"
import { build } from "../Installer/Installer";
import React, { useState } from "react";

interface LanFormInput {
  lanipchange: boolean;
  lannchange: boolean;
  landefn: string;
  lanip: string;
  lansubnet: string;
  langate: string;
}

export default function Parameters () {
  const [isInputsEnabled, setIsInputsEnabled] = useState(build.lanipchange);

  const { control, watch, setValue } = useForm<LanFormInput>({
    defaultValues: {
      lanipchange: build.lanipchange,
      lannchange: build.lannchange,
      landefn: build.landefn,
      lanip: build.lanip,
      lansubnet: build.lansubnet,
      langate: build.langate
  }});

  build.lanipchange = watch('lanipchange');
  build.lannchange = watch('lannchange');
  build.landefn = watch('landefn');
  build.lanip = watch('lanip');
  build.lansubnet = watch('lansubnet');  
  build.langate = watch('langate');  

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    field: any
  ) => {
    // const input = e.target;
    // const parts = input.value.split('.'); 
    // let formattedValue = "";

    // formattedValue = parts[1];
    // if (parts[1].length > 3) {
    //   parts[2] = parts[1].substring(3)
    //   formattedValue = parts[1].substring(0, 3) + "." + parts[i+1]
    // } 

    // console.log(formattedValue);
    // console.log(parts);

    // if (parts.length > 4) {
    //   return; // Не более 4 частей
    // }
    setValue(field.name, e.target.value); // Обновляем состояние формы
    field.onChange(e.target.value); // Обновляем поле с отформатированным значением
  };

  // const InputMask: React.FC <(
  //   { field: string[] }
  // )> = ({ field }) => {
  //   return(
  //     <input 
  //       {...field}
  //       type="text" 
  //       onChange={(e) => ( 
  //         handleInputChange(e, field)
  //       )} 
  //     />
  //   )}
  // }


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
        <Controller
          name={'lanip'}
          control={control}
          render={({ field }) => (
            <input 
              {...field}
              type="text"
              disabled={!build.lanipchange}
              onChange={(e) => ( 
                handleInputChange(e, field)
              )} 
            />
          )}
        />
        <Controller 
          name={'lansubnet'}
          control={control}
          render={({ field }) => (
            <input 
              {...field}
              type="text" 
              disabled={!build.lanipchange}
              onChange={(e) => ( 
                handleInputChange(e, field)
              )} 
            />
          )}
        />
        <Controller 
          name={'langate'}
          control={control}
          render={({ field }) => (
            <input 
              {...field}
              type="text" 
              disabled={!build.lanipchange}
              onChange={(e) => ( 
                handleInputChange(e, field)
              )} 
            />
          )}
        />
      </section>
      <section>
        <label>
          Включить/Выключить ввод:
          <input
            type="checkbox"
            checked={build.lannchange}
            onChange={(e) => {
              build.lannchange = e.target.checked
              setValue('lannchange', e.target.checked)
            }}
          />
        </label>
        <Controller 
          name="landefn"
          control={control}
          render={({ field }) => (<input type="text" disabled={!build.lannchange} {...field}/>)}
        />
      </section>
    </form>
  )
}