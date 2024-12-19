const request = require("supertest");
const app = require("../app");

describe("Get", () => {
    it("Response will 200 status and json", async () => {
        const chai = await import("chai");
        const expect = chai.expect;
        await request(app).get("/health").expect(200);
    });
});
