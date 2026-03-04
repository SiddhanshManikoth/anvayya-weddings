import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-main.png";

const navLinks = [
{ label: "Home", href: "#hero" },
{ label: "About", href: "#about" },
{ label: "Services", href: "#services" },
{ label: "How It Works", href: "#how-it-works" },
{ label: "Why Us", href: "#why-us" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <img alt="Anvayya" className="h-20 w-auto object-fill" src={logo} />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-none hover:bg-primary/90 transition-colors">
          
          Start Planning
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden bg-background border-b border-border px-4 pb-6">
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) =>
          <li key={link.href}>
                <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
              
                  {link.label}
                </a>
              </li>
          )}
            <li>
              <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex px-6 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase">
              
                Start Planning
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;