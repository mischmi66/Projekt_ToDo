 /*Meine absoluten Anfänge mit DOM
 als Schnittstelle zwischen HTML und dynamischem JavaScript
 Hier wird die texteingabe in das inputfeld in ein neu zu erstellendes Div geschrieben
*/

let  button = document.querySelector("#button");

    button.addEventListener("click", eingabe);
    function eingabe() {
        let input = document.querySelector("#input");
        let output = document.querySelector("#output");

        let neuesDiv = document.createElement("div");
        let neuerInhalt = document.createTextNode(input.value);

        neuesDiv.appendChild(neuerInhalt);
        output.appendChild(neuesDiv);

        input.value =""
    }