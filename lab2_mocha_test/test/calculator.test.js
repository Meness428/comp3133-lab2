const { expect } = require("chai");
const calculator = require("../app/calculator.js");

describe("Calculator Tests", () => {
    // Test cases for addition
    describe("Addition Tests", () => {
        it("add(5, 2) should return 7 (PASS)", () => {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it("add(5, 2) should return 8 (FAIL)", () => {
            expect(calculator.add(5, 2)).to.equal(8);
        });
    });

    // Test cases for subtraction
    describe("Subtraction Tests", () => {
        it("sub(5, 2) should return 3 (PASS)", () => {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it("sub(5, 2) should return 5 (FAIL)", () => {
            expect(calculator.sub(5, 2)).to.equal(5);
        });
    });

    // Test cases for multiplication
    describe("Multiplication Tests", () => {
        it("mul(5, 2) should return 10 (PASS)", () => {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it("mul(5, 2) should return 12 (FAIL)", () => {
            expect(calculator.mul(5, 2)).to.equal(12);
        });
    });

    // Test cases for division
    describe("Division Tests", () => {
        it("div(10, 2) should return 5 (PASS)", () => {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it("div(10, 2) should return 2 (FAIL)", () => {
            expect(calculator.div(10, 2)).to.equal(2);
        });
    });
})