# Integer to roman

Cette algorithme vise à transformer un nombre donné en chiffre romain.

## Lancer le projet

`npm i ` <br>
et les test : `npx jest`

## Description cycle de vie

L'algorithme que nous avons utilisé est ne a une complexité de O(log(n)). En effet, il utilise la technique des deux pointeurs qui permettent à une boucle de se terminer plus rapidement. L'idée étant d'économiser temps et mémoire.
Afin de ne pas avoir à gérer la soustractions liée au système romain, l'ensemble des possibilités sont intégrées (on pense à IX, IV, CD...).

### cycle de vie de l'algorithme

#### organisation

Pour faire cette algorithme nous nous sommes inspirés d'un algorithme que j'avais déjà écrit sur leetcode il y a un an.
En terme de déploiement et qui fait quoi :
Aziz s'est occupé de la partie web, et moi (Grégoire) me suis occupé de mettre en places les tests, l'algorithme et la gestion d'erreur.

#### test

## Bonus : test de vitesse et de mémoire

Vous pouvez voir la vitesse de l'algorithme et la mémoire utilisée [ici](https://leetcode.com/problems/integer-to-roman/submissions/1094290886/)
