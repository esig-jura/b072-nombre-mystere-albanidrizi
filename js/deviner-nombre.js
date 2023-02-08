/**
 * Jeu du nombre mystère
 * @author  Alban Idrizi
 * @version 1.0
 * @since   2023-02-08 (date de création)
 */

'use strict';
/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(tireNombre());
const nbMystere = tireNombre(1,100);
alert(nbMystere);
let nbEssais = 0;
let reponse = null;
    do {
        reponse = prompt('le nombre à deviner est compris entre 1 et 100.');
        nbEssais= ++nbEssais;
        if (reponse > nbMystere) {
            alert('C\'est moins !');
        } else if (reponse < nbMystere) {
            alert('c\'est plus !');
        }
        else{
            alert(`vous avez trouver après ${nbEssais} essais`);
        }
    } while (reponse !== nbMystere);

