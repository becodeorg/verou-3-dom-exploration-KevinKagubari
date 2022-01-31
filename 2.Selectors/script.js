

// Title attribute will be added to items with important class

const impItems = document.querySelectorAll('.important');


for (let i of impItems){

    const title = document.createAttribute('title');

    title.value = 'This is an important item';

    i.setAttributeNode(title);

    

}

//Loop of images. if images have important class image will not be displayed 

const imgs = document.querySelectorAll('img');

for (let x of imgs){

    if ( x.className != 'important'){

        x.style.display = 'none'

        //console.log(x)
        
    }
}    

const pars = document.querySelectorAll('p')

for(par of pars){

    console.log(par)

        if(par.className)

           console.log(par.className)
        else{

            function getNewColor(){
    
                var x = Math.floor(Math.random() * 256) + ','
                var y = Math.floor(Math.random() * 256) + ','
                var z = Math.floor(Math.random() * 256)

                var rgb = 'rgb(' + x + y + z + ')'

                par.style.color = rgb
                


                }

                getNewColor();

                }
        
                    
    
        

            
    

           
    
}




