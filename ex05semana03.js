const root = document.getElementById('root')

const musicas = [
  {nome: "Listen to your heart", cantor: "Roxette"},
  {nome: "Bloody Mary", cantor: "Lady Gaga"},
  {nome: "Bones", cantor: "Imagine Dragons"},
  {nome: "Sugar honey ice and tea", cantor: "Bring me the horizon"},
  {nome: "Rock you like a hurricane", cantor: "Scorpions"},
  {nome: "Pure/Honey", cantor: "Beyoncé"},
]

const tableBody = musicas.map((musica) => {
  return `<tr>
    <td>${musica.nome}</td>
    
    <td>${musica.cantor}</td>
  </tr>`
}).join('')

const table = `<table >
  <tr>
  <b>
    <td>Nome</td>
    <td>Cantor</td>
    </b>
  </tr>
  ${tableBody}
</table>`;

root.insertAdjacentHTML('beforeend', table)