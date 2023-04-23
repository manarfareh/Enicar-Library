export interface Book {
  id: number;
  book_type:string;
  title: string;
  author: string;
  publicationYear: number;
  language: string;
  pageCount: number;
  description: string;
  isAvailable: number;
  aClass :Class;
  subject :string;
}

  
  export enum Class {
    info1 = "info1",
    info2 = "info2",
    info3 = "info3",
    meca1 = "meca1",
    meca2 = "meca2",
    meca3 = "meca3",
    gsil1 = "gsil1",
    gsil2 = "gsil2",
    gsil3 = "gsil3",
    infot1 = "infot1",
    infot2 = "infot2",
    infot3 = "infot3",
    m_tic = "m_tic",
    m_arti = "m_arti",
    m_mpsdm = "m_mpsdm",
    }