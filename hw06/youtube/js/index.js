const search = (ev) => {
    console.log(document.querySelector('input').value);
    let input=document.querySelector('input').value;
    let url = 'https://www.apitutor.org/youtube/simple/?q='+input+'&type=video';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    console.log(data);
    document.querySelector('#container').innerHTML ="";
    for (item of data){
      let template= `<div class="card">
          <h2> ${item.title} </h2>
          <iframe src="https://www.youtube.com/embed/${item.videoId}">
          </iframe>
        </div>`;
      //"<p>"+ item.title +"</p><iframe src=\"https://www.youtube.com/embed/"+item.videoId+"\" ></iframe>"
      document.querySelector('#container').innerHTML +=template;
    }
  //  document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
};

document.querySelector('#search').onclick = search;
//width=\"560\" height=\"315\"
//frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen
