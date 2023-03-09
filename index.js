
// Exercice 1 : Afficher les données d'un tableau
console.log("Exercice 1 :");
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const n of nombres) {
    console.log(n);
}

// Exercice 2 : Afficher la première donnée d'un tableau
console.log("Exercice 2 :");
const semaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
console.log(semaines[0]);

// Exercice 3 : Somme des données d'un tableau
console.log("Exercice 3 :");
let nombrePaire = [];
for (let i = 0; i <= 10; i++) {
    if((i % 2) == 0){
        nombrePaire.push(i);
    }    
}
let sommeNombrePaire = 0;
for (let o = 0; o < nombrePaire.length; o++) {
    sommeNombrePaire += nombrePaire[o];
}
console.log("Somme = " + sommeNombrePaire);

// Exercice 4 : Ajouter un élément au tableau
console.log("Exercice 4 :");
const fruit = ["Pomme", "Fraise", "Framboise", "Banane", "Orange"];
fruit.push("Papaye");
console.log(fruit);

// Exercice 5 : Moyenne des données d'un tableau
console.log("Exercice 5 :");
const noteEtudiant = [10, 12, 15, 6, 18];
let sommeNoteEtudiant = 0;
for (const note of noteEtudiant) {
    sommeNoteEtudiant += note;
}

let moyenneNoteEtudiant = sommeNoteEtudiant / noteEtudiant.length;
console.log("Moyenne = " + moyenneNoteEtudiant);

// Exercice 6 : Rechercher une valeur dans un tableau
console.log("Exercice 6 :");
const oiseaux = ["Aigle", "Faucon", "Pie", "Corbeau"];
const searchOiseaux = "Pie";
let trouver = false
for (const oi of oiseaux) {
    if(oi == searchOiseaux){
        trouver = true;
    }
}

if(trouver == true){
    console.log(searchOiseaux + " est bien compris dans le tableau");
}else{
    console.log(searchOiseaux + " n'est pas compris dans le tableau");
}

// OU :
console.log(oiseaux[oiseaux.indexOf(searchOiseaux)]);


// Exercice 7 : Trier les valeurs d'un tableau
console.log("Exercice 7 :");
const pays = ["France", "Allemagne", "Chine", "Argentine"];
pays.sort();
console.log(pays);

// Exercice 8 : Afficher le 3ème élément d'un tableau
console.log("Exercice 8 :");
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
console.log(mois[2]);

// Exercice 9 :
console.log("Exercice 9 :");
let nombreAleatoire = [];
for (let i = 0; i < 10; i++) {
    nombreAleatoire.push(Math.random() * 10);
}

nombreAleatoire.sort()
console.log("Valeur min: " + nombreAleatoire[0] + " max: " + nombreAleatoire[nombreAleatoire.length -1]);

// Exercice 10 : 
console.log("Exercice 10 :");
const phrase = [
    "Salut ça va ?",
    "ça va tranquille et toi ?",
    "je vais bien merci"
];
let longueurMax = 0;
for (const ph of phrase) {
    console.log(ph.length);
    if(ph.length > longueurMax){
        longueurMax = phrase.indexOf(ph);
    }
}

console.log(phrase[longueurMax]);