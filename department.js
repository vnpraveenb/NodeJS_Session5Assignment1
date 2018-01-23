var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department Name: " + this.name);
    };
    return Department;
}());
var AccountsDepartment = /** @class */ (function (_super) {
    __extends(AccountsDepartment, _super);
    //Using Department class property and methods here
    function AccountsDepartment(name) {
        return _super.call(this, name) || this;
    }
    AccountsDepartment.prototype.printMeeting = function () {
        console.log("Meeting Time: " + "The Meeting time in " + this.name + " department is 12:00pm everday\n");
    };
    return AccountsDepartment;
}(Department));
var MarketingDepartment = /** @class */ (function (_super) {
    __extends(MarketingDepartment, _super);
    //Using Department class property and methods here
    function MarketingDepartment(name) {
        return _super.call(this, name) || this;
    }
    MarketingDepartment.prototype.printMeeting = function () {
        console.log("Meeting Time: " + "The Meeting time in " + this.name + " department is 01:00pm everday\n");
    };
    return MarketingDepartment;
}(Department));
var FinanceDepartment = /** @class */ (function (_super) {
    __extends(FinanceDepartment, _super);
    //Using Department class property and methods here
    function FinanceDepartment(name) {
        return _super.call(this, name) || this;
    }
    FinanceDepartment.prototype.printMeeting = function () {
        console.log("Meeting Time: " + "The Meeting time in " + this.name + " department is 02:00pm everday\n");
    };
    return FinanceDepartment;
}(Department));
//Approach 1 -- As followed in https://www.typescriptlang.org/docs/handbook/classes.html
var department1; // Create a reference to an abstract type
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
