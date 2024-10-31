import { Spell } from '@tomerlichtash/ics-css-react';
import styles from './Header.module.css';
import { ThemeSelect } from '../ThemeSelect/ThemeSelect';

export default function Header() {
	return (
		<header className={styles.root}>
			<div className="container">
				<Spell
					noCaption
					size="xs"
					className={styles.logo}
				>
					icsincss
				</Spell>
				<h1 className={styles.siteTitle}>ICS-in-CSS</h1>
				<span>International Code of Signals Flags in the Browser</span>
				<ThemeSelect className={styles.themeSelect} />
			</div>
		</header>
	);
}
