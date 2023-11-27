// BEGIN STATE VARIABLES
// Here, we define variables for the data that our program needs to remember
// We call this data "state" because it represents the state of our program
const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const startingPrices = [30, 50, 70];

// sample data for starter freelancers
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        startingPrice: 30
    },
    {
        name: "Bob",
        occupation: "Teacher",
        startingPrice: 50
    },
    {
        name: "The average starting price is $40.",
       
    },

    // a few seconds later:
    {
        name: "Carol",
        occupation: "Programmer",
        startingPrice: 70
    },
    {
        name: "The average starting price is $50.",
       
    }
]
// END STATE VARIABLES

// Set up interval
// `setInterval` will call `addFreelancer` every 1000 milliseconds (1 second) and return an interval ID that we can use to stop the interval later. 
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval
const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

render(); // We call this function once to render the initial state