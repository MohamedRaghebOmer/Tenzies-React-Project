export function generateId(): string {
  return crypto.randomUUID();
}

export function generateRandomNumber(from: number, to: number): number {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

export function generateRandomNumbers(
  count: number,
  from: number,
  to: number,
): number[] {
  return new Array(count).fill(0).map(() => generateRandomNumber(from, to));
}
