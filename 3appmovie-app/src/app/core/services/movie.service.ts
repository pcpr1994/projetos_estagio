
import { Injectable } from "@angular/core"
import { MovieModel } from "../models/movie.model"

@Injectable({
  providedIn: 'root'
})


export class MovieService {
  private movies: MovieModel[] = [
    {
      id: 1,
      title: "Avatar: The Way of Water",
      plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      trailer: "https://www.imdb.com/video/imdb/vi3565864217/imdb/embed",
      linkPoster1: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BNGExYTkyZDYtYzQ3NC00ZDA5LWJjNjMtNzZkYzdlYzg1MmEwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.9000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BOWJmMWRlYTMtMDQ3ZC00ZDI3LWEyNTMtY2FlNDhjODdlMGI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.9000_AL_.jpg",
      rating: "6.5",
      details: [
        {
          title: "Realese Data",
          body: "2022-12-16",
        },
        {
          title: "stars",
          body: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
        },
        {
          title: "countries",
          body: "USA",
        },
        {
          title: "languages",
          body: "English",
        },
        {
          title: "awards",
          body: "Won 1 Oscar, 61 wins & 120 nominations total",
        }

      ]

    },
    {
      id: 2,
      title: "The Fabelmans",
      plot: "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      trailer: "https://www.imdb.com/video/imdb/vi165922073/imdb/embed",
      linkPoster1: "https://image.tmdb.org/t/p/original/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BNDliNzIwYjQtY2U3NS00ZWIxLTgzZDItNmY1ZGExZmM5ZTAwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BZjhmNjU1MGUtYTJjOC00YWIzLTk2ZDQtODI4OTgwZmZjYTRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.5000_AL_.jpg",
      rating: "8.4",
      details: [
        {
          title: "Realese Data",
          body: "2022-11-23",
        },
        {
          title: "stars",
          body: "Michelle Williams, Gabriel LaBelle, Paul Dano",
        },
        {
          title: "countries",
          body: "USA, India",
        },
        {
          title: "languages",
          body: "English",
        },

        {
          title: "awards",
          body: "Nominated for 7 Oscars, 27 wins & 261 nominations total",
        }

      ]
  },
    {
      id: 3,
      title: "The Lord of the Rings: The Return of the King",
      plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      trailer: "https://www.imdb.com/video/imdb/vi718127897/imdb/embed",
      linkPoster1: "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BNTg3Mzk3NDI0NF5BMl5BanBnXkFtZTcwNDU2MTk2Mw@@._V1_Ratio1.0000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BMTk1ODY0NDg2M15BMl5BanBnXkFtZTcwNTU2MTk2Mw@@._V1_Ratio1.5400_AL_.jpg",
      rating: "8.9",
      details: [
        {
          title: "Realese Data",
          body: "2003-12-17",
        },
        {
          title: "stars",
          body: "Elijah Wood, Viggo Mortensen, Ian McKellen",
        },
        {
          title: "countries",
          body: "New Zealand, USA",
        },
        {
          title: "languages",
          body: "English, Quenya, Old English, Sindarin",
        },

        {
          title: "awards",
          body: "Top rated movie #7 | Won 11 Oscars, 213 wins & 124 nominations total",
        }

      ]
  }

  ]

  getMovies(): MovieModel[]{
    return this.movies
  }

  getMovieById(id: number): MovieModel | undefined {
    return this.movies.find(movie => movie.id === id) || undefined
  }

}
