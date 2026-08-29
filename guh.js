function calculatePop(datacenters,population,dt){
    population = population+Math.pow(population,(dt)/4000)-(6000*datacenters*dt);
    return population;
}

function calculateVibecodedProjects(vibecodedProjects, datacenterProjectsPerSec, datacenters, dt){
    vibecodedProjects += (datacenterProjectsPerSec * datacenters)*dt;
    return vibecodedProjects;
}

function placeDataCenter() {
    const grass = document.getElementById('grass');
    let datacenterContainer = document.createElement("div");
    grass.appendChild(datacenterContainer);
    let img = document.createElement("img");
    img.src = "./assets/dataCenter.png";
    img.style.width = "80px";
    img.style.height = "80px";
    datacenterContainer.style.zIndex = "-1";
    datacenterContainer.appendChild(img);

}

function displayText(element, text) {
    document.getElementById(element).innerHTML = text;
}

function updateInfo(population, vibecodedProjects, govtFunding) {
    displayText("populationCounter", "Population: " + population);
    displayText("fundingCounter", "Government Funds: " + govtFunding);
    displayText("vibeCoderCounter", "Vibecoded Projects: " + vibecodedProjects);
}

function guh() {
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
    });

    let sellButton = document.getElementById('vibeButton');
    sellButton.addEventListener('click', () => {
        govtFunding += vibecodedProjectExchange * vibecodedProjects;
        vibecodedProjects = 0;
    })

    function incrementDatacenters() {
        if (govtFunding >= datacenterPrice) {
            govtFunding -= datacenterPrice;
            datacenters++;

            placeDataCenter();

            let grass = document.getElementById("grass")
            let r = 70;
            let g = 194;
            let b = 84;

            let changedg = g / (datacenters);
            let color = ("rgb(" + r + "," + changedg + "," + b + ");");
            let newBackgroundColor = color.toString();
            grass.style.backgroundColor = newBackgroundColor;

            if (datacenters > 6) {
                document.getElementById("cows").remove();
            }


            datacenterPrice = (1.1 * datacenters * datacenters) + 400;
        }
    }


    let cows = document.querySelectorAll('.cow');
    cows.forEach(cow => {
        let randomTop = Math.random() * 80;
        let randomLeft = Math.random() * 80;
        cow.style.top = randomTop + '%';
        cow.style.left = randomLeft + '%';
    });
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        let randomTop = Math.random() * 80;
        let randomLeft = Math.random() * 80;
        cloud.style.top = randomTop + '%';
        cloud.style.left = randomLeft + '%';
    });


    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    const tickTime = 33; //time a tick takes
    const dt = 1 / 30; //delta t, change in time
    let t = 0 //initial time

    async function mainLoop() {
        while (true) {
            population = calculatePop(datacenters, population, dt);
            vibecodedProjects = calculateVibecodedProjects(vibecodedProjects, datacenterProjectsPerSec, datacenters, dt);
            updateInfo(Math.floor(population) + "00", Math.floor(vibecodedProjects), Math.floor(govtFunding * 10) / 10);

            console.log(t, govtFunding, datacenters, population);
            t += (dt)
            if (population <= 0) { break; }
            await sleep(tickTime);
        }
        document.getElementById("population").innerHTML = "Game Over!";
    }

    mainLoop();
}

window.onload = function () {
    console.log("loaded");
    guh();
}

