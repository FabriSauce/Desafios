function calculateMedia(nums) {

    return nums.length === 0 ? 0 : nums.reduce((a, b) => a + b, 0) / nums.length;
    
}

const nums = [10, 15, 20, 25, 25, 25, 15, 10];

const media = calculateMedia(nums);

console.log("La media es: " + media);