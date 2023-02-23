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
}
getJson();

