const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("can be instantiated", () => {
        const engineer = new Engineer();
        expect(typeof employee).toBe("object");
        expect(engineer instanceof Engineer).toBe(true);
    });

    it('should have a name property that can be set on instanstiation', () => {
        const engineer = new Engineer('Zack');
        expect(engineer.name).toBe('Zack');
    })

    it('should have an id property that can be set on instanstiation', () => {
        const engineer = new Engineer('Zack', 1);
        expect(engineer.id).toBe(1);
    })

    it('should have an email property that can be set on instanstiation', () => {
        const email = "zack.anderson2011@gmail.com"
        const engineer = new Engineer('Zack', 1, email);
        expect(engineer.email).toBe(email);
    })

    it('should have a Github property that can be set on instanstiation', () => {
        const github = "Zanderson91"
        const engineer = new Engineer('Zack', 1, email);
        expect(engineer.github).toBe(github);
    })

    it('should list role as Engineer', () => {
        const email = "zack.anderson2011@gmail.com"
        const engineer = new Engineer('Zack', 1, email);
        expect(engineer.getRole()).toBe("Engineer");
    })
})