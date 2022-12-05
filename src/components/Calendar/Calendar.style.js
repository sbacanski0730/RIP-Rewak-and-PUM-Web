import styled from 'styled-components';

export const StyledCalendar = styled.div`
	width: 800px;
	height: 800px;
	padding: 10px 10px;
	.fc {
		background-color: transparent;

		height: 100%;
		width: 100%;

		.fc-timegrid-slot-label-cushion,
		.fc-timegrid-axis-cushion {
			color: #fff;
		}
	}
	.fc-header-toolbar {
		padding: 5px 0;

		.fc-toolbar-chunk {
			.fc-toolbar-title {
				color: white;
			}

			.btn {
				background-color: transparent;
				border: 1px solid white;
				color: #fff;
			}

			.btn:hover {
				background-color: rgba(255, 255, 255, 0.2);
			}
		}
	}

	//stylowanie w widoku miesiaca
	.fc-dayGridMonth-view .fc-col-header-cell {
		color: #fff;
		font-weight: 600;
	}

	.fc-daygrid-body {
		.fc-daygrid-day {
			.fc-daygrid-day-number {
				color: #fff;
				padding: 4px 5px;
			}
		}

		.fc-day-today {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}

	//stylowanie w widoku tygodni
	.fc-timeGridWeek-view {
		border: none;
		.fc-col-header-cell {
			color: white;
			font-weight: 500;
		}
		.fc-col-header .fc-day-today {
			background-color: rgba(255, 255, 255, 1);
			color: black;
		}
		.fc-day-today {
			background-color: rgba(255, 255, 255, 0.05);
		}
	}

	// stylowanie w widoku dnia
	.fc-timeGridDay-view {
		.fc-col-header-cell {
			color: white;
			font-weight: 500;
		}

		.fc-col-header .fc-day-today {
			background-color: rgba(255, 255, 255, 1);
			color: black;
		}
		.fc-day-today {
			background-color: rgba(255, 255, 255, 0.05);
		}
	}

	.fc-scroller::-webkit-scrollbar {
		width: 4px;
	}

	.fc-scroller::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 100vw;
	}

	.fc-scroller::-webkit-scrollbar-thumb {
		background-color: #fff;
		border-radius: 100vw;
	}

	.fc-scroller::-webkit-scrollbar-button {
		display: none;
	}
`;
