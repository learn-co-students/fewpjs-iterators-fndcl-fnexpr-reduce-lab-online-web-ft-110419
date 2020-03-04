const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(sumsBatteries)

function sumsBatteries(total, num) {
    return total + num
}
