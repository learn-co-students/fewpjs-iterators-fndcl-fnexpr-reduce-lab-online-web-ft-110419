const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total 
    }
)

// Create a new variable called totalBatteries which is the sum of all of the battery amounts in the batteryBatches array. Naturally, use reduce() for this!