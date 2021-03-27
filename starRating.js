const stars=document.querySelectorAll('.star')
const output=document.querySelector('.output')

for(x=0;x<stars.length;x++){
    stars[x].starValue= (x+1);
    ["click","mouseover","mouseout"].forEach(function(e){
      stars[x].addEventListener(e,showRating)  
    })
}

function showRating(e){
    let type=e.type
    let starValue=this.starValue

    if(type==='click'){
        output.innerHTML=`You rated this Picture ${starValue} stars`
    }

    stars.forEach(function(element,index){
        if(type==='click'){
            if(index<starValue){
                element.classList.add("orange")
            }else{
                element.classList.remove("orange")
            }
        }

        if(type==='mouseover'){
            if(index<starValue){
                element.classList.add("yellow")
            }else{
                element.classList.remove("yellow")
            }
        }

        if(type==='mouseout'){
           
            element.classList.remove("yellow")
           
        }
    })
    

}

function nextPage(){
    window.location.reload()
}