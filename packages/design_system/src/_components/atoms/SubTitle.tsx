import '../../styles/SubTitle.css';
import type { HTMLAttributes } from 'react';

export type SubTitleVariant = 'default' | 'filled' | 'underline' | 'underline-light';

type SubTitleProps = {
    text: string;
    variant?: SubTitleVariant;
} & HTMLAttributes<HTMLHeadingElement>;

const SubTitle = ({ text, variant = 'default', className, ...props }: SubTitleProps) => {
    const classes = ['subtitle', `subtitle-${variant}`, className ?? '']
        .filter(Boolean)
        .join(' ');

    return (
        <h3 className={classes} {...props}>
            {text}
        </h3>
    );
};

export default SubTitle;
