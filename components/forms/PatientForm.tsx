"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomForm from "../CustomForm"
import { UserFormValidation } from "@/lib/validation"
import { createUser } from "@/lib/actions/patient.actions"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { useRouter } from "next/navigation"

export enum FormFieldType{
  INPUT='input',
  TEXTAREA = 'textarea',
  PHONE_INPUT='phoneI nput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT='select',
  SKELETON ='skeleton' 
}

 

 
const PatientForm = () => {
  const router = useRouter();
  const [isLoading,setIsLoading]=useState(false);
  // pass this form as a props to customform 
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })
 
  
  async function onSubmit({name,email,phone}: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try{
      const userData = {name,email,phone};
      const user = await createUser(userData);
      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    }catch(error){

      console.log(error)

    }
    
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
      <section className="mb-12 space-y-4">
        <h1 className="header">Connect Us</h1>
        <p className="text-dark-700">Schedule your appointment</p>
      </section>

      <CustomForm 
        fieldType={FormFieldType.INPUT}
        control = {form.control}
        name = "name"
        label= "Full Name"
        placeholder = "Ashish"
        iconSrc= "/assets/icons/user.svg" 
      />

       <CustomForm 
        fieldType={FormFieldType.INPUT}
        control = {form.control}
        name = "email"
        label= "Email"
        placeholder = "ashish@gmail.com"
        iconSrc= "/assets/icons/email.svg" 
        iconAlt="email"
      />

       <CustomForm 
        fieldType={FormFieldType.PHONE_INPUT}
        control = {form.control}
        name = "phone"
        label= "Phone Number"
        placeholder = "1234567890"
        iconSrc= "/assets/icons/user.svg" 
      />

         
      
      <SubmitButton isLoading={isLoading}>Get Appointment</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm 
