const Manager = require("../lib/Manager");

describe("Manager class", () => {
    const email = "zack.anderson2011@gmail.com";
    const officeNumber = '2819109884';

    it("can be instantiated", () => {
        const manager = new Manager();
        expect(typeof manager).toBe("object");
        expect(manager instanceof Manager).toBe(true);
    });

    it('should have a name manager that can be set on instanstiation', () => {
        const manager = new Manager('Zack');
        expect(manager.name).toBe('Zack');
    })

    it('should have an id property that can be set on instanstiation', () => {
        const manager = new Manager('Zack', 1);
        expect(manager.id).toBe(1);
    })

    it('should have an email property that can be set on instanstiation', () => {
        const manager = new Manager('Zack', 1, email);
        expect(manager.email).toBe(email);
    })

    it('should have an officeNumber property that can be set on instanstiation', () => {
        const manager = new Manager('Zack', 1, email, officeNumber);
        console.log(officeNumber)
        expect(manager.officeNumber).toBe(officeNumber);
    })

    it('should list role as Manager', () => {
        const manager = new Manager('Zack');
        expect(manager.getRole()).toBe("Manager");
    })
})