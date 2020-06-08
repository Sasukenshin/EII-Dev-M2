// Tristan Annaval

console.log("**** Test Array 1 *****");

let tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

showTab(tab1);
showTabReverse(tab1);
showTabSup3(tab1);
showTabEven(tab1);
showTabMaxValue(tab1);
showTabMinValue(tab1);

function showTab(tab1) {
    console.log("Sorted");
    for (i = 0; i < tab1.length; i++) {
        console.log(tab1[i]);
    }
}

function showTabReverse(tab1) {
    console.log("Reversed")
    for (i = tab1.length - 1; i > -1; i--) {
        console.log(tab1[i]);
    }
}

function showTabSup3(tab1) {
    console.log("Superior to 3");
    for (i = 0; i < tab1.length; i++) {
        if (tab1[i] > 3) {
            console.log(tab1[i]);
        }
    }
}

function showTabEven(tab1) {
    console.log("Even");
    for (i = 0; i < tab1.length; i++) {
        if (tab1[i] % 2 == 0) {
            console.log(tab1[i]);
        }
    }
}

function showTabMaxValue(tab1) {
    console.log("Max Value");
    for (i = 0; i < tab1.length; i++) {
        for (j = 0; j < i; j++) {
            if (tab1[i] < tab1[j]) {
                var x = tab1[i];
                tab1[i] = tab1[j];
                tab1[j] = x;
            }
        }
    }
    console.log(tab1[tab1.length - 1]);
}

function showTabMinValue(tab1) {
    console.log("in Value");
    for (i = 0; i < tab1.length; i++) {
        for (j = 0; j < i; j++) {
            if (tab1[i] > tab1[j]) {
                var x = tab1[i];
                tab1[i] = tab1[j];
                tab1[j] = x;
            }
        }
    }
    console.log(tab1[tab1.length - 1]);
}

// Tristan Annaval