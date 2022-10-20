export class Customer{
    public id : string;
    public name : string;
    public address :string;
    public zip : number;
    public PN : number;
    constructor(id : string,name : string , address : string ,zip : number,PN:number){
        this.id = id;
        this.name = name;
        this.address = address;
        this.zip = zip;
        this.PN=PN;
    }
    
}
