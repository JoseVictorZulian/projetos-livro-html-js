//cria referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvinte de evento, acionando quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
const quilo = Number(frm.inQuilo.value) //obtém conteúdo dos campos
const consumo = Number(frm.inConsumo.value)

const valor = (quilo / 1000) * consumo // 

resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

e.preventDefault() //evita o envio formulario
});