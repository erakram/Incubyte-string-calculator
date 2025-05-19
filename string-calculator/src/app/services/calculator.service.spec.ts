import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('should return 0 for empty string', () => {
    expect(service.add('')).toBe(0);
  });
  it('should return number for single input', () => {
    expect(service.add('5')).toBe(5);
  });

  it('should return sum for two numbers', () => {
    expect(service.add('1,2')).toBe(3);
  });

  it('should handle newlines as delimiters', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });

  it('should support custom delimiters', () => {
    expect(service.add('//;\n1;2')).toBe(3);
  });

  it('should throw for negative numbers', () => {
    expect(() => service.add('1,-2,3,-4')).toThrowError('Negative numbers not allowed: -2, -4');
  });

});
