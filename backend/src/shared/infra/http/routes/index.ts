import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import classesRouter from '@modules/classes/infra/http/routes/classes.routes';
import importStudentsRouter from '@modules/students/http/routes/importStudents.routes';
import extraClassRouter from '@modules/extraClassRouter/infra/http/routes/extraClass.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/classes', classesRouter);
routes.use('/extraClass', extraClassRouter);

export default routes;
