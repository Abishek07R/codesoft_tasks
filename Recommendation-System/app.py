from flask import Flask, render_template, request, jsonify

from recommendations import get_recommendations

app = Flask(__name__)


@app.route("/")
def home():

    return render_template("index.html")


@app.route("/recommend", methods=["POST"])
def recommend():

    data = request.get_json()

    genre = data.get("genre")

    movies = get_recommendations(genre)

    return jsonify({

        "genre": genre,

        "movies": movies

    })


if __name__ == "__main__":

    app.run(

        debug=True

    )