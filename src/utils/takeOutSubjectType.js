export const takeOutSubjectType = subject => {
	let regex = /\((.*?)\)/;

	if (subject.includes('(') && subject.includes(')')) {
		return regex.exec(subject)[1];
	}
};
