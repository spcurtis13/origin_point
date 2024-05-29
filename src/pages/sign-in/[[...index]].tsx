import { SignIn } from "@clerk/nextjs";

//This is just a help page for sign-in should not really be used
 
const SignInPage = () => (
  <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
);
 
export default SignInPage;