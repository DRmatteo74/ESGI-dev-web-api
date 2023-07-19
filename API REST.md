# API REST

REST (Representational State Transfer) est une conception architecturale qui fournit des directives pour le développement de services Web. Il utilise les fonctionnalités actuelles du Web de manière simple et efficace. L'objectif principal de REST est de permettre la communication entre un client et un serveur en utilisant les fonctionnalités standard du protocole HTTP.

REST est utilisé pour créer des services Web qui peuvent être facilement accessibles et consommés par des clients. Il favorise la création d'objets de données sur le serveur en réponse aux demandes des clients, et renvoie ces données au client sous forme de valeurs d'objet. REST exploite les caractéristiques puissantes du Web, telles que le protocole HTTP mature et largement accepté, la nature sans état du protocole HTTP et l'utilisation simple des URI pour localiser les ressources Web.

REST repose sur 5 principes : 

1. Tout est une ressource : Toutes les entités du Web, telles que les images, les clients ou les vidéos, sont considérées comme des ressources accessibles via une URI spécifique.
2. Chaque ressource est identifiée par un identifiant unique : Chaque ressource a un URI qui lui est propre et permet de l'identifier de manière unique. Par exemple, les détails d'un client nommé "Pierre" peuvent être obtenus via l'URI http://www.example.com/clients/Pierre.
3. Utilisation d'interfaces simples et uniformes : Les interactions avec les ressources se font en utilisant les méthodes standardisées du protocole HTTP, telles que GET pour récupérer une ressource, POST pour créer une ressource, PUT pour mettre à jour une ressource, et DELETE pour supprimer une ressource.
4. Communication par représentation : Les demandes et les réponses sont basées sur des formats de données comme XML ou JSON. Ces formats permettent de transmettre les informations entre le client et le serveur de manière claire et compréhensible.
5. Stateless (sans état) : Chaque requête est indépendante et ne nécessite pas que le serveur se souvienne des requêtes précédentes. Cela permet d'améliorer la scalabilité et la gestion de la charge.

REST est utilisé pour simplifier et unifier la communication entre les différentes applications et dispositifs. Il permet aux développeurs de créer des API flexibles et évolutives.

Une API est un ensemble de règles qui établit comment les applications ou les appareils peuvent se connecter et échanger des informations entre eux. Une API REST est une API qui suit les principes de conception de l'architecture REST, qui repose sur la représentation de l'état transféré. C'est pourquoi les API REST sont parfois appelées des API RESTful.

Les API RESTful sont largement utilisées dans les architectures de microservices en raison de leur souplesse et de leur liberté offertes aux développeurs.

Par exemple, un service Web REST peut être utilisé pour récupérer des informations sur un film spécifique à partir d'un serveur distant. Le client envoie une requête GET avec l'URI appropriée pour accéder à la ressource du film. Le serveur traite cette demande, récupère les détails du film dans sa base de données et renvoie les informations demandées au client dans un format compréhensible.

Exemple de code : 

```jsx
const express = require("express");
const app = express();

const films = [
  { id: 1, title: "Film 1" },
  { id: 2, title: "Film 2" },
  { id: 3, title: "Film 3" }
];

app.get("/films/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const film = films.find(f=> f.id === id)
	res.status(200).json(film)
});
app.listen(3000, () => {
  console.log(`Serveur démarré : http://localhost:3000`);
});
```

En résumé, REST est une façon simple et efficace de concevoir des services Web. Il facilite la communication entre les clients et les serveurs, favorise la connexion entre les différentes applications et dispositifs, et permet de créer des API flexibles et évolutives.

Sources : 

- [https://www.codeproject.com/Articles/283550/Implementing-5-important-principles-of-REST-using#e](https://www.codeproject.com/Articles/283550/Implementing-5-important-principles-of-REST-using#e)
- [https://www.knowledgehut.com/blog/programming/rest-api](https://www.knowledgehut.com/blog/programming/rest-api)
- [https://www.ibm.com/topics/rest-apis](https://www.ibm.com/topics/rest-apis)