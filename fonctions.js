// Exercice 1 : Fonction d'addition de 2 nombre
console.log("Exercice 1 : ");

function Somme(nombre1, nombre2){
    return nombre1 + nombre2;
}

console.log(Somme(2,5));

// Exercice 2 : Fonction de récupération du plus grand nombre d'un tableau
console.log("Exercice 2 : ");

function MaxTableau(tableau){
    tableau.sort((a,b) => a-b);
    return tableau[tableau.length - 1];
}

const grandNombre = [343, 564, 23, 56, 98, 140, 530, 430, 923, 642, 88, 203];
console.log(MaxTableau(grandNombre));

// Exercice 3 : Fonction qui enlève les voyelles d'une chaine de caractères
console.log("Exercice 3 : ");

function EnleverVoyelle(phrase){
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    for (const v of voyelles) {
        phrase = phrase.replaceAll(v, '');
    }
    return phrase;
}

const phrase = "Salut je m'appelle Matteo et je suis en B-2";
console.log(phrase);
console.log(EnleverVoyelle(phrase));

// Exercice 4 : Fonction qui trie une chaine de caractères par ordre alphabétique
console.log("Exercice 4 : ");

function TrieChaine(chaine){
    let tableau = [];
    for (let i = 0; i < chaine.length; i++) {
        tableau.push(chaine[i])
    }
    tableau.sort()

    let newChaine = "";
    for (const i of tableau) {
        newChaine += i;
    }

    return newChaine
}
console.log(phrase)
console.log(TrieChaine(phrase));

// Exercice 5 : Fonction qui renvoie un nombre sous forme de mot
console.log("Exercice 5 : ");

function NombreEnMot(nombre){
    const chiffres = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
    const exeception = ["", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
    const dizaines = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];

    if(nombre < 10){
        return chiffres[nombre];
    }else{
        let diz = parseInt(nombre / 10);
        let ch = nombre % 10;
        let resultat = "";

        if(ch == 0){
            resultat = dizaines[diz];
        }else{
            if(diz == 1 || diz == 7 || diz == 9){
                if(diz == 1){
                    resultat = exeception[ch]
                }else{
                    resultat = dizaines[diz-1] + "-" + exeception[ch]
                }
    
            }else{
                resultat = dizaines[diz] + "-" + chiffres[ch];
            }
        }

        return resultat;
    }
}

console.log(NombreEnMot(68));

//Exercice 6 : Fonction qui renvoie les valeurs d'une des propriétés de chaque objet
console.log("Exercice 6 : ");
const etudiant= [
    {nom: "DI-RIENZO", prenom: "Mattéo", age: "19"},
    {nom: "JEAN", prenom: "Anthony", age: "19"},
    {nom: "HERMANDEZ", prenom: "Mathis", age: "20"},
    {nom: "PEYRARD", prenom: "Thibaut", age: "19"}
]

function ValeurParPropriete(objet, propriete){
    let result = [];

    for (const e of objet) {
        result.push(e[propriete]);
    }
    return result;
}

console.log(ValeurParPropriete(etudiant, "nom"));

//Exercice 7 : Fonction de trie de nombres dans l'ordre décroissant
console.log("Exercice 7 : ");

function TrieTableauOrdreDecroissant(tableau){
    tableau.sort((a,b) => a - b);
    tableau.reverse()
    return tableau;
}

console.log(grandNombre);
console.log(TrieTableauOrdreDecroissant(grandNombre));

//Exercice 8 : Fonction qui met en majuscule les voyelles d'une chaine de caractère
console.log("Exercice 8 : ");

function VoyelleEnMajuscule(chaine){
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    const voyellesMaj = ["A", "E", "I", "O", "U", "Y"];

    for (let i = 0; i < voyelles.length; i++) {
        chaine = chaine.replaceAll(voyelles[i], voyellesMaj[i]);
    }

    return chaine;
}

console.log(phrase);
console.log(VoyelleEnMajuscule(phrase));

//Exercice 9 : Fonction qui donne le nombre de voyelles dans une chaine de caractère
console.log("Exercice 9 : ");

function NombreVoyelle(chaine = ""){
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let nbVoyelle = 0;
    for (let i = 0; i < chaine.length; i++) {
        if(voyelles.includes(chaine[i])){
            nbVoyelle ++;
        }
    }
    return nbVoyelle;
}
console.log(NombreVoyelle(phrase));

//Exercice 10 : Fonction qui met en majuscule les consonnes d'une chaine de caractère
console.log("Exercice 10 : ");

function ConsonneEnMajuscule(chaine= ""){
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let consonneMaj = ""
    for (let i = 0; i < chaine.length; i++) {
        if(!voyelles.includes(chaine[i])){
            consonneMaj += chaine[i].toUpperCase();
        }else{
            consonneMaj += chaine[i];
        }
    }

    return consonneMaj;
}

console.log(ConsonneEnMajuscule(phrase))