const data = new Date;
//document.getElementById('data').innerHTML = dataAtual;

const dia = String (data.getDate()).padStart(2,'0')
const mes = String(data.getMonth()+1).padStart(2,'0')
const dataAtual = `${dia}/${mes}`

document.getElementById('data').innerHTML = `A DATA DE HOJE É: ${dataAtual}`;





