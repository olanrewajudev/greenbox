import React from 'react'
import { Outlet } from 'react-router'
import Footer from '~/components/General/Footer'
import Header from '~/components/General/Header'

export default function GeneralLayout() {
    return (
        <div>
            <Header />
            <div className="bg-[]"><Outlet /></div>
            <Footer />
        </div>
    )
}
