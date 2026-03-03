import React from 'react';
import './lien.css';

// Lien de redirection avec style de base défini dans un fichier CSS. La couleur
// est récupérée depuis la variable CSS `--link-color`; si elle n'est pas définie
// la teinte par défaut (#ffce99) est utilisée.

// Propriétés exposées pour personnalisation externe (className) ou href/children
// classiques.

type LienProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const Lien: React.FC<LienProps> = ({ href, children, className }) => {
  const combinedClass = ['pangea-lien', className].filter(Boolean).join(' ');

  return (
    <a href={href} className={combinedClass}>
      {children}
    </a>
  );
};

export default Lien;
