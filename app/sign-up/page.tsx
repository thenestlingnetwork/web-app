"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import createUser from "./createUser";
import { useForm, Controller } from "react-hook-form"

interface FormData {
  name: string;
  country: string;
  age: number;
  gender: string;
  email: string;
  phone: number;
  games: string[];
  idols?: string;
  interested: string;
  state: string;
  }

function page() {

  const { register,getValues, handleSubmit, watch, formState: { errors }, control, setValue, } = useForm<FormData>({
    defaultValues: {
      name: "",
      country: "",
      age: 0,
      gender: "",
      email: "",
      phone: 0,
      games: [],
      idols: "",
      interested: "",
      state: "",
    },
  });

  const handleGamesChange = (value: string, isChecked: boolean) => {
    const curr = getValues("games")
    console.log(curr);
    if(isChecked){
      curr.push(value)
    }else{
      const index = curr.indexOf(value)
      curr.splice(index)

    }
    setValue("games",curr)
  };
  

  //const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const onSubmit = async (data:FormData) => {
    
    await createUser(
      data.name,
      data.country,
      data.age,
      data.gender,
      data.email,
      data.phone,
      data.games,
      data.idols || null,
      data.interested,
      data.state
    );
    
  };

  


  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 FZAZ">
        {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScs4Ureej_l3h1x4sFvV7SAlc8LGMV1PlGuNCQRK36KEirA1w/viewform?embedded=true"
        width="100%"
        height="2533"
      >
        Loading…
      </iframe> */}
        <h1 className="text-3xl font-semibold mb-4">Sign Up Form</h1>
        <form className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Name:</span>
              <input 
                type="text"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
                {...register("name")}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Country:</span>
              <input 
                type="text" 
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
                {...register("country")}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Age:</span>
              <input 
                type="number" 
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
                {...register("age")}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Gender:</span>
              <div className="mt-1">
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="MALE"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      {...register("gender")}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      value="FEMALE"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      {...register("gender")}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      value="OTHERS"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      {...register("gender")}
                    />
                    <span className="ml-2">Others</span>
                  </label>
                </div>
              </div>
            </label>

            <label>
              <span className="text-gray-700">State:</span>
              <input 
                type="text"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
                {...register("state")}
              />
            </label>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Email:</span>
              <input 
              type="email"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
              {...register("email")}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Phone:</span>
              <input 
                type="tel" 
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
                {...register("phone")}
              />
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Hobbies and Interests</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Games:</span>
              <div className="mt-1">
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("Counter-Strike", e.target.checked)}
                    />
                    <span className="ml-2">Counter-Strike</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("Dota2", e.target.checked)}
                    />
                    <span className="ml-2">Dota 2</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("FIFA", e.target.checked)}
                    />
                    <span className="ml-2">FIFA</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("PUBGM/BGMI", e.target.checked)}
                    />
                    <span className="ml-2">PUBGM/BGMI</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("Valorant", e.target.checked)}
                    />
                    <span className="ml-2">Valorant</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("RealCricket", e.target.checked)}
                    />
                    <span className="ml-2">RealCricket</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("Mobile Legends", e.target.checked)}
                    />
                    <span className="ml-2">Mobile Legends</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={(e) => handleGamesChange("Others", e.target.checked)}
                    />
                    <span className="ml-2">Others</span>
                  </label>

                </div>
              </div>
            </label>

            <label>
              <span className="text-gray-700">Idols:</span>
              <input 
                type="text" 
                className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" 
                {...register("idols")}  
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Interested:</span>
              <div className="mt-1">
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="YES"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      {...register("interested")}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      value="NO"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      {...register("interested")}
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
            </label>
            

          </div>


          <button type="submit" className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</button>
        </form>

      </div>
      <Footer />
    </>
  );
}

export default page;
