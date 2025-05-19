import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  calculate() {
    try {
      this.result = this.calculatorService.add(this.input);
      this.error = null;
      console.log('Result:', this.result); // ✅ confirm value
    } catch (e: any) {
      this.result = null;
      this.error = e.message;
      console.log('Error:', this.error); // ✅ confirm error
    }
  }
}
