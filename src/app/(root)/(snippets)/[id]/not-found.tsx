import Link from "next/link";
import React from "react";

const NotFoundViewPage = () => {
  return (
    <div className="flex justify-center flex-col gap-3 items-center">
      <h2 className="text-4xl">Snippet Not Found</h2>
      <Link href={"/"} className="border-b">Return</Link>
    </div>
  );
};

export default NotFoundViewPage;
