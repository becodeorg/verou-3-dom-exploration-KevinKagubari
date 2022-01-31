console.log(document.title);

// This does not change the previous statement

document.title = "Modifying the DOM";

const body = document.body

body.style.background = "#FF69B4";

//console.log(document.body.children);



const kids = document.body.children;


/*for_of loop uses the indexes of the array as your let that way you don't have to 'count'
*/

for (let kid of kids) {
    

    var test = document.createAttribute('li')

    test.value = kids[kid]

    console.log(test)

    
    
}


/*

This does the same as the loop above.

for (let i=0; i < kids.length; i++){

    console.log(kids[i])
}
*/

