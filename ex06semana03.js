const root = document.getElementById('root')

const musicas = [
  {nome: "Listen to your heart", cantor: "Roxette"},
  {nome: "Bloody Mary", cantor: "Lady Gaga"},
  {nome: "Bones", cantor: "Imagine Dragons"},
  {nome: "Sugar honey ice and tea", cantor: "Bring me the horizon"},
  {nome: "Rock you like a hurricane", cantor: "Scorpions"},
  {nome: "Pure/Honey", cantor: "Beyoncé"},
]


let playlistString = JSON.stringify(playlist);

localStorage.setItem("musicas gravadas", playlistString);

let playlistStringRetornada = localStorage.getItem("musicas gravadas");

playlistRetornadaeConvertida = JSON.parse(playlistStringRetornada);


for (var i of playlistRetornadaeConvertida) {
    root.innerHTML +=
    `<tr>
    <td>${playlistRetornadaeConvertida[i].nome}</td>
    <td>${playlistRetornadaeConvertida[i].cantor}</td>
    <td><button id=</td>
    </tr>`
}