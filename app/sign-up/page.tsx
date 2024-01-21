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
  games: string[];
  idols?: string;
  interested: string;
  state: string;
  [key: string]: string | number | string[] | null | undefined;
}

function page() {

  const [formData, setFormData] = useState<FormData>({
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
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      games: checked
        ? [...prevData.games, value]
        : prevData.games.filter((item) => item !== value),
    }));
  };

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
              <input type="text" name="name" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Country:</span>
              <input type="text" name="country" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Age:</span>
              <input type="number" name="age" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Gender:</span>
              <div className="mt-1">
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="MALE"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="gender"
                      value="FEMALE"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="gender"
                      value="OTHERS"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Others</span>
                  </label>
                </div>
              </div>
            </label>

            <label>
              <span className="text-gray-700">State:</span>
              <input type="text" name="state" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
            </label>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Email:</span>
              <input type="email" name="email" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Phone:</span>
              <input type="tel" name="phone" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
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
                      name="games"
                      value="Chess"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2">Chess</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="checkbox"
                      name="games"
                      value="Football"
                      className="form-checkbox h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2">Football</span>
                  </label>

                </div>
              </div>
            </label>

            <label>
              <span className="text-gray-700">Idols:</span>
              <input type="text" name="idols" className="form-input mt-1 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none" />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Interested:</span>
              <div className="mt-1">
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="interested"
                      value="YES"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleChange}
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      name="interested"
                      value="NO"
                      className="form-radio h-5 w-5 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none"
                      onChange={handleChange}
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
