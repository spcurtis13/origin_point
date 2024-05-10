// // Next.js page for AdminDashboard
// import { getAuth } from "@clerk/nextjs/server";
// import { GetServerSideProps } from "next";
// import { redirect } from "next/navigation";
// import { checkRole } from "@/utils/roles"
// import { setRole } from "./actions";

// export default function AdminDashboard() {
//   return (
//     <>
//       <h1>This is the admin dashboard</h1>
//       <p>This page is restricted to users with the 'admin' role.</p>

//       <SearchUsers />
 
//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <div>
//               {user.firstName} {user.lastName}
//             </div>
//             <div>
//               {
//                 user.emailAddresses.find(
//                   (email) => email.id === user.primaryEmailAddressId
//                 )?.emailAddress
//               }
//             </div>
//             <div>{user.publicMetadata.role as string}</div>
//             <div>
//               <form action={setRole}>
//                 <input type="hidden" value={user.id} name="id" />
//                 <input type="hidden" value="admin" name="role" />
//                 <button type="submit">Make Admin</button>
//               </form>
//             </div>
//             <div>
//               <form action={setRole}>
//                 <input type="hidden" value={user.id} name="id" />
//                 <input type="hidden" value="moderator" name="role" />
//                 <button type="submit">Make Moderator</button>
//               </form>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { req, res } = context;

//   // Use getAuth with the request object to get the session claims
//   const auth = getAuth(req);

//   // If the user does not have the admin role, redirect them to the home page
//   if (auth.sessionClaims?.metadata.role !== "admin") {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false, // This means the redirection is not cached by the browser
//       },
//     };
//   }

//   // If the user is an admin, proceed to render the AdminDashboard page
//   return {
//     props: {}, // No props needed for the admin dashboard in this example
//   };
// };
