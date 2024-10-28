const express = require('express'); // Import Express  

const init = async () => {  
    const app = express(); // Create an Express application  

    // Start the server  
    const port = 8080;  
    app.listen(port, () => {  
        console.log(`Server running on http://localhost:${port}`);  
    });

    // Define the route  
    app.get('/', (req, res) => {  
        res.send('Hello World!'); // Respond with 'Hello World!'  
    });    
};  

// Call the init function to start the server  
init();
