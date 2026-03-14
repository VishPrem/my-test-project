function calculatePremium(age, healthStatus) {
    let base = 100;

    // Rule 1: No insurance for minors
    if (age < 18) return "Ineligible";

    // Rule 2: Seniors (65+) pay a 50% surcharge
    if (age >= 65) base += 50;

    // Rule 3: Health Status impacts
    if (healthStatus === 'smoker') {
        base += 100;
    } else if (healthStatus === 'poor') {
        base += 30;
    }

    // Rule 4: Maximum age limit
    if (age > 100) return "Ineligible";

    return base;
}

module.exports = calculatePremium;