"use client";
import { Inputbox } from "../components/Inputbox";
import Link from "next/link";
import { useState } from "react";
import { Buttonsinginsignup } from "../components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Signup() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="border-2  bg-white text-center shadow-lg rounded-2xl py-20 max-w-lg w-full">
        <div className="font-roboto font-semibold  pb-10 text-4xl">
          Register yourself!
        </div>
        <div>
          <Inputbox
          className="px-6"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="john serrif"
            label="Name"
            type="text"
          />
        </div>
        <div>
          <Inputbox
           className="px-6"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            placeholder="999000444"
            type="text"
            label="Phone number"
          />
        </div>
        <div>
          <Inputbox
           className="px-6"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="testUser@gmail.com"
            label="Email"
            type="text"
          />
        </div>
        <div>
          <Inputbox
           className="px-6"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter you password"
            type="text"
            label="Password"
          />
        </div>
        <div className="pt-8 pb-2">
          <Buttonsinginsignup
            onClick={async () => {
              const user = await axios.post(
                "http://localhost:3000/api/auth/signup",
                {
                  phoneNumber,
                  password,
                  email,
                  name,
                }
              );
              const userData = user.data.msg;
              if (userData) {
                router.push("/signin");
              } else {
                alert("Error in creating user!");
              }
            }}
            content="Signup"
          />
        </div>
        <div className="font-afacad  ">
          Go back to -
          <Link className="pl-2 underline text-blue-700" href="/signin">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
