// On créait une classe pour définir les paramètres de la balle
class Balle {
    constructor($element) {
        this.$element = $element;

        this.hauteur = $element.height();
        this.largeur = $element.width();

        this.positionX = parseInt($element.css("left"));
        this.positionY = parseInt($element.css("top"));

        this.vitesseX = 4;
        this.vitesseY = 1;
        this.angle = Math.random() * 2 * Math.PI;
    }

    get bas() {
        return this.positionY + this.hauteur;
    }

    set bas(value) {
        this.positionY = value - this.hauteur;
    }

    get droite() {
        return this.positionX + this.largeur;
    }

    set droite(value) {
        this.positionX = value - this.largeur;
    }

    bouger() {
        this.positionX += Math.cos(this.angle) * this.vitesseX;
        this.positionY += Math.sin(this.angle) * this.vitesseY;

        this.limite();
        this.majHTML();
    }

    /* On définit les limites du terrain */
    limite() {


        if (this.positionX < 0) {
            terrain.tiltGauche();
            this.positionX = 0;
            this.vitesseX *= -1;
            this.recentrer();
        }


        if (this.droite > terrain.largeur) {
            terrain.tiltDroite();
            this.droite = terrain.largeur;
            this.vitesseX *= -1;
            this.recentrer();
        }


        if (this.positionY < 0) {
            terrain.tiltHaut();
            this.positionY = 0;
            this.vitesseY *= -1;
        }


        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();
            this.bas = terrain.hauteur;
            this.vitesseY *= -1;
        }


        if (this.positionX < raquetteGauche.droite) {
            if (this.bas > raquetteGauche.positionY) {
                if (this.positionY < raquetteGauche.bas) {
                    this.vitesseX *= -1;
                }
            }
        }


        if (this.droite > raquetteDroite.positionX) {
            if (this.bas > raquetteDroite.positionY) {
                if (this.positionY < raquetteDroite.bas) {
                    this.vitesseX *= -1;
                }
            }
        }

    }

    recentrer() {
        this.positionX = terrain.largeur / 2 - this.largeur / 2;
        this.positionY = terrain.hauteur / 2 - this.hauteur / 2;
    }

    majHTML() {
        this.$element.css("left", balle.positionX);
        this.$element.css("top", balle.positionY);
    }

}