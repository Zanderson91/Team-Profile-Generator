const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("can be instantiated", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
        expect(employee instanceof Employee).toBe(true);
    });

    it('should have a name property that can be set on instanstiation', () => {
        const employee = new Employee('Zack');
        expect(employee.name).toBe('Zack');
    })

    it('should have an id property that can be set on instanstiation', () => {
        const employee = new Employee('Zack', 1);
        expect(employee.id).toBe(1);
    })

    it('should have an email property that can be set on instanstiation', () => {
        const email = "zack.anderson2011@gmail.com"
        const employee = new Employee('Zack', 1, email);
        expect(employee.email).toBe(email);
    })

    it('should list role as Employee', () => {
        const email = "zack.anderson2011@gmail.com"
        const employee = new Employee('Zack', 1, email);
        expect(employee.getRole());
    })
})

