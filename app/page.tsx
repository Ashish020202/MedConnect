import Link from "next/link";
import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
        <Image src="/assets/icons/logo-full.svg" height={1000} width={1000} alt="logo" className="mb-12 h-10 w-fit" />

        <PatientForm />

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left"> 
          © 2024 MedPlus
          </p>
          <Link href="/?admin=true" className="text-yellow-600">Admin</Link>
        </div>

        </div>  
      </section>
      <Image src="/assets/icons/doctorimg.png" 
      height={1000}
      width={700}
      className="side-img max-w-[50%]"
      alt="" />
        
    </div>
  );
}
