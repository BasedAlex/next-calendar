'use client'

import CalendarNew from '@/components/components/Calendar/Calendar'
import MiniCalendar from '@/components/components/MiniCalendar/MiniCalendar'
import Navbar from '@/components/components/Navbar/Navbar'
import Sidebar from '@/components/components/Sidebar/Sidebar'
import React, {useState} from 'react'

const Main = () => {
    const [showSidebar, setShowSidebar] = useState(true)

    return (
        <>
            <main className='flex'>
                {showSidebar && (
                    <div>
                        <Sidebar/>
                        {/*<MiniCalendar />*/}
                    </div>
                )}
                <div>
                    <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <CalendarNew/>
                </div>
            </main>
        </>
    )
}

export default Main
