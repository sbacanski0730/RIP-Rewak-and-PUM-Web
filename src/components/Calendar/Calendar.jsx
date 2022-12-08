import React from 'react';
import { StyledCalendar } from './Calendar.style';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import { Tooltip } from 'bootstrap';

const Calendar = ({ events }) => {
	let tooltipInstance = null;

	const clickTooltip = info => {
		const condition = info.el.parentElement.parentElement.classList[0].toString();

		// console.log(condition.includes('popover'));

		if (!condition.includes('popover')) {
			if (info.event.extendedProps.description) {
				tooltipInstance = new Tooltip(info.el, {
					title: info.event.extendedProps.description,
					html: true,
					placement: 'top',
					trigger: 'hover',
					container: info.el,
				});
				tooltipInstance.show();
			}
		}
	};

	const showTooltip = info => {
		const condition = info.el.parentElement.parentElement.classList[0].toString();

		// console.log(condition.includes('popover'));

		if (!condition.includes('popover')) {
			if (info.event.extendedProps.description) {
				tooltipInstance = new Tooltip(info.el, {
					title: info.event.extendedProps.description,
					html: true,
					placement: 'top',
					trigger: 'hover',
					container: info.el,
				});
				tooltipInstance.show();
			}
		}
	};

	const hideTooltip = () => {
		if (tooltipInstance) {
			tooltipInstance.dispose();
			tooltipInstance = null;
		}
	};

	let isPopoverOpen = false;

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
				dayMaxEventRows={true}
				views={{
					dayGridMonth: {
						titleFormat: { month: 'long', year: 'numeric' },
						// dayMaxEventRows: 1,
						eventTimeFormat: {
							hour: '2-digit',
							minute: '2-digit',
							hour12: false,
							meridiem: false,
						},
						// eventMouseEnter: showTooltip,
						// eventMouseLeave: hideTooltip,
						eventClick: clickTooltip,
						// moreLinkClassNames: 'popover-event',
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
