"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import createUser from "./createUser";

interface FormData {
  name: string;
  country: string;
  age: number;
  gender: string;
  email: string;
  phone: number;
  games: string;
  idols?: string;
  interested: string;
  state: string;
}

function page() {
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    country: "",
    age: 0,
    gender: "",
    email: "",
    phone: 0,
    games: "",
    idols: "",
    interested: "",
    state: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUser(
      formData.name,
      formData.country,
      formData.age,
      formData.gender,
      formData.email,
      formData.phone,
      formData.games,
      formData.idols || null,
      formData.interested,
      formData.state
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
   

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScs4Ureej_l3h1x4sFvV7SAlc8LGMV1PlGuNCQRK36KEirA1w/viewform?embedded=true"
        width="100%"
        height="2533"
      >
        Loading…
      </iframe> */}
        <h1 className="text-3xl font-semibold mb-4">Sign Up Form</h1>
        <form className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md" onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Name:</span>
              <input type="text" name="name" className="form-input mt-1 block w-full border-gray-300 rounded-md  focus:border-blue-500" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Country:</span>
              <input type="text" name="country" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Age:</span>
              <input type="number" name="age" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Gender:</span>
              <input type="text" name="gender" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

            <label>
              <span className="text-gray-700">State:</span>
              <input type="text" name="state" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Email:</span>
              <input type="email" name="email" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Phone:</span>
              <input type="tel" name="phone" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>
          </div>
          <div>
          <h2 className="text-xl font-semibold mb-2">Hobbies and Interests</h2>
            <label>
              <span className="text-gray-700">Games:</span>
              <input type="text" name="games" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

            <label>
              <span className="text-gray-700">Idols:</span>
              <input type="text" name="idols" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

            <label>
              <span className="text-gray-700">Interested:</span>
              <input type="text" name="interested" className="form-input mt-1 block w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </label>

          </div>


          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Sign Up</button>
        </form>

      </div>
      <Footer />
    </>
  );
}

export default page;
