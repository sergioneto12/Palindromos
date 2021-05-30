// choose = window.prompt("Qual é o tamanho da lista que você deseja?")

list = [3, 5];

chosen = list[Math.floor(Math.random() * list.length)];

strings = [];
word = "";
reverse = "";

function Word() {
    if (chosen == 3) {
        listWord = [];

        for (j = 1; j <= 3; j++) {
            i = Math.floor(Math.random() * 26) + 1;
            var cod = (String.fromCharCode(i + 64));
            // console.log(i, cod);

            listWord.push(cod);
        };

        word = listWord[0] + listWord[1] + listWord[2];
        reverse = listWord[2] + listWord[1] + listWord[0];

        if (word === reverse) {
            console.log('É Palíndromo! ' + word);
            strings.push(word);
        }

    } else (chosen == 5); {
        listWord2 = [];
        for (j = 1; j <= 5; j++) {
            i = Math.floor(Math.random() * 26) + 1;
            var cod = (String.fromCharCode(i + 64));
            // console.log(i, cod);

            listWord2.push(cod);
        };

        word = listWord2[0] + listWord2[1] + listWord2[2] + listWord2[3] + listWord2[4];
        reverse = listWord2[4] + listWord2[3] + listWord2[2] + listWord2[1] + listWord2[0];

        if (word === reverse) {
            console.log('É Palíndromo! ' + word);
            strings.push(word);
        }
    }
};

function activate() {
    let choose = document.getElementById("entry").value;
    
    while (strings.length <= choose - 1) {
        Word();
    }

    let lista = document.getElementById('lista');
    for (var i = 0; i < strings.length; i++) {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(strings[i]));
        lista.appendChild(item);
    }
}

console.log(strings);



