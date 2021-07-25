<h1 align="center">

<img src="./klifu.gif" alt="logo" width="200"  />

Klifu-API

</h1>


This is a backbone of **Klifu**. This acts as a datastore for our game data, which will be priodically changed to update the game.  

## Getting Started
Klifu API is built on nodejs, and is using express, to run it localy you would need nodeJS installed in you local system. [To download NodeJS click here](https://nodejs.org/en/download/)

### Installation 
To run the application on your local machine follow these steps
- After successfully cloning the repo, 
- run `npm install` to install all the dependencies. 
- run `npm run dev` to start the dev server. 

> We are using airtable of our data storage so you need to create a `.env` file and pass these enviorment variables to run the server successfully. 
```.env
API_KEY=${airtable_api_key}
BASE=${airtable_base_ID}
```