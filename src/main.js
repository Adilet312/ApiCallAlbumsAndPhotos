
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
                   /*Get albums*/
document.addEventListener('DOMContentLoaded', () => {
  const generateAlbums = document.getElementById('js-albums');
  generateAlbums.addEventListener('click', getAllAlbums);
});


let getAllAlbums = () =>
{
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then((data) => data.json())
  .then((data) => getAlbums(data));

}

let getAlbums = (albums) =>{
  let idx = 0;
  let table = document.getElementById('tableId');
  let album;
  while(idx<albums.length){
    album = albums[idx];
    let tr = document.createElement('tr');
    let id = document.createElement('td');
    let userId = document.createElement('td');
    let title = document.createElement('td');
    id.innerText = album.id;
    title.innerText = album.title;
    userId.innerText = album.userId;



    //li.id = album.id;
    tr.appendChild(id);
    tr.appendChild(userId);
    tr.appendChild(title);
    table.appendChild(tr);
    idx = idx + 1;
  }

}

                        /*Get Photos based on given album Id*/
  document.addEventListener('DOMContentLoaded', () => {
     const generatePhotos = document.getElementById('js-photos');
     generatePhotos.addEventListener('click', getAllPhotos);
     });

  let getAllPhotos = () => {
    let albumId = document.getElementById('inputId').value;
    console.log(albumId);
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then((data) => data.json())
    .then((data) => getPhotos(data));

}

let getPhotos = (photos) => {
  let ul = document.getElementById('photos');
  for(let idx=0; idx<photos.length; idx++)
    {
      let picture = photos[idx];
      let li = document.createElement('li');
      let imgTag = document.createElement('img');
      imgTag.src = picture.thumbnailUrl;
      li.appendChild(imgTag);
      ul.appendChild(li);

    }
}
