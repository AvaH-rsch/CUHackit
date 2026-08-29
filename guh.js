function guh(){
    let datacenters = 0;
    let govtFunding = 400;
    let vibecodedProjects = 0;
    let population = 8300000000;
    let datacenterPrice = 400;

    let button = document.getElementById('dataButton');
    button.addEventListener('click', () => {
        incrementDatacenters(govtFunding, datacenters, datacenterPrice);
        console.log(govtFunding, datacenters);
    } );
    function incrementDatacenters(){
        if (govtFunding >= datacenterPrice){
            govtFunding -= datacenterPrice;
            datacenters++;
        }
    }
    console.log(govtFunding, datacenters);
}

window.onload = function(){
    console.log("loaded");
    guh();
}

