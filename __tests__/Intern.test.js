const Intern = require("../lib/Intern");

describe("Intern class", () => {
    const email = "zack.anderson2011@gmail.com";
    const school = 'Rice University';

    it("can be instantiated", () => {
        const intern = new Intern();
        expect(typeof intern).toBe("object");
        expect(intern instanceof Intern).toBe(true);
    });

    it('should have a name intern that can be set on instanstiation', () => {
        const intern = new Intern('Zack');
        expect(intern.name).toBe('Zack');
    })

    it('should have an id property that can be set on instanstiation', () => {
        const intern = new Intern('Zack', 1);
        expect(intern.id).toBe(1);
    })

    it('should have an email property that can be set on instanstiation', () => {
        const intern = new Intern('Zack', 1, email);
        expect(intern.email).toBe(email);
    })

    it('should have a School property that can be set on instanstiation', () => {
        const intern = new Intern('Zack', 1, email, school);
        expect(intern.school).toBe(school);
    })

    it('should list role as Intern', () => {
        const intern = new Intern('Zack');
        expect(intern.getRole()).toBe("Intern");
    })
})