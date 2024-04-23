const utils = require("../../utils/utils_test")
const blogs = require("../fixtures/blogs.json")
const users = require("../fixtures/users.json")


afterAll(() => {
    console.log("Test Completed!")
});


describe("utils", ()=>{
    it('should return the total number of blogs', ()=>{
        expect(utils.getBlogCount(blogs)).toBe(5);
    });

    it('should return the total number of users', ()=>{
        expect(utils.getUserCount(users)).toBe(3);
    });

    it("should return an array of blog titles", () => {
        const blogTitles = [
            "Becoming an A-Level musical artist",
            "Essence of belonging to a musical community",
            "Getting certified as a musicologist",
            "The sound of music",
            "10 facts about brass instruments"]

        expect(utils.getBlogTitle(blogs)).toEqual(blogTitles);
    })

    it("should return an array of users email", () => {
        const usersEmail = [
            "kelvin123@gmail.com",
            "tasha123@gmail.com",
            "mac123@gmail.com",]

        expect(utils.getUserEmail(users)).toEqual(usersEmail);
    })

    it("should return the state of the blog", () => {
        expect(utils.getBlogState(1, blogs)).toBe("Published")
    })

    it("should return true if blog is found", () => {
        expect(() => {
            utils.blogIsInDb(1, blogs)
        }).toBeTruthy();
    })

    it("should throw an error if user is not found", () => {
        expect(() => {
            utils.userIsInDb(20, users)
        }).toThrow(new Error("User with id 20 does not exist"));
    })
});