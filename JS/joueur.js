
class Joueur{
    constructor($element){
        this.$element=$element
		this.score = 0;
    }
	
	addScore(pts){
		
		this.score += pts;
		this.$element.text(this.score);
		
	}
}