// 📌 Problem Statement: Job Sequencing with Deadline

// You are given n jobs, each with:

// deadline[i] → the last time slot by which the job should be finished.

// profit[i] → profit if the job is completed before or on its deadline.

// Each job takes 1 unit of time and only one job can be scheduled at a time.

// Goal:

// Schedule the jobs to maximize total profit and also return how many jobs are done.

// 📌 Example Input
// deadline = [2, 1, 2, 1]
// profit   = [100, 19, 27, 25]

// 📌 Expected Output
// Jobs done = 2
// Total Profit = 127
// Sequence of jobs = [Job1, Job3]

// 📌 Explanation / Dry Run

// Jobs are:

// Job1 → (deadline=2, profit=100)
// Job2 → (deadline=1, profit=19)
// Job3 → (deadline=2, profit=27)
// Job4 → (deadline=1, profit=25)

// Step 1: Sort jobs by profit (descending)
// Job1(100,2), Job3(27,2), Job4(25,1), Job2(19,1)

// Step 2: Find max deadline
// maxDeadline = 2 → slots = [false, false, false]

// Step 3: Greedy scheduling

// Job1 (100,2) → slot 2 free → schedule Job1
// slots = [false, false, Job1]
// Profit = 100

// Job3 (27,2) → slot 2 full → try slot 1 → free → schedule Job3
// slots = [false, Job3, Job1]
// Profit = 127

// Job4 (25,1) → slot 1 already full → skip

// Job2 (19,1) → slot 1 already full → skip

// ✅ Final → 2 jobs scheduled (Job1, Job3), total profit = 127

// 📌 Test Cases
// ✅ Test Case 1
// deadline = [2, 1, 2, 1]
// profit   = [100, 19, 27, 25]
// Output: Jobs=2, Profit=127, Sequence=[1,3]

// ✅ Test Case 2
// deadline = [4, 1, 1, 1]
// profit   = [20, 10, 40, 30]
// Output: Jobs=2, Profit=70, Sequence=[3,4] or [3,1]

// ✅ Test Case 3
// deadline = [2, 2, 3, 3]
// profit   = [50, 10, 40, 70]
// Output: Jobs=3, Profit=160, Sequence=[4,1,3]

// 📌 Approach (Greedy)

// Create array of jobs (id, deadline, profit).

// Sort jobs by profit (descending).

// Find maximum deadline to create slot array.

// For each job in sorted order:

// Place in the latest free slot before its deadline.

// If no free slot → skip.

// Return:

// Number of jobs scheduled

// Total profit

// Sequence of jobs

// 📌 Optimized Complexity

// Sorting: O(n log n)

// Scheduling: O(n * maxDeadline)

// Overall: O(n log n + n * maxDeadline)

// With Disjoint Set Union (DSU): O(n log n)

// 📌 JavaScript Code
class Solution {
  jobSequencing(deadline, profit) {
    let n = deadline.length;

    // Step 1: Create jobs with (id, deadline, profit)
    let jobs = [];
    for (let i = 0; i < n; i++) {
      jobs.push({ id: i + 1, deadline: deadline[i], profit: profit[i] });
    }

    // Step 2: Sort jobs by profit descending
    jobs.sort((a, b) => b.profit - a.profit);

    // Step 3: Find max deadline
    let maxDeadline = Math.max(...deadline);

    // Step 4: Create slot array
    let slots = new Array(maxDeadline + 1).fill(false);
    let jobSequence = [];
    let totalProfit = 0, jobCount = 0;

    // Step 5: Schedule jobs greedily
    for (let job of jobs) {
      for (let t = job.deadline; t > 0; t--) {
        if (!slots[t]) {
          slots[t] = true;
          jobSequence[t] = job.id;
          totalProfit += job.profit;
          jobCount++;
          break;
        }
      }
    }

    return {
      jobsDone: jobCount,
      maxProfit: totalProfit,
      sequence: jobSequence.filter(x => x !== undefined)
    };
  }
}

// // Example usage:
// let deadline = [2, 1, 2, 1];
// let profit   = [100, 19, 27, 25];

// let sol = new Solution();
// console.log(sol.jobSequencing(deadline, profit));

// ✅ Output
// {
//   jobsDone: 2,
//   maxProfit: 127,
//   sequence: [3, 1]
// }


// (Here Job3 is in slot1, Job1 is in slot2)