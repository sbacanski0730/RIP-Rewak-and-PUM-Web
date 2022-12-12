import { Tooltip } from 'bootstrap';

let tooltipInstance = null;

export const showTooltipMonthView = info => {
	const condition = info.el.parentElement.parentElement.classList[0].toString();

	if (!condition.includes('popover')) {
		if (info.event.extendedProps.description) {
			tooltipInstance = new Tooltip(info.el, {
				title: info.event.extendedProps.description,
				html: true,
				placement: 'top',
				trigger: 'hover',
				container: info.el.parentElement,
			});
			tooltipInstance.show();
		}
	}
	if (condition.includes('popover')) {
		if (info.event.extendedProps.description) {
			tooltipInstance = new Tooltip(info.el, {
				title: info.event.extendedProps.description,
				html: true,
				placement: 'right',
				trigger: 'hover',
				container: info.el.parentElement,
			});
			tooltipInstance.show();
		}
	}
};

export const showTooltipWeekView = info => {
	if (info.event.extendedProps.description) {
		tooltipInstance = new Tooltip(info.el, {
			title: info.event.extendedProps.description,
			html: true,
			placement: 'top',
			trigger: 'hover',
			container: info.el.parentElement,
		});
		tooltipInstance.show();
	}
};

export const showTooltipDayView = info => {
	if (info.event.extendedProps.description) {
		tooltipInstance = new Tooltip(info.el, {
			title: info.event.extendedProps.description,
			html: true,
			placement: 'right',
			trigger: 'hover',
			container: info.el.parentElement,
		});
		tooltipInstance.show();
	}
};

export const hideTooltip = () => {
	if (tooltipInstance) {
		tooltipInstance.dispose();
		tooltipInstance = null;
	}
};
