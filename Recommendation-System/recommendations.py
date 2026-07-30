# Movie Recommendation Data

movie_data = {

    "Action": [

        "John Wick",
        "Mad Max: Fury Road",
        "Extraction",
        "The Dark Knight",
        "Mission Impossible"

    ],

    "Comedy": [

        "3 Idiots",
        "The Mask",
        "Jumanji",
        "Free Guy",
        "Home Alone"

    ],

    "Horror": [

        "The Conjuring",
        "Annabelle",
        "Insidious",
        "IT",
        "The Nun"

    ],

    "Romance": [

        "Titanic",
        "The Notebook",
        "La La Land",
        "Me Before You",
        "Your Name"

    ],

    "Sci-Fi": [

        "Interstellar",
        "Inception",
        "Avatar",
        "The Martian",
        "The Matrix"

    ],

    "Animation": [

        "Frozen",
        "Moana",
        "Toy Story",
        "Finding Nemo",
        "Kung Fu Panda"

    ]

}


def get_recommendations(genre):

    if genre in movie_data:

        return movie_data[genre]

    return [

        "No recommendations available."

    ]