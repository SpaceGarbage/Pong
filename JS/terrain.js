/* Classe pour définir les paramètres du terrain: dimensions */
class Terrain {
    constructor($element) {
        this.$element = $element;

        this.largeur = $element.width();
        this.hauteur = $element.height();
    }

    /* Effet clignotant */

    tiltHaut() {
        this.$element.addClass("tiltHaut");
        let ici = this;

        setTimeout(
            function () {

                ici.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    tiltBas() {

        this.$element.addClass("tiltBas");
        let ici = this;

        setTimeout(
            function () {

                ici.$element.removeClass("tiltBas");
            }, 200
        );
    }

    tiltDroite() {
        this.$element.addClass("tiltDroite");
        let ici = this;

        setTimeout(
            function () {
                ici.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    tiltGauche() {

        this.$element.addClass("tiltGauche");
        let ici = this;

        setTimeout(
            function () {
                ici.$element.removeClass("tiltGauche");
            }, 200
        );
    }
}