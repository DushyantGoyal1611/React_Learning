import { useState } from 'react'
import './App.css'
import { useForm} from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName", {
          required: "First Name is required",
          minLength:{value:3, message:"Min Length atleast 3"},
          maxLength:{value:20, message:"Max Length atleast 20"}
        })}/>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label>Middle Name</label>
        <input {...register("middleName")}/>
      </div>
      <br/>
      <div>
        <label>Last Name</label>
        <input {...register("lastName", {required: "Last Name is required"})}/>
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting} value={isSubmitting? "Submitting" : "Submit"}/>
    </form>
  )
}

export default App
