export interface IValidator {
  execute<T>(value: T): void;
}
