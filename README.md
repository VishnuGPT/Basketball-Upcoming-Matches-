Project Title:- Basketball Upcoming Matches

Description:- Displays upcoming NBA games using Balldontlie API(https://www.balldontlie.io/).
Includes Date, time of the match and Teams Playing.


|How to run locally?|

In cmd

1-> cd {location of a folder}

2-> npm create Vite@latest

3->Project Name 

4-> Choose react>javascript

5->Done.. Open the folder is VS code/your code editor

6-> Get components folder from the github with app.jsx (replace it with yours in the folder)

|Dependencies|

1->
                     
    npm install
2->    

    https://tailwindcss.com/docs/installation/using-vite 
3->

     npm install @balldontlie/sdk


|Api Setup|

Signup in https://www.balldontlie.io/ get your api code

In documentation of Balldontlie check out for Games code

            import { BalldontlieAPI } from "@balldontlie/sdk";
            const api = new BalldontlieAPI({ apiKey: "YOUR_API_KEY" });
            const games = await api.nba.getGames(); //used in Content.jsx 


|npm run dev|
