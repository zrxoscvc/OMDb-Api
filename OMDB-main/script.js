

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        const searchTerm = document.getElementById("searchTerm").value;
        const url = "http://www.omdbapi.com/?apikey=e893e6e2&s="+searchTerm;
        const response = await fetch(url);
        const json = await response.json();
        console.log(JSON.stringify(json));

        

        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD
            let divHolder = document.createElement("div");
            divHolder.classList.add("card");
            
            
            

            
            

            // Create an image element
            //      point it to the image from this movie            
            let img = document.createElement("img");
            img.src = movie.Poster;
            img.width = 100;


            // Create a CONTAINER div to hold the title and year.
            let card = document.createElement("div");
            card.classList.add("container");
            // Give the CONTAINER div the style of container
            let titleHeader = document.createElement("h4");
            titleHeader.textContent = movie.Title
            // Add the CONTAINER to the CARD
            card.appendChild(titleHeader);
            divHolder.appendChild(img);
            divHolder.appendChild(card);
            // Add all the elements to the movieHolder element
            movieHolder.appendChild(divHolder);
        }


    }
    catch (error) {
        console.log(error)
    }
}