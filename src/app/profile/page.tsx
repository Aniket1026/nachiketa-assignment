'use client'
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../api/const';

const page = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/account');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            {data && (
                <div>
                    <h2>{data.username}</h2>
                    <p>{data.id}</p>
                </div>
            )}
        </div>
    )
}

export default page