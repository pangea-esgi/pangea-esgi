import React from 'react';
import '../styles/lien.css';

// Lien de redirection avec style de base défini dans lien.CSS. 

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
