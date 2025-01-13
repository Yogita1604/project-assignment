import { calculateRewardPoints } from "./calculateRewardsPoint";

describe("calculate rewards points", () => {
  test("should return the correct reward points over $100", () => {
    const points = calculateRewardPoints(120);
    expect(points).toBe(90);
  });
  test("should return the correct reward points for $75", () => {
    const points = calculateRewardPoints(75);
    expect(points).toBe(25);
  });

  test("should return 0 points for $50 or below", () => {
    const points = calculateRewardPoints(50);
    expect(points).toBe(0);
  });

  test("should handle edge case of exactly 0 amount", () => {
    expect(calculateRewardPoints(0)).toBe(0);
  });
});
