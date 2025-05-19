

function getMonthAndDay(dateString: string): string {
const dateParts = dateString.split(' ');
    if (dateString.length === 0 || dateString === 'TBD') {
        return 'TBD';
    }
    if (dateParts.length < 2) {
        return 'TBD';
        
    }
    return `${dateParts[0]} ${dateParts[1].replace(',', '')}`;
}

export { getMonthAndDay };