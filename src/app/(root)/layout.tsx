import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const LayoutPages = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (!session || !session.user) redirect("/login");
  return (
    <>
      <Navbar />
      <main className="flex-1 dark text-foreground bg-background flex items-center justify-center">
        <div className="max-w-[75%] w-full">{children}</div>
      </main>
    </>
  );
};

export default LayoutPages;
