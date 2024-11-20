// function changeText(){
    //     let fpara=document.getElementById('fpara');
    //     fpara.textContent="Hello Yogesh"
    // }
    // let fpara=document.getElementById('fpara');
    // fpara.addEventListener('click',changeText);
    // fpara.removeEventListner('click',changeText);


    // let anchorElement=document.getElementById('fanchor');
    // anchorElement.addEventListner('click',function(event){
    //     event.preventDefault();
    //     anchorElement.textContent="Click Done"
    // });
     


    // let paras=document.querySelectorAll('p');

    function alertPara(event){
        alert("You have clicked on Para: "+ event.target.textContent );
    }

    // for(let i=0; i<paras.length; i++){
    //     let para = paras[i];
    //     para.addEventListner('click',alertPara);
    // }

    let mydiv = document.getElementById('wrapper');
    document.addEventListner('click', alertPara);