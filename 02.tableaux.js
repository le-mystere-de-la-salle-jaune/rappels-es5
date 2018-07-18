var villes = ["nantes","paris","saint-nazaire","angers","le mans"];

villes.forEach(function(element){ console.log(element); });

var villeContainA = villes.every(function(element){ return element.match("a")});
var villeContainAuMoinsTiret = villes.some(function(element){ return element.match("-")});

console.log("Ville contient A :", villeContainA);
console.log("Au moins une ville contient un tiret :", villeContainAuMoinsTiret)

var villesSansTiretSansEspace = villes.filter(function(element){ return !element.match(/[-\s]/) });
console.log("Villes sans espaces et sans tiret :", villesSansTiretSansEspace);

var villeAvecS = villes.filter(function(element){ 
                                return element.match(/.*s$/);
                            })
                        .map(function(element){ 
                                return element.toUpperCase(); 
                            });

var villesFiniSAndUppercase = villeAvecS.forEach(function(element) { element.toUpperCase() });
console.log("ville sans s et sans tiret :", villeAvecS);