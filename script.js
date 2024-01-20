/*
Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/

// Define the start and end years
const startYear = 2014;
const endYear = 2050;

// Loop through the years from startYear to endYear
for (let year = startYear; year <= endYear; year++) {
  // Create a Date object for January 1 of the current year
  let firstJan = new Date(year, 0, 1);
  // Check if the day of the week for January 1 is Sunday (0 corresponds to Sunday)
  if (firstJan.getDay() === 0) {
    // If it's a Sunday, print or log the result
    console.log(`In ${year}, January 1st is a Sunday.`);
  }
}
