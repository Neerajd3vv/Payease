import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";



export default async function userCheck() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/home");
  }
  redirect("/landingPage");
}
