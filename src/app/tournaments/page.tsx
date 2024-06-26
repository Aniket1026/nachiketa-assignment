'use client'
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/tournaments');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Tournament Information</h1>
            {data ? (
                <div>
                    <div>
                        {data.created.map((tournament) => (
                            <div key={tournament.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
                                <h3>{tournament.fullName}</h3>
                                <p><strong>Starts At:</strong> {new Date(tournament.startsAt).toLocaleTimeString()}</p>
                                <p><strong>Finishes At:</strong> {new Date(tournament.finishesAt).toLocaleTimeString()}</p>
                                <p><strong>Duration:</strong> {tournament.minutes} minutes</p>
                                <p><strong>Clock:</strong> {tournament.clock.limit / 60} minutes per player {tournament.clock.increment ? `with ${tournament.clock.increment} second increment` : 'with no increment'}</p>
                                <p><strong>Rated:</strong> {tournament.rated ? 'Yes' : 'No'}</p>
                                <p><strong>Variant:</strong> {tournament.variant.name}</p>
                                <p><strong>Players Registered:</strong> {tournament.nbPlayers}</p>
                                <p><strong>Minimum Rated Games Required:</strong> {tournament.minRatedGames ? tournament.minRatedGames.nb : 'N/A'}</p>
                                <p><strong>Performance Key:</strong> {tournament.perf.name} (Position {tournament.perf.position})</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Page;
