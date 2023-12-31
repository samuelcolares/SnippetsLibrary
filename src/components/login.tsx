"use client";
import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import logo from "@/logo.png";
import adobe from "@/adobe.jpeg";
// import Image from "next/image";
import NextImage from "next/image";
import avatar from "@/avatar.png";

import { Shadows_Into_Light } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import BG from "./anim/bg";

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
    "shadow-2xl",
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
  const action = async () => {
    // e: React.FormEvent<HTMLFormElement>
    // e.preventDefault();
    if (data.username && data.password) {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await signIn("credentials", {
          username: data.username,
          password: data.password,
          redirect: false,
        });
      } catch (error) {
        console.error("Erro de autenticação:", error);
      } finally {
        router.push("/");
        setLoading(false);
      }
    }
  };
  return (
    <div className="flex-1 dark eees  flex items-center justify-center overflow-hidden relative">
      <BG />
      <div className="w-96 h-[28rem] bg-[#F8F9FD]/95 rounded-xl relative z-20">
        <div className="w-[200px] h-[200px] mx-auto mt-[-75px] shadow-2xl">
          <Image
            as={NextImage}
            width={avatar.width}
            height={avatar.height}
            src={avatar.src}
            alt="NextUI hero Image"
            isBlurred
            className="object-cover"
          />
        </div>
        <h1
          className={cn(
            "text-black text-3xl uppercase text-center mt-10 mb-10",
            SIL.className
          )}
        >
          {/* {"Sam's personal library"} */}
          サムの個人ライブラリ
        </h1>
        <form
          action={action}
          className="flex items-center justify-center flex-col gap-4 w-[80%] mx-auto"
          // onSubmit={action}
        >
          <Input
            label="ユーザー名"
            size="sm"
            classNames={style}
            name="username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <Input
            label="パスワード"
            type="password"
            size="sm"
            name="password"
            classNames={style}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button className="w-full" type="submit" isLoading={loading}>
            ログイン
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
