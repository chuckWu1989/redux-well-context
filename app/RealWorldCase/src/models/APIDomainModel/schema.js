import { schema } from 'normalizr';

const userSchema = new schema.Entity('users', {}, {
  idAttribute: user => user.login.toLowerCase(),
});
const repoSchema = new schema.Entity('repos', {
  owner: userSchema,
}, {
  idAttribute: repo => repo.fullName.toLowerCase(),
});

export default {
  USER: userSchema,
  USER_ARRAY: [userSchema],
  REPO: repoSchema,
  REPO_ARRAY: [repoSchema],
};
