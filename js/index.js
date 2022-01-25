const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp= document.getElementById ('lamp');

function isLampBroken () 
{
    return lamp.src.indexOf ('quebrada') > -1
}
function lampOn ()
{
    if (!isLampBroken ())
    {
        lamp.src="../lâmpada/img/ligada.jpg";
    }
   
}

function lampOff ()
{
    if (!isLampBroken ())
    {
        lamp.src="../lâmpada/img/desligada.jpg";   
    }
    
}

function lampBroken ()
{
    lamp.src="../lâmpada/img/quebrada.jpg";
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);

lamp.addEventListener ('mousemove', lampOn);
lamp.addEventListener ('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampBroken);