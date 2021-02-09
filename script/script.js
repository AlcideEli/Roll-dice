//alerte le joueur quand le dé = 1
function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.message = '1: round perdu, passez votre tour.';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

//Création du dé -> un canvas pour chaque face
function getFace(value) {
    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        switch (value) {
            case 1:
                ctx.fillStyle = "rgb(233, 75, 75)";
                ctx.beginPath();
                ctx.arc(35, 35, 5, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 2:
                ctx.fillStyle = "rgb(233, 75, 75)";
                ctx.beginPath();
                ctx.arc(15, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 55)
                ctx.arc(55, 55, 5, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 3:
                ctx.fillStyle = "rgb(233, 75, 75)";
                ctx.beginPath();
                ctx.arc(15, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(35, 35)
                ctx.arc(35, 35, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 55)
                ctx.arc(55, 55, 5, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 4:
                ctx.fillStyle = "rgb(233, 75, 75)";
                ctx.beginPath();
                ctx.arc(15, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 15)
                ctx.arc(55, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 55)
                ctx.arc(55, 55, 5, 0, Math.PI * 2);
                ctx.moveTo(15, 55)
                ctx.arc(15, 55, 5, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 5:
                ctx.fillStyle = "rgb(233, 75, 75)";
                ctx.beginPath();
                ctx.arc(15, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 15)
                ctx.arc(55, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 55)
                ctx.arc(55, 55, 5, 0, Math.PI * 2);
                ctx.moveTo(15, 55)
                ctx.arc(15, 55, 5, 0, Math.PI * 2);
                ctx.moveTo(35, 35)
                ctx.arc(35, 35, 5, 0, Math.PI * 2);
                ctx.fill();
                break;
            case 6:
                ctx.fillStyle = "rgb(233, 75, 75)";
                ctx.beginPath();
                ctx.arc(15, 15, 5, 0, Math.PI * 2);
                ctx.moveTo(15, 35);
                ctx.arc(15, 35, 5, 0, Math.PI * 2)
                ctx.moveTo(55, 15)
                ctx.arc(15, 55, 5, 0, Math.PI * 2);
                ctx.moveTo(55, 55)
                ctx.arc(55, 55, 5, 0, Math.PI * 2);
                ctx.moveTo(35, 55)
                ctx.arc(55, 35, 5, 0, Math.PI * 2);
                ctx.moveTo(15, 55)
                ctx.arc(55, 15, 5, 0, Math.PI * 2);
                ctx.fill();
                break;
            default:
                alert('erreur lors du chargement du dé');
        }

    } else {
        alert('Merci de mettre a jour votre navigateur')
    }

}

//Créer un background gris et ajoute une pastille au joueur courant
function getTurn(value) {

    var turn1 = document.querySelector('#turn1');
    var turn2 = document.querySelector('#turn2');

    if (value === 1) {

        if (turn1.getContext) {

            var ctx = turn1.getContext('2d');
            var ctx2 = turn2.getContext('2d');
            ctx2.clearRect(0, 0, turn2.width, turn2.height);

            ctx.fillStyle = "rgb(233, 75, 75)";
            ctx.beginPath();
            ctx.arc(5, 5, 5, 0, Math.PI * 2);
            ctx.fill();

        } else {
            alert('Merci de mettre a jour votre navigateur')
        }


        document.querySelector('.coldice').style.background = "linear-gradient(90deg, #f7f7f7 50%, #ffffff 50%)";
        document.querySelector('.row-newGame').style.background = "linear-gradient(90deg, #f7f7f7 50%, #ffffff 50%)";
        document.querySelector('.col1').style.background = "#f7f7f7";
        document.querySelector('.col2').style.background = "white";

    }
    if (value === 2) {

        if (turn2.getContext) {

            var ctx = turn2.getContext('2d');
            var ctx1 = turn1.getContext('2d');
            ctx1.clearRect(0, 0, turn1.width, turn1.height);

            ctx.fillStyle = "rgb(233, 75, 75)";
            ctx.beginPath();
            ctx.arc(5, 5, 5, 0, Math.PI * 2);
            ctx.fill();

        } else {
            alert('Merci de mettre a jour votre navigateur')
        }


        document.querySelector('.coldice').style.background = "linear-gradient(90deg, #ffffff 50%, #f7f7f7 50%)";
        document.querySelector('.row-newGame').style.background = "linear-gradient(90deg, #ffffff 50%, #f7f7f7 50%)";
        document.querySelector('.col1').style.background = "white";
        document.querySelector('.col2').style.background = "#f7f7f7";
    }

}


addEventListener('load', () => {


    //initialisation d'un nouvel objet Game
    game = new Game();
    game.idGame++;

    getTurn(1);

    //initialisation des variables
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');
    const currentScore1 = document.querySelector('#currentScore1');
    const currentScore2 = document.querySelector('#currentScore2');
    const dice = document.querySelector('#dice');
    const hold = document.querySelector('#hold');


    score1.innerHTML = 0;
    score2.innerHTML = 0;

    //Démarre une nouvelle partie
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', () => {

        if (confirm('Une nouvelle partie ?')) {
            score1.innerHTML = 0;
            score2.innerHTML = 0;
            currentScore1.innerHTML = 0;
            currentScore2.innerHTML = 0;
            game = new Game();
            game.idGame++
                console.log(game.idGame)
        }
    })




    //déclenche le lancé de dé
    dice.addEventListener('click', () => {

        //On vérifie que la partie est bien lancée
        if (game.idGame !== 0) {

            if (game.round % 2 === 0) { //si idGame est paire, c'est au tour de player 1

                getTurn(1);

                //tirage chiffre aléatoire
                let newscore = game.player1.getRandomNumber();
                game.player1.ROUND += newscore;
                currentScore1.innerHTML = game.player1.ROUND;

                getFace(newscore);

                if (newscore === 1) {
                    game.player1.ROUND = null;
                    presentAlert();
                    currentScore1.innerHTML = 0;
                    game.round++
                        getTurn(2);
                }

            } else { //si impaire, c'est au tour de player2

                getTurn(2);

                let newscore = game.player2.getRandomNumber();
                game.player2.ROUND += newscore;
                currentScore2.innerHTML = game.player2.ROUND;

                getFace(newscore)

                if (newscore === 1) {
                    game.player2.ROUND = 0;
                    presentAlert();
                    currentScore2.innerHTML = 0;
                    game.round++
                        getTurn(1);
                }
            }

        } else {

            alert('Merci de commencer une nouvelle partie')
        }

    })


    //Transmet le score courant(ROUND) au score global(GLOBAL), passe le tour au joueur 2
    hold.addEventListener('click', () => {

        if (game.round % 2 === 0) {

            globalScore1 = game.player1.addGlobal();

            score1.innerHTML = globalScore1;

            getTurn(2);

            //si le score a atteint 100
            if (globalScore1 >= 100) {
                alert('Bravo Joueur 1! vous gagnez la partie !')
                game.idGame = 0;
            }
            currentScore1.innerHTML = 0; //remise a niveau du score courant

            game.player1.ROUND = 0;

            game.round++; // incrémentation a chaque clic sur hold.

        } else {

            globalScore2 = game.player2.addGlobal();

            score2.innerHTML = globalScore2;

            getTurn(1);

            if (globalScore2 >= 100) {
                alert('Bravo Joueur 2! vous gagnez la partie !');
                game.idGame = 0;
            }
            currentScore2.innerHTML = 0;
            game.player2.ROUND = 0;

            game.round++;

        }
    })


})