import React from "react";
import { Lien } from "../atoms/Lien.tsx";
import "../../styles/Header.css";
import "../../styles/Lien.css";
import { Logo } from "../atoms/Logo.tsx";

export type HeaderProps = {
  href: string;
  links?: { href: string; label: string }[];
};

export const Header: React.FC<HeaderProps> = ({
  links = [
    { href: "#", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "#", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
}) => {
  const before = links.slice(0, 2);
  const after = links.slice(2);

  return (
    <header className="pangea-header">
      <nav className="pangea-header-nav left">
        {before.map((l, idx) => (
          <Lien key={idx} href={l.href} className="pangea-header-nav-link">
            {l.label}
          </Lien>
        ))}
      </nav>

      <Logo />

      <nav className="pangea-header-nav right">
        {after.map((l, idx) => (
          <Lien key={idx} href={l.href} className="pangea-header-nav-link">
            {l.label}
          </Lien>
        ))}
      </nav>
    </header>
  );
};

export default Header;
