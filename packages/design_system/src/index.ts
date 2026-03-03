export const hello = () => {
  return 'Hello world';
};

export { default as Button } from './_components/bouton';

// re-export components for consumers
export { Lien } from './_components/lien';
export { Header } from './_components/header';

