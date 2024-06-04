function calculateTotal() {
    let totalCost = 0;

    // Full Upgrade Kits
    if (document.getElementById('recklessKitYes').checked) {
        totalCost += 70000; 
    }
    if (document.getElementById('demonKitYes').checked) {
        totalCost += 150000; 
    }

    // Repairs and Paint Services
    if (document.getElementById('repairsYes').checked) {
        totalCost += 3500; 
    }
    if (document.getElementById('recklessPaintYes').checked) {
        totalCost += 10000; 
    }
    if (document.getElementById('basicPaintYes').checked) {
        totalCost += 4000; 
    }

    // Cosmetics and NOS
    let cosmeticsPrice = parseFloat(document.getElementById('cosmeticsPrice').value) || 0;
    totalCost += cosmeticsPrice * 1500; 
    if (document.getElementById('nosBottlesYes').checked) {
        totalCost += 400000;
    }
    if (document.getElementById('nosRefillYes').checked) {
        totalCost += 200000; 
    }
   if (document.getElementById('camberYes').checked){
        totalCost += 3000; 
        }
    if (document.getElementById('dsmokeYes').checked){
            totalCost += 3000; 
    }  

    // Performance Items
    if (document.getElementById('turboYes').checked) {
        totalCost += 30000;
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
        totalCost += 15000;
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
        totalCost += 15000; 
    }

    if (document.getElementById('antiLagYes').checked) {
        totalCost += 20000; 
    }

    if (document.getElementById('driftTiresYes').checked) {
        totalCost += 15000; 
    }

    
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
