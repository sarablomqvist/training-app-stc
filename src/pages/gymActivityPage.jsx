import React, { useEffect, useState } from 'react'
import styles from './gymActivityPage.module.css'
import Hero from '../components/hero'
import { useParams } from 'react-router-dom'

function GymActivityPage() {
    const [activities, setActivities] = useState([])
    const [businessUnit, setBusinessUnit] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch(
                `https://stc.brpsystems.com/brponline/api/ver3/businessunits/${id}/groupactivities`
            )
            const data = await response.json()
            setActivities(data)
        }

        const fetchBusinessUnit = async () => {
            const response = await fetch(`https://stc.brpsystems.com/brponline/api/ver3/businessunits`)
            const data = await response.json()
            const findBusinessUnit = data.find((unit) => unit.id == id)
            setBusinessUnit(findBusinessUnit)
            console.log(findBusinessUnit)
        }

        fetchActivities()
        fetchBusinessUnit()
    }, [id])

    const formatTime = (isoString) => {
        const date = new Date(isoString)
        return date.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <>
            <div className={styles.wrapper}>
                <Hero name={businessUnit?.name} address={businessUnit?.address?.street} postCode={businessUnit?.address?.postalCode}/>
                <p className={styles.upcoming}>Upcoming sessions</p>

                {activities.map((activity) => (
                    <div key={activity.id} className={styles.cardGym}>
                        <p className={styles.cardGymPlaces}>{activity.slots.leftToBook} platser kvar</p>
                        <h2 className={styles.h2}>{activity.name}</h2>
                        <div className={styles.cardGymTextBox}>
                            <p className={styles.cardGymClock}>{formatTime(activity.duration.start)}</p>
                            <p className={styles.cardGymInstructur}>
                                {activity.instructors.length > 0 ? activity.instructors[0].name : 'Ingen instruktör'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default GymActivityPage
