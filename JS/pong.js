//Script terrain

class Terrain {
    constructor($element) {
        this.$element = $element;
        this.largeur = $element.width();
        this.hauteur = $element.height();
    }
}

//Script vitesse de la balle 

class Balle {
    constructor($element) {
        this.$element = $element;
        this.gauche = parseInt($("#balle").css("left"));
        this.haut = parseInt($("#balle").css("top"));
        this.vitesseX = 2;
        this.vitesseY = 0.5;
        this.diametre = $element.height();
        this.sensx = 1;
        this.sensy = 1;
    }

    majHTML() {
        this.$element.css("left", balle.gauche);
        this.$element.css("top", balle.haut);
    }
}

//Définir les paramètres de la raquette 

class Raquette {
    constructor($element) {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));

        this.direction = 1;
        this.vitesse = 3;
    }
    mouvement() {
        this.positionY += this.vitesse * this.direction;
        this.limite();
        this.majHTML();
    }

    rebond() {
        this.direction *= -1;
    }

    majHTML() {
        this.$element.css("top", this.positionY);
    }

    bordure() {
        if (this.positionY + this.hauteur > terrain.hauteur) {
            this.positionY = terrain.hauteur - this.hauteur;
            this.changeDirection();
        }
        if (this.positionY < 0) {
            this.positionY = 0;
            this.changeDirection();
        }
    }
}

//Script déplacement de la balle

setInterval(function () {
    balle.gauche = balle.gauche + balle.vitesseX * balle.sensx;
    balle.haut = balle.haut + balle.vitesseY * balle.sensy;

    if (balle.gauche > terrain.largeur - balle.diametre) {
        balle.gauche = terrain.largeur - balle.diametre;
        balle.sensx = -1;
    }
    if (balle.gauche < 0) {
        balle.gauche = 0;
        balle.sensx = 1;
    }
    if (balle.haut > terrain.hauteur - balle.diametre) {
        balle.haut = terrain.hauteur - balle.diametre;
        balle.sensy = -1;
    }
    if (balle.haut < 0) {
        balle.haut = 0;
        balle.sensy = 1;
    }

    balle.majHTML();

}, 10);

//Définir les variables du script

let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));

let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));

let raquettegauche = new Raquette($("#gauche"));
let raquettedroite = new Raquette($("#droite"));

//Sens balle aléatoire

balle.sensx = balle.sensx * (Math.random() < 0.5) ? -1 : 1;
balle.sensy = balle.sensy * (Math.random() < 0.5) ? -1 : 1;

//Boucle pour les fonctions précédentes

setInterval(function(){
    balle.majHTML();
    balle.bouger();
    raquettegauche.bouger();
    raquettedroite.bouger();
    }, 10);
