import { Email } from '../../shared/domain/value-objects/Email';
import { UUID } from '../../shared/domain/value-objects/UUID';
import { User } from '../../modules/user/domain/entities/user.entity';

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
