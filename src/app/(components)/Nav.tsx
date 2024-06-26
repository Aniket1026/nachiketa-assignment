import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className="h-[75px] text-xl text-white w-full flex flex-row justify-around items-center bg-gray-800 shadow-lg">
            <Link href="/profile">
                <div className="px-4 py-2 rounded hover:bg-gray-300 hover:text-white transition duration-300">Profile</div>
            </Link>
            <Link href="/leaderboard">
                <div className="px-4 py-2 rounded hover:bg-gray-300 hover:text-white transition duration-300">LeaderBoard</div>
            </Link>
            <Link href="/tournaments">
                <div className="px-4 py-2 rounded hover:bg-gray-300 hover:text-white transition duration-300">Tournaments</div>
            </Link>
        </nav>
    )
}

export default Nav
