export default class Users {
    // 1. Typage des propiétés d'un pokémon.
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    adress: string;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
     id: number,
     firstname: string,
     lastname: string,
      email: string ='XXXX@XXX.XXX',
     phone: string,
     adress:string,
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.firstname = firstname;
     this.lastname =lastname;
     this.email = email;
     this.phone = phone;
     this.adress = adress;
     this.created = created;
    }
   }