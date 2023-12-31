import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import LoginScreen from "@/components/login";

const LoginPage = async () => {
  const session = await getServerSession();
  if (session) redirect("/");
  return <LoginScreen />;
};

export default LoginPage;
