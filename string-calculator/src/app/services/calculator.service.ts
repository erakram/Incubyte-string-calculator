import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  add(input: string): number {
    if (!input) return 0;

    let delimiter = /,|\n/;
    let numbersString = input;

    // Check for custom delimiter
    if (input.startsWith('//')) {
      const parts = input.split('\n');
      delimiter = new RegExp(parts[0].substring(2));
      numbersString = parts[1];
    }

    const numbers = numbersString.split(delimiter).map(Number);
    const negatives = numbers.filter(n => n < 0);

    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numbers.reduce((sum, n) => sum + n, 0);
  }
}
