import { Email } from '../../src/common/value-objects/Email';

describe('Email Value Object', () => {
  describe('Email.create()', () => {
    it('should create email successfully with valid input', () => {
      const email = Email.create('Vu@example.com');
      expect(email.getValue()).toBe('Vu@example.com');
    });

    it('should trim email', () => {
      const email = Email.create('  Test.User+Tag@Gmail.com  ');
      expect(email.getValue()).toBe('Test.User+Tag@Gmail.com');
    });

    it('should throw error when email is empty', () => {
      expect(() => Email.create('')).toThrow('Email cannot be empty');
    });

    it.each([
      [null, 'Email cannot be empty'],
      [undefined, 'Email cannot be empty'],
      ['', 'Email cannot be empty'],
      ['   ', 'Email cannot be empty'],
    ])('should throw "cannot be empty" with: %s', (input, expectedMessage) => {
      expect(() => Email.create(input as any)).toThrow(expectedMessage);
    });

    it.each([
      ['test'],
      ['@gmail.com'],
      ['test@'],
      ['test@gmail'],
      ['test@gmail.'],
      ['test@ gmail.com'],
      ['test@gmail..com'],
      ['test@@gmail.com'],
    ])('should throw "invalid format" with: %s', (input) => {
      expect(() => Email.create(input as any)).toThrow('Invalid email format');
    });

    describe('Behavior with valid email', () => {
      let email: Email;

      beforeEach(() => {
        email = Email.create('NguyenVanA.Test+Tag@Gmail.com');
      });

      it('should return correct local part', () => {
        expect(email.getLocalPart()).toBe('NguyenVanA.Test+Tag');
      });

      it('should return correct domain', () => {
        expect(email.getDomain()).toBe('Gmail.com');
      });

      it('should return masked email', () => {
        expect(email.getMasked()).toBe('N****g@Gmail.com');
      });

      it('should return original value via getValue()', () => {
        expect(email.getValue()).toBe('NguyenVanA.Test+Tag@Gmail.com');
      });
    });
  });

  describe('getValue()', () => {
    it('should return the original value', () => {
      const email = Email.create('MyEmail@domain.com');
      expect(email.getValue()).toBe('MyEmail@domain.com');
    });
  });
});

describe('equals()', () => {
  it('should return true when two emails have same value', () => {
    const email1 = Email.create('test@gmail.com');
    const email2 = Email.create('test@gmail.com');
    expect(email1.equals(email2)).toBe(true);
  });

  it('should return false when emails are different', () => {
    const email1 = Email.create('test@gmail.com');
    const email2 = Email.create('other@gmail.com');
    expect(email1.equals(email2)).toBe(false);
  });

  it('should return false when compare with null or undefined', () => {
    const email = Email.create('test@gmail.com');
    expect(email.equals(null as any)).toBe(false);
    expect(email.equals(undefined as any)).toBe(false);
  });
});

describe('update()', () => {
  it('should return new Email instance with new value', () => {
    const oldEmail = Email.create('old@gmail.com');
    const newEmail = oldEmail.update('new@gmail.com');

    expect(newEmail).not.toBe(oldEmail); // kiểm tra immutability
    expect(newEmail.getValue()).toBe('new@gmail.com');
  });

  it('should throw error if new email is invalid', () => {
    const email = Email.create('valid@gmail.com');
    expect(() => email.update('invalid')).toThrow('Invalid email format');
  });
});
