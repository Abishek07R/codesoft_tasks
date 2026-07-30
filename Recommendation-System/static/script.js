const recommendBtn = document.getElementById("recommendBtn");

const genreSelect = document.getElementById("genre");

const movieList = document.getElementById("movieList");


recommendBtn.addEventListener("click", async function() {

    const genre = genreSelect.value;

    if (genre === "") {

        alert("Please select a movie genre.");

        return;

    }

    movieList.innerHTML = "<li>Loading recommendations...</li>";

    try {

        const response = await fetch("/recommend", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                genre: genre

            })

        });

        const data = await response.json();

        movieList.innerHTML = "";

        data.movies.forEach(function(movie) {

            const li = document.createElement("li");

            li.textContent = movie;

            movieList.appendChild(li);

        });

    } catch (error) {

        console.log(error);

        movieList.innerHTML = "<li>Something went wrong.</li>";

    }

});