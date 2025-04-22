// import { NextResponse } from "next/server";
// import util from 'util'
// import db from '../../../../../utils/db';
// import NextAuth from "next-auth";
// import CredentialsProvider from 'next-auth/providers/credentials';

// const query = util.promisify(db.query).bind(db);

// export const authOptions = {
//     session:{
//         strategy:"jwt"
//     },
//     providers: [
//         CredentialsProvider({
//             async authorizer(credentials){
//                 if(!credentials?.email || !credentials?.password)
//                     return null
//             }
//             let user = await query("SELECT * FROM users WHERE email = `${credentials.email}");
//             user = user[0];

//             if(!user){
//                 return null;
//             }
//             if (user.password){
//                 return user.password === credentials.password?user:null;
//             }
//         })
//     ],
//     secret:"jwt_secret"
// }

// const handler = NextAuth(authOptions);
// export {handler as GET, handler as POST}