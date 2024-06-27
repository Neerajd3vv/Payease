import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          type: "text",
          placeholder: " 9990876847 ",
          label: "Phone number",
        },
        password: { type: "text", label: "Password" },
      },

      async authorize(credentials: any) {
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await client.user.findFirst({
          where: {
            phoneNumber: credentials.number,
          },
        });
        
      },
    }),
  ],
};
