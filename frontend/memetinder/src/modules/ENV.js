
export default function getVariable(variable) {
    const a = import.meta.env[variable]

    if (a === null) {
        console.log("Variavel Inválida");
        return
    }
    return a;
}
