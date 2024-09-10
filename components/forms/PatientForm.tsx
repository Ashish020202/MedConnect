"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomForm from "../CustomForm"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

export enum FormFieldType{
  INPUT='input',
  TEXTAREA = 'textarea',
  PHONE_INPUT='phoneI nput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT='select',
  SKELETON ='skeleton' 
}

 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {
  const [isLoading,setIsLoading]=useState(false);
  // pass this form as a props to customform 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
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
