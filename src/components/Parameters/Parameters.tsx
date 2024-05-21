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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    field: any,
    mask: string
  ) => {
    const input = e.target;
    const inputNumbersValue = input.value.replace(/\D/g, '');
    let formattedInputValue = "";

    formattedInputValue += inputNumbersValue.substring(0, 3);
    if (inputNumbersValue.length > 3){
      formattedInputValue += "." + inputNumbersValue.substring(3,6);
    }
    if (mask === "xxx.xxx.x.x"){
      if (inputNumbersValue.length > 6){
        formattedInputValue += "." + inputNumbersValue.substring(6,7);
      } if (inputNumbersValue.length > 7){
        formattedInputValue += "." + inputNumbersValue.substring(7,8);
      }
    } else if (mask === "xxx.xxx.xxx.x"){
      if (inputNumbersValue.length > 6){
        formattedInputValue += "." + inputNumbersValue.substring(6,9);
      } if (inputNumbersValue.length > 9){
        formattedInputValue += "." + inputNumbersValue.substring(9,10);
      }
    }

    e.target.value = formattedInputValue;
    
    if ((inputNumbersValue.length === 8 && mask === "xxx.xxx.x.x") || (inputNumbersValue.length === 10 && mask === "xxx.xxx.xxx.x")){
      field.onChange(e.target.value);
      setValue(field.name, e.target.value);
    }
  }

  const InputMask: React.FC <(
    { name: string; mask: string }
  )> = ({ name, mask }) => {
    return(
      <Controller 
        name={name as 'lanip' | 'lansubnet' | 'langate'}
        control={control}
        render={({ field }) => (
          <input 
            type="text" 
            placeholder={field.value} 
            defaultValue={field.value}
            maxLength={mask.length} 
            onChange={(e) => handleInputChange(e, field, mask)} 
          />
        )}
      />
    )
  }

  const fields = [
    { name: "lanip", mask: "xxx.xxx.x.x" },
    { name: "lansubnet", mask: "xxx.xxx.xxx.x" },
    { name: "langate", mask: "xxx.xxx.x.x" }
  ]

  return(
    <form>
      {fields.map((field) => (
        <InputMask key={field.name} name={field.name} mask={field.mask} />
      ))}
    </form>
  )
}