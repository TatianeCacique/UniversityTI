
// lista 6
// modularize o prgrama da bike sempre passando o vetor como parametro

// Define a function that takes an array of bikes as a parameter
function calculateTotalDistance(bikes) {
    let totalDistance = 0;
    for (let i = 0; i < bikes.length; i++) {
        totalDistance += bikes[i].distance;
    }
    return totalDistance;
}

// Define a function that takes an array of bikes as a parameter
function calculateAverageSpeed(bikes) {
    let totalSpeed = 0;
    for (let i = 0; i < bikes.length; i++) {
        totalSpeed += bikes[i].speed;
    }
    return totalSpeed / bikes.length;
}

// Define a function that takes an array of bikes as a parameter
function getTopSpeed(bikes) {
    let topSpeed = 0;
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].speed > topSpeed) {
            topSpeed = bikes[i].speed;
        }
    }
    return topSpeed;
}

// Define an array of bikes
const bikes = [
    { name: "Bike 1", distance: 10, speed: 20 },
    { name: "Bike 2", distance: 20, speed: 15 },
    { name: "Bike 3", distance: 15, speed: 25 },
];

// Call the functions with the bikes array as a parameter
const totalDistance = calculateTotalDistance(bikes);
const averageSpeed = calculateAverageSpeed(bikes);
const topSpeed = getTopSpeed(bikes);

// Output the results
console.log(`Total distance: ${totalDistance}`);
console.log(`Average speed: ${averageSpeed}`);
console.log(`Top speed: ${topSpeed}`);
