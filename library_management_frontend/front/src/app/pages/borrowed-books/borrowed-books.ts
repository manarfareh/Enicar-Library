export interface BorrowedBook {
  id :number;
  student_id:number;
  book_id:number;
  borrow_date:Date;
  return_date:Date;
  }
  export interface Book {
    id: number;
    book_type:string;
    title: string;
    author: string;
    isDigit: number; // 0 if physical, 1 if digital
    url: string; // if it's a digital book, it has a URL
    publicationYear: number;
    language: string;
    pageCount: number;
    description: string;
    isAvailable: number;
    aClass :Class;
    subject :string;
  }

    export interface Student {
      name:string;
       email:string;
        dob:Date;
       phoneNumber:number;
        aClass:Class;
        password:string
        imageUrl:string;
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