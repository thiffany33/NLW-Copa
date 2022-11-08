function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="/assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="/assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
    `
}

function createCard(data, day, games) {
    return `
    <div class="card">
        <h2>${data} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
        </div>
    
    `
}