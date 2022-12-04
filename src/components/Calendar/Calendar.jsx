import React from 'react';
import { StyledCalendar } from './Calendar.style';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

const Calendar = ({ events }) => {
	console.log('events: ', events);

	return (
		<StyledCalendar>
			<FullCalendar
				plugins={[dayGridPlugin, bootstrap5Plugin, timeGridPlugin]}
				initialView='dayGridMonth'
				themeSystem='bootstrap5'
				headerToolbar={{
					left: 'today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,prev,next',
				}}
				events={events}
			/>
		</StyledCalendar>
	);
};

export default Calendar;
