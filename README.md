# 🧮 Calculatrice JavaScript

## 📌 Description

Ce projet est une **calculatrice simple** développée en **HTML, CSS et JavaScript**.
Elle permet d’effectuer les opérations de base :

* ➕ Addition
* ➖ Soustraction
* ✖️ Multiplication
* ➗ Division

---

## 🚀 Objectif du projet

L’objectif était de :

* Comprendre la manipulation du **DOM en JavaScript**
* Utiliser les **événements (click, clavier)**
* Gérer une **logique de calcul dynamique**
* Créer une interface utilisateur simple et moderne

---

## 🛠️ Technologies utilisées

* HTML → structure de la page
* CSS → design (boutons ronds, écran, mise en page)
* JavaScript → logique de calcul

---

## ⚙️ Fonctionnement

### 1. Interface utilisateur

* Un écran (`.ecran`) pour afficher les calculs
* Des boutons pour les chiffres et opérateurs
* Une grille CSS pour organiser les touches

---

### 2. Gestion des événements

Chaque bouton possède un attribut :

```html
<button data-key="1">1</button>
```

En JavaScript :

```js
btn.addEventListener('click', () => {
    const valeur = btn.dataset.key;
    gerer(valeur);
});
```

👉 Cela permet de récupérer la valeur du bouton cliqué.

---

### 3. Stockage de l’expression

```js
let expression = '';
```

👉 Cette variable contient le calcul en cours :

Exemple :

```
5 + 3 * 2
```

---

### 4. Logique de calcul

```js
const resultat = eval(expression);
```

👉 `eval()` permet d’évaluer l’expression et retourner le résultat.

---

### 5. Gestion des actions

* **AC** → efface tout
* **C** → supprime un caractère
* **=** → calcule le résultat
* **chiffres / opérateurs** → ajoutés à l’expression

---

## 🎨 Design

* Boutons ronds avec `border-radius: 50%`
* Écran avec texte blanc et aligné à droite
* Utilisation de **Flexbox** et **Grid**

---

## 📂 Structure du projet

```
📁 calculatrice
 ├── index.html
 ├── style.css
 └── cal.js
```

---

## 💡 Améliorations possibles

* Ajouter le support du clavier ⌨️
* Empêcher les erreurs (ex: `++`, `--`)
* Ajouter des animations
* Design type iPhone 📱
* Utiliser une alternative sécurisée à `eval()`

---

## 🧑‍💻 Auteur

Projet réalisé par **[Ton Nom]**

---

## 🌐 Déploiement

Le projet peut être hébergé avec **GitHub Pages** pour être accessible en ligne.

---

## 📸 Aperçu

Ajoute ici une capture d’écran de ta calculatrice si tu veux 😉
