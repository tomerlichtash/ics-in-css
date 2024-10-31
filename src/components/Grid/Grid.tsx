'use client';

import { Flag, Codes, type CodeProps } from '@tomerlichtash/ics-css-react';
import classNames from 'classnames';
import styles from './Grid.module.css';

export default function Grid() {
	return (
		<div className={styles.root}>
			{Object.values(Codes as CodeProps[]).map((code, idx) => {
				return (
					<div
						key={`${code.symbol}-${idx}`}
						className={styles.entry}
					>
						{code.symbol && <span className={styles.index}>{code.symbol}</span>}
						<span className={styles.content}>
							<div className={styles.flag}>
								<Flag
									value={code.code!}
									type={code.type}
									className={styles.flag}
								/>
							</div>
							<div className={styles.meta}>
								{code.label ? (
									code.label
								) : (
									<ul className={styles.list}>
										<li className={classNames(styles.item, styles.phonetic)}>{code.ipa}</li>
										<li className={classNames(styles.item, styles.spelling)}>
											{code.respell}
										</li>
										<li className={classNames(styles.item, styles.code)}>{code.code}</li>
									</ul>
								)}
							</div>
						</span>
					</div>
				);
			})}
		</div>
	);
}
