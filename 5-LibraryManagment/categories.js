function categoriesManagement() {
    let categories = new Set(["Fiction", "Science", "Histoire"]);
    console.log("Catégories initiales :", categories);

    // Ajouter une nouvelle catégorie
    categories.add("Aventure");
    console.log("Après add :", categories);

    // Essayer d'ajouter une catégorie existante
    categories.add("Science");
    console.log("Après add catégorie existante :", categories);

    // Supprimer une catégorie
    categories.delete("Histoire");
    console.log("Après delete :", categories);
}

export default categoriesManagement;
