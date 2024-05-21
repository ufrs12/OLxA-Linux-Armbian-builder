import { Controller, useForm } from "react-hook-form"
import "./Parameters.css"
import { build } from "../Installer/Installer";

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
    field: any
  ) => {
    const input = e.target;
    const inputNumbersValue = input.value.replace(/\D/g, '');
    let formattedInputValue = "";

    formattedInputValue += inputNumbersValue.substring(0, 3);
    if (inputNumbersValue.length > 3){
      formattedInputValue += "." + inputNumbersValue.substring(3,6);
    }
    if (inputNumbersValue.length > 6){
      formattedInputValue += "." + inputNumbersValue.substring(6,7);
    }
    if (inputNumbersValue.length > 7){
      formattedInputValue += "." + inputNumbersValue.substring(7,8);
    }

    e.target.value = formattedInputValue;
    field.onChange(e.target.value);
    setValue(field.name, e.target.value);
  }

  return(
    <form>
      <Controller 
        name="lanip"
        control={control}
        render={({ field }) => (
          <input 
            type="text" 
            placeholder={field.value} 
            maxLength={11} 
            onChange={(e) => handleInputChange(e, field)} 
          />
        )}
      />
      <Controller 
        name="lansubnet"
        control={control}
        render={({ field }) => (
          <input 
            type="text" 
            placeholder={field.value} 
            maxLength={13} 
            onChange={(e) => {
              field.onChange(e);
              setValue("lansubnet", e.target.value);
            }}
            // onChange={(e) => handleInputChange(e, field)} 
          />
        )}
      />
      <Controller 
        name="langate"
        control={control}
        render={({ field }) => (
          <input 
            type="text" 
            placeholder={field.value} 
            maxLength={11} 
            onChange={(e) => handleInputChange(e, field)} 
          />
        )}
      />
    </form>
  )
}