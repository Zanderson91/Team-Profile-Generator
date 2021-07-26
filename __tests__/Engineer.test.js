const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    const email = "zack.anderson2011@gmail.com";
    const github = 'Zanderson91';

    it("can be instantiated", () => {
        const engineer = new Engineer();
        expect(typeof engineer).toBe("object");
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
        const engineer = new Engineer('Zack', 1, email);
        expect(engineer.email).toBe(email);
    })

    /*need to globally assign variables describe("Engineer class", () => {
    define all of your variables and create your Engineer here, then run all of the tests on that one engineer
    it("can be instantiated", () => {
        */

    it('should have a Github property that can be set on instanstiation', () => {
        const engineer = new Engineer('Zack', 1, email, github);
        console.log(engineer)
        expect(engineer.github).toBe(github);
    })

    it('should list role as Engineer', () => {
        const engineer = new Engineer('Zack');
        expect(engineer.getRole()).toBe("Engineer");
    })
})