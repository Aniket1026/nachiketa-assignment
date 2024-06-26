import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <nav className='h-[75px] text-xl text-black bg-blue-300 w-full flex flex-row justify-around items-center'>
            <Link href='/profile' className='' >Profile</Link>
            <Link href='/leaderboard'>LeaderBoard</Link>
            <Link href='/tournments'>Tournaments</Link>
        </nav>
    )
}

export default Nav