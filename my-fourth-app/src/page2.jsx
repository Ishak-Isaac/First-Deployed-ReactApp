import {useState, useEffect} from "react";
















export default function Page2(){
const [url, setUrl] = useState("");
const [finArticle, setFinalArticle] = useState("");
const [decide, setDecide] = useState("")


const myKey = "MJlecOJfuEQIAxmVS4wLps19Pd7kRpKv";
useEffect(function(){
function fetchOpe(){
setUrl(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${myKey}`);
if(decide === "art"){setUrl(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${myKey}`);}
if(decide === "fashion"){setUrl(`https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${myKey}`);}
if(decide === "movies"){setUrl(`https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${myKey}`);}
if(decide === "theater"){setUrl(`https://api.nytimes.com/svc/topstories/v2/theater.json?api-key=${myKey}`);}
fetch(url)
.then(function(response){
if(!response.ok){
throw new Error(response.status);
}
else{
 return response.json();}
})
.then(function(result){ showResult(result);})
}
fetchOpe();
}, [decide, url]);


function showResult(result){
const articles = result.results;
const createArticles = articles.map(function(article){
   const facets = article.des_facet.map(function(facet){
      return(
       <p className="py-2 px-3 text-white font-Quicksand rounded-2xl bg-white/25 backdrop-blur-md hover:bg-rich-purple/25">{facet}</p>
      );
   });
   const media = article.multimedia.map(function(med){
      return(
        <div className="w-48 h-60"><img src={med.url} alt={med.caption} className="w-full h-full object-cover rounded-2xl"></img></div>
      );
});
   return(
     <div className="py-12 px-4 border-b-2 border-white">
      <h1 className="font-MochiyPopOne text-xl text-white font-bold">{article.title}</h1>
      <div className="flex gap-8 ml-1 flex-wrap">
      <h2 className="font-MochiyPopOne text-gray-300 font-bold mt-3">{article.byline}</h2>
      <h3 className="font-MochiyPopOne text-gray-300/30 font-bold mt-3">{article.section}-{article.subsection}</h3>
      </div>
      <h4 className="ml-4 mt-3 font-MochiyPopOne text-white/55 font-medium text-gray-300">Pulished on: {article.published_date.slice(0, article.published_date.indexOf("T"))}</h4>
      <div className="flex gap-4 mx-3 my-6 flex-wrap">
       {(facets)? facets: "There are no facets for this article!"}
      </div>
      <p className="font-Quicksand text-lg text-justify mt-6">{article.abstract}</p>
      <div className="flex gap-5 my-4 flex-wrap">
        {media}
      </div>
     </div>
   );
});

setFinalArticle(createArticles);
}



return(
<div className="bg-white/25 backdrop-blur-md rounded-3xl mt-11 py-8 px-6">
 <div className="flex gap-3 mr-4 mx-auto">
  <button type="submit" className="bg-white text-button-blue hover:text-white hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-5 py-1 rounded-xl mt-3" onClick={()=>{setDecide("arts");}}>Art</button>
  <button type="submit" className="bg-white text-button-blue hover:text-white hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-5 py-1 rounded-xl mt-3" onClick={()=>{setDecide("fashion");}}>Fashion</button>
  <button type="submit" className="bg-white text-button-blue hover:text-white hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-5 py-1 rounded-xl mt-3" onClick={()=>{setDecide("movies");}}>Movies</button>
  <button type="submit" className="bg-white text-button-blue hover:text-white hover:bg-button-blue transition-bg-color duration-200 font-Quicksand text-lg px-5 py-1 rounded-xl mt-3" onClick={()=>{setDecide("theater");}}>Theater</button>
 </div>
 <div className="mt-14 px-3 overflow-scroll" style={{height:"700px",}}>
  {finArticle}
 </div>
</div>
);

}