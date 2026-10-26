"use client";

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/etablissements", label: "Établissements" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Add event listener to close mobile menu on resize to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-primary-600">Aérovia Santé</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-500",
                pathname === item.href ? "text-primary-600" : "text-slate-600"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="ml-4">
            <Link href="/etablissements">Demander des services</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-slate-600 hover:text-primary-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 py-4 shadow-lg">
          <nav className="flex flex-col space-y-4 px-4 md:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block text-base font-medium transition-colors hover:text-primary-500",
                  pathname === item.href ? "text-primary-600" : "text-slate-600"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/etablissements" onClick={() => setIsOpen(false)}>
                  Demander des services
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
