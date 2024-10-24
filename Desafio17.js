const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'Pac Man.jpeg' },
    { nome: 'Mario Bros', imagem: 'Mario Bros.jpeg' },
    { nome: 'Pitfall', imagem: 'PitFall.jpeg' },
    { nome: 'Enduro', imagem: 'Enduro.jpeg' },
    { nome: 'Donkey Kong', imagem: 'Donkey Cong.jpeg' },
    { nome: 'Galaxy', imagem: 'Galaxy.jpg' },
    { nome: 'Tennis', imagem: 'Tetris.jpeg' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});