function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="/assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="/assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
    `
}