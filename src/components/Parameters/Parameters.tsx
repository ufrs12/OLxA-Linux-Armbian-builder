import { Controller, useForm } from "react-hook-form"
import InputMask from "react-input-mask";
import "./Parameters.css"

export default function Parameters () {
  const { handleSubmit, reset, setValue, control } = useForm({ });

  return(
    <form>
      <Controller 
        name="parameters"
        control={control}
        render={({ field }) => (
          <InputMask>
          
          </InputMask>
        )}
      />
    </form>
  )
}