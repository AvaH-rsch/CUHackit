function guh(){
    let datacenters = 0;
    let govtFunding = 400;
    let vibecodedProjects = 0;
    let population = 8300000000;
    let datacenterPrice = 400;
    let dataCenterProjectsPerSec = 1;

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

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function mainLoop() {
        while(true) {
            vibecodedProjects += (dataCenterProjectsPerSec * datacenters)/3;
            console.log(vibecodedProjects, datacenters);
            await sleep(33);
        }
    }
    mainLoop();
}

window.onload = function(){
    console.log("loaded");
    guh();
}

