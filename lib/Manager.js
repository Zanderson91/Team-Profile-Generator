const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return officeNumber;
    }

}

module.exports = Manager;