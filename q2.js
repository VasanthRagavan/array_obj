const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
const middleIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}
const totalAge = ages.reduce((acc, age) => acc + age, 0);
const averageAge = totalAge / ages.length;
const rangeOfAges = maxAge - minAge;
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);
console.log('Sorted Ages:', ages);
console.log('Minimum Age:', minAge);
console.log('Maximum Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Range of Ages:', rangeOfAges);
console.log('Absolute Difference (Min - Average):', diffMinAverage);
console.log('Absolute Difference (Max - Average):', diffMaxAverage);
