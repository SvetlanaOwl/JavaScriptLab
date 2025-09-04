async function fetchData(){
    try {
        const responce = await fetch ("https://api.example.com/data");
        const data = await Response.json();
        console.log("Data received:", data);
    } catch (error) {
    console.error("Failed to fetch data:", error.message);
    } 
}