// deletion gallery from html
document.querySelector('.gallery').remove();

// getting data from API
const url = 'http://localhost:5678/api/works'
async function getJson(){
   const request = await fetch(url,{
      method: 'GET'
   });
if(!request.ok){
   alert('Une erreur est survenue')
}else{
   let data = await request.json();
   console.log(data)
   }   
}
getJson();
