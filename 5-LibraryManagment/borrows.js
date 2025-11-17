function borrowsManagement() {
    let borrows = new Map();

    // Ajouter des emprunts
    borrows.set("Livre1", "Ahmed");
    borrows.set("Livre2", "ayoub");
    borrows.set("Livre3", "sohail");
    console.log("Emprunts après set :", borrows);

    // Supprimer un emprunt
    borrows.delete("Livre2");
    console.log("Après delete :", borrows);

    // Vérifier si un livre est emprunté
    console.log("Livre1 emprunté ? ", borrows.has("Livre1"));
    console.log("Livre2 emprunté ? ", borrows.has("Livre2"));

    // Afficher tous les emprunts
    console.log("Tous les emprunts :");
    for (let [livre, emprunteur] of borrows) {
        console.log(`${livre} -> ${emprunteur}`);
    }
}

export default borrowsManagement;
