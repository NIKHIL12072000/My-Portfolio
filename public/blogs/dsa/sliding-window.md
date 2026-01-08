---
title: Sliding Window Pattern
category: DSA
tags: [DSA, Sliding Window, Arrays, Strings]
readTime: 8 min
---

## Why the Sliding Window Pattern Matters

Many array and string problems look complex at first, but a large number of them follow the **same underlying pattern**.

Sliding Window is one of the **most frequently used patterns** in coding interviews because it:

- Optimizes brute-force solutions
- Reduces unnecessary recomputation
- Encourages incremental thinking

If you understand this pattern well, you can solve **dozens of problems**, not just one.

---

## When Should You Think of Sliding Window?

You should immediately consider Sliding Window when you see problems involving:

- **Contiguous subarrays or substrings**
- Words like:
  - longest
  - shortest
  - maximum
  - minimum
  - count
- Constraints where brute force would be **O(n²)**

If the problem says _“subarray”_ or _“substring”_, Sliding Window should be one of your **first thoughts**.

---

## Why Brute Force Is Inefficient

The naive approach often looks like this:

- Fix a starting index
- Expand to the right
- Recompute values again and again

This causes:

- Repeated work
- Poor time complexity
- Inefficient solutions that won’t scale

Sliding Window avoids this by **reusing previous computation**.

---

## Core Idea of Sliding Window (Conceptual)

The idea is simple:

> Maintain a window over the array/string and **move it intelligently** instead of restarting from scratch.

At any point, the window represents a **valid or partially valid solution**.

You:

- Expand the window to include new elements
- Shrink the window when conditions are violated
- Update the answer during the process

This transforms many O(n²) solutions into **O(n)**.

---

## Types of Sliding Window Problems

Understanding the **type** of window is crucial.

### 1. Fixed-Size Window

- Window size is constant
- Example: maximum sum of subarray of size `k`

Key idea:

- Add next element
- Remove previous element
- Update result

---

### 2. Variable-Size Window

- Window size changes dynamically
- Example: longest substring with at most `k` distinct characters

Key idea:

- Expand until condition breaks
- Shrink until condition is restored

This is the **most common interview variant**.

---

## How to Think While Solving (Mental Checklist)

Before coding, ask yourself:

1. What defines the window?
2. What condition must the window satisfy?
3. When should I expand the window?
4. When should I shrink the window?
5. When do I update the answer?

If you can answer these clearly, coding becomes straightforward.

---

## Generic Sliding Window Pseudocode

This logic applies to **most variable-size window problems**:
