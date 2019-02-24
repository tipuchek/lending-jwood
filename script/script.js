document.querySelector('body').onscroll = function (){    
    let blocks = document.querySelectorAll('.wrap-btn');
        blocks.forEach((block)=> {
            let res = (block.offsetTop - pageYOffset) + (block.clientHeight);
            if(res < window.innerHeight ){
                 block.classList.add('show-btn');
            }
            else{
                 block.classList.remove('show-btn');
            }
        });


}


