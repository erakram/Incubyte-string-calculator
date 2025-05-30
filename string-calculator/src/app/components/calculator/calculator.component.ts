import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  input = '';
  result: number | null = null;
  error: string | null = null;

  constructor(private calculatorService: CalculatorService) {}

  // calculate() {
  //   try {
  //     this.result = this.calculatorService.add(this.input);
  //     this.error = null;
  //     console.log('Result:', this.result); // ✅ confirm value
  //   } catch (e: any) {
  //     this.result = null;
  //     this.error = e.message;
  //     console.log('Error:', this.error); // ✅ confirm error
  //   }
  // }
    inputString = '';
    // result: number | null = null;
    // error = '';

    calculate() {
      this.error = '';
      try {
        this.result = this.add(this.inputString);
      } catch (err: any) {
        this.result = null;
        this.error = err.message;
      }
    }

    add(numbers: string): number {
      if (!numbers) return 0;

      let delimiter = /,|\n/;

      if (numbers.startsWith('//')) {
        const match = numbers.match(/^\/\/(.+)\n(.*)$/s);
        if (match) {
          delimiter = new RegExp(match[1]);
          numbers = match[2];
        }
      }

      const nums = numbers.split(delimiter).map(Number);
      const negatives = nums.filter(n => n < 0);

      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
      }

      return nums.reduce((sum, n) => sum + n, 0);
    }
}
