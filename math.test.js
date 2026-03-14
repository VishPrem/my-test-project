const calculatePremium = require('./math');

describe('Insurance Premium Automation Suite', () => {

    test('Standard Adult: Should return base price of 100', () => {
        expect(calculatePremium(25, 'excellent')).toBe(100);
    });

    test('Minor Check: Should return Ineligible for age 17', () => {
        expect(calculatePremium(17, 'excellent')).toBe("Ineligible");
    });

    test('Boundary Check: Should allow age 18 exactly', () => {
        expect(calculatePremium(18, 'excellent')).toBe(100);
    });

    test('Health Surcharge: Should add $100 for smokers', () => {
        expect(calculatePremium(30, 'smoker')).toBe(200);
    });

    test('Senior Surcharge: Should add $50 for age 65', () => {
        expect(calculatePremium(65, 'excellent')).toBe(150);
    });

    test('Combined Factors: Senior Smoker should pay $250', () => {
        expect(calculatePremium(70, 'smoker')).toBe(250);
    });

    test('Extreme Age: Should return Ineligible for age 101', () => {
        expect(calculatePremium(101, 'excellent')).toBe("Ineligible");
    });
});