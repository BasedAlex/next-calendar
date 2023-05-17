'use client'

import { Calendar } from 'antd'
import type { Dayjs } from 'dayjs'
import type { CalendarMode } from 'antd/es/calendar/generateCalendar'

const CalendarNew = () => {
	const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
		console.log(value.format('YYYY-MM-DD'), mode)
	}

	return <Calendar onPanelChange={onPanelChange} />
}

export default CalendarNew
