import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  secret : process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({    
      async authorize(credentials) {
        const data = { "email": credentials.username,
        "password": credentials.password }
        if(credentials.email === "demo@gmail.com" && credentials.password === "12345678"){
          return {name:"Demo"}
        }
        else{
            throw new Error('Enter Valid Details');
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },
 callbacks : {
  async redirect(){
    return '/dashboard'
  },
  async jwt({token, user,account, profile}) {
    return token;
  },
  async session({ session,token}) {
    return session;
  }
},
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
  }
})