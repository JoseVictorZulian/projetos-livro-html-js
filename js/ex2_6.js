//criando a referencia ao html 
	const frm = document.querySelector("form")
	const resp = document.querySelector("h3")


	//criando ouvinte do evento quando o botão é clicado
	frm.addEventListener("submit", (e)=> {
	
	const min = 15
	const preco = Number(frm.inPreco.value)  // a cada 15 min 
	const seu_tempo = Number(frm.inTempo.value)
	const total = Math.ceil(seu_tempo / min) * preco
	
	resp.innerText = `Sua hora custou R$: ${total.toFixed(2)}`
	e.preventDefault()
})
