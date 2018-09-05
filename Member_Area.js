function validate() {
    let y = document.getElementById('email').value
    let z = document.getElementById('pwd').value
    let v = document.getElementById('confirm-pwd').value


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y)) {

    } else {
        alert("Vous devez inscrire une adresse email valide !")
    }

    if (/^.*(?=.{7,50})(?=.*\d)(?=.*[A-Z]).*$/.test(z)) {

    } else {
        alert("Votre mot de passe est invalide ! Il doit être composé de majuscules, de minuscules, de chiffres et de symboles. ")
    }
    if (z === v) {

    } else { alert("Veuillez confirmer votre mot de passe !") }
}