class Game {

    constructor(player1, player2, round, idGame) {

        this.player1 = new Player
        this.player2 = new Player
        this.round = 0
        this.idGame = 0
    }
}

class Player {

    constructor(GLOBAL, ROUND) {
        this.GLOBAL = 0;
        this.ROUND = 0;
    }

    //récupère un chiffre au hasard entre 1 et 6, simule le lancé de dé
    getRandomNumber = () => {
        return Math.ceil(Math.random() * 6);
    }

    //Récupère le score courant
    getROUND = () => {
        return this.ROUND;
    }

    //Ajoute le score temporaire(ROUND) au score Global
    addGlobal = () => {
        return this.GLOBAL += this.getROUND();
    }

}