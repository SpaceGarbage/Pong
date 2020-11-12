//Définir les variables du script

let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

//Script terrain
class Terrain{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}

//Script vitesse de la balle 
class Balle{
    constructor($element){
        this.$element=$element;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
        this.vitesseX=2;
        this.vitesseY=0.5;
        this.diametre=$element.height();
    }

    majHTML(){
        this.$element.css("left",balle.gauche);
        this.$element.css("top",balle.haut);
    }
}

//Script déplacement de la balle
setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX; 
    balle.haut=balle.haut+balle.vitesseY;
 
    if(balle.gauche>terrain.largeur-balle.diametre){
        balle.gauche=terrain.largeur-balle.diametre;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur-balle.diametre){
        balle.haut=terrain.hauteur-balle.diametre;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    balle.majHTML();

}, 10);

let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
