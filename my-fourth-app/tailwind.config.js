/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    screens : {
      "sm": "300px",
      "md":  "740px",
      "lg": "1100px",
       },
    extend: {
     transitionProperty:{
       "spacing": "padding, margin",
      "bg-color": "background-color",
     "text-color": "color",
     "top" : "top",
     "bottom" : "bottom",
     "right" : "right",
     "left" : "left" ,
     "border-c" : "border-color",
     "border-o" : "border-opacity",
     "widht": "width",
     "height": "height",
     },

     height:{
     "300p": "300px",
     "350p" : "300px",
     "400p" : "400px",
     "450p" : "450px",
     "500p" : "500px",
     "600p": "600px",
      "700p": "700px",
      "800p": "800px", 
      "900p": "900px",
     "20%" : "20%",
     "30%" : "30%",
     "40%" : "40%",
     "60%" : "60%",
     "70%" : "70%",
     "80%" : "80%",
     "110%" : "110%",
      }, 
  width:{
    "22%" : "22%",
    "30%" : "30%",
    "40%" : "40%",
    "50%" : "50%",
    "60%" : "60%",
    "70%" : "70%",
    "80%" : "80%",
    "110%" : "110%",
   },

   padding :{
    "10%" : "10%",
    "20%" : "20%",
     "40%" : "40%",
     "50%" : "50%",
     "60%" : "60%",
    "70%" : "70%",
     "80%" : "80%",
      },

     top : {
    "50%" : "50%",
    "100%" : "100%",
   },

  colors : {
   "fancy-blue": "#1d90e2",
   "fancy-purple": "#da57e3",
   "rich-purple" : "#9e44bf",
   "button-blue": "#256a8f",
    
  },
  letterSpacing: {
  "normal" : "5px",
   "wide" : "0.2em",
   "widest" : "0.4em",
},
  
  fontFamily: {
 "chalkboard" : "Chalkboard, Chalkboard SE, Chalkduster",
   "brushScript": " Brush Script MT ",
    "canela"  :  " Canela, Canela Text, Canela Deck ",
    "diwan"   :  " Diwan Kufi, Diwan Thuluth ",
    "PT": "PT Sans Caption, PT Sans Narrow, PT Serif, PT Sefit Caption ",
    "SenmolyCaligan" : "Senmoly Caligan",
    "BarlowCondensed": "Barlow Condensed Bold, Barlow Condensed Thin, Barlow Condensed ExtraLight, Barlow Condensed Light, Barlow Condensed Regular, Barlow Condensed Medium, Barlow Condensed SemiBold ",
    "Josefin-Sans" : "Josefin Sans Light, Josefin Sans Regular, Josefin Sans SemiBold, Josefin Sans Bold",
    "Quicksand": "Quicksand",
    "Oswald" : "Oswald Medium, Oswald Bold, Oswald Light, Oswald ExtraLight, Oswald Regular, Oswald SemiBold",
    "Teko" :  "Teko Light, Teko Regular, Teko Medium, Teko SemiBold, Teko Bold",
    "Satisfy" :  "Satisfy ",
    "Caveat" :  "Caveat Regular, Caveat Medium, Caveat SemiBold, Caveat Bold",
    "Lobster" : "Lobster",
    "Fjalla-One" : "Fjalla One", 
    "Pacifico" : "Pacifico ",
    "MochiyPopOne" : "MochiyPopOne",
},

},
  },
  plugins: [],
}

