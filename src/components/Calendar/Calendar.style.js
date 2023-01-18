import styled from 'styled-components';

let wykColor = 'rgba(127, 0, 255, 1)';
let labColor = 'rgba(153, 153, 0, 1)';
let pColor = 'rgba(238, 252, 245, 1)';
let wtColor = 'rgba(217, 131, 26, 1)';
let cwColor = 'rgba(150, 199, 219, 1)';
let semColor = 'rgba(255, 153, 51, 1)';

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

				&.wyk {
					background-color: ${wykColor};
				}
				&.lab {
					background-color: ${labColor};
				}
				&.cw {
					background-color: ${cwColor};
				}
				&.ćw {
					background-color: ${cwColor};
				}
				&.p {
					background-color: ${pColor};
				}
				&.wt {
					background-color: ${wtColor};
				}
				&.sem {
					background-color: ${semColor};
				}
			}

			.tooltip {
				background-color: #000;
				border: 1px solid white;

				.tooltip-arrow {
					display: none;
				}
				.tooltip-inner {
					color: #fff;
					text-align: center;
					border-radius: 0;
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
				border-radius: 0;
				padding: 4px 10px;
				font-size: 17px;
				display: flex;
				flex-direction: row;

				.fc-daygrid-event-dot {
					display: none;
				}

				&.wyk {
					background-color: ${wykColor};
				}
				&.lab {
					background-color: ${labColor};
				}
				&.cw {
					background-color: ${cwColor};
				}
				&.ćw {
					background-color: ${cwColor};
				}
				&.sem {
					background-color: ${semColor};
				}
				&.p {
					background-color: ${pColor};
				}
				&.wt {
					background-color: ${wtColor};
				}
			}
			.fc-timegrid-event {
				border-radius: none;
				&.wyk {
					background-color: ${wykColor};
				}
				&.lab {
					background-color: ${labColor};
				}
				&.cw {
					background-color: ${cwColor};
				}
				&.ćw {
					background-color: ${cwColor};
				}
				&.sem {
					background-color: ${semColor};
				}
				&.p {
					background-color: ${pColor};
				}
				&.wt {
					background-color: ${wtColor};
				}
				.fc-event-main-frame {
					font-size: 15px;
					padding-left: 5px;
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
		}

		.fc-col-header .fc-day-today {
			border-bottom: 1px solid black;
			color: black;
			.fc-scrollgrid-sync-inner {
				background-color: rgba(255, 255, 255, 1);
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

				&.wyk {
					background-color: ${wykColor};
				}
				&.lab {
					background-color: ${labColor};
				}
				&.cw {
					background-color: ${cwColor};
				}
				&.ćw {
					background-color: ${cwColor};
				}
				&.sem {
					background-color: ${semColor};
				}
				&.p {
					background-color: ${pColor};
				}
				&.wt {
					background-color: ${wtColor};
				}

				.fc-event-main {
					padding: 2px;

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
			.fc-timegrid-event-harness {
				border: 1px solid white;
				.fc-timegrid-event {
					margin-left: 20px;
					background-color: rgba(255, 255, 255, 1);
					box-shadow: none;
					border: none;
					border-radius: 0;
					.fc-event-main {
						padding: 2px;

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
					&.wyk {
						background-color: ${wykColor};
					}
					&.lab {
						background-color: ${labColor};
					}
					&.cw {
						background-color: ${cwColor};
					}
					&.ćw {
						background-color: ${cwColor};
					}
					&.sem {
						background-color: ${semColor};
					}
					&.p {
						background-color: ${pColor};
					}
					&.wt {
						background-color: ${wtColor};
					}
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
