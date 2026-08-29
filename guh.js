function guh(){
    let button = document.getElementById('dataButton');
    let datacenters = 0;
    button.addEventListener('click', () => {
        datacenters++;
        console.log(datacenters);
    } )



}

window.onload = function(){
    console.log("loaded");
    guh();
}

