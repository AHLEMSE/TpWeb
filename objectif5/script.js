// script.js - Objectif 5 : ajouter une ligne au tableau dynamique (JavaScript natif)

document.addEventListener("DOMContentLoaded", function () {
    var tbody = document.getElementById("membersBody");
    var addButton = document.getElementById("addRowBtn");

    addButton.addEventListener("click", function () {
        // On copie la première ligne du tableau comme modèle
        var newRow = tbody.rows[0].cloneNode(false);

        // On vide les champs de la copie
        var fields = newRow.querySelectorAll("input, select");
        fields.forEach(function (field) {
            if (field.tagName === "SELECT") {
                field.selectedIndex = 0;
            } else {
                field.value = "";
            }
        });

        tbody.appendChild(newRow);                
        newRow.querySelector("input").focus();      // curseur dans le 1er champ
    });
});