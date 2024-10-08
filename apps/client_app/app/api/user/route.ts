import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authoptions";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  try {
    if (session.user) {
      return NextResponse.json({ user: session.user });
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "You are not logged in!" },
      { status: 403 }
    );
  }
  return NextResponse.json({ msg: "You are not logged in!" }, { status: 403 });
}
