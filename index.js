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
        name: "Carol",
        occupation: "Programmer",
        startingPrice: 70
    },
]
// END STATE VARIABLES

// Set up interval
setInterval(addFreelancer, 1000)

render(); // We call this function once to render the initial state

//RENDER function - update to DOM to reflect the current state of the program
function render() {
    //Point to existing container in HTML
    const professionalsContainer = document.querySelector("#professionals")
    console.log(professionalsContainer)

    //Creating the elements that we want to add
    const professionalElements = freelancers.map((freelancer) => {
        const element = document.createElement("li") //Creating <li></li>
        element.classList.add(freelancer.name, freelancer.occupation, freelancer.startingPrice) //Adding classes to li element
        element.textContent = `${freelancer.name}, ${freelancer.occupation}, ${freelancer.startingPrice}`; //Make elements show up as text
        console.log(element)
        return element //for example: <li class="yellow small"></li>
        //it will do this for each element in the map
    })

    //Actually add those created elements to the container
    professionalsContainer.replaceChildren(...professionalElements)
}

// Calculate average starting price of my freelancers array
function addAveragePrice() {
    let average = 1
    for (let i = 0; i < startingPrices.length; i++) {
      average = average + startingPrices[i]/3
    return average
    } 
    const averagePrice = document.querySelector("average");
    averagePrice.textContent = `The average starting price is ${average}`

    render()
}

// Add a random freelancer to the `freelancers` array
function addFreelancer() {
    const selectedName = names[Math.floor(Math.random() * names.length)]
    console.log(selectedName)

    const selectedOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    console.log(selectedOccupation)

    const selectedstartingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)]
    console.log(selectedstartingPrice)

    freelancers.push({name: selectedName, occupation: selectedOccupation, startingPrice: selectedstartingPrice})

    render()
}

