import React from 'react';
import "./Sec.css"

function Home(props) {
  // Home Page information
    return (
        <div id="rcorners">
         <h1>Steam Web</h1>
         <hr></hr>
         <p>Steam Web is an application developed to display the usages of breadth first search in order
           to find the shortest possible path in a graph structured dataset. Using the Steam Community API,
           this website finds the shortest possible path from one Steam user to another user, traveling through
           connections of mutual friends.
         </p>
         <br></br>
         <p style={{ textAlign: 'center' }}>To get started, click on the second tab on the sidebar, and input the starting Steam Account's ID,
           and the target Steam Account's ID to find the shortest path through friend connects.
         </p>
         <br></br>
         <p className='linkText'>If you need help finding a Steam Id use this resource https://www.steamidfinder.com/ or click </p>
         <a href="https://www.steamidfinder.com/" target="_blank" className='link'>here</a> 
         {/* opens link in new tab */}

         
        </div>
    );
}

export default Home;