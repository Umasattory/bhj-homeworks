const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
const URLServer = "https://netology-slow-rest.herokuapp.com/upload.php"

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const xhr = new XMLHttpRequest();
   const data = new FormData(form);
   data.append('file', file[0])

   xhr.upload.addEventListener('progress', (e) => {
      progress.value = e.loaded / e.total
   });

   xhr.upload.addEventListener('load', (e) => {
      alert('file loaded, thanks')
   })

   xhr.upload.addEventListener('error', (e) => {
      alert('download defult, it was error ' + e)
   })

   xhr.open('POST', URLServer);
   xhr.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded');
   xhr.send(JSON.stringify(data));
});