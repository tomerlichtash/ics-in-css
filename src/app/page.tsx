import { Text } from '@tomerlichtash/ics-css-react';
import Grid from '../components/Grid/Grid';
import Example from '../components/Example/Example';
import classNames from 'classnames';
import styles from './page.module.css';
import IconButton from '../components/IconButton/IconButton';

export default function Home() {
	return (
		<div className={styles.root}>
			<div className="container">
				{/* Intro */}
				<div className={styles.section}>
					<p>
						The <i>International Code of Signals</i> (
						<abbr title="International Code of Signals">ICS</abbr>) is a system of signals and
						codes designed to communicate important safety and navigational messages when
						speaking is difficult, for use by vessels to communicate important messages
						regarding safety of navigation and related matters. A standardized alphabet was
						created (see below), along with a spoken form for each one, designed to set apart
						similiar sounding letters (e.g. B, V and P). Each letter/numeral was assigned a
						flag.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Phonetic Alphabet</h2>
					<Grid />
				</div>

				{/* General */}
				<div className={styles.section}>
					<p>
						To save time when signaling each flag has an assigned meaning to communicate very
						urgent or common messages.
					</p>

					<Example output="Man overboard">When used alone [[oscar]] means</Example>

					<p>When paried in two&apos;s, flags take on more specific meanings:</p>

					<Example
						spell
						output="I wish you a pleasent voyage"
					>
						uw
					</Example>

					<p>Numerals appended to two flags permit for more detailed messages...</p>

					<Example
						spell
						output="Can I come alongside?"
					>
						qru
					</Example>

					<Text size="sm">
						Three letter signals that being with [[mike]] are reserved to communicate medical
						emergencies.
					</Text>

					<Example output="I request urgent medical advice.">
						[[mike]] [[alfa]] [[subst2]]
					</Example>
				</div>

				{/* Substitutes */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Substitutes</h2>
					<p>
						To avoid having to carry multiple flags of the same signal, the{' '}
						<abbr title="International Code of Signals">ICS</abbr> uses 3 substitute flags:
					</p>
					<Example>[[subst1]] [[subst2]] [[subst3]]</Example>
					<p>A substitute flag repeats the one at the indicated position.</p>
					<Example output="Boats are not allowed to come alongside.">
						[[delta]] [[subst1]]
					</Example>
					<p>When in distress, signal using these flags:</p>
					<Example spell>nc</Example>
				</div>

				{/* Spelling */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Spelling</h2>
					<div>
						<p>To begin spelling signal this:</p>
						<Example
							spell
							output="The words which follow are in plain language"
						>
							yz
						</Example>
					</div>
				</div>

				{/* ICS Info */}
				<div className={styles.section}>
					<div className={classNames(styles.messageBox)}>
						<p>
							One practical use of the international code of signals (
							<abbr title="International Code of Signals">ICS</abbr>) is that all of the
							messages are standardized and come in 9 languages: English, Français, Italiano,
							Deutsch, 日本語, Español, Norsk, русский, Ελληνικά (
							<a
								href="https://msi.nga.mil/api/publications/download?key=16694273/SFH00000/Pub102bk.pdf"
								target="_blank"
								rel="noreferrer"
							>
								PDF
							</a>
							).
						</p>

						<p>
							Each of the nine languages has a book with equivalent messages assigned to the
							same code.
						</p>
						<Text size="sm">
							For example, [[victor]] was assigned &quot;I require assistance&quot; as coded
							meaning.
						</Text>
					</div>
				</div>

				{/* Signing off */}
				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Spelling these will get you nowhere</h2>

					<Example
						spell
						output="The quick brown fox jumps over the lazy dog"
						hideHint
						size="md"
						className={styles.section}
					>
						The quick brown fox jumps over the lazy dog
					</Example>

					<Example
						spell
						output="Lorem ipsum dolor sit amet consectetur"
						hideHint
						size="md"
						className={styles.section}
					>
						Lorem ipsum dolor sit amet consectetur
					</Example>

					<Example
						spell
						output="To be or not to be that is the question"
						hideHint
						size="md"
						className={styles.section}
					>
						To be or not to be that is the question
					</Example>
				</div>

				{/* Note for developers */}
				<div
					className={classNames(
						styles.borderedBox,
						styles.section,
						styles.code,
						'foreground-inverse',
					)}
				>
					<h3>&lt;Note for Developers&gt;</h3>
					<p className="code-comment">
						This project aims to explore an HTML/CSS implementation of{' '}
						<abbr title="International Code of Signals">ICS</abbr> flags. The source code of
						this project is published as open source; I hope you find the following resources
						useful:
					</p>

					<div className="table">
						<div className="row">
							<IconButton
								href="https://github.com/tomerlichtash/ics-in-css"
								targetBlank
								icon="github"
								className="reverse-inverse"
							>
								Check out the source code for this page in Github
							</IconButton>
						</div>
						<IconButton
							href="https://www.npmjs.com/package/@tomerlichtash/ics-css-react"
							targetBlank
							icon="npm"
						>
							Add flags to your site with{' '}
							<code className={classNames(styles.code)}>ics-in-css-react</code>
						</IconButton>
					</div>
					<h3>&lt;/Note for Developers&gt;</h3>
				</div>

				{/* Inspired by */}
				<div className={styles.section}>
					<div className={classNames(styles.messageBox, styles.section)}>
						<p>
							This page was inspired by{' '}
							<a
								href="https://rabbitwaves.ca/site/flags_maritime.html"
								target="_blank"
								rel="noreferrer"
							>
								Rabbit Waves&apos; illustrated guide to ICS
							</a>
							, and reuses some of its content under the Creative Commons license fair use.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
