import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import type { Session, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("⛔ Erreur: Email ou mot de passe manquant");
          return null;
        }

        try {
          const response = await fetch("http://localhost:3003/gateway/login?service=authService&module=auth",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
    
          const user = await response.json();

          if (!user || !user.token) {
            throw new Error("Invalid credentials");
          }
          return {
            id: user.id ?? user.email,
            token: user.token,
            email: user.email,
          } as User;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).token = token.token;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login", // Optionnel : Page personnalisée pour la connexion
  },

  secret: process.env.NEXTAUTH_SECRET, // Assure-toi d'avoir un secret défini dans `.env.local`
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
