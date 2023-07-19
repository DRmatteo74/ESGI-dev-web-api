# Développement WEB et API (note de cours)

Nom : DI-RIENZO

Prénom : Mattéo

Classe : B-2 ESGI

Année: 2022-2023

# Variables

- var : variable avec une portée de la fonction courante ou global si elle est déclaré à l’extérieur d’une fonction
- let : variable limité à la portée du bloc de code
- const : variable constante qui ne peut pas être modifier

let et const permettent de mieux contrôler la portée de la variable

Les variables prennent en charge plusieurs types de données : chaines de caractère, nombre, booléen….

## Chaine de caractère :

Pour concaténer 2 chaines, 2 possibilités : chaine1 + chaine2 ou chaine1.concat(chaine2).
Nombre → String : nombre.toString()

Les chaines fonctionnent comme des tableaux. Exemple : 

```jsx
let texte = "Hello Word"
console.log(texte[0]) // Affiche 'H'
console.log(texte.length) // Affiche 10
```

Rechercher une lettre par rapport à son emplacement : texte.charAt(integer)

Rechercher une chaine : texte.indexOf(string)

## Tableaux

```jsx
var tableau = [0, 1, 2, 3]
tableau.push(4) // Ajoute 4 à la fin du tableau : [0, 1, 2, 3, 4]
tableau.splice(0,1) // Supprime 1 élément à partir de l'index 0 : [1, 2, 3, 4]
```

# Condition

Même chose que dans les autres langages : if else 

### Structure de controle

Condition sur une seule ligne : 

```jsx
condition ? valeurSiVrai : valeurSiFaux
var age = 25;
var statut = age >= 18 ? "Majeur" : "Mineur" // Ici Majeur
```

# Boucle

while : tant que 

do while : similaire à while sauf qu’elle s’exécute au moins une fois avant de vérifier la condition.

for(let i = 0; i < 3; i++) : Pour i allant de 0 à 3

for (variable in objet) : Pour parcourir un objet

for(variable of tableau) : Pour parcourir un tableau, une chaine de caractère

# Fonction

```jsx
function nomDeLaFonction(parametres){
	//instruction
	return resultat
}

// OU 

const nomDeLaFonction = (parametres) => instruction

// OU 

const nomDeLaFonction = (parametres) => {
	instruction
}

// OU 
const nomDeLaFonction = parametres => instruction
```

# Timeout

```jsx
setTimeout(function(){
	console.log('callback')
}, 5) // Attend 5 ms avant d'éxécuter la fonction
console.log('test')
// Résultat : test, callback
```

# Regex

Source : [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

```jsx
const removeVowels = (str)=>{
	return str.replace(/[aeiouy]/gi, '')
}
// Fonction qui supprime toute les voyelles en utilisant une expressions régulière (REGEX)
```

# Fetch

fetch → requête asynchrone qui retourne une Promesse de la réponse d’un site web

```jsx
fetch('google.com')
```

# API

API : demande au serveur directement la ressource via le code contrairement au WEB

Réponse en format JSON ou XML

L’API REST (REST ful Representational State Transfer) désigne un ensemble un ensemble de règle de contrainte de construction des APIs (c’est un standard). 
Une API qui récupère la météo possède des ressources lié à des URIs (Uniform Resource Identifier) pour pouvoir y accéder. (par ville, par jours …)

weather forecast  api 

Client désigne la machine qui va chercher la ressource sur un serveur, une API. L’URI est composé de : VERB/ressource par exemple : [http://localhost:3000/](http://localhost:3000/) et de Headers : métadonnée associé à la requête http composé par exemple de 
Accept : indique au serveur le format de réponse, 
Authorization : indique au serveur si on a le droit de faire cette requête (Token, access Token), 
Body : 

Réponse : Code de statuts : 2XX (serveur a envoyé la ressource voulu), 3XX (moins avec une API : fait intervenir une redirection), 4XX (le client ne sait pas bien communiquer (pas bien fait la requête) avec l’API 404 RESSOURCE NOT FOUND), 5XX (l’API ne fonctionne pas)

Verb : GET, POST, PATCH, PUT, DELETE

Etudier le standard REST. 

une api STATELESS : le client et le serveur ne doivent pas enregistré les échanges. Chaque cycle de requête réponse prenne en info juste ce qu’elles ont besoin.

POSTMAN, INSOMNIA : c’est notre client pour API

Projet : 

`npm init` pour initialiser un projet node

créer un fichier `index.js`

`npm install express` → Installe la dépendance express. On peut la trouver dans `package.json`

```jsx
const express = require('express') // permet d'importer express. Express sert à créer une application WEB

const app = express(); // génère une application express

app.use('/', (req, res, next) =>{ // fonction qui prend en paramètre un chemin ("/"), la requete, la réponse et next qui permet de lancer d'autre middleware
    res.send('<h1>hello word</h1>');
});

app.listen(3000); // lance l'application sur le port 3000
```

Middleware : fonction comme `app.use()` elle ont besoin d’un chemin pour la ressource et de l’URI 

ORM : doctrine, entityframework : permet de contrôler une base de donnée avec des lignes de code

On parle d’une api REST quand une ressource unique est accessible par une route

OAuth2 : norme conçu pour permettre à un site internet d’accéder à des ressources hébergées par d’autre application Web au nom d’un utilisateur