//  Dark mode
const showCase = document.getElementsByTagName('section')[0];
const darkModeBtn = document.getElementsByTagName('i')[0];
const searchBar = document.forms[0].querySelector('input');

darkModeBtn.addEventListener('click', ()=>{
    showCase.classList.toggle('active');
    darkModeBtn.classList.toggle('active');
    searchBar.classList.toggle('active')
})


// Nominate Banner

const nominateBanner =  document.querySelector('.nominate-banner');
const nominateTag = document.querySelector('.intro button');


nominateTag.addEventListener('click', ()=>{

    nominateTag.style.animation = 'shake 0.5s linear both';
    nominateBanner.classList.toggle('active');
});


// Nominate movies
const nominateMovie = document.querySelector('.movie-content');

nominateMovie.addEventListener('click', (e)=>{  
    nominateTag.classList.add('active')  

    if(e.target.classList == 'nominate'){
        const nominateBanner =  document.querySelector('.nominate-banner');
        const movie = e.target.parentElement;
        const clonedMovie = movie.cloneNode(true); 
        clonedMovie.style.padding = '5px'       
        clonedMovie.style.paddingLeft = '150px'       

        nominateBanner.appendChild(clonedMovie);
      
    }
})

// Filter movies
// const searchBar = document.forms[0].querySelector('input');
const movieContent = document.querySelector('.movie-content');

searchBar.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const text = e.target.value.toLowerCase();
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const title = movie.textContent;
        if(title.toLowerCase().indexOf(text) != -1){
            movie.style.display = 'initial'
        }else{
            movie.style.display = 'none'

        }
        
    });
});