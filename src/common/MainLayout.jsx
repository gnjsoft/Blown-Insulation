'use client'
import React from 'react'
import Header from './header'
import Footer from './Footer'
import { Outlet } from 'react-router'


export default function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
