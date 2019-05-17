const search = (ev) => {
    console.log(document.querySelector('input').value);
    let input=document.querySelector('input').value;
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q='+input+'&type=track';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    document.querySelector('#container').innerHTML ="";
    console.log(data);
    for (item of data){
      if (item.preview_url == null) continue;
      //let template= "<h2> " + item.name +  " </h2> <img src=\""+item.album.image_url+"\" alt=\""+item.name+"\"><br></br><audio controls> <source src= " + item.preview_url + " > </audio>";
      let template=`<div class="card">
          <h2> ${item.name} </h2>
          <img src="${item.album.image_url}" alt="${item.name}">
          <br></br>
          <audio controls> <source src= "${item.preview_url}" > </audio>
        </div>`;
      document.querySelector('#container').innerHTML +=template;

      //let albumcover="<div class=\"photo\" style= background-image: url(\""+item.album.image_url + "\")> <img src=\"../playbutton.png\" class=\"playbutton\"></div>";
      //document.querySelector('.card').innerHTML +=albumcover;

    }
    //document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
};

document.querySelector('#search').onclick = search;
