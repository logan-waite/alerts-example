export function generateID() {
    return Array(10)
        .fill(0)
        .map((_) => {
            const num = Math.floor(Math.random() * 20)
            if (num >= 10) {
                return ['A','B','C','D','E','F','G','H','I','J'][num/10]
            } else {
                return num
            }
        })
        .join('')
}

export function capitalizeWord(string) {
    const [head, ...tail] = string;
    return [head.toUpperCase(), ...tail].join('')
}