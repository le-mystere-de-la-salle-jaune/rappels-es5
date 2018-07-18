function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function(){ 
        return this.nom + " " + this.prenom + " " + pseudo; 
    };

    this.getInitials = function(){
        return this.prenom.charAt(0) + this.nom.charAt(0);
    }
}

var jules = new Personne("LEMAIRE","Jules","jules77");
var paul = new Personne("LEMAIRE","Paul","paul44");

console.log( jules.nom );
console.log( jules.prenom );
console.log( jules.pseudo );
console.log( jules.getNomComplet());


function afficherPersonne(p){
    console.log( p.nom );
    console.log( p.prenom );
    console.log( p.pseudo );
    console.log( p.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = "jules44";
afficherPersonne(jules);

console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age);
jules.age = 30;
console.log(jules.age);

console.log(jules.getInitials());

var robert = {
    prenom : "robert",
    nom : "LEPREFET",
    pseudo : "robert77",
    getNomComplet : function(){ return this.prenom + " " + this.nom + " " + this.pseudo}
}

afficherPersonne(robert);

function Client(numeroClient, nom, prenom, pseudo){
    this.numeroClient = numeroClient,
    Personne.call(this, nom, prenom, pseudo),
    this.getInfos = function(){ 
        return this.numeroClient + " " + this.nom + " " + this.prenom; 
    }
}


var steve = new Client("A01", "LUCAS", "Steve", "steve44");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());