export interface MovieModel {
  id: number
  title: String
  plot: string
  trailer: string
  linkPoster1: string
  image1: string
  image2: string
  rating: string
  details: {
    title: String
    body: String

  }[]
}
