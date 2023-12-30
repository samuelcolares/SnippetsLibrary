import LoginScreen from "@/components/login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = async () => {
  const session = await getServerSession();
  if (session) redirect("/");
  return <LoginScreen />;
};

export default LoginPage;
