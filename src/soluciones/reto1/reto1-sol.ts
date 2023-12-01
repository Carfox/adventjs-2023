function findFirstRepeated(gifts: Array<number>): number {
  // Code here
  const findDuplicates = (gifts) =>
    gifts.filter((item, index) => gifts.indexOf(item) !== index);
  const duplicates = findDuplicates(gifts);

  if (duplicates.length !== 0) {
    return duplicates[0];
  } else {
    return -1;
  }
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5

export {};
