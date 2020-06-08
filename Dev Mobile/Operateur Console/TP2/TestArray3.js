// Tristan Annaval

console.log("**** Test Array 3 *****");

let tab3 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

sortTab(tab3);

function sortTab(tab3) {
    console.log("Sort");
    for (i = 0; i < tab3.length; i++) {
        for (var j = 0; j < i; j++) {
            if (tab3[i] < tab3[j]) {
                var x = tab3[i];
                tab3[i] = tab3[j];
                tab3[j] = x;
            }
        }
    }
    console.log(tab3);
}

// Tristan Annaval