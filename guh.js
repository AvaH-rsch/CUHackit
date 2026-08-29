function calculatePop(datacenters,population,dt){
    population = population+Math.pow(population,(dt)/4000)-(6000*datacenters*dt);
    return population;
}

function calculateVibecodedProjects(vibecodedProjects, datacenterProjectsPerSec, datacenters, dt){
    vibecodedProjects += (datacenterProjectsPerSec * datacenters)*dt;
    return vibecodedProjects;
}

function displayInfo(govtFunding, vibecodedProjects, population){

}

function guh(){
    let datacenters = 0;
    let govtFunding = 8000;
    let vibecodedProjects = 0;
    let vibecodedProjectExchange = 5;
    let population = 83000000;
    let datacenterPrice = 400;
    let datacenterProjectsPerSec = 1;

    let buyButton = document.getElementById('dataButton');
    buyButton.addEventListener('click', () => {
        incrementDatacenters(govtFunding, datacenters, datacenterPrice);
        console.log(govtFunding, datacenters);
    } );

    let sellButton = document.getElementById('vibeButton');
    sellButton.addEventListener('click', () =>{
        govtFunding += vibecodedProjectExchange * vibecodedProjects;
        vibecodedProjects = 0;
    })

    function incrementDatacenters(){
        if (govtFunding >= datacenterPrice){
            govtFunding -= datacenterPrice;
            datacenters++;
            datacenterPrice = (1.1 * datacenters * datacenters) + 400;
        }
    }

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const tickTime = 33; //time a tick takes
    const dt = 1/30; //delta t, change in time
    let t = 0 //initial time

    async function mainLoop() {
        while(true) {
            population = calculatePop(datacenters, population, dt);
            vibecodedProjects = calculateVibecodedProjects(vibecodedProjects, datacenterProjectsPerSec, datacenters, dt);

            displayInfo();
            console.log(t, govtFunding, datacenters, population);
            t += (dt)
            await sleep(tickTime);
        }
    }
    mainLoop();
}

window.onload = function(){
    console.log("loaded");
    guh();
}

