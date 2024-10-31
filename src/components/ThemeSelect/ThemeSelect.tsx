'use client';

import { useMemo, type PropsWithChildren } from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import styles from './ThemeSelect.module.css';

type ThemeSelectProps = {
	className?: string;
};

type ThemeButtonProps = {
	themeName: string;
	className?: string;
};

export const ThemeSelect = ({ className }: ThemeSelectProps) => {
	const { setTheme } = useTheme();

	const ThemeButton = useMemo(
		() =>
			// eslint-disable-next-line react/display-name
			({ children, themeName, className, ...rest }: PropsWithChildren<ThemeButtonProps>) => {
				return (
					<button
						onClick={() => setTheme(themeName)}
						className={className}
						title={`${themeName} theme`}
						{...rest}
					>
						{children}
					</button>
				);
			},
		[setTheme],
	);

	return (
		<div className={classNames(styles.root, className)}>
			<ThemeButton
				themeName="light"
				className={styles.button}
			>
				☀️
			</ThemeButton>
			<ThemeButton
				themeName="dark"
				className={styles.button}
			>
				🌑
			</ThemeButton>
		</div>
	);
};
