import Datepicker from "react-tailwindcss-datepicker";
import LogoTBN from "../Images/LogoTBNpng.png";
import React, { useState } from "react";

const Register = () => {
    const [value, setValue] = useState({
        startDate:null,
        endDate: null
    });

    const handleValueChange = (newValue)=> {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

  return (
    <>
     <div class="flex flex-row">
            <div class="flex justify-center items-center w-5/12 bg-white">
                <img
                    src={LogoTBN}
                    alt="gambar"
                    className="w-6/12 "
                />
            </div>
            <div class="flex justify-center w-7/12 text-left " style={{backgroundColor:"#CAD32C"}}>
            <form class=" w-6/12 p-16 m-16 bg-white rounded-lg" >
                    <div class="mb-5">
                        <h1 class="text-center py-4">Register</h1>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="nama" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                        <input type="nama" id="nama" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Telepon</label>
                        <input type="tel" id="tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="Dom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domisili</label>
                        <input type="text" id="Domisili" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div class="mb-5">
                        <label for="Born" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir</label>
                        <div class="flex flex-row">
                        <Datepicker 
                            useRange={false}
                            asSingle={true}
                            value={value}
                            onChange={handleValueChange}
                            inputClassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            toggleClassName="absolute right-0 top-0 bg-blue-300 rounded-r-lg text-white h-full px-4 ml-8 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                            />
                        </div>

                    </div>
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <div class="flex justify-center">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    </>
  );
};

export default Register;
