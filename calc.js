function calculateTotal() {
    // Full Upgrade Kits
    const recklessKitPrice = 70000;
    const demonKitPrice = 150000;
    const recklessKitCount = parseInt(document.getElementById('recklessKitCount').value) || 0;
    const demonKitCount = parseInt(document.getElementById('demonKitCount').value) || 0;
    
    // Repairs and Paint Services
    const repairPrice = 3500;
    const recklessPaintPrice = 10000;
    const basicPaintPrice = 4000;
    const repairsCount = parseInt(document.getElementById('repairsCount').value) || 0;
    const recklessPaintCount = parseInt(document.getElementById('recklessPaintCount').value) || 0;
    const basicPaintCount = parseInt(document.getElementById('basicPaintCount').value) || 0;

    // Cosmetics and NOS
    const cosmeticsPrice = 1500;
    const nosBottlePrice = 400000;
    const nosRefillPrice = 200000;
    const cosmeticsCount = parseInt(document.getElementById('cosmeticsCount').value) || 0;
    const nosBottlesCount = parseInt(document.getElementById('nosBottlesCount').value) || 0;
    const nosRefillCount = parseInt(document.getElementById('nosRefillCount').value) || 0;

    // Performance Items
    const turboPrice = 30000;
    const engine6kPrice = 6000;
    const engine15kPrice = 15000;
    const engine22kPrice = 22500;
    const engine30kPrice = 30000;
    const engine60kPrice = 60000;
    const brakes99kPrice = 9900;
    const brakes198kPrice = 19800;
    const brakes30kPrice = 30000;
    const suspension6kPrice = 6000;
    const suspension12kPrice = 12000;
    const suspension18kPrice = 18000;
    const suspension24kPrice = 24000;
    const suspension30kPrice = 30000;
    const transmission75kPrice = 7500;
    const transmission15kPrice = 15000;
    const transmission225kPrice = 22500;
    const transmission30kPrice = 30000;
    const armorPrice = 15000;
    const oilPump15kPrice = 1500;
    const oilPump3kPrice = 3000;
    const oilPump6kPrice = 6000;
    const driveShaft3kPrice = 3000;
    const driveShaft6kPrice = 6000;
    const driveShaft9kPrice = 9000;
    const cylinderHead6kPrice = 6000;
    const cylinderHead12kPrice = 12000;
    const cylinderHead15kPrice = 15000;
    const batteryCables3kPrice = 3000;
    const batteryCables6kPrice = 6000;
    const batteryCables9kPrice = 9000;
    const fuelTank3kPrice = 3000;
    const fuelTank45kPrice = 4500;
    const fuelTank6kPrice = 6000;
    const racingHarnessPrice = 15000;
    const antiLagPrice = 20000;
    const driftTiresPrice = 15000;

    const turboCount = parseInt(document.getElementById('turboCount').value) || 0;
    const engine6kCount = parseInt(document.getElementById('engine6kCount').value) || 0;
    const engine15kCount = parseInt(document.getElementById('engine15kCount').value) || 0;
    const engine22kCount = parseInt(document.getElementById('engine22kCount').value) || 0;
    const engine30kCount = parseInt(document.getElementById('engine30kCount').value) || 0;
    const engine60kCount = parseInt(document.getElementById('engine60kCount').value) || 0;
    const brakes99kCount = parseInt(document.getElementById('brakes99kCount').value) || 0;
    const brakes198kCount = parseInt(document.getElementById('brakes198kCount').value) || 0;
    const brakes30kCount = parseInt(document.getElementById('brakes30kCount').value) || 0;
    const suspension6kCount = parseInt(document.getElementById('suspension6kCount').value) || 0;
    const suspension12kCount = parseInt(document.getElementById('suspension12kCount').value) || 0;
    const suspension18kCount = parseInt(document.getElementById('suspension18kCount').value) || 0;
    const suspension24kCount = parseInt(document.getElementById('suspension24kCount').value) || 0;
    const suspension30kCount = parseInt(document.getElementById('suspension30kCount').value) || 0;
    const transmission75kCount = parseInt(document.getElementById('transmission75kCount').value) || 0;
    const transmission15kCount = parseInt(document.getElementById('transmission15kCount').value) || 0;
    const transmission225kCount = parseInt(document.getElementById('transmission225kCount').value) || 0;
    const transmission30kCount = parseInt(document.getElementById('transmission30kCount').value) || 0;
    const armorCount = parseInt(document.getElementById('armorCount').value) || 0;
    const oilPump15kCount = parseInt(document.getElementById('oilPump15kCount').value) || 0;
    const oilPump3kCount = parseInt(document.getElementById('oilPump3kCount').value) || 0;
    const oilPump6kCount = parseInt(document.getElementById('oilPump6kCount').value) || 0;
    const driveShaft3kCount = parseInt(document.getElementById('driveShaft3kCount').value) || 0;
    const driveShaft6kCount = parseInt(document.getElementById('driveShaft6kCount').value) || 0;
    const driveShaft9kCount = parseInt(document.getElementById('driveShaft9kCount').value) || 0;
    const cylinderHead6kCount = parseInt(document.getElementById('cylinderHead6kCount').value) || 0;
    const cylinderHead12kCount = parseInt(document.getElementById('cylinderHead12kCount').value) || 0;
    const cylinderHead15kCount = parseInt(document.getElementById('cylinderHead15kCount').value) || 0;
    const batteryCables3kCount = parseInt(document.getElementById('batteryCables3kCount').value) || 0;
    const batteryCables6kCount = parseInt(document.getElementById('batteryCables6kCount').value) || 0;
    const batteryCables9kCount = parseInt(document.getElementById('batteryCables9kCount').value) || 0;
    const fuelTank3kCount = parseInt(document.getElementById('fuelTank3kCount').value) || 0;
    const fuelTank45kCount = parseInt(document.getElementById('fuelTank45kCount').value) || 0;
    const fuelTank6kCount = parseInt(document.getElementById('fuelTank6kCount').value) || 0;
    const racingHarnessCount = parseInt(document.getElementById('racingHarnessCount').value) || 0;
    const antiLagCount = parseInt(document.getElementById('antiLagCount').value) || 0;
    const driftTiresCount = parseInt(document.getElementById('driftTiresCount').value) || 0;

    // Calculate Total
    const total = (recklessKitPrice * recklessKitCount) +
                  (demonKitPrice * demonKitCount) +
                  (repairPrice * repairsCount) +
                  (recklessPaintPrice * recklessPaintCount) +
                  (basicPaintPrice * basicPaintCount) +
                  (cosmeticsPrice * cosmeticsCount) +
                  (nosBottlePrice * nosBottlesCount) +
                  (nosRefillPrice * nosRefillCount) +
                  (turboPrice * turboCount) +
                  (engine6kPrice * engine6kCount) +
                  (engine15kPrice * engine15kCount) +
                  (engine22kPrice * engine22kCount) +
                  (engine30kPrice * engine30kCount) +
                  (engine60kPrice * engine60kCount) +
                  (brakes99kPrice * brakes99kCount) +
                  (brakes198kPrice * brakes198kCount) +
                  (brakes30kPrice * brakes30kCount) +
                  (suspension6kPrice * suspension6kCount) +
                  (suspension12kPrice * suspension12kCount) +
                  (suspension18kPrice * suspension18kCount) +
                  (suspension24kPrice * suspension24kCount) +
                  (suspension30kPrice * suspension30kCount) +
                  (transmission75kPrice * transmission75kCount) +
                  (transmission15kPrice * transmission15kCount) +
                  (transmission225kPrice * transmission225kCount) +
                  (transmission30kPrice * transmission30kCount) +
                  (armorPrice * armorCount) +
                  (oilPump15kPrice * oilPump15kCount) +
                  (oilPump3kPrice * oilPump3kCount) +
                  (oilPump6kPrice * oilPump6kCount) +
                  (driveShaft3kPrice * driveShaft3kCount) +
                  (driveShaft6kPrice * driveShaft6kCount) +
                  (driveShaft9kPrice * driveShaft9kCount) +
                  (cylinderHead6kPrice * cylinderHead6kCount) +
                  (cylinderHead12kPrice * cylinderHead12kCount) +
                  (cylinderHead15kPrice * cylinderHead15kCount) +
                  (batteryCables3kPrice * batteryCables3kCount) +
                  (batteryCables6kPrice * batteryCables6kCount) +
                  (batteryCables9kPrice * batteryCables9kCount) +
                  (fuelTank3kPrice * fuelTank3kCount) +
                  (fuelTank45kPrice * fuelTank45kCount) +
                  (fuelTank6kPrice * fuelTank6kCount) +
                  (racingHarnessPrice * racingHarnessCount) +
                  (antiLagPrice * antiLagCount) +
                  (driftTiresPrice * driftTiresCount);

    // Display the total cost
    document.getElementById('totalCost').textContent = total.toLocaleString();
}

function resetForm() {
    // Get all input elements and set their values to 0
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = 0;
    });

    // Reset the total cost display
    document.getElementById('totalCost').textContent = '0';
}
