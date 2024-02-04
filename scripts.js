document.addEventListener('DOMContentLoaded', function() {
    const rocketsDetails = {
        "1942": "<h2>V2 Rocket</h2><img src=\"images/v2rocket.jpg\" alt=\"V2 Rocket\"/><p>Function: Ballistic Missile, Suborbital Spaceflight</p><p>Height: 14m</p><p>Diameter: 1.65m</p><p>Mass at Liftoff: 12,500kg</p><p>Stages: 1</p>",
        "1957": "<h2>Atlas Rocket</h2><img src=\"images/atals1957.jpg\" alt=\"Atlas Rocket\"/><p>Function: ICBM, Crewed Spaceflight, Satellite Launch</p><p>Height: Varies</p><p>Diameter: 3.05m</p><p>Mass at Liftoff: Varies</p><p>Stages: 1.5 to 2</p>",
        "1959": "<h2>Titan Rocket</h2><img src=\"images/titan1959.jpeg\" alt=\"Titan Rocket\"/><p>Function: Crewed Spaceflight, Satellite Launch</p><p>Height: Varies</p><p>Diameter: 3.05m</p><p>Mass at Liftoff: Varies</p><p>Stages: 2</p>",
        "1961": "<h2>Redstone Rocket</h2><img src=\"images/redstone1961.jpg\" alt=\"Redstone Rocket\"/><p>Function: Suborbital and Orbital Human Spaceflight</p><p>Height: 25.4m</p><p>Diameter: 1.78m</p><p>Mass at Liftoff: Approx. 30,000kg</p><p>Stages: 1</p>",
        "1963": "<h2>Saturn I</h2><img src=\"images/saturn11963.jpg\" alt=\"Saturn 1 Rocket\"/><p>Function: Test Flights, Satellite Launch</p><p>Height: 57.6m</p><p>Diameter: 6.6m</p><p>Mass at Liftoff: 522,000kg</p><p>Stages: 2</p>",
        "1967": "<h2>Saturn V</h2><img src=\"images/saturnv1967.jpg\" alt=\"Saturn V Rocket\"/><p>Function: Manned Lunar Landing (Apollo Missions)</p><p>Height: 110.6m</p><p>Diameter: 10.1m</p><p>Mass at Liftoff: 2,970,000kg</p><p>Stages: 3</p>",
        "1981": "<h2>Space Shuttle</h2><img src=\"images/Space_Shuttle_Columbia_launching.jpg\" alt=\"Space Shuttle Columbia\"/><p>Function: Crewed Orbital Spaceflight, Satellite Deployment</p><p>Height: 56.1m (Orbiter)</p><p>Diameter: 8.7m (External Tank)</p><p>Mass at Liftoff: 2,000,000kg (Approx.)</p><p>Stages: 2</p>",
        "2002": "<h2>Atlas V</h2><img src=\"images/atlasv.jpg\" alt=\"Atlas V Rocket\"/><p>Function: Satellite Launch, Planetary Exploration</p><p>Height: Varies with Configuration</p><p>Diameter: 3.81m</p><p>Mass at Liftoff: Varies with Configuration</p><p>Stages: 2</p>",
        "2010": "<h2>Falcon 9</h2><img src=\"images/falcon9.jpg\" alt=\"Falcon 9 Rocket\"/><p>Function: Crewed and Uncrewed Spaceflight, Satellite Launch</p><p>Height: 70m</p><p>Diameter: 3.7m</p><p>Mass at Liftoff: 549,054kg</p><p>Stages: 2</p>",
        "2021": "<h2>Space Launch System (SLS)</h2><img src=\"images/sls.jpg\" alt=\"Space Launch System\"/><p>Function: Deep Space Exploration, Manned Missions</p><p>Height: 98m (Block 1)</p><p>Diameter: 8.4m</p><p>Mass at Liftoff: Approx. 2,600,000kg</p><p>Stages: 2</p>",
    };

    document.querySelectorAll('.year-button').forEach(button => {
        button.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            const rocketInfo = document.getElementById('rocket-info');
            rocketInfo.innerHTML = rocketsDetails[year] || 'Details not found.';
            rocketInfo.classList.remove('hidden');
        });
    });
});
