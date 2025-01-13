export const calculateRewardPoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100);
    amount = 100;
  }
  if (amount > 50) {
    points += amount - 50;
  }
  return points;
};

export const calculateTotalPoints = (transactions) => {
  return transactions.reduce((total, transaction) => {
    return total + calculateRewardPoints(transaction.amount);
  }, 0);
};
