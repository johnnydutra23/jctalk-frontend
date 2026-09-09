import { SignInPage } from "@/components/Pages/SingIn";
import { Metadata } from "next";

export const  metadata: Metadata = {
  title: "Login",
};

const SignIn = () => <SignInPage />;

export default SignIn;
