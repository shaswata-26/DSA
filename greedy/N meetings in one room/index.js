// 📌 Problem Statement

// You are given n meetings, each with a start time and end time. You can schedule meetings in a single room, but only one meeting can take place at a time.

// Goal:

// Find the maximum number of meetings that can be held in the room without overlapping.

// 📌 Example Input 
// start[] = [1, 3, 0, 5, 8, 5]
// end[]   = [2, 4, 6, 7, 9, 9]

// 📌 Expected Output
// Maximum meetings = 4
// Meetings chosen (1-indexed): 1, 2, 4, 5
// 📌 Explanation / Dry Run 
// Meetings are: 
// 1 → (1,2)
// 2 → (3,4)
// 3 → (0,6)
// 4 → (5,7)
// 5 → (8,9)
// 6 → (5,9) 

// Step 1: Pair meetings with start & end
// [(1,2), (3,4), (0,6), (5,7), (8,9), (5,9)]
// Step 2: Sort by end time 
// [(1,2), (3,4), (5,7), (0,6), (8,9), (5,9)]
// Step 3: Greedy selection

// Pick (1,2) → First meeting

// Next, (3,4) → Non-overlapping, select

// Skip (0,6) → overlaps with (3,4)

// Pick (5,7) → Non-overlapping

// Pick (8,9) → Non-overlapping

// Skip (5,9) → overlaps with (5,7)

// ✅ Final = 4 meetings → [1, 2, 4, 5]


// 📌 Test Cases
// ✅ Test Case 1
// start = [1, 3, 0, 5, 8, 5]
// end   = [2, 4, 6, 7, 9, 9]
// Output: 4  (meetings 1, 2, 4, 5)

// ✅ Test Case 2
// start = [10, 12, 20]
// end   = [20, 25, 30]
// Output: 2  (meetings 1 and 3)

// ✅ Test Case 3
// start = [1, 2, 3]
// end   = [2, 3, 4]
// Output: 3  (all meetings can be attended)

// ✅ Test Case 4
// start = [7, 0, 4, 8, 4, 5]
// end   = [9, 10, 5, 9, 7, 9]
// Output: 3  (meetings 3, 5, 1)

// 📌 Approach (Greedy)

// Pair meetings as (start, end, index).

// Sort meetings by end time (earliest finishing first).

// Initialize:

// last_end = -1

// count = 0

// Iterate over sorted meetings:

// If meeting.start > last_end → select meeting, update last_end = meeting.end and count++.

// Return count (or list of meetings).

// 📌 Optimized Approach

// Sorting takes O(n log n).

// Greedy selection takes O(n).

// ✅ Overall: O(n log n)
// ✅ Space: O(n) (or O(1) if we don’t need meeting indices).

// This is already the optimal solution (you can’t do better than sorting, because we must check order).


// 📌 JavaScript Code
class Solution {
  maxMeetings(start, end) {
    let n = start.length;

    // Step 1: Pair meetings with (start, end, index)
    let meetings = [];
    for (let i = 0; i < n; i++) {
      meetings.push({ start: start[i], end: end[i], index: i + 1 });
    }

    // Step 2: Sort by end time (if equal, sort by index)
    meetings.sort((a, b) => {
      if (a.end === b.end) return a.index - b.index;
      return a.end - b.end;
    });

    // Step 3: Select meetings greedily
    let result = [];
    let lastEnd = -1;

    for (let m of meetings) {
      if (m.start > lastEnd) {
        result.push(m.index);
        lastEnd = m.end;
      }
    }

    return result; // returns indices of meetings chosen
  }
}

// // Example usage:
// let start = [1, 3, 0, 5, 8, 5];
// let end   = [2, 4, 6, 7, 9, 9];

// let sol = new Solution();
// console.log("Meetings chosen:", sol.maxMeetings(start, end));

// 📌 Example Dry Run with Input
// start = [1, 3, 0, 5, 8, 5]
// end   = [2, 4, 6, 7, 9, 9]


// Meetings before sorting:

// (1,2,1), (3,4,2), (0,6,3), (5,7,4), (8,9,5), (5,9,6)


// Sorted by end time:

// (1,2,1), (3,4,2), (5,7,4), (0,6,3), (8,9,5), (5,9,6)


// Select:

// Pick (1,2,1) → lastEnd = 2

// Pick (3,4,2) → lastEnd = 4

// Pick (5,7,4) → lastEnd = 7

// Pick (8,9,5) → lastEnd = 9

// Skip (0,6,3), (5,9,6) → overlapping

// ✅ Result → [1, 2, 4, 5]