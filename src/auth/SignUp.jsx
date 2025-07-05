import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div class="bg-sky-100 flex flex-row-reverse justify-center items-center h-screen font-pop">
      <div class="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder Image"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 class="text-2xl font-semibold mb-4">Create a new account</h1>
        <form action="#" method="POST">
          <div class="mb-4 bg-sky-100">
            <label for="name" class="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full border border-gray-300 rounded-md py-2 px-3
           focus:outline-none focus:border-blue-500"
              placeholder="e.g. Ajita Dubey"
              autocomplete="off"
            />
          </div>
          <div class="mb-4 bg-sky-100">
            <label for="username" class="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full border border-gray-300 rounded-md py-2 px-3
           focus:outline-none focus:border-blue-500"
              placeholder="e.g. ajita-dubey"
              autocomplete="off"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3
           focus:outline-none focus:border-blue-500"
              placeholder="e.g. grbj9ax3@567"
              autocomplete="off"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-800">
              {" "}
              Confirm password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full border border-gray-300 rounded-md py-2 px-3
           focus:outline-none focus:border-blue-500"
              placeholder="e.g. grbj9ax3@567"
              autocomplete="off"
            />
          </div>
          <button
            type="submit"
            class="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Sign Up
          </button>
        </form>

        <div class="mt-3 flex  text-center">
          <span>Already have a account ?</span>
          <Link to="/signin" class="hover:underline text-blue-500 pl-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
