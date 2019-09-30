export default function generateWeeks(turns, from) {
    from.setHours(0, 0, 0, 0);
    const result = {};
    turns.forEach((turn, index) => {
        if (index === 0) {
            result.headers = Object.keys(turn);
            result.weeks = [];
        }
        result.weeks.push({
            done: currentWeek(from).getTime() > nextWeeks(from, index).getTime(),
            current: currentWeek(from).getTime() === nextWeeks(from, index).getTime(),
            week: nextWeeks(from, index).toLocaleDateString('it'),
            turns: result.headers.map(person => turn[person])
        });
    });
    return result;
}

function nextWeeks(date, weeks) {
    const result = new Date(date);
    result.setDate(date.getDate() + weeks * 7);
    return result;
}

function previous(date) {
    const result = new Date(date);
    result.setDate(date.getDate() - 1);
    return result;
}

function currentWeek(from) {
    const day = from.getDay();
    let date = new Date();
    while (date.getDay() !== day) {
        date = previous(date);
    }
    date.setHours(0, 0, 0, 0);
    return date;
}