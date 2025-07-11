//cria referencia ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um ouvinte de evento, acionando quando o botão submit é clicado
frm.addEventListener("submit", (e) => {
const titulo = frm.inTitulo.value //obtém conteúdo dos campos
const duracao = Number(frm.inDuracao.value)

const horas = Math.floor(duracao / 60) // arrendoda para baixo o result.
const minutos = duracao % 60 // obtem o resto da divisão

resp1.innerText = titulo
resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

e.preventDefault() //envio formulario
});


