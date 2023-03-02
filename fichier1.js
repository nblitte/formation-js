
const fs = require("fs");

// readFileSync <- lire le contenu d'un fichier fichier 
//writeFileSync <- écrire un fichieravec un contenu

fs.writeFileSync("test.txt", "Mon premier fichier");
console.log("Le fichier test.txt a été créé");

const fileContent = fs.readFileSync("test.txt","utf-8");
console.log(fileContent);

// Suite de mon programme