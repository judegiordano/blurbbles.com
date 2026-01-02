'use client'
import { useEffect, useState } from 'react'

export function Countdown() {
    const [time, setTime] = useState<string>('00:00:00')

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date()
            const utcHours = now.getUTCHours()
            const utcMinutes = now.getUTCMinutes()
            const utcSeconds = now.getUTCSeconds()

            const secondsElapsed = utcHours * 3600 + utcMinutes * 60 + utcSeconds
            const totalSecondsInDay = 24 * 3600
            const secondsRemaining = totalSecondsInDay - secondsElapsed

            const hours = Math.floor(secondsRemaining / 3600)
            const minutes = Math.floor((secondsRemaining % 3600) / 60)
            const seconds = secondsRemaining % 60

            const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            setTime(formatted)
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)
    }, [])

    return <div>{time}</div>
}