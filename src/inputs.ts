const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // output = 20
const inputWithStrike = [
  10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]; // output = 30
const inputWithConsecutiveStrikes = [
  10, 0, 10, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]; // output = 49
const inputWithPerfectScore = [
  10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10,
]; // output = 300
const inputWithNormalThrows = [
  5, 4, 8, 2, 10, 0, 10, 0, 1, 0, 9, 1, 0, 10, 10, 0, 6, 4, 7, 3, 10,
]; // output = 149
