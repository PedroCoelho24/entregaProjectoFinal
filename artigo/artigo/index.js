document.addEventListener("DOMContentLoaded", (event) => { 

    document.getElementById("addToCart").addEventListener("click", (event) => {
        console.log("test")
        document.getElementById('popUp').classList.toggle('visible');
        
    })


    document.getElementById("minusButton").addEventListener("click", (event) => {
        if(document.getElementById("quantityChosen").outerText != 0)
        {
            document.getElementById("quantityChosen").innerText = parseInt(document.getElementById("quantityChosen").innerText) - 1;
        }
    })

    document.getElementById("plusButton").addEventListener("click", (event) => {
       
        document.getElementById("quantityChosen").innerText = parseInt(document.getElementById("quantityChosen").innerText) + 1;
     
    })

})