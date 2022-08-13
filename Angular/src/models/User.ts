export class User
{
    public id: number = -1;
    public name: string = "";
    public password: string = "";
    public email: string = "";
    
    constructor(id:number, name:string, password:string, email:string)
    {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get Name():string
    {
        return this.name;
    }
    set Name(name:string)
    {
        this.name = name;
    }

    get Password():string
    {
        return this.password;
    }
    set Password(password:string)
    {
        this.password = password;
    }

    get Email():string
    {
        return this.email;
    }
    set Email(email:string)
    {
        this.email = email;
    }
}