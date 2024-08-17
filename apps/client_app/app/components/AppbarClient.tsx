"use client";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
export function AppbarClient() {
  const session = useSession();
  return (
    <div>
      
      <Appbar 
       
        onSignin={signIn}
        onSignout={async () => {
          await signOut({callbackUrl:"http://ec2-13-233-113-132.ap-south-1.compute.amazonaws.com:3005"});
          
        }}
        user={session.data?.user}
      />
    </div>
  );
}
