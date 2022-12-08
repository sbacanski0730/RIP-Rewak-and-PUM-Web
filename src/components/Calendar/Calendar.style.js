import styled from 'styled-components';

export const StyledCalendar = styled.div`
	width: 800px;
	height: 800px;
	padding: 10px 10px;
	.fc {
		user-select: none;

		background-color: transparent;
		height: 100%;
		width: 100%;
		.fc-timegrid-slot-label-cushion,
		.fc-timegrid-axis-cushion {
			color: #fff;
		}
		.tooltip {
			opacity: 1;
		}
	}

	.fc-timegrid-now-indicator-arrow {
		border-color: yellow;
		border-width: 5px 0 5px 6px;
		border-bottom-color: transparent;
		border-top-color: transparent;
	}

	.fc-timegrid-now-indicator-line {
		border-color: yellow;
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
		.fc-daygrid-day-number {
			color: #fff;
			padding: 4px 5px;
		}
		.fc-day-today {
			background-color: rgba(255, 255, 255, 0.2);
		}

		.fc-daygrid-day-events {
			.fc-daygrid-event {
				background-color: #fff;
				border-radius: 0;
				padding: 2px 2px;

				.fc-daygrid-event-dot {
					display: none;
				}
			}
			.tooltip {
				background-color: #000;
				border: 1px solid white;
				/* width: 150px; */

				.tooltip-arrow {
					display: none;
				}
				.tooltip-inner {
					color: #fff;
					text-align: center;
					border-radius: 0;
					//tekst wewnatrz tooltip'a
				}
			}
		}
		.fc-daygrid-more-link {
			color: #fff;
			padding-left: 2px;
		}
	}

	.fc-popover {
		user-select: none;
		background-color: #000;
		/* border: 1px solid #fff; */
		border-radius: 0;
		box-shadow: 7px 6px 10px -7px rgba(255, 255, 255, 1);
		.fc-popover-header {
			background: transparent;
			color: #fff;
			.fc-popover-title {
				letter-spacing: 2px;
				padding-left: 5px;
				padding-top: 4px;
				font-size: 18px;
			}
			.fc-popover-close {
				opacity: 1;
			}
		}
		.fc-popover-body {
			.fc-daygrid-event {
				color: #fff;
				border: 1px solid #fff;
				border-radius: 0;
				padding: 4px 10px;
				font-size: 17px;
				display: flex;
				flex-direction: row;
				/* justify-content: space-between; */

				.fc-daygrid-event-dot {
					display: none;
				}
			}
		}
	}

	//stylowanie w widoku tygodni
	.fc-timeGridWeek-view {
		border: none;
		.fc-col-header-cell {
			color: white;
			font-weight: 500;
			/* border-bottom: 1px solid #000; */
		}

		.fc-col-header .fc-day-today {
			/* background-color: rgba(255, 255, 255, 1); */
			border-bottom: 1px solid black;
			color: black;
			.fc-scrollgrid-sync-inner {
				background-color: rgba(255, 255, 255, 1);
				/* border-bottom: 1px solid #000; */
			}
		}
		.fc-day-today {
			background-color: rgba(255, 255, 255, 0.05);
		}
		.fc-timegrid-event-harness {
			.fc-timegrid-event {
				background-color: rgba(255, 255, 255, 1);
				box-shadow: none;
				border: none;
				border-radius: 0;
				.fc-event-main {
					padding: 2px;
					/* border: 1px solid green; */

					.fc-event-main-frame {
						padding: 0 2px;
						color: #000;
						.fc-event-time {
							color: #000;
							font-size: 14px;
							font-weight: 400;
							text-align: center;
						}
						.fc-event-title-container {
							.fc-event-title {
								color: #000;
								font-weight: 600;
								text-align: center;
							}
						}
					}
				}
			}
			.tooltip {
				/* opacity: 1; */
				.tooltip-arrow {
					display: none;
				}
				.tooltip-inner {
					background-color: #000;
					border-radius: 0;
				}
			}
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
		.fc-timegrid-col-frame {
			/* background-color: rgba(249, 248, 113, 0.5); */

			.fc-timegrid-event-harness {
				/* background-color: rgba(249, 248, 113, 0.5); */
				.fc-timegrid-event {
					margin-left: 20px;
					width: 50%;
					background-color: rgba(255, 255, 255, 1);
					box-shadow: none;
					border: none;
					border-radius: 0;
					.fc-event-main {
						padding: 2px;
						/* border: 1px solid green; */

						.fc-event-main-frame {
							padding: 0 2px;
							color: #000;
							display: flex;
							flex-direction: row;
							gap: 20px;
							.fc-event-time {
								color: #000;
								font-weight: 400;
								font-size: 17px;
							}
							.fc-event-title-container {
								.fc-event-title {
									color: #000;
									font-weight: 600;
									font-size: 17px;
								}
							}
						}
					}
				}
				.tooltip {
				}
			}
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
