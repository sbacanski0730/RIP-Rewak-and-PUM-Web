import React from 'react';
import { StyledCalendar } from './Calendar.style';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

const Calendar = ({ events }) => {
	// console.log('events: ', events);

	return (
		<StyledCalendar>
			<FullCalendar
				plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin]}
				initialView='dayGridMonth'
				themeSystem='bootstrap5'
				firstDay={1}
				nowIndicator={true}
				selectable={false}
				editable={false}
				navLinks={true}
				allDaySlot={false}
				headerToolbar={{
					left: 'today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,prev,next',
				}}
				views={{
					dayGridMonth: {
						titleFormat: { month: 'long', year: 'numeric' },
					},
				}}
				businessHours={{
					daysOfWeek: [1, 2, 3, 4, 5, 6],
					startTime: '8:15',
					endTime: '20:15',
				}}
				events={events}
			/>
		</StyledCalendar>
	);
};

export default Calendar;
