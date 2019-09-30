export default function generateTurns(persons, tasks, n) {
    const result = [];
    const len = persons.length;
    for(let i =0; i < n; i++) {
        const turn = {};
        persons.forEach((value, index) => {
            turn[value] = tasks[(i + index) % len];
        });
        result.push(turn);
    }
    return result;
}