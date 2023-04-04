// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Task, Users } = initSchema(schema);

export {
  Task,
  Users
};