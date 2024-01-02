import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import Navbar from "@/components/navbar";

const LayoutPages = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  if (!session || !session.user) redirect("/login");
  return (
    <>
      <Navbar />
      <main className="flex-1 dark text-foreground bg-background flex items-center justify-center">
        <div className="xl:max-w-[75%] max-w-[95%] w-full">{children}</div>
      </main>
    </>
  );
};

export default LayoutPages;
