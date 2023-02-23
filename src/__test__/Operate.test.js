import operate from '../components/logic/Operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('subtracts two numbers', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate(3, 4, '*')).toBe('12');
  });

  it('divides two numbers', () => {
    expect(operate(10, 2, '/')).toBe('5');
  });

  it('throws an error when operation is unknown', () => {
    expect(() => operate(1, 2, 'unknown')).toThrow("Unknown operation 'unknown'");
  });

  it("returns 'Can't divide by 0.' when trying to divide by zero", () => {
    expect(operate(10, 0, '/')).toBe("Can't divide by 0.");
  });

  it("returns 'Can't find modulo as can't divide by 0.' when trying to find modulo by zero", () => {
    expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
