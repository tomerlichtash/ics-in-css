'use client';

import { type FlagSize, Spell, Text } from '@tomerlichtash/ics-css-react';
import classNames from 'classnames';
import styles from './Example.module.css';
import { useState } from 'react';

type ExampleProps = {
	children: string;
	spell?: boolean;
	output?: string;
	size?: FlagSize;
	noCaption?: boolean;
	hideHint?: boolean;
	className?: string;
};

export default function Example({
	children,
	output,
	spell,
	size,
	hideHint,
	noCaption,
	className,
}: ExampleProps) {
	const [visible, setVisible] = useState(false);

	return (
		<div className={classNames(styles.root, className)}>
			{spell ? (
				<Spell
					className={styles.spellBox}
					size={size || 'xl'}
					noCaption={(hideHint && !visible) || noCaption}
				>
					{children}
				</Spell>
			) : (
				<Text
					className={styles.spellBox}
					size={size || 'xl'}
					noCaption={(hideHint && !visible) || noCaption}
				>
					{children}
				</Text>
			)}
			{output && (
				<p
					className={classNames(
						styles.outputText,
						hideHint ? (visible ? styles.visible : styles.hidden) : '',
					)}
					onClick={() => setVisible(true)}
				>
					{hideHint && !visible ? <span>Click to reveal</span> : `${output}`}
				</p>
			)}
		</div>
	);
}
