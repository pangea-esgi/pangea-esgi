import '../styles/Bouton.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type BoutonProps = {
  text: string;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, icon, className, ...props }: BoutonProps) => {
  return (
    <button
      className={`btn ${className ?? ''}`.trim()}
      type="button"
      {...props}
    >
      <span className="btn-icon">{icon}</span>
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default Button;
