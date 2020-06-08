// Tristan Annaval

console.log("**** Test Array 2 *****");

let tab2 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

showAverage(tab2);
showIndexForNumber(tab2, 15);
showDuplicate(tab2);

function showAverage(tab2) {
    console.log("Average");
    let x = 0;
    for (i = 0; i < tab2.length; i++) {
        x += tab2[i];
    }
    let result = x / tab2.length;
    console.log(result);
}

function showIndexForNumber(tab2, number) {
    console.log("Index");
    for (i = 0; i < tab2.length; i++) {
        if (tab2[i] == number) {
            console.log("Index for " + number + " : " + i);
        }
    }
}

function showDuplicate(tab2) {
    for (i = 0; i < tab2.length; ++i) {
        for (j = 1; j < (tab2.length - i); ++j) {
            if (tab2[j - 1] > tab2[j]) {
                temp = tab2[j - 1];
                tab2[j - 1] = tab2[j];
                tab2[j] = temp;
            }
        }
    }

    numDup = 0
    dupCount = 0;
    previous = -1;
    for (i = 0; i < tab2.length; ++i) {
        if (tab2[i] == previous) {
            ++numDup;
            if (numDup == 1) {
                ++dupCount;
            }
        }
        else {
            previous = tab2[i];
            numDup = 0;
        }
    }

   console.log("Number of duplicates values: " + dupCount);
}

// Tristan Annaval