# REST-API for Diverse Data Insights

This repository contains the code for a versatile API built with Express.js, designed to handle and serve diverse data insights. The data encompasses various sectors, topics, and sources, providing a broad range of information.

## Project Structure

- **server.js:** Entry point of the application, configuring the Express app, connecting to MongoDB, and starting the server. 
- **routes/routes.js:** Defines API routes and handles data retrieval and processing. 
- **database/connect.js:** Establishes a connection to MongoDB using the provided URI. 
- **controller/controller.js** Defines and handles API routes. Interacts with the data model to fetch and process information. Generates appropriate responses for client requests.The `controller.js` file is integrated with the Express.js application to manage the flow of data and requests. It includes the implementation of various endpoints defined in the API. 
- **.env:** Configuration file for environment variables.

## Setup

1. **Install Dependencies:**
   ```bash 
   npm install 

2. **Create Environment Variables:**
    MONGO_URI = <your_mongo_db_uri> 

3. **Run the Application:**
    npm start 
    nodemon server.js 
    node server.js 


The server will start on the specified port, and you can access the default route at http://localhost:5000/ and the API routes under http://localhost:5000/api/. 


## API Routes

 **GET /:**
    A simple test route responding with a JSON object.

**All routes under /api/:**
    Define your API routes in the routes.js file, accessible under the /api prefix.

## Data
    The API is designed to handle diverse datasets, covering sectors such as Energy, Retail, and more. Each dataset entry includes fields like sector, topic, insight, URL, region, country, and others.


## Examples

    http://localhost:5000/api?intensity=6  
    http://localhost:5000/api?likelihood=3 
    http://localhost:5000/api?endyear=2025 
    