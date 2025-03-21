import React, { useEffect, useState } from 'react'
import styles from './stc.module.css'
import classNames from 'classnames'
import StcLog from '../components/stcLog'
import IphoneIcons from '../components/iphoneIcons'
import { Link } from 'react-router-dom'
import Arrow from '../components/arrow'

function Stc() {
    const [gyms, setGyms] = useState([])

    useEffect(() => {
        const fetchGyms = async () => {
            const response = await fetch('https://stc.brpsystems.com/brponline/api/ver3/businessunits')
            const data = await response.json()
            setGyms(data)
        }

        fetchGyms()
    }, [])

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
                    <h1 className={styles.h1}>Our gyms</h1>
                </div>
            </div>

            {gyms.map((gym) => (
                <Link key={gym.id} to={`/gym/${gym.id}`} className={styles.cardGym}>
                    <h2 className={styles.h2}>{gym.name}</h2>
                    <div className={styles.arrow}>
                        <Arrow />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Stc
