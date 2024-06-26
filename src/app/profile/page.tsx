'use client'
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/account`); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Profile</h1>
            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                    <h2 style={{ color: '#0070f3' }}>{data.username}</h2>
                    <p><strong>ID:</strong> {data.id}</p>
                    <p><strong>URL:</strong> <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
                    <p><strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}</p>
                    <p><strong>Seen At:</strong> {new Date(data.seenAt).toLocaleString()}</p>
                    <p><strong>Total Play Time:</strong> {data.playTime.total} minutes</p>
                    <p><strong>Ratings:</strong></p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li><strong>Bullet:</strong> {data.perfs.bullet.rating}</li>
                        <li><strong>Blitz:</strong> {data.perfs.blitz.rating}</li>
                        <li><strong>Rapid:</strong> {data.perfs.rapid.rating}</li>
                        <li><strong>Classical:</strong> {data.perfs.classical.rating}</li>
                        <li><strong>Correspondence:</strong> {data.perfs.correspondence.rating}</li>
                    </ul>
                    <p><strong>Number of Games:</strong> {data.count.all}</p>
                </div>
            ) : (
                <p>Error: Failed to fetch data.</p>
            )}
        </div>
    );
};

export default Page;
