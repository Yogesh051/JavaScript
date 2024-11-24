// async function getData(){
//     setTimeout(function(){
//         console.log("i am inside timeout block");  
//     },3000);
// }

// let output = getData();


async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
  
      // Check if the HTTP response status is okay (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Await the JSON parsing
      console.log(data); // Use the data
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  fetchData();
  