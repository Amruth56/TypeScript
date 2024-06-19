class mathOperation {
  public static PI: number = Math.PI;
  public static add(num1: number, num2: number): number {
    return num1 + num2;
  }
  public static sub(num1: number, num2: number): number {
    return num1 + -num2;
  }
}

console.log(mathOperation.PI);
console.log(mathOperation.add(5, 13));
console.log(mathOperation.sub(7, 98));
