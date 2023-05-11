import { Client } from "./classes/Client.js";
import { Message } from "./classes/Message.js";

//récupération des éléments du html
let btnValid = document.getElementById("valid");
let messageEr = document.getElementById("messageError");
let message = document.getElementById("message");
let nomEr = document.getElementById("nomError");
let nom = document.getElementById("nom");
let prenomEr = document.getElementById("prenomError");
let prenom = document.getElementById("prenom");
let courrielEr = document.getElementById("courrielError");
let courriel = document.getElementById("courriel");
let selectPhoto = document.getElementById("selectPhoto");
let selectedType = document.getElementById("selectType");
let selectEr = document.getElementById("selectError");
let imgPh = document.getElementById("image");
let photoError = document.getElementById("photoError");
const input = new Array;
let regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let texte = ["Votre demande concerne",
    "Information articles",
    "Commande & paiement",
    "Expédition & livraison",
    "Retour, échange & remboursement",
    "Code promo & Bon d'achat",
    "Newsletters",
    "Problème technique",
    "Autres demandes",
    "Protection des données personnelles"];
let photos = ["Neutre",
    "Alain",
    "Albert",
    "Alfred",
    "Alphonse",
    "Alphonsine",
    "Berth",
    "Elisabeth",
    "Gertrude",
    "Gilbert",
    "Gilberte",
    "Hugh",
    "Jacques",
    "John",];


input.push({ champ: nom, erreur: nomEr, }, { champ: prenom, erreur: prenomEr }, { champ: message, erreur: messageEr });

// TEST SUR LES INPUTS

for (let i = 0; i < input.length; i++) {
    input[i].champ.addEventListener("blur", () => {
        if (input[i].champ.value.length < 3) {
            input[i].champ.style.borderColor = "red";
            input[i].erreur.style.color = 'red';
            input[i].erreur.innerText = 'ERREUR : 3 caractéres minimum requis !'
        } else {
            input[i].erreur.innerText = '';
            input[i].champ.style.borderColor = "green";
        }
    })
}
courriel.addEventListener("blur", () => {
    if (!regEx.test(courriel.value)) {
        courriel.style.borderColor = "red";
        courrielEr.style.color = 'red';
        courrielEr.innerText = 'ERREUR : Veuillez entrer une adresse mail valide !'
    } else {
        courriel.style.borderColor = "green";
        courrielEr.innerText = '';
    }
})

// AJOUT DES OPTIONS DE DEMANDE

for (let i = 0; i < texte.length; i++) {
    let option = document.createElement("option");
    option.value = texte[i]
    option.text = texte[i]
    selectedType.appendChild(option);
}

// AJOUT DES PHOTOS 

for (let i = 0; i < photos.length; i++) {
    let photo = document.createElement("option");
    photo.value = photos[i];
    photo.text = photos[i]
    selectPhoto.appendChild(photo);

}

// CHANGEMENT DE PHOTO EN FONCTION DE L OPTION 

selectPhoto.addEventListener("change", () => {
    let photoChoisie = selectPhoto.value;
    let maPhoto = `./photos/${photoChoisie}.jpg`
    imgPh.src = maPhoto;
})
export let client;
export let leMessage;
btnValid.addEventListener("click", (event) => {
    event.preventDefault();
    client = new Client(nom.value, prenom.value, courriel.value, selectPhoto.value);
    leMessage = new Message(selectedType.value, message.value, client);
    console.log(leMessage);
})











