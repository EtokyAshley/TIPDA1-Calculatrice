


// selection lecran de la calculatice la ou les chifre saffiche
const ecran = document.querySelector('.ecran');


//recuper tout les buton de la div buoton
const boutons = [...document.querySelectorAll('.bouton, .operateur1, .operateur')];


//const boutons = document.querySelectorAll('button');

//cette variable contien ce que lutilisateur tap parceque elle est en suit utilise pour le calcul avec eval()
let expression = '';


// une boucle sur tout les bouton dedans on a lajout du evenement qui detecte tout les clic et dataset qui recupere la valeur de tout les bouton
boutons.forEach(btn => {
    btn.addEventListener('click', () => {
        const valeur = btn.dataset.key;
        gerer(valeur);
    });
});


//une fonction qui gere les valeure et decide qoui faire selon le bouton a lentereur on a les swicth qui teste les bouton
function gerer(valeur) {

    switch (valeur) {

        // case '8': 
        //     expression = '';
        //     ecran.textContent = '0';
        //     break;

        case 'Escape':
         expression = '';
         ecran.textContent = '0';
          break;

        case '46': 
            expression = expression.slice(0, -1);
            ecran.textContent = expression || '0';
            break;

        case '13': 
            try {
                const resultat = eval(expression);
                ecran.textContent = resultat;
                expression = resultat.toString();
            } catch {
                ecran.textContent = "Erreur";
                expression = '';
            }
            break;

        default:
            expression += valeur;
            ecran.textContent = expression;
    }
}
