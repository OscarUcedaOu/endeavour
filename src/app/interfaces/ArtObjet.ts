export interface ArtObjet {
  id: number;
  title: string;
  longTitle: string;
  objectNumber: string;
  principalOrFirstMaker: string;
  webImage: Image;
  permitDownload: string;
}

// interface WebImage {
//   url: string;
// }
export interface Image {
  url: string;
}
