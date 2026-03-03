import { MenuCard } from '@pangea-esgi/design_system/src';
import '../assets/styles/Menu.css';

type Dish = {
  title: string;
  price: string;
  badges: string[];
  ingredients: string;
  description: string;
  imageUrl: string;
};

type MenuSection = {
  title: string;
  dishes: Dish[];
};

const exampleImage =
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80';

const sections: MenuSection[] = [
  {
    title: 'Entrées',
    dishes: [
      {
        title: 'Boeuf, butternut.',
        price: '25€',
        badges: ['boeuf', 'butternut', 'plats'],
        ingredients: 'Boeuf, butternut.',
        description:
          'Lamelle de boeuf, accompagnée d’une mousse de courge butternut.',
        imageUrl: exampleImage,
      },
      {
        title: 'Tartare fumé.',
        price: '21€',
        badges: ['boeuf', 'fumé', 'olive'],
        ingredients: 'Boeuf fumé, huile d’olive.',
        description: 'Tartare de boeuf fumé aux herbes fraîches.',
        imageUrl: exampleImage,
      },
      {
        title: 'Velouté d’hiver.',
        price: '18€',
        badges: ['courge', 'crème', 'noisettes'],
        ingredients: 'Courge, crème, noisettes.',
        description: 'Velouté onctueux de courge et éclats de noisette.',
        imageUrl: exampleImage,
      },
    ],
  },
  {
    title: 'Plats',
    dishes: [
      {
        title: 'Boeuf, butternut.',
        price: '25€',
        badges: ['boeuf', 'butternut', 'plats'],
        ingredients: 'Boeuf, butternut.',
        description:
          'Lamelle de boeuf, accompagnée d’une mousse de courge butternut.',
        imageUrl: exampleImage,
      },
      {
        title: 'Volaille rôtie.',
        price: '24€',
        badges: ['volaille', 'jus', 'légumes'],
        ingredients: 'Volaille, jus corsé, légumes.',
        description: 'Volaille rôtie servie avec légumes de saison.',
        imageUrl: exampleImage,
      },
      {
        title: 'Poisson grillé.',
        price: '27€',
        badges: ['poisson', 'citron', 'herbes'],
        ingredients: 'Poisson, citron, herbes.',
        description: 'Poisson grillé minute, citron confit et herbes.',
        imageUrl: exampleImage,
      },
    ],
  },
  {
    title: 'Desserts',
    dishes: [
      {
        title: 'Chocolat noisette.',
        price: '12€',
        badges: ['chocolat', 'noisette', 'desserts'],
        ingredients: 'Chocolat, noisette.',
        description: 'Mousse chocolat noir et croustillant noisette.',
        imageUrl: exampleImage,
      },
      {
        title: 'Tarte agrumes.',
        price: '11€',
        badges: ['citron', 'orange', 'desserts'],
        ingredients: 'Citron, orange, meringue.',
        description: 'Tarte fine aux agrumes et meringue légère.',
        imageUrl: exampleImage,
      },
      {
        title: 'Pomme vanille.',
        price: '10€',
        badges: ['pomme', 'vanille', 'desserts'],
        ingredients: 'Pomme, vanille, caramel.',
        description: 'Pomme confite, crème vanille et caramel doux.',
        imageUrl: exampleImage,
      },
    ],
  },
];

const MenuPage = () => {
  return (
    <main
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: 'var(--padding-96) var(--padding-24) var(--padding-24)',
        display: 'grid',
        gap: 'var(--padding-48)',
      }}
    >
      <h1 className='title-menu'>Menu</h1>

      {sections.map((section) => (
        <section key={section.title} style={{ display: 'grid', gap: 'var(--padding-26)' }}>
          <h2 className='title-section-menu'>
            {section.title}
          </h2>

          {section.dishes.map((dish, index) => (
            <MenuCard
              key={`${section.title}-${dish.title}-${index}`}
              title={dish.title}
              price={dish.price}
              badges={dish.badges}
              ingredients={dish.ingredients}
              description={dish.description}
              imageUrl={dish.imageUrl}
              imageAlt={dish.title}
              reverse={index % 2 === 1}
            />
          ))}
        </section>
      ))}
    </main>
  );
};

export default MenuPage;
