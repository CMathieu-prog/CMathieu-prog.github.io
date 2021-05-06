let cards = document.querySelectorAll(".card");
let choix = "";


function active (buttonActual)
{
    document.querySelectorAll(".portfolio-choices > button").forEach((button)=>
    {
        if(buttonActual != button)
        {
            button.classList.remove("active");
        }
    })
}

document.querySelectorAll(".portfolio-choices > button").forEach((button)=> 
{
   
    button.addEventListener('click', function()
    {
       active(button);   
        button.classList.add("active")
        choix = button.textContent;
        cards.forEach((card)=>
        {
            
            
            
            
            if(choix !== "")
            {
                if(!card.classList.contains(choix) && choix !== "Tous")
                {
                    card.style.display = 'none';
                }
                else
                {
                    card.style.display = "block";
                }
            }
        })
    })
})

cards.forEach((card)=>
{
    
    card.addEventListener('click', function()
    {
        let scroll = window.scrollY;
        if(document.getElementById('modal'+card.id))
        {

            console.log(scroll)
            document.body.style.top = "-"+scroll+"px";
            document.body.style.position = "fixed";
            document.getElementById('modal'+card.id).classList.add('animationmodalopen')
            document.getElementById('modal'+card.id).style.display = 'block';
            document.querySelector('#modal'+card.id+'>.modal-content>.modal-header>.close').addEventListener('click', function(){
                document.getElementById('modal'+card.id).classList.replace('animationmodalopen','animationmodalclose')
                document.body.style.position ="absolute";
                document.body.style.top = null;
                window.scroll(0,scroll);
                setTimeout(function(){
                    document.getElementById('modal'+card.id).style.display = 'none';
                    document.getElementById('modal'+card.id).classList.remove('animationmodalclose');
    
    
            },900)
                
            })
        }

        
       
        
        
    })

});

