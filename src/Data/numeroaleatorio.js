function gerarnumeronaocontido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ?
        gerarnumeronaocontido(min, max, array) :
        aleatorio
}

function gerarnumero(qtde) {
    const numero = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novonumero = gerarnumeronaocontido(1, 60, nums)
            return [...nums, novonumero]
        }, [])
        .sort((n1, n2) => n1 - n2)

    return numero
}
console.log(gerarnumero(7))