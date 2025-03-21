import React from 'react'
import styles from './hero.module.css'
import { Link } from 'react-router-dom'
import IphoneIcons from './iphoneIcons'
import Arrow from './arrow'
import StcLog from './stcLog'
import classNames from 'classnames'

export default function Hero({ name, address, postCode }) {
    return (
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
                        <Link to="/" className={styles.arrowLeft}>
                            <Arrow />
                        </Link>
                        <div className={classNames(styles.hamburgerMenu, styles.hidden)}></div>
                        <div className={classNames(styles.hamburgerMenu, styles.hidden)}></div>
                    </div>
                    <div className={styles.stc}>
                        <StcLog />
                    </div>
                    <div className={styles.hamburgerWrapper}>
                        <div className={styles.hamburgerMenu}></div>
                        <div className={styles.hamburgerMenu}></div>
                    </div>
                </div>
            </div>
            <div className={styles.h1Box}>
                <h1 className={styles.h1}>{name}</h1>
                <div className={styles.addressWrapper}>
                    <p className={styles.address}>{address}</p>
                    <p className={styles.address}>{postCode}</p>
                </div>
            </div>
        </div>
    )
}
