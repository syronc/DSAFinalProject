import React from 'react';
import "./Help.css";
import lunapic from "../Images/LunaPhoto.png"
import connorpic from "../Images/connorPhoto.jpg"
export default () => (
      // Information for the About page
 <div>
   <h1 className='head'>Who?</h1>
  
<p className='connor'> Front-End: Connor Syron </p> 


<p className='samir'> Algorithims: Samir Ziad</p>


<p className='luna'> API Integration: Lunafreya Ngyuen </p>


<br></br>
<img 
      src={connorpic}
      alt="Connor Photo"
      className='connorPic'
      />

<img 
      src="https://media-exp1.licdn.com/dms/image/C4D03AQG_3ZpYFtP5sg/profile-displayphoto-shrink_400_400/0/1632866623953?e=1644451200&v=beta&t=cT-5uZbwtY8gS7G61e0BaLqcNXE4qhoZ35CIWurh32s"
       alt="Samir Photo"
      className='samirPic'
      />
  <img
 src={lunapic}
 className='lunaPic'
 alt = "Luna Photo"
/>

 </div>
 
);
