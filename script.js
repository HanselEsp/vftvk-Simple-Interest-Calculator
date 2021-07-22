function compute()
{
    p = document.getElementById("principal").value;
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
}
function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; 

    
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}    