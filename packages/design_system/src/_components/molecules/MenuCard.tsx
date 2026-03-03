import type { HTMLAttributes } from 'react';
import Badge from '../atoms/Badge';
import '../../styles/MenuCard.css';

type MenuCardProps = {
	title: string;
	price: string;
	badges: string[];
	ingredients: string;
	description: string;
	imageUrl: string;
	imageAlt?: string;
	reverse?: boolean;
} & HTMLAttributes<HTMLElement>;

const MenuCard = ({
	title,
	price,
	badges,
	ingredients,
	description,
	imageUrl,
	imageAlt,
	reverse = false,
	className,
	...props
}: MenuCardProps) => {
	const classes = [
		'menu-card',
		reverse ? 'menu-card-reverse' : '',
		className ?? '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<article className={classes} {...props}>
			<div className="menu-card-content">
				<div className="menu-card-header">
					<h3 className="menu-card-title">{title}</h3>
					<span className="menu-card-price">{price}</span>
				</div>

				<div className="menu-card-badges">
					{badges.map((badge, index) => (
						<Badge key={`${badge}-${index}`} label={badge} variant="primary" />
					))}
				</div>

				<p className="menu-card-ingredients">{ingredients}</p>
				<p className="menu-card-description">{description}</p>
			</div>

			<div className="menu-card-image-wrapper">
				<img className="menu-card-image" src={imageUrl} alt={imageAlt ?? title} />
			</div>
		</article>
	);
};

export default MenuCard;
