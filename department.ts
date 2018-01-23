

abstract class Department{
    public name: string;

    constructor(name){
        this.name = name;
    }
        
    printName(): void{
        console.log("Department Name: " + this.name );
    }

    abstract printMeeting(): void;

}

class AccountsDepartment extends Department {
    //Using Department class property and methods here
    constructor(name){
        super(name);
    }


    printMeeting(): void{
        console.log("Meeting Time: " + "The Meeting time in " + this.name +" department is 12:00pm everday\n");
    }
}

class MarketingDepartment extends Department{
    //Using Department class property and methods here
    constructor(name){
        super(name);
    }


    printMeeting(): void{
        console.log("Meeting Time: " + "The Meeting time in " + this.name +" department is 01:00pm everday\n");
    }

}

class FinanceDepartment extends Department{
    //Using Department class property and methods here
    constructor(name){
        super(name);
    }


    printMeeting(): void{
        console.log("Meeting Time: " + "The Meeting time in " + this.name +" department is 02:00pm everday\n");
    }

}

//Approach 1 -- As followed in https://www.typescriptlang.org/docs/handbook/classes.html
let department1: Department; // Create a reference to an abstract type
department1 = new AccountsDepartment("Accounts");  
department1.printName();
department1.printMeeting();
department1 = new MarketingDepartment("Marketing");  
department1.printName();
department1.printMeeting();
department1 = new FinanceDepartment("Finance");  
department1.printName();
department1.printMeeting();
 
// Approach 2 --- Object Oriented Approach
var accDepartment = new AccountsDepartment("Accounts");
accDepartment.printName();
accDepartment.printMeeting();

var mktDepartment = new MarketingDepartment("Marketing");
mktDepartment.printName();
mktDepartment.printMeeting();

var finDepartment = new FinanceDepartment("Finance");
finDepartment.printName();
finDepartment.printMeeting();