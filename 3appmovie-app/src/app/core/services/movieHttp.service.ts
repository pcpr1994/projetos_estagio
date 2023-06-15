import { Injectable } from "@angular/core"
import { MovieModelHttp } from "../models/moviehttp.model"

@Injectable({
  providedIn: 'root'
})


export class MovieHttpService {
  private movieshttp: MovieModelHttp[] = [

    {
      movieAuthor: "00000000-0000-0000-0000-000000000000",
      title: "Avatar: The Way of Water",
      genreDescription: "Action, Adventure, Fantasy",
      genreid: "3a09f6c9-2b5a-711d-3ec2-6f5019500ce5",
      authorid: "3a09f6c9-2b91-a2d2-f85e-d397ee5a42f5",
      releaseDate: "2022-12-16T00:00:00",
      authorName: "James Cameron",
      price: 1000,
      rating: 7.8,
      runtimeMins: "192",
      plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      writers: "James Cameron, Rick Jaffa, Amanda Silver",
      stars: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
      countries: "USA",
      languages: "English",
      idImdb: "tt1630029",
      awards: "Won 1 Oscar, 61 wins & 120 nominations total",
      linkEmbed: "https://www.imdb.com/video/imdb/vi3565864217/imdb/embed",
      videoDescription: "Set more than a decade after the events of the first film, 'Avatar: The Way of Water' begins to tell the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      linkPoster1: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      linkPoster2: "https://image.tmdb.org/t/p/original/5ScPNT6fHtfYJeWBajZciPV3hEL.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BNGExYTkyZDYtYzQ3NC00ZDA5LWJjNjMtNzZkYzdlYzg1MmEwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.9000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BOWJmMWRlYTMtMDQ3ZC00ZDI3LWEyNTMtY2FlNDhjODdlMGI0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.9000_AL_.jpg",
      lastModificationTime: "2023-03-15T21:35:25.960557",
      lastModifierId: "3a09ece5-21f9-2673-38e3-7117911636dd",
      creationTime: "2023-03-15T09:31:35.753246",
      creatorId: "3a09ece5-21f9-2673-38e3-7117911636dd",
      id: "3a09f6c9-2bc6-b7f2-4a80-cb5a4afe7a8c"
    },
    {
      movieAuthor: "00000000-0000-0000-0000-000000000000",
      title: "The Fabelmans",
      genreDescription: "Drama",
      genreid: "3a09f6ce-6336-53d3-203b-9d4f771fd22a",
      authorid: "3a09f6ce-6396-0f26-01b9-4def4b3710d9",
      releaseDate: "2022-11-23T00:00:00",
      authorName: "Steven Spielberg",
      price: 0,
      rating: 7.6,
      runtimeMins: "151",
      plot: "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      writers: "Steven Spielberg, Tony Kushner",
      stars: "Michelle Williams, Gabriel LaBelle, Paul Dano",
      countries: "USA, India",
      languages: "English",
      idImdb: "tt14208870",
      awards: "Nominated for 7 Oscars, 27 wins & 261 nominations total",
      linkEmbed: "https://www.imdb.com/video/imdb/vi165922073/imdb/embed",
      videoDescription: "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      linkPoster1: "https://image.tmdb.org/t/p/original/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
      linkPoster2: "https://image.tmdb.org/t/p/original/rpurQTU9Vm9nSIxV3gZgG7sSHBp.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BNDliNzIwYjQtY2U3NS00ZWIxLTgzZDItNmY1ZGExZmM5ZTAwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio1.5000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BZjhmNjU1MGUtYTJjOC00YWIzLTk2ZDQtODI4OTgwZmZjYTRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.5000_AL_.jpg",
      lastModificationTime: "2023-03-15T11:35:28.049515",
      lastModifierId: "3a09ece5-21f9-2673-38e3-7117911636dd",
      creationTime: "2023-03-15T09:37:17.835388",
      creatorId: "3a09ece5-21f9-2673-38e3-7117911636dd",
      id: "3a09f6ce-6407-19e4-083f-03da653eba5c"
    },
    {
      movieAuthor: "00000000-0000-0000-0000-000000000000",
      title: "Women Talking",
      genreDescription: "Drama",
      genreid: "3a09f6ce-6336-53d3-203b-9d4f771fd22a",
      authorid: "3a09f73f-b794-d02c-bcb9-36eb2e513f11",
      releaseDate: "2023-01-20T00:00:00",
      authorName: "Sarah Polley",
      price: 0,
      rating: 7,
      runtimeMins: "104",
      plot: "Do nothing. Stay and fight. Or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.",
      writers: "Sarah Polley, Miriam Toews",
      stars: "Rooney Mara, Claire Foy, Jessie Buckley",
      countries: "USA",
      languages: "English",
      idImdb: "tt13669038",
      awards: "Won 1 Oscar, 56 wins & 152 nominations total",
      linkEmbed: "https://www.imdb.com/video/imdb/vi1657980185/imdb/embed",
      videoDescription: "Do nothing. Stay and fight. Or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.",
      linkPoster1: "https://image.tmdb.org/t/p/original/twUbb6Irktv0VEsJXQWJ3VKyxFX.jpg",
      linkPoster2: "https://image.tmdb.org/t/p/original/svs6yoAnXPVvbzsSOPXQLzklNvU.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BZjM4M2Y5MTMtODIyMC00ZWM2LTgzNWUtNGIyMzAyYWU0OTE4XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio1.0000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BMWVhNGQ2YTUtZmQwNS00YmFhLWJiNGMtZDZhM2FlZGVhN2E1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio1.5000_AL_.jpg",
      lastModificationTime: '',
      lastModifierId: '',
      creationTime: "2023-03-15T11:41:04.891672",
      creatorId: "3a09ece5-21f9-2673-38e3-7117911636dd",
      id: "3a09f73f-b7f8-61c3-ebec-1d84d8b5fe5f"
    },
    {
      movieAuthor: "00000000-0000-0000-0000-000000000000",
      title: "The Lord of the Rings: The Return of the King",
      genreDescription: "Action, Adventure, Drama",
      genreid: "3a09f95b-c723-4be4-c81f-5a0f0297e60b",
      authorid: "3a09f95b-c79a-4e15-6bef-f669aa6cc6c2",
      releaseDate: "2003-12-17T00:00:00",
      authorName: "Peter Jackson",
      price: 0,
      rating: 9,
      runtimeMins: "201",
      plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      writers: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
      stars: "Elijah Wood, Viggo Mortensen, Ian McKellen",
      countries: "New Zealand, USA",
      languages: "English, Quenya, Old English, Sindarin",
      idImdb: "tt0167260",
      awards: "Top rated movie #7 | Won 11 Oscars, 213 wins & 124 nominations total",
      linkEmbed: "https://www.imdb.com/video/imdb/vi718127897/imdb/embed",
      videoDescription: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      linkPoster1: "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      linkPoster2: "https://image.tmdb.org/t/p/original/uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg",
      image1: "https://m.media-amazon.com/images/M/MV5BNTg3Mzk3NDI0NF5BMl5BanBnXkFtZTcwNDU2MTk2Mw@@._V1_Ratio1.0000_AL_.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BMTk1ODY0NDg2M15BMl5BanBnXkFtZTcwNTU2MTk2Mw@@._V1_Ratio1.5400_AL_.jpg",
      lastModificationTime: '',
      lastModifierId: '',
      creationTime: "2023-03-15T21:32:15.873926",
      creatorId: "3a09ece5-21f9-2673-38e3-7117911636dd",
      id: "3a09f95c-f670-6cc2-5421-89bdb6be165e"
    }
  ]


  getMovies(): MovieModelHttp[]{
    /* console.log('///////////seerdfd');
    console.log(localStorage.getItem("access_token")); */
    return this.movieshttp
  }

  getMovieById(id: string): MovieModelHttp | undefined {
    return this.movieshttp.find(movie => movie.id === id) || undefined
  }

}

