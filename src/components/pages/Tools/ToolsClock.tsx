
import { useEffect, useState } from "react";
import "./TimeClock.css";

const TIMEZONE = "America/Chicago";

function getSavedTime(key: string, fallback: string) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch {
        return fallback;
    }
}

function getCentralTime() {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: TIMEZONE,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
    }).formatToParts(new Date());

    const get = (type: string) =>
        Number(parts.find((p) => p.type === type)?.value ?? 0);

    return get("hour") * 3600 + get("minute") * 60 + get("second");
}

function getColor(progress: number) {
    // Red -> Yellow -> Green
    const stops = [
        { r: 230, g: 55, b: 55 },
        { r: 245, g: 205, b: 50 },
        { r: 55, g: 180, b: 90 },
    ];

    const p = Math.max(0, Math.min(1, progress));
    const segment = p <= 0.5 ? 0 : 1;
    const localProgress = p <= 0.5 ? p * 2 : (p - 0.5) * 2;

    const a = stops[segment];
    const b = stops[segment + 1];

    const r = Math.round(a.r + (b.r - a.r) * localProgress);
    const g = Math.round(a.g + (b.g - a.g) * localProgress);
    const blue = Math.round(a.b + (b.b - a.b) * localProgress);

    return `rgb(${r}, ${g}, ${blue})`;
}

function timeToSeconds(time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60;
}

export default function ToolsClock() {
    const [startTime, setStartTime] = useState(() =>
        getSavedTime("clockStartTime", "08:00")
    );

    const [endTime, setEndTime] = useState(() =>
        getSavedTime("clockEndTime", "16:00")
    );

    const [now, setNow] = useState(getCentralTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(getCentralTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        localStorage.setItem("clockStartTime", startTime);
    }, [startTime]);

    useEffect(() => {
        localStorage.setItem("clockEndTime", endTime);
    }, [endTime]);

    const start = timeToSeconds(startTime);
    const end = timeToSeconds(endTime);

    const validTimes = start !== end;

    // Handle overnight schedules.
    const duration = end > start
        ? end - start
        : 86400 - start + end;

    let elapsed = now - start;

    if (end < start && now < end) {
        elapsed += 86400;
    }

    const active = validTimes && elapsed >= 0 && elapsed < duration;

    const progress = active
        ? Math.max(0, Math.min(1, elapsed / duration))
        : 0;

    const percentage = Math.floor(progress * 100);

    const clockColor = active ? getColor(progress) : "#2785D5";

    return (
        <div className="bg-[var(--bg)] pt-5">

            <div
                className="clock-circle"
                style={{
                    background: active
                        ? `conic-gradient(
                        ${clockColor} ${progress * 360}deg,
                        #999 ${progress * 360}deg
                        )`
                        : "#2785D5",
                }}
            >
                <div className="clock-center">
                    <div className="clock-percentage text-[var(--code-bg)]">
                        {active ? `${percentage}%` : "0%"}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-2">

                <div className="">
                    <label htmlFor="startTime">Start Time</label>
                    <input
                        className="border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] rounded p-1"
                        id="startTime"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>

                <div className="">
                    <label htmlFor="endTime">End Time</label>
                    <input
                        className="border border-[var(--border)] bg-[var(--bg)] text-[var(--text)] rounded p-1"
                        id="endTime"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>

            </div>

            {!validTimes && (
                <p className="text-red-300">
                    Start and end times must be different.
                </p>
            )}

        </div>
    );
}
