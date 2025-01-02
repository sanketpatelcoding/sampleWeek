// Function to fetch data from the JSON file
const url = 'https://raw.githubusercontent.com/sanketpatelcoding/sampleWeek/master/data.json';

fetch(url) // Adjust the URL if necessary
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Days:', data.days);
        console.log('Months:', data.months);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });