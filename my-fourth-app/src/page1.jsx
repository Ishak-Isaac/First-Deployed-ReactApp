import {useState} from "react";



function Cont1(){
const [currentTranslateX, SetCurrentTranslateX] = useState(0);




const items = [{key:"1", imgSrc:"/images/socialize3.jpeg", itemTheme:"Meet New Friends"}, {key:"2", imgSrc:"/images/socialize6.webp", itemTheme:"Create an Event"}, 
{key:"3", imgSrc:"/images/socialize1.jpeg", itemTheme:"Find a Partner"},{key:"4", imgSrc:"/images/socialize2.jpeg", itemTheme:"Hire Employees"},{key:"5", imgSrc:"/images/buildProject.jpeg", itemTheme:"Build a Project"}];
const createShow = items.map(function(item){
                      return(
                          <div className="relative group">
                           <div className="h-full rounded-2xl overflow-hidden" style={{width:"300px"}}><img src={item.imgSrc} alt="" className="w-full h-full object-cover group-hover:w-110% group-hover:h-110% transition-width transition-height duration-1000 rounded-2xl"></img></div>
                           <div className="absolute z-0 inset-0 bg-black rounded-2xl bg-opacity-30 opacity-0 group-hover:opacity-100">
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                             <h1 className=" font-Quicksand text-xl text-center text-white">{item.itemTheme}</h1>
                             <div className="flex justify-center mt-3"><button type="button" className="bg-white rounded-lg text-black font-Quicksand text-medium py-2 px-3">See more</button></div>
                            </div>
                           </div>
                         </div>

                      );
                    });



function moveRight(){
if(currentTranslateX < 0){
SetCurrentTranslateX(currentTranslateX + 330);
}
else{SetCurrentTranslateX(0);}
}

function moveLeft(){
if(currentTranslateX <= (-330 * 4)){
SetCurrentTranslateX(-330 * 4);
}
else{
SetCurrentTranslateX(currentTranslateX - 330);}
}


const bgTexts = [{key:"1", textContStyle:"absolute top-8 right-9"},{key:"2", textContStyle:"absolute top-1/2 -translate-y-1/2 left-9"},{key:"3", textContStyle:"absolute bottom-6 right-24"}];

const createTexts = bgTexts.map(function(text){
     return(
       <div className={text.textContStyle} style={{width:"30%",}}>
         <h1 className="font-MochiyPopOne font-bold text-white text-2xl mb-6">MeetUs</h1>
         <p className="font-Quicksand text-lg text-white mt-3">We make the world one page, and you can write on it any story you want. A story worth sharing! Jump in for an unlimited vision</p>
       </div>
     );
});

const bgImages =[{key:"1", imgContStyleC:"absolute top-16 right-1/2 translate-x-1/2 w-30% h-30% rounded-tl-full rounded-tr-full overflow-hidden", imgStyle:"w-full h-full object-cover hover:w-110% hover:h-110% transition-width transition-height duration-1000 rounded-tl-full rounded-tr-full", imgSrc:"/images/topimage.jpeg"},
     {key:"2", imgContStyleC:"absolute top-1/2  left-9 w-40% h-20% rounded-tl-xl rounded-e-3xl overflow-hidden", imgStyle:"w-full h-full object-cover hover:w-110% hover:h-110% transition-width transition-height duration-1000 rounded-tl-xl rounded-e-3xl", imgSrc:"/images/leftimage.jpeg"},
     {key:"3", imgContStyleC:"absolute bottom-11 right-2 w-30% h-30% rounded-tl-full rounded-tr-full rounded-bl-full overflow-hidden", imgStyle:"w-full h-full object-cover hover:w-110% hover:h-110% transition-width transition-height duration-1000 rounded-tl-full rounded-tr-full rounded-bl-full", imgSrc:"/images/bottomleft.png"}];
const createImages = bgImages.map(function(image){
      return(
        <div className={image.imgContStyleC}><img src={image.imgSrc} alt="" className={image.imgStyle}></img></div>
      );
});




function Fetchy(){
const [fetchedData, setFetchedData] = useState("");
const [processedData, setProcssedData] = useState("");
const [decideUrl, setDecideUrl] = useState("");

async function fetchData(){
const url = "/collection.json";
const request = new Request(url);
const response = await fetch(request);
if(!response.ok){throw new Error(response.status);}
else{
const data = await response.json();
setFetchedData(data);
if(decideUrl === "Employees"){setFetchedData(data.filter(function(option){
return(option.ID === "Employees");
}));}
if(decideUrl === "Partners"){setFetchedData(data.filter(function(option){
return(option.ID === "Partners");
}));}
if(decideUrl === "All"){setFetchedData(data.filter(function(option){
return(option.ID === "Employees" || option.ID === "Partners");
}));}
showData(fetchedData);
}
}
fetchData();



function showData(fetchedData){
const proceData= fetchedData.map(function(item){
   return(
       <div className={item.imgContClass} id={item.ID}><img src={item.imgSrc} alt="" className={item.imgClass}></img></div>
   );
});
setProcssedData(proceData);
}






return(
<>
 <div className="flex gap-5 justify-center mt-5">
  <button type="button" className="bg-white text-button-blue hover:text-button-blue hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-3 py-1 rounded-xl mt-6 relative overflow-hidden group" >All
  <div className="bg-button-blue text-white font-Quicksand text-lg px-3 py-1 rounded-xl absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" onClick={()=>{setDecideUrl("All");}}>All</div>
 </button>
 <button type="button" className="bg-white text-button-blue hover:text-button-blue hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-3 py-1 rounded-xl mt-6 relative overflow-hidden group">Employees
  <div className="bg-button-blue text-white font-Quicksand text-lg px-3 py-1 rounded-xl absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" onClick={()=>{setDecideUrl("Employees");}}>Employees</div>
 </button>
 <button type="button" className="bg-white text-button-blue hover:text-button-blue hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-3 py-1 rounded-xl mt-6 relative overflow-hidden group" >Partners
  <div className="bg-button-blue text-white font-Quicksand text-lg px-3 py-1 rounded-xl absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" onClick={()=>{setDecideUrl("Partners");}}>Partners</div>
 </button>
 </div>
 <div className="mt-8 mb-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {processedData}
 </div>
</>
);
}


return(
<div className="md:col-span-3 lg:col-span-3">

<div className="py-8 px-6 bg-white/25 backdrop-blur-md rounded-3xl shadow-lg shadow-black/5">
 <div className="overflow-hidden relative">
  <div className="flex gap-7 scroll-p-7" style={{width:"calc(5 * 300px)", height: "450px", transform:`translateX(${currentTranslateX}px)`,}}>
   {createShow}
  </div>
  <button type="button" className="w-16 absolute top-1/2 -translate-y-1/2 left-3" onClick={moveRight}><img src="/images/arrow-sm-left-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
  <button type="button" className="w-16 absolute top-1/2 -translate-y-1/2 right-3" onClick={moveLeft}><img src="/images/arrow-sm-right-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></button>
 </div>
 <h1 className="mt-8 font-MochiyPopOne font-semibold text-white text-xl">Explore Infinte Options with MeetUs</h1>
 <p className="mt-4 font-Quicksand text-lg text-white text-justify mr-4">Try new events, and expand your options with MeetUs. You can make new friends, find business partners, investors, mentors, and more!<span className="text-button-blue"> The world is in your hands</span></p>
 <button type="button" className="bg-white text-button-blue hover:text-button-blue hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-3 py-1 w-24 rounded-xl mt-6 relative overflow-hidden group" >Try it
  <div className="bg-button-blue text-white font-Quicksand text-lg  px-3 py-1 rounded-xl absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700">&rarr; Try it</div>
 </button>
</div>

<div className="bg-fancy-blue rounded-3xl mt-8 relative" style={{height:"850px",}}>
 {createTexts}
 <div className="absolute inset-0 bg-black/45 rounded-3xl hover:bg-transparent transition-bg-color duration-300  shadow-lg shadow-black/15">
  {createImages}
 </div>
</div>

<div className="py-8 px-6 mt-8 bg-white/25 backdrop-blur-md rounded-3xl shadow-lg shadow-black/5">
 <h1 className="mt-5 font-MochiyPopOne font-semibold text-white text-xl">Explore Infinte Options with MeetUs</h1>
 <p className="mt-4 font-Quicksand text-lg text-white text-justify mr-4">Try new events, and expand your options with MeetUs. You can make new friends, find business partners, investors, mentors, and more!</p>
 <Fetchy />
 </div>


</div>
);
}







