"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import logo from "../images/logo.png"

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Timeline", href: "/#timeline" },
  { title: "Rules", href: "/#rules" },
  { title: "Sponsors", href: "/#sponsors" },
  { title: "Register", href: "/register" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur-lg border-gray-800">
      <div className="flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block px-6">
              <Image
                  src={logo}
                  alt="Hack Wars Logo"
                  width={40}
                  height={40}
                  className="w-auto h-8"
                /></span>
          </Link>
          <div className="flex-1"></div>
        <div className="mr-4 hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className="link-75"
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-2 text-base bg-transparent md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0 bg-transparent backdrop-blur-lg text-white">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold">HackWars 2025</span>
            </Link>
            <Separator className="my-4" />
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className=" hover:text-[#00a9dc] block px-2 py-1 text-lg"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        {/* <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            You can add a search input or other elements here
          </div>
          <nav className="flex items-center">
            You can add user menu or other navigation items here
          </nav>
        </div> */}
      </div>
    </nav>
  )
}

