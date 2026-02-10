const amount = document.getElementById("amount")

amount.oninput = () => {
    let value = amount.value.replace(/\D+/g, "")

    // Converte o valor pra centavos (ex: 150/100 = 1.5 == R$1,50)
    value = Number(value) / 100

    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return value
}