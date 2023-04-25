export interface Staff {
    id:number;
    name:string;
     email:string;
      dob:Date;
     phoneNumber:number;
      password:string
      imageUrl:string;
      Role:Role;
 }
 export enum Role  {

    USER="USER",
    ADMIN="ADMIN",
}