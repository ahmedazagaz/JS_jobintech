function booksManagement() {
    let books = ["Livre1", "Livre2", "Livre3"];
    console.log("Livres initiaux :", books);

    // Ajouter à la fin
    books.push("Livre4");
    console.log("Après push :", books);

    // Ajouter au début
    books.unshift("Livre0");
    console.log("Après unshift :", books);

    // Supprimer le dernier
    books.pop();
    console.log("Après pop :", books);

    // Supprimer le premier
    books.shift();
    console.log("Après shift :", books);
}

export default booksManagement;
