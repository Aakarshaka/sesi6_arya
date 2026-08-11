export function kalkulator(a, b, operator) {
    switch (operator) {
        case "+":
            return `Hasil dari ${a} + ${b} = ${a + b}`;
        case "-":
            return `Hasil dari ${a} - ${b} = ${a - b}`;
        case "*":
            return `Hasil dari ${a} * ${b} = ${a * b}`;
        case "/":
            if (b === 0) {
                return `Tidak bisa membagi dengan nol`;
            }
            return `Hasil dari ${a} / ${b} = ${a / b}`;
        case "%":
            return `Hasil dari ${a} % ${b} = ${a % b}`;
        default:
            return `Operator tidak valid`;
    }
}