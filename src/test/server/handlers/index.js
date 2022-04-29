import { authHandlers } from './auth';
import { commentsHandlers } from './comments';
import { discussionsHandlers } from './discussions';
import { patientsHandlers } from './patients';
import { teamsHandlers } from './teams';
import { usersHandlers } from './users';

export const handlers = [
  ...authHandlers,
  ...commentsHandlers,
  ...discussionsHandlers,
  ...teamsHandlers,
  ...usersHandlers,
  ...patientsHandlers,
];
