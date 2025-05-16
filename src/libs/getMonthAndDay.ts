

function getMonthAndDay(dateString: string): string {
const dateParts = dateString.split(' ');
    return `${dateParts[0]} ${dateParts[1].replace(',', '')}`;
}

export { getMonthAndDay };