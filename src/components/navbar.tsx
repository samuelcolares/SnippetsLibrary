"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import avatar from "@/avatar.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [color, setColor] = useState<string>("default");
  const home = (
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
    </Breadcrumbs>
  );
  const newSnippet = (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem>New Snippet</BreadcrumbItem>
    </Breadcrumbs>
  );
  const viewSnippet = (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem>View Snippet</BreadcrumbItem>
    </Breadcrumbs>
  );
  const editSnippet = (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href={pathname.replace("/edit", "")}>
        View Snippet
      </BreadcrumbItem>
      <BreadcrumbItem>Edit Snippet</BreadcrumbItem>
    </Breadcrumbs>
  );
  const category = (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem>Categories</BreadcrumbItem>
    </Breadcrumbs>
  );
  function isUUID(input: string) {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(input);
  }
  const snippetBoolean =
    !pathname.startsWith("/category") && pathname.endsWith("/edit");

  const logOut = () => {
    signOut();
  };
  return (
    <header className="dark text-foreground bg-background">
      <nav className="xl:max-w-[75%] max-w-[95%] mb-20 mx-auto py-4 flex justify-between items-center">
        {pathname === "/" && home}
        {pathname === "/new" && newSnippet}
        {isUUID(pathname.replace("/", "")) && viewSnippet}
        {snippetBoolean && editSnippet}
        {pathname === "/category" && category}
        <span></span>
        <Popover
          placement="bottom-end"
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <PopoverTrigger>
            <Avatar
              src={avatar.src}
              size="md"
              radius="md"
              isBordered
              color={isOpen ? "secondary" : "default"}
              showFallback
              name="Sam"
            />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <Button className="text-small font-bold" onClick={logOut}>
                Log Out
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
};

export default Navbar;
