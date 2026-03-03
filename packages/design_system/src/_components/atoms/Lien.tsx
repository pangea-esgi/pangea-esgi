import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../../styles/Lien.css';

// Lien de redirection avec style de base défini dans lien.CSS.

type LienProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const Lien: React.FC<LienProps> = ({ href, children, className }) => {
  const combinedClass = ['pangea-lien', className].filter(Boolean).join(' ');

  return (
    <RouterLink to={href} className={combinedClass}>
      {children}
    </RouterLink>
  );
};

export default Lien;
