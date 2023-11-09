# Integer to roman

Cette algorithme vise à transformer un nombre donné en chiffre romain.

## Lancer le projet

`npm i ` <br>
et les test : `npx jest`

## Description cycle de vie

L'algorithme que nous avons utilisé est ne a une complexité de O(log(n)). En effet, il utilise la technique des deux pointeurs qui permettent à une boucle de se terminer plus rapidement. L'idée étant d'économiser temps et mémoire.
Afin de ne pas avoir à gérer la soustractions liée au système romain, l'ensemble des possibilités sont intégrées (on pense à IX, IV, CD...).

### cycle de vie

#### organisation
Pour faire cette algorithme nous nous sommes inspirés d'un algorithme que j'avais déjà écrit sur leetcode il y a un an.
En terme de déploiement et qui fait quoi :
Aziz s'est occupé de la partie web, et moi (Grégoire) me suis occupé de mettre en places les tests, l'algorithme et la gestion d'erreur.
Nous avons très rapidement mis en place un Kanban sur trello afin de pouvoir nous organiser dans les tâches et savoir ce qu'il nous restait à faire.
#### Ajout de feature
Au cours du cycle de vie de ce projet il a fallu rajouter la fonctionnalité du chiffre romain à chiffre arabe. Pour cela nous nous sommes répartis le travail, de nouveau sur trello et de façon bien périmétrée de sorte que chacun savait ce qu'il avait à faire.
Utilisant la méthode agile, la qualité est restée notre priorité et nous avons essayé de prévoir tous les cas possibles

#### Adaptation aux changements
Un changement de dernière minutes étant demandé (Utilisation d'une API Rest), nous avons décidé de séparer notre logique et notre front-end.
Ainsi le front-end fait un appel sur le back-end. Les tests eux aussi ont été transférés sur le back.

#### Couvertures des tests
Pour avoir une meilleure couverture des tests sur l'ensemble des cas nous avons utilisé NYC coverage
Nous avons couverts les cas suivants et avons eu ces réponses: 
#### Roman to int
1) Un succès basique qui teste en envoyant "XIV" qu'il reçoit bien 14.
2) Un succès pour un chiffre plus complexe au-dessus de 1000 en l'occurence 3006.
3) Un succès pour O qui renvoie bien 0.
4) Un échec basique pour voir si une erreur est bien renvoyée en cas de lettre qui ne font pas partie des chiffres romain.

#### Int to Roman
1) Un succès qui teste en envoyant 14 qu'il reçoit bien "XIV".
2) Un succès qui teste au dessus de 1000, qui envoie 3006 et reçoit bien "MMMVI".
3) Un échec qui teste 0 et reçoit bien une erreur.
4) Un echec pour un nombre négatif qui reçoit bien une erreur.
5) Un echec qui teste des nombres à virgule et reçoit bien une erreur.
6) Un echec qui teste un nombre au dela de 3999 et reçoit bien une erreur.
#### couvertures des tests
| File                   | Statements | Branches | Functions | Lines |
|------------------------|------------|----------|-----------|-------|
| dist/services          | 96.87      | 92.3     | 100       | 96.77 |
| intToRoman.service.js  | 92.85      | 85.71    | 100       | 92.85 |
| romanToInt.service.js  | 100        | 100      | 100       | 100   |
| services               | 100        | 100      | 100       | 100   |
| intToRoman.service.ts  | 100        | 100      | 100       | 100   |
| romanToInt.service.ts  | 100        | 100      | 100       | 100   |
                 
## Retrospective 📚
### Comment a-t-on traité l’exercice de mise en situation
Il y a eu tout d'abord une étape d'analyse et choix de l'algorithme.
Nous avons ensuite mis en place un Kanban sur Trello afin de pouvoir mieux gérer les tâches à réaliser. Ce qui nous a permis de ne pas nous perdre et de pouvoir tout faire en temps et en heure.
Lorsque de nouvelles fonctionnalités ont été demandées nous nous sommes répartis le travail de façon à ce que nous puissions travailler tous les deux en même temps. Un bon exemple serait le fait que l'un s'occupait du fonctionnel / logique et l'autre du rendu en front.
##### Fiabilité
Afin d'avoir une plus grande fonctionnalité possible, comme montré ci-dessus nous avons essayé d'avoir la plus grande couverture possible par les tests afin que le produit soit le plus fiable possible.
#### Git & Déploiement
En termes de déploiement et de git nous avons décidé de suivre une architecture front / API. Chacun des dépôts est déployé sur des hébergeurs différents et non pas en mono repo. Nous avons aussi utilisé des github pipelines afin d'être certains que les tests passent à chaque commit pour la partie API.
### Conclusion
Point d'amélioration : 
- Nous aurions pu plus nous appliquer sur l'UI/UX.
- Avec plus de temps nous aurions pu faire plus de cycles itératifs.
- Nous aurions peut-être aussi pu nous faire des daily le matin à l'arrivée au moins pour clarifier ce que nous avions à faire.

Points positifs:
- Le développement s'est plutôt bien passé
- Nous avons coopéré efficacement
- Nous avons bien géré la charge
- Nous avons bien respecté nos sprints.
- L'expérience était enrichissante


## Bonus : test de vitesse et de mémoire

Vous pouvez voir la vitesse de l'algorithme et la mémoire utilisée [ici](https://leetcode.com/problems/integer-to-roman/submissions/1094290886/)
