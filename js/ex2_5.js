//cria referência ao form e h3
    const frm = document.querySelector("form")
    const resp = document.querySelector("h3")

    //cria o ouvinte do evento quando o botão é clicado
    frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const total = preco * 2
    const desconto = total % 1
    const valorfinal = total - desconto

    resp.innerText = `Leve duas unidades de:${produto} por: ${valorfinal.toFixed(2)}`
    
    e.preventDefault()
})
   