function Cont2(){

const userReviews = [{key:"1", imgSrc:"/images/review1.jpeg", review:"This has been by far the most amazing and fun experience I have ever had online.", reviewee: "Martha Robinsons", revieweeImg:"/images/martha.jpeg"}, 
{key:"2", imgSrc:"/images/review2.jpeg", review:"MeetUs is a super helpful place to find the people you want to connect with", reviewee: "Jeremy Ambisch", revieweeImg:"/images/jeremy.jpeg"}, 
{key:"3", imgSrc:"/images/review3.png", review:"I have met one of my best friends thanks to one of MeetUs's events. I appreciate it!", reviewee: "Sarah Lesorsy", revieweeImg:"/images/sarah.jpeg"}];

const createReviews = userReviews.map(function(userReview){
        return(
          <div className="py-5 px-4 mb-8 bg-white/25 backdrop-blur-md rounded-3xl shadow-lg shadow-black/5">
           <div className="sm:h-64 md:h-64 lg:h-72"><img src={userReview.imgSrc} alt="" className="w-full h-full object-cover rounded-2xl"></img></div>
           <blockquote className="py-20 mt-5 font-Quicksand text-xl mx-8 text-white relative">{userReview.review}
             <div className="h-12 w-12 absolute top-2 -left-2"><img src="/images/quote-left-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></div>
             <div className="h-12 w-12 absolute bottom-2 -right-2"><img src="/images/quote-right-svgrepo-com.svg" alt="" className="w-full h-full object-cover"></img></div>
           </blockquote>
           <div className="flex gap-5 mx-4 mt-10 mb-5 border-t border-white pt-7">
            <div className="h-20 w-20"><img src={userReview.revieweeImg} alt="" className="w-full h-full object-cover rounded-full"></img></div>
             <h1 className="font-MochiyPopOne text-white my-auto">{userReview.reviewee}</h1>
           </div>
          </div>
        );
});


return(
<div className="md:col-span-2 lg:col-span-2">
 {createReviews}

</div>
);


}














export default function Page1(){


return(
<div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5 mt-11">
<Cont1 />
<Cont2 />
</div>
);

}