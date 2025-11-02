/*
todo: 3733. Minimum Time to Complete All Deliveries
Medium
premium lock iconCompanies
Hint

You are given two integer arrays of size 2: d = [d1, d2] and r = [r1, r2].
Two delivery drones are tasked with completing a specific number of deliveries. Drone i must complete di deliveries.
Each delivery takes exactly one hour and only one drone can make a delivery at any given hour.
Additionally, both drones require recharging at specific intervals during which they cannot make deliveries. Drone i must recharge every ri hours (i.e. at hours that are multiples of ri).
Return an integer denoting the minimum total time (in hours) required to complete all deliveries.

 
Example 1:
Input: d = [3,1], r = [2,3]
Output: 5
Explanation:

    The first drone delivers at hours 1, 3, 5 (recharges at hours 2, 4).
    The second drone delivers at hour 2 (recharges at hour 3)

Example 2:
Input: d = [1,3], r = [2,2]
Output: 7
Explanation:
    The first drone delivers at hour 3 (recharges at hours 2, 4, 6).
    The second drone delivers at hours 1, 5, 7 (recharges at hours 2, 4, 6).

Example 3:
Input: d = [2,1], r = [3,4]
Output: 3
Explanation:

    The first drone delivers at hours 1, 2 (recharges at hour 3).
    The second drone delivers at hour 3.

Constraints:

    d = [d1, d2]
    1 <= di <= 109
    r = [r1, r2]
    2 <= ri <= 3 * 104
*/
/**
 * @param {number[]} d
 * @param {number[]} r
 * @return {number}
 */
function gcd(a, b) {
  // Euclidean algorithm for GCD
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  // Handle cases where a or b might be zero
  if (a === 0 || b === 0) {
    return 0;
  }
  // Calculate LCM using the formula
  return Math.abs(a * b) / gcd(a, b);
}
var minimumTime = function (d, r) {
  // deliveries a drone can do in T time
  const dInTime = (time, rc) => {
    //
    // total time we have - time drone would be recharging
    /*
            assume i have 11 hours and drone recharges every 3 hours
            then
            1 2 _ 4 5 _ 7 8 _ 10 11
            then i would be rechargin time/d hours.
        */
    return time - Math.floor(time / rc);
  };

  const enoughTime = (time, r1, r2) => {
    // delivery done by drone in this time, when it has to recharge every r1 hours
    const by1 = dInTime(time, r1);
    const by2 = dInTime(time, r2);

    // now obviously there would be times when both of these drones would recharge
    // at that point of time no deliveries can be done
    // this will basically all times that are lcm of d1 and d2.

    // = time [total time] - (time/lcm) [resting];
    const done_by_both = dInTime(time, lcm(r1, r2));

    // now in this time i have can both drones make the deliveries needed?
    return (
      by1 >= d[0] &&
      by2 >= d[1] &&
      // delivery done combined including common resting time.
      done_by_both >= d[0] + d[1]
    );
  };

  // because every delivery takes 1 hours, you need atleast this many hours
  let l = d[0] + d[1];
  // a big value as high
  let h = l * Math.max(r[0], r[1]);

  let ans = l;

  while (l < h) {
    const mid = l + Math.floor((h - l) / 2);

    // if we can finish all these deliveries in this time
    // then we can do so in time > mid as well
    // so we want to find the first time value where it becase true
    // ie., lowest time required to finish
    if (enoughTime(mid, r[0], r[1])) {
      ans = mid;
      h = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
};
