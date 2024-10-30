import classNames from 'classnames';
import styles from './IconButton.module.css';
import { PropsWithChildren } from 'react';

type IconButtonProps = {
	title?: string;
	href?: string;
	targetBlank?: boolean;
	icon: string;
	className?: string;
};

export default function IconButton({
	children,
	title,
	href,
	targetBlank,
	icon,
	className,
}: PropsWithChildren<IconButtonProps>) {
	return (
		<a
			href={href}
			target={targetBlank ? '_blank' : ''}
			className={className}
			title={title}
		>
			<span className={classNames(styles.root, children ? styles.hasLabel : '')}>
				<span className={classNames(styles.icon, icon)}></span>
				<span className={styles.label}>{children}</span>
			</span>
		</a>
	);
}
