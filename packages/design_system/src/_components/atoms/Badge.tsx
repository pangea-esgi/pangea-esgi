import type { HTMLAttributes } from 'react';
import '../../styles/Badge.css';

export type BadgeVariant = 'primary' | 'secondary' | 'focus';

type BadgeProps = {
	label: string;
	variant?: BadgeVariant;
} & HTMLAttributes<HTMLSpanElement>;

const Badge = ({
	label,
	variant = 'primary',
	className,
	...props
}: BadgeProps) => {
	const classes = ['badge', `badge-${variant}`, className ?? '']
		.filter(Boolean)
		.join(' ');

	return (
		<span className={classes} {...props}>
			<span className="badge-dot" aria-hidden="true" />
			<span className="badge-label">{label}</span>
		</span>
	);
};

export default Badge;
