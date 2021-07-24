const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("can be instantiated", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    });

    it("should have a name property that can be set on instanstiation", () => {
        const employee = new Employee("Dave");
        expect(employee.name).toBe("Dave");
    });

    it("should have a id property that can be set on instanstiation", () => {
        const employee = new Employee("Dave", 1);
        expect(employee.id).toBe(1);
    });
});