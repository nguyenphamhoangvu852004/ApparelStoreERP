import { User } from '../../src/domain/entities/user.entity';
import { Email } from '../../src/common/value-objects/Email';
import { UUID } from '../../src/common/value-objects/UUID';

describe('User entity', () => {
  it('humanProfie should be null value', () => {
    const newUser = new User({
      id: UUID.generate(),
      email: Email.create('test@gmail.com'),
      password: 'xxxl',
      username: 'xxxx',
      roles: [],
    });
    expect(newUser.getHumanProfile()).toBeNull();
    expect(newUser.getAllRoles()).toEqual([]);
  });
});
