import increase from "./images/increase.png";
import Image from "next/image";
import { AppbarClient } from "./components/AppbarClient";
export default function LanPage() {
  return (
    <div>
<AppbarClient/>
      <main className="min-h-screen min-w-screen">
        <section className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-Myblue  lg:pl-36">
            <div className=" text-white py-60  text-center content-center">
              <div className="text-7xl font-afacad font-extrabold pb-4">
                "Simplify Your Finances with PayEase"
              </div>
              <div className="font-montserrat  text-xl">
                Effortlessly manage, add, and track your funds. Welcome to a
                smarter way to handle your money.
              </div>
            </div>
            <div className=" text-center content-center">
              <Image className="w-100  lg:pl-20" src={increase} alt="finance" />
            </div>
          </div>
        </section>
        <section className="bg-slate-100 py-40 px-14 text-center border-b-2">
          <div className=" text-5xl font-bold mb-12  font-afacad">How it work's</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div>
              <div className="font-montserrat font-bold">Step 1.</div>

<div className="font-afacad text-slate-600 text-xl">Signup for an account.</div>
            </div>
            <div>
              <div className="font-montserrat font-bold">Step 2.</div>
              <div className="font-afacad text-xl text-slate-600 ">Add money to wallet from your bank</div>
            </div>
            <div>
              <div className="font-montserrat font-bold">Step 3.</div>
              <div className="font-afacad text-slate-600text-slate-600 text-xl">Make payments effortlessly</div>
            </div>
          </div>
        </section>
        <section className="bg-slate-200 py-40 px-14 ">
          <h3 className="text-5xl font-bold mb-12  font-afacad  text-center">
            What Our Users Say's
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-8 ">
            <div className="bg-white text-black p-10 rounded-2xl">
              <div className="font-gelasio text-lg">
                "This app has changed the way I manage my money. It's so easy to
                use!"
              </div>
              <div className="pt-2 font-afacad text-md font-bold">
                -Raghuvansh singh
              </div>
            </div>
            <div className="bg-white text-black   p-10 rounded-2xl">
              <div>
                <div className="font-gelasio text-lg">
                  "I love the security features. I feel safe using this app."
                </div>
                <div className="pt-2 font-afacad text-md font-bold">
                  -Surya pratap
                </div>
              </div>
            </div>
            <div className="bg-white text-black   p-10 rounded-2xl">
              <div>
                <div className="font-gelasio text-lg">
                  "The customer support is fantastic. They helped me with all my
                  issues."
                </div>
                <div className="pt-2 font-afacad text-md font-bold">
                  -Abhishek rahore
                </div>
              </div>
            </div>
          </div>

        </section>
       <section className="py-20 bg-Myblue text-white text-center">
        <div>
          <div className="font-afacad text-4xl mb-8 font-bold">Ready to Simplify your payments?</div>
          
        </div>
        <button className="border-2 font-montserrat font-bold rounded-xl px-6 py-2 bg-white text-Myblue">Get started</button>
       </section>
      </main>
      <footer className="bg-MainBlack text-white py-4 text-center">
        <div>
          <div className="pb-2 font-montserrat">&copy; 2024 PayEase. All rights reserved</div>
        </div>
        <div className="">Developed by <a className="underline" href="https://x.com/NeerajbhattW">Neeraj Bhatt</a> </div>
      </footer>
    </div>
  );
}
