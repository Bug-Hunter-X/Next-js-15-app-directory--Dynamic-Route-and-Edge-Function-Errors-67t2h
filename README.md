# Next.js 15 app directory: Dynamic Route and Edge Function Errors

This repository demonstrates an uncommon error in Next.js 15's app directory related to dynamic routes and edge functions.  The error arises from improper validation and handling of asynchronous operations within edge functions. The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem

In Next.js 15's app directory, fetching data within edge functions using dynamic route parameters requires careful validation and handling of asynchronous operations.  Failure to do so can lead to unexpected behavior, errors, or security vulnerabilities.  This example shows how unvalidated input and incorrect use of `async/await` can cause problems.

## Solution

The solution involves robust validation of dynamic route parameters and appropriate error handling within the asynchronous operations to ensure data integrity and application stability. 