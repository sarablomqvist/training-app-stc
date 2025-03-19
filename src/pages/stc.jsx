import React from 'react'
import styles from './stc.module.css'
import classNames from 'classnames'
import StcLog from '../components/stcLog'
import IphoneIcons from '../components/iphoneIcons'
import { Link } from 'react-router-dom'

function Stc() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heroImg}>
                <div>
                    <div className={styles.header}>
                        <p className={styles.clock}>9:41</p>
                        <div className={styles.blackBox}></div>
                        <div>
                            <div className={styles.iphoneIconsWrapper}>
                                <IphoneIcons />
                            </div>
                        </div>
                    </div>
                    <div className={styles.insideHeroWrapper}>
                        <div className={styles.hamburgerWrapper}>
                            <div className={classNames(styles.hamburgerMenu, styles.hidden)}></div>
                            <div className={classNames(styles.hamburgerMenu, styles.hidden)}></div>
                        </div>
                        <p className={styles.stc}>
                            <StcLog />
                        </p>
                        <div className={styles.hamburgerWrapper}>
                            <div className={styles.hamburgerMenu}></div>
                            <div className={styles.hamburgerMenu}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.h1Box}>
                    <h1 className={styles.h1}>Our gyms</h1>
                </div>
            </div>
            <div className={styles.cardGym}>
                <h2 className={styles.h2}>Almedal</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2 className={styles.h2}>Backa entré</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2 className={styles.h2}>Björkekärr</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2 className={styles.h2}>Göteborg Eriksberg</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <Link to="/hogsbohojd" className={styles.cardGym}>
                <h2 className={styles.h2}>Göteborg Högsbohöjd</h2>

                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </Link>
        </div>
    )
}

export default Stc
