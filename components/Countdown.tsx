'use client'
import { useEffect, useState } from 'react'

export function Countdown() {
    const [time, setTime] = useState({ hours: 0o0, minutes: 0o0, seconds: 0o0 })

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date()

            const msUntilNextSecond = 1000 - now.getUTCMilliseconds()

            const utcHours = now.getUTCHours()
            const utcMinutes = now.getUTCMinutes()
            const utcSeconds = now.getUTCSeconds()

            const secondsElapsed = utcHours * 3600 + utcMinutes * 60 + utcSeconds
            const totalSecondsInDay = 24 * 3600
            const secondsRemaining = totalSecondsInDay - secondsElapsed

            const hours = Math.floor(secondsRemaining / 3600)
            const minutes = Math.floor((secondsRemaining % 3600) / 60)
            const seconds = Math.floor(secondsRemaining % 60)

            setTime({ hours, minutes, seconds })
            const nextTimeout = setTimeout(updateCountdown, msUntilNextSecond)
            return () => clearTimeout(nextTimeout)
        }

        const cleanup = updateCountdown()
        return cleanup
    }, [])

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-neutral-content">
                <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": time.hours, "--digits": 2 } as React.CSSProperties} aria-live="polite">{time.hours}</span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-neutral-content">
                <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": time.minutes, "--digits": 2 } as React.CSSProperties} aria-live="polite">{time.minutes}</span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-[10px] text-neutral-content">
                <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": time.seconds, "--digits": 2 } as React.CSSProperties} aria-live="polite">{time.seconds}</span>
                </span>
                sec
            </div>
        </div>
    )
}