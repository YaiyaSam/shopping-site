import { useRef, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Card from "./components/card";

export default function Signup() {
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const roleInputElement = useRef();
  const navigate = useNavigate();
  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        email: emailInputElement.current?.value,
        password: passwordInputElement.current?.value,
        role: roleInputElement.current?.value,
      };
      const response = axios
        .post("http://localhost:8888/api/auth/create", data)
        .then((response) => {
    
          alert("Account created!");
          navigate("/login");
        });
    },
    []
  );

  return (
    <div className="flex h-screen bg-gray-500 w-screen items-center justify-center">
      <Card>
        <h1 className="text-3xl">Signup</h1>
        <form className="mt-4" onSubmit={formHandler()}>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={emailInputElement}
              id="email"
              placeholder="Email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={passwordInputElement}
              id="password"
              placeholder="Password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="password_confirmation"
            >
              Password Confirmation
            </label>
            <input
              ref={passwordConfirmationInputElement}
              id="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div> */}
          <div className="flex flex-col mb-4">
            <label
              className="text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Select user role
            </label>
            <select
              ref={roleInputElement}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
}
