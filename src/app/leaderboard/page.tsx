'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/leader');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                console.log(data['bullet'])
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Leaderboard</h1>
            {data.blitz && data.bullet ? (
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Bullet</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {data.bullet.map((player) => (
                                <li key={player.id} className="p-4 bg-gray-100 rounded shadow">
                                    <strong>{player.username}</strong> - Rating: {player.perfs.bullet.rating}, Progress: {player.perfs.bullet.progress}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Blitz</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {data.blitz.map((player) => (
                                <li key={player.id} className="p-4 bg-gray-100 rounded shadow">
                                    <strong>{player.username}</strong> - Rating: {player.perfs.blitz.rating}, Progress: {player.perfs.blitz.progress}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-500">Loading...</p>
            )}
        </div>
    )
}

export default Page
