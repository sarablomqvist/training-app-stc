import React from 'react'
import styles from './gothenburgHogsbohojd.module.css'
import IphoneIcons from '../components/iphoneIcons'
import StcLog from '../components/stcLog'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

function GothenburgHogsbohojd() {
    return (
        <>
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
                                <Link to="/">
                                    <img
                                        className={styles.arrowLeft}
                                        src="src/assets/arrow-left-direction-white-icon.png"
                                        alt="arrow left"
                                    />
                                </Link>
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
                        <h1 className={styles.h1}>Göteborg Högsbohöjd</h1>
                        <div className={styles.addressWrapper}>
                            <p className={styles.address}>Sjupundsgatan 6</p>
                            <p className={styles.address}>41481 Göteborg</p>
                        </div>
                    </div>
                </div>
                <div className={styles.containerGymCard}>
                    <div className={styles.containerWeekdays}>
                        <p className={styles.upcoming}>Upcoming sessions</p>
                        <h2 className={classNames(styles.weekdayToday, styles.weekDay)}>Today</h2>
                    </div>
                    <div className={styles.cardGym}>
                        <p className={styles.cardGymPlaces}>14 places remain</p>
                        <h2 className={styles.h2}>Bodypump 45min</h2>
                        <div className={styles.cardGymTextBox}>
                            <p className={styles.cardGymClock}>17:30</p>
                            <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <h2 className={styles.weekDay}>Tomorrow</h2>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <h2 className={styles.weekDay}>Sunday</h2>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <h2 className={styles.weekDay}>Monday</h2>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <h2 className={styles.weekDay}>Tuesday</h2>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <h2 className={styles.weekDay}>Wednesday</h2>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <h2 className={styles.weekDay}>Friday</h2>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
                <div className={styles.cardGym}>
                    <p className={styles.cardGymPlaces}>14 places remain</p>
                    <h2 className={styles.h2}>Bodypump 45min</h2>
                    <div className={styles.cardGymTextBox}>
                        <p className={styles.cardGymClock}>17:30</p>
                        <p className={styles.cardGymInstructur}>Marina Kristofferson</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GothenburgHogsbohojd
