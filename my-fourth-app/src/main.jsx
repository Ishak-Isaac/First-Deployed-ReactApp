import {useEffect, useState} from "react";
import { StrictMode } from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css'
import Page1 from "./page1";
import Page2 from "./page2";






function Navi(){
const [input, setInput]= useState("");
const [formMessage, setFormMessage] = useState("");
const [formSeen, setFormSeen] = useState(false)
const [menu, setMenu] = useState("fixed z-20 inset-0 bg-rich-purple relative text-white hidden");

useEffect(function(){
const bouncy = document.querySelector("#bouncy");
document.addEventListener("mouseover", function(event){
if(bouncy.contains(event.target)){
bouncy.style.animationPlayState = "running";
}
else{bouncy.style.animationPlayState = "paused";}
});
}, [])





function menuVisible(){
if(menu === "fixed z-20 inset-0 bg-rich-purple text-white hidden"){
setMenu("fixed z-20 inset-0 bg-rich-purple text-white");
}
else{
setMenu("fixed z-20 inset-0 bg-rich-purple text-white hidden");
}
}



function showInput(event){
setInput(event.target.value);
}
function formCheck(event){
if(input === ""){
event.preventDefault();
setFormMessage("Please enter a search term");
}
else if(input.includes("?") || input.includes("!")){
event.preventDefault();
setFormMessage("A search term shouldn't include '?' or '!' ");
}
else{setInput("");}
}

function showForm(){
if(formSeen === false){
setFormSeen(true);
}
else{setFormSeen(false);}
}


return(
<>
<div className="flex gap-5 sticky top-7 z-10">
 <div className="w-20 border-2 border-white bg-yellow-600 rounded-2xl" id="bouncy"><Link to="/page1" className=""><img src="/images/friends.png" alt="" className="w-full h-full object-cover"></img></Link></div>
 <div className="flex bg-white/25 backdrop-blur-2xl text-white py-5 px-4 rounded-full" id="backBlurry" style={{flexBasis: "95%"}}>
  <div className="flex">
   <div className=" mx-4"><Link to="/page1" target="" className="text-3xl font-MochiyPopOne">MeetUS</Link></div>
   <div className="border-b-2 border-b-white/0 hover:border-gray-100 ml-7 py-1 my-auto transition-border-c duration-1000 sm:hidden md:hidden lg:block"><Link to="/page2" target="" className="font-MochiyPopOne text-base">Products</Link></div>
   <div className="ml-4 my-auto border-b-2 border-b-white/0 hover:border-gray-100 py-1 transition-border-c duration-1000 sm:hidden md:hidden lg:block"><a href="" target="" className="font-MochiyPopOne text-base">About Us</a></div>
  </div>
  <div className="flex mr-4 mx-auto gap-5">
   <button type="button" className="w-8" onClick={showForm}><img src="/images/search-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
   <button type="button" className="w-8 h-8 my-auto sm:block md:block lg:hidden" id="menuIcon" onClick={menuVisible}><img src="/images/menu-navigation-grid-1529-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
  </div>
 </div>
</div>

<div className={menu} id="menuCont">
 <div className="py-5 pl-6 hover:bg-button-blue" onClick={menuVisible}><Link to="/page2" target="" className="font-MochiyPopOne text-3xl block">Content</Link></div>
 <div className=" py-5 pl-6 hover:bg-button-blue" onClick={menuVisible}><a href="" target="" className="font-MochiyPopOne text-3xl block">About Us</a></div>
 <button type="button" className="w-12 h-12 absolute top-9 right-11" onClick={menuVisible}><img src="/images/delete-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
</div>

<div className="bg-white/25 backdrop-blur-md rounded-2xl py-6 px-6 fixed top-40 right-28 hidden" style={{width:"40%", display: formSeen === true? "block" : "none",}}>
 <form className="" id="searchForm" onSubmit={formCheck}>
  <input type="search" className="w-full rounded-xl py-1 pl-3" placeholder="search" value={input} onChange={showInput}></input>
  <p className="text-rich-purple my-1">{formMessage}</p>
  <button type="submit" className="bg-white text-black font-Quicksand text-base px-3 py-1 rounded-xl mt-3">Search</button>
 </form>
</div>
</>
);
}




function Footer(){


return(
<div className="bg-white/25 backdrop-blur-md rounded-3xl mt-11 py-10 px-16 flex">
 <div className="" style={{flexBasis: "50%",}}>
  <div className="w-28 border-2 border-white bg-yellow-600 rounded-2xl"><a href="" className=""><img src="/images/friends.png" alt="" className="w-full h-full object-cover"></img></a></div>
  <div className="flex gap-2 my-4">
   <button type="button" className="w-12 h-12 p-3 hover:p-2 rounded-full bg-button-blue hover:bg-rich-purple"><img src="/images/facebook-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
   <button type="button" className="w-12 h-12 p-3 hover:p-2 rounded-full bg-button-blue hover:bg-rich-purple"><img src="/images/instagram-167-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
   <button type="button" className="w-12 h-12 p-3 hover:p-2 rounded-full bg-button-blue hover:bg-rich-purple"><img src="/images/twitter-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
   <button type="button" className="w-12 h-12 p-3 hover:p-2 rounded-full bg-button-blue hover:bg-rich-purple"><img src="/images/linkedin-161-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
  </div>
  <h1 className="font-MochiyPopOne text-white text-4xl font-extrabold">MeetUs</h1>
 </div>
 <div className="" style={{flexBasis: "50%",}}>
  <h2 className="font-Quicksand text-2xl text-white text-justify">Thanks for using MeetUs. If you have any request or issue, please reach out anytime!</h2>
  <div className="mt-5 mx-auto" style={{width:"80%",}}>
   <input type="email" className="py-2 pl-3 rounded-xl w-full appearance-none" autocomplete="on" placeholder="jam422@gmail.com"></input>
   <textarea className="overflow-auto resize-y py-2 pl-3 rounded-xl w-full h-28 appearance-none mt-2" placeholder="Write here . . ."></textarea><br></br>
   <button type="submit" className="bg-white text-button-blue hover:text-button-blue hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-3 py-1 rounded-xl mt-3 relative overflow-hidden group" >Send
    <div className="bg-button-blue text-white font-Quicksand text-lg px-3 py-1 rounded-xl absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700">Send</div>
   </button>
  </div>
 </div>
</div>

);
}







export default function MainCont(){



return(
<>
<Navi />
<Routes>
<Route path="/" element={<Page1/>} />
<Route path="/page1" element={<Page1/>} />
<Route path="/page2" element={<Page2/>} />
</Routes>
<Footer />
</>
);
}






const mainPath = ReactDOM.createRoot(document.querySelector("#mainHTML"));
mainPath.render(
 <BrowserRouter>
 <MainCont />
 </BrowserRouter>
)
