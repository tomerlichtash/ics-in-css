import classNames from 'classnames';
import IconButton from '../IconButton/IconButton';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={classNames(styles.root, 'inverse')}>
			<div className="container">
				<div className={styles.layout}>
					<div className={styles.col}>2024 (cc-by-nc-sa) Tomer Lichtash</div>
					<div className={classNames(styles.col, styles.list)}>
						<IconButton
							href="https://github.com/tomerlichtash"
							targetBlank
							icon="github"
							title="Follow me on Github"
							className="inverse"
						/>
						<IconButton
							href="https://x.com/tomerlichtash"
							targetBlank
							icon="x"
							title="Follow me on X"
							className="inverse"
						/>
						<IconButton
							href="https://facebook.com/tomerlichtash"
							targetBlank
							icon="facebook"
							title="Join me on Facebook"
							className={classNames(styles.fb, 'inverse')}
						/>
						<IconButton
							href="https://www.linkedin.com/in/tomerlichtash/"
							targetBlank
							icon="linkedin"
							title="Add me to your LinkedIn network"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
