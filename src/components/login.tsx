"use client";
import React, { useState } from "react";
import logo from "@/logo.png";
import Image from "next/image";

import { Shadows_Into_Light } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SIL = Shadows_Into_Light({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const style = {
  label: "text-black/50 dark:text-white/90",
  input: [
    "bg-transparent",
    "text-black/90 dark:text-white/90",
    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
  ],
  innerWrapper: "bg-transparent",
  inputWrapper: [
    "shadow-xl",
    "bg-default-200/50",
    "dark:bg-default/60",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-default-200/70",
    "dark:hover:bg-default/70",
    "group-data-[focused=true]:bg-default-200/50",
    "dark:group-data-[focused=true]:bg-default/60",
    "!cursor-text",
  ],
};

const LoginScreen = () => {
  const [data, setData] = useState<Record<"username" | "password", string>>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  // const [color]
  const router = useRouter();
  const action = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.username && data.password) {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await signIn("credentials", {
          username: data.username,
          password: data.password,
          redirect: false,
        });
        router.push("/");
      } catch (error) {
        console.error("Erro de autenticação:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="flex-1 dark bg-background border-4 border-[] flex">
      <div className="flex-1 flex items-center justify-center flex-col gap-8">
        <div className="w-[250px] h-[250px]">
          <Image
            src={logo}
            alt="logo"
            width={logo.width}
            height={logo.height}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className={cn("text-white text-4xl uppercase", SIL.className)}>
          {"Sam's personal library"}
        </h1>
      </div>
      <div className="bg-white flex-1 rounded-3xl rounded-r-none flex items-center justify-center">
        <form
          // action={action}
          className="flex items-center justify-center flex-col gap-4"
          onSubmit={action}
        >
          <h2 className={cn("text-4xl uppercase", SIL.className)}>Login</h2>
          <Input
            label="Username"
            size="sm"
            classNames={style}
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            size="sm"
            name="password"
            // variant="underlined"
            classNames={style}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {/* <label htmlFor="username">Username</label>
          <input
            // label="Username"
            // size="sm"
            // classNames={style}
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          /> */}
          <Button className="w-full" type="submit" isLoading={loading}>
            Enter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
