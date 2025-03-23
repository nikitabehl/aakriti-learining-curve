'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Course", href: "#course" },
    // { label: "Teacher", href: "/teacher" },
    // { label: "How to use", href: "/how-to-use" },
    // { label: "About Us", href: "#about" }
  ];

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Aakriti Learning Curve</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
           {/* <Button variant="default">Sign up</Button>  */}
            <Button variant="outline"><a href="#contact_us">Log in</a> </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="block py-2 text-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
            <div className="space-y-2 pt-4">
              <Button className="w-full" variant="default">
                Sign up
              </Button>
            
              <Button className="w-full" variant="outline"><a href="#contact_us">Log in</a>
              </Button>
            
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
