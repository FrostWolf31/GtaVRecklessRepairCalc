function calculateTotal() {
    let totalCost = 0;

    // Full Upgrade Kits
    if (document.getElementById('recklessKitYes').checked) {
        totalCost += 70000; // Assuming the cost for Reckless Full Upgrade Kit is $7500
    }
    if (document.getElementById('demonKitYes').checked) {
        totalCost += 150000; // Assuming the cost for Demon Full Upgrade Kit is $10000
    }

    // Repairs and Paint Services
    if (document.getElementById('repairsYes').checked) {
        totalCost += 3500; // Assuming the cost for Repairs is $2000
    }
    if (document.getElementById('recklessPaintYes').checked) {
        totalCost += 10000; // Assuming the cost for Reckless Paint Services is $3000
    }
    if (document.getElementById('basicPaintYes').checked) {
        totalCost += 4000; // Assuming the cost for Basic Paint Services is $1000
    }

    // Cosmetics and NOS
    let cosmeticsPrice = parseFloat(document.getElementById('cosmeticsPrice').value) || 0;
    totalCost += cosmeticsPrice * 1500; // Assuming each cosmetic item costs $1500
    if (document.getElementById('nosBottlesYes').checked) {
        totalCost += 400000; // Assuming the cost for NOS Bottles is $5000
    }
    if (document.getElementById('nosRefillYes').checked) {
        totalCost += 200000; // Assuming the cost for NOS Refill is $1000
    }
   // if (document.getElementById('camberYes').checked){
       // totalCost += 3000; //Assuming they cost $3000
       // }
    //if (document.getElementById('dsmokeYes').checked){
            //totalCost += 3000; //Assuming they cost $3000
   // }  

    // Performance Items
    if (document.getElementById('turboYes').checked) {
        totalCost += 30000; // Assuming the cost for Turbo is $8000
    }

    let enginePrice = document.querySelector('input[name="engine"]:checked');
    if (enginePrice) {
        totalCost += parseFloat(enginePrice.value.replace('k', '')) * 1000;
    }

    let brakesPrice = document.querySelector('input[name="brakes"]:checked');
    if (brakesPrice) {
        totalCost += parseFloat(brakesPrice.value.replace('k', '')) * 1000;
    }

    let suspensionPrice = document.querySelector('input[name="suspension"]:checked');
    if (suspensionPrice) {
        totalCost += parseFloat(suspensionPrice.value.replace('k', '')) * 1000;
    }

    let transmissionPrice = document.querySelector('input[name="transmission"]:checked');
    if (transmissionPrice) {
        totalCost += parseFloat(transmissionPrice.value.replace('k', '')) * 1000;
    }

    if (document.getElementById('armorYes').checked) {
        totalCost += 15000; // Assuming the cost for Armor is $15000
    }

    let oilPumpPrice = document.querySelector('input[name="oilPump"]:checked');
    if (oilPumpPrice) {
        totalCost += parseFloat(oilPumpPrice.value.replace('k', '')) * 1000;
    }

    let driveShaftPrice = document.querySelector('input[name="driveShaft"]:checked');
    if (driveShaftPrice) {
        totalCost += parseFloat(driveShaftPrice.value.replace('k', '')) * 1000;
    }

    let cylinderHeadPrice = document.querySelector('input[name="cylinderHead"]:checked');
    if (cylinderHeadPrice) {
        totalCost += parseFloat(cylinderHeadPrice.value.replace('k', '')) * 1000;
    }

    let batteryCablesPrice = document.querySelector('input[name="batteryCables"]:checked');
    if (batteryCablesPrice) {
        totalCost += parseFloat(batteryCablesPrice.value.replace('k', '')) * 1000;
    }

    let fuelTankPrice = document.querySelector('input[name="fuelTank"]:checked');
    if (fuelTankPrice) {
        totalCost += parseFloat(fuelTankPrice.value.replace('k', '')) * 1000;
    }

    if (document.getElementById('racingHarnessYes').checked) {
        totalCost += 15000; // Assuming the cost for Racing Harness is $15000
    }

    if (document.getElementById('antiLagYes').checked) {
        totalCost += 20000; // Assuming the cost for AntiLag is $20000
    }

    if (document.getElementById('driftTiresYes').checked) {
        totalCost += 15000; // Assuming the cost for Drift Tires is $15000
    }

    // Display the total cost
    document.getElementById('totalCost').innerText = totalCost.toLocaleString();
}

function resetForm() {
    let formElements = document.querySelectorAll('input[type="radio"]');
    formElements.forEach((element) => {
        element.checked = element.value === 'no';
    });

    document.getElementById('cosmeticsPrice').value = '0';
    document.getElementById('totalCost').innerText = '0';
}
