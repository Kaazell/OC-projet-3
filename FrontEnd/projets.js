// deletion gallery from html
document.querySelector('.gallery').remove();

// getting data from API
const url = 'http://localhost:5678/api/works'
async function getJson(){
   const request = await fetch(url,{
      method: 'GET'
   });
if(!request.ok){
   alert('Une erreur est survenue');
}else{
   let data = await request.json();
   //  import gallery from API 
   const portfolio     = document.querySelector('#portfolio');
   const gallery       = document.createElement('div');
   gallery.className   = "gallery";
   portfolio.appendChild(gallery);

   function displayGallery(data){
      for(let i = 0; i < data.length; i++){
         let figure      = document.createElement('figure');
         let img         = document.createElement('img');
         let figCaption  = document.createElement('figcaption');
         
         img.src                 = data[i].imageUrl; 
         figCaption.innerText    = data[i].title;

         gallery.appendChild(figure);
         figure.appendChild(img);
         figure.appendChild(figCaption);
      }
   }

   // Default display
   displayGallery(data);

   //  Setting filter button.
   const tousButton     = document.querySelector(".tous");
   const objetButton    = document.querySelector(".objet");
   const appartButton   = document.querySelector(".appart");
   const hotelButton    = document.querySelector(".hotel");

   tousButton.addEventListener("click", function(){
      let tousFiltered = data.filter(objet => objet.userId == 1);
      document.querySelector(".gallery").innerHTML="";
      displayGallery(tousFiltered);
   });
   objetButton.addEventListener("click", function(){
      let objetFiltered = data.filter(objet => objet.category.name === "Objets");
      document.querySelector(".gallery").innerHTML="";
      displayGallery(objetFiltered);
   });
   appartButton.addEventListener("click", function(){
      let appartFiltered = data.filter(objet => objet.category.name === "Appartements");
      document.querySelector(".gallery").innerHTML="";
      displayGallery(appartFiltered);
   });
   hotelButton.addEventListener("click", function(){
      let hotelFiltered = data.filter(objet => objet.category.name === "Hotels & restaurants");
      document.querySelector(".gallery").innerHTML="";
      displayGallery(hotelFiltered);
   });
}   
}
getJson();

 