import { Money } from '../../src/common/value-objects/Money';

describe('Money Value Object', () => {
  describe('Money.create()', () => {
    // ====================== HAPPY PATH ======================
    it('should create Money successfully with VND', () => {
      const money = Money.create({ amount: 100000, currency: 'VND' });
      expect(money.getAmount()).toBe(100000);
      expect(money.getCurrency()).toBe('VND');
    });

    it('should create Money successfully with USD', () => {
      const money = Money.create({ amount: 99.99, currency: 'USD' });
      expect(money.getAmount()).toBe(99.99);
      expect(money.getCurrency()).toBe('USD');
    });

    // ====================== EDGE CASES ======================
    it.each([
      [0.01, 'VND'],
      [1, 'USD'],
      [999999.99, 'VND'],
      [Number.MAX_SAFE_INTEGER, 'USD'],
    ])('should accept edge amount: %s %s', (amount, currency) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const money = Money.create({ amount, currency: currency as any });
      expect(money.getAmount()).toBe(amount);
    });

    // ====================== ERROR CASES ======================
    describe('Invalid Amount', () => {
      it.each([
        [0, 'Invalid amount'],
        [-1, 'Invalid amount'],
        [-0.01, 'Invalid amount'],
        [NaN, 'Invalid amount'],
      ])('should throw when amount = %s', (amount, expectedMessage) => {
        expect(() =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Money.create({ amount: amount as any, currency: 'VND' }),
        ).toThrow(expectedMessage);
      });
    });

    describe('Invalid Currency', () => {
      it.each([
        ['EUR'],
        ['vnd'],
        ['USD '],
        [''],
        ['VNDN'],
        [null],
        [undefined],
      ])('should throw when currency = %s', (currency) => {
        expect(() =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Money.create({ amount: 1000, currency: currency as any }),
        ).toThrow('Invalid currency');
      });
    });

    describe('Invalid props', () => {
      it('should throw when props is null', () => {
        expect(() => Money.create(null as any)).toThrow();
      });

      it('should throw when props is undefined', () => {
        expect(() => Money.create(undefined as any)).toThrow();
      });

      it('should throw when amount is missing', () => {
        expect(() => Money.create({ currency: 'VND' } as any)).toThrow();
      });
    });
  });

  // ====================== GETTER TESTS ======================
  describe('Getters', () => {
    it('should return correct amount and currency', () => {
      const money = Money.create({ amount: 50000, currency: 'VND' });
      expect(money.getAmount()).toBe(50000);
      expect(money.getCurrency()).toBe('VND');
    });
  });

  // ====================== EQUALITY ======================
  describe('equals()', () => {
    it('should return true when two Money are exactly the same', () => {
      const money1 = Money.create({ amount: 100000, currency: 'VND' });
      const money2 = Money.create({ amount: 100000, currency: 'VND' });

      expect(money1.equals(money2)).toBe(true);
    });

    it('should return true when comparing with itself (same instance)', () => {
      const money = Money.create({ amount: 50000, currency: 'VND' });
      expect(money.equals(money)).toBe(true);
    });

    it('should return false when amount is different', () => {
      const money1 = Money.create({ amount: 100000, currency: 'VND' });
      const money2 = Money.create({ amount: 200000, currency: 'VND' });

      expect(money1.equals(money2)).toBe(false);
    });

    it('should return false when currency is different', () => {
      const money1 = Money.create({ amount: 100000, currency: 'VND' });
      const money2 = Money.create({ amount: 100000, currency: 'USD' });

      expect(money1.equals(money2)).toBe(false);
    });

    it('should return false when both amount and currency are different', () => {
      const money1 = Money.create({ amount: 50000, currency: 'VND' });
      const money2 = Money.create({ amount: 99.99, currency: 'USD' });

      expect(money1.equals(money2)).toBe(false);
    });

    // ====================== EDGE CASES ======================
    describe('Edge cases', () => {
      it('should return false when comparing with null', () => {
        const money = Money.create({ amount: 100000, currency: 'VND' });
        expect(money.equals(null as any)).toBe(false);
      });

      it('should return false when comparing with undefined', () => {
        const money = Money.create({ amount: 100000, currency: 'VND' });
        expect(money.equals(undefined as any)).toBe(false);
      });

      it('should return false when comparing with non-Money object', () => {
        const money = Money.create({ amount: 100000, currency: 'VND' });

        expect(money.equals({} as any)).toBe(false);
        expect(money.equals(100000 as any)).toBe(false);
        expect(money.equals('100000' as any)).toBe(false);
      });
    });

    // ====================== DECIMAL AMOUNT ======================
    it('should work correctly with decimal amounts', () => {
      const money1 = Money.create({ amount: 99.99, currency: 'USD' });
      const money2 = Money.create({ amount: 99.99, currency: 'USD' });
      const money3 = Money.create({ amount: 99.98, currency: 'USD' });

      expect(money1.equals(money2)).toBe(true);
      expect(money1.equals(money3)).toBe(false);
    });
  });
});
