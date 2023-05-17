'use client'

import CalendarNew from '@/components/components/Calendar/Calendar'
import MiniCalendar from '@/components/components/MiniCalendar/MiniCalendar'
import Navbar from '@/components/components/Navbar/Navbar'
import Sidebar from '@/components/components/Sidebar/Sidebar'
import React, { useState } from 'react'

const Main = () => {
	const [showSidebar, setShowSidebar] = useState(true)

	return (
		<>
			<Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
			<main className='flex'>
				{showSidebar && (
					<div>
						<Sidebar />
						<MiniCalendar />
					</div>
				)}
				<CalendarNew />
			</main>
		</>
	)
}

export default Main
