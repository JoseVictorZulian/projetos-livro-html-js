//referencias ao html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

//cria um ouvinte adicionado quando botão for clicado
frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)
    const entrada = (50 * preco) / 100 
    const saldo = (preco - entrada) / 12

    resp1.innerText = `Promoção: ${veiculo}`//exibe resposta 
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(3)}`
    resp3.innerText = `+12x de R$ ${saldo.toFixed(3)}`
    
    e.preventDefault()
})