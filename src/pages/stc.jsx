import React from 'react'
import styles from './stc.module.css'
import classNames from 'classnames'

function Stc() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heroImg}>
                <div>
                    <div className={styles.header}>
                        <p className={styles.clock}>9:41</p>
                        <div className={styles.blackBox}></div>
                        <div>
                            <svg
                                width="19"
                                height="12"
                                viewBox="0 0 19 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.7994 3C10.7994 2.44772 11.2471 2 11.7994 2H12.7994C13.3517 2 13.7994 2.44772 13.7994 3V11C13.7994 11.5523 13.3517 12 12.7994 12H11.7994C11.2471 12 10.7994 11.5523 10.7994 11V3Z"
                                    fill="white"
                                />
                                <path
                                    d="M15.7994 1C15.7994 0.447715 16.2471 0 16.7994 0H17.7994C18.3517 0 18.7994 0.447715 18.7994 1V11C18.7994 11.5523 18.3517 12 17.7994 12H16.7994C16.2471 12 15.7994 11.5523 15.7994 11V1Z"
                                    fill="white"
                                />
                                <path
                                    d="M5.79941 6.5C5.79941 5.94772 6.24712 5.5 6.79941 5.5H7.79941C8.35169 5.5 8.79941 5.94772 8.79941 6.5V11C8.79941 11.5523 8.35169 12 7.79941 12H6.79941C6.24712 12 5.79941 11.5523 5.79941 11V6.5Z"
                                    fill="white"
                                />
                                <path
                                    d="M0.799408 9C0.799408 8.44772 1.24712 8 1.79941 8H2.79941C3.35169 8 3.79941 8.44772 3.79941 9V11C3.79941 11.5523 3.35169 12 2.79941 12H1.79941C1.24712 12 0.799408 11.5523 0.799408 11V9Z"
                                    fill="white"
                                />
                            </svg>

                            <svg
                                width="18"
                                height="12"
                                viewBox="0 0 18 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.29987 2.58753C11.7664 2.58764 14.1387 3.55505 15.9263 5.28982C16.0609 5.42375 16.2761 5.42206 16.4086 5.28603L17.6954 3.96045C17.7625 3.89146 17.8 3.798 17.7994 3.70076C17.7988 3.60353 17.7604 3.51052 17.6924 3.44234C13.0005 -1.14745 5.59848 -1.14745 0.906571 3.44234C0.838605 3.51047 0.800042 3.60345 0.799416 3.70069C0.798789 3.79792 0.83615 3.89141 0.903232 3.96045L2.19037 5.28603C2.32286 5.42226 2.53819 5.42396 2.67272 5.28982C4.46056 3.55494 6.83308 2.58752 9.29987 2.58753ZM9.33532 6.58938C10.6905 6.58929 11.9974 7.10346 13.0019 8.03199C13.1378 8.16376 13.3518 8.16091 13.4843 8.02555L14.7696 6.69997C14.8373 6.63044 14.8748 6.53611 14.8738 6.4381C14.8729 6.34008 14.8334 6.24656 14.7644 6.17844C11.7053 3.27385 6.96793 3.27385 3.90886 6.17844C3.83976 6.24656 3.80033 6.34013 3.79942 6.43817C3.79852 6.53622 3.8362 6.63054 3.90403 6.69997L5.18894 8.02555C5.32139 8.16091 5.53543 8.16376 5.6713 8.03199C6.67519 7.10408 7.981 6.58995 9.33532 6.58938ZM11.949 9.17672C11.9509 9.27501 11.9131 9.36977 11.8443 9.43863L9.62106 11.7289C9.55589 11.7962 9.46703 11.834 9.37432 11.834C9.2816 11.834 9.19275 11.7962 9.12757 11.7289L6.90393 9.43863C6.83524 9.36972 6.79745 9.27492 6.79949 9.17663C6.80152 9.07834 6.8432 8.98527 6.91469 8.91938C8.33456 7.69354 10.4141 7.69354 11.8339 8.91938C11.9054 8.98532 11.947 9.07843 11.949 9.17672Z"
                                    fill="white"
                                />
                            </svg>

                            <svg
                                width="29"
                                height="13"
                                viewBox="0 0 29 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.35"
                                    d="M1.32695 4C1.32695 2.08221 2.88162 0.527543 4.79941 0.527543H21.7994C23.7172 0.527543 25.2719 2.08222 25.2719 4V9C25.2719 10.9178 23.7172 12.4725 21.7994 12.4725H4.79941C2.88162 12.4725 1.32695 10.9178 1.32695 9V4Z"
                                    stroke="white"
                                    stroke-width="1.05509"
                                />
                                <path
                                    opacity="0.4"
                                    d="M26.7994 5V9.22034C27.6485 8.86291 28.2006 8.0314 28.2006 7.11017C28.2006 6.18894 27.6485 5.35744 26.7994 5Z"
                                    fill="white"
                                />
                                <path
                                    d="M2.79941 4C2.79941 2.89543 3.69484 2 4.79941 2H21.7994C22.904 2 23.7994 2.89543 23.7994 4V9C23.7994 10.1046 22.904 11 21.7994 11H4.79941C3.69484 11 2.79941 10.1046 2.79941 9V4Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.insideHeroWrapper}>
                        <div className={styles.hamburgerWrapper}>
                            <div className={classNames(styles.hamburgerMenu, styles.hidden)}></div>
                            <div className={classNames(styles.hamburgerMenu, styles.hidden)}></div>
                        </div>
                        <p className={styles.stc}>
                            <svg
                                width="57"
                                height="25"
                                viewBox="0 0 57 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M48.378 10.8995H55.3485L56.8145 6.40601H47.753C43.168 6.40601 39.427 7.87351 36.933 12.017C35.5765 14.364 34.512 17.115 34.512 19.7555C34.512 23.6065 37.3365 25 41.738 25H50.769L52.2225 20.523H43.716C41.848 20.523 41.115 19.7555 41.115 18.619C41.115 17.2265 41.7 15.614 42.324 14.475C43.389 12.4575 45.703 10.8995 48.378 10.8995Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M33.31 20.5155C33.31 20.5155 31.955 20.505 30.886 20.5155C29.7405 20.527 29.0245 19.3565 29.299 18.506C29.5755 17.655 30.103 16.0495 30.103 16.0495L31.3855 12.1105H24.714L22.6675 18.3985C22.6865 18.3335 23.167 16.8605 22.331 19.426C21.5005 21.9725 23.3435 25.0025 26.4165 25H36.033C35.958 24.955 35.886 24.915 35.8145 24.8675C34.3445 23.8945 33.491 22.4045 33.31 20.5155Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.6 13.6305H10.1625C9.785 13.6305 9.433 13.23 9.5595 12.847C10.0345 11.428 11.0955 10.88 12.126 10.88H36.4485L37.9025 6.4055H33.24L35.327 0H28.652L26.569 6.406H10.4375C8.354 6.406 6.271 7.297 4.7685 9.351C3.7775 10.707 3.167 12.531 3.167 14.108C3.167 16.455 4.8545 17.702 8.484 17.702H14.266C14.6835 17.702 14.971 18.1325 14.8625 18.4705C14.195 20.5275 12.572 20.529 12.279 20.529H1.456L0 25H12.455C16.8195 25 18.985 23.752 20.304 21.1125C21.0015 19.6465 21.4405 18.2525 21.4405 16.934C21.4405 14.841 20.0475 13.6305 16.6 13.6305Z"
                                    fill="white"
                                />
                            </svg>
                        </p>
                        <div className={styles.hamburgerWrapper}>
                            <div className={styles.hamburgerMenu}></div>
                            <div className={styles.hamburgerMenu}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.h1Box}>
                    <h1>Our gyms</h1>
                </div>
            </div>
            <div className={styles.cardGym}>
                <h2>Almedal</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2>Backa entré</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2>Björkekärr</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2 className={styles.flexBox}>Göteborg Eriksberg</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
            <div className={styles.cardGym}>
                <h2>Göteborg Högsbohöjd</h2>
                <img
                    src="src/assets/arrow-right-direction-white-icon.png"
                    className={styles.arrow}
                    alt="arrow to right"
                />
            </div>
        </div>
    )
}

export default Stc
