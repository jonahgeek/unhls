import { API_URL } from '@/config';
import { rest } from 'msw';
import { nanoid } from 'nanoid';

import { db, persistDb } from '../db';
import { requireAuth, requireAdmin, delayedResponse } from '../utils';

export const patientsHandlers = [
  rest.get(`${API_URL}/patients`, (req, res, ctx) => {
    try {
      const result = db.patient.getAll();
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),

  rest.get(`${API_URL}/patients/:patientId`, (req, res, ctx) => {
    try {
      const { patientId } = req.params;
      const result = db.patient.findFirst({
        where: {
          id: {
            equals: patientId,
          },
        },
      });
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),

  rest.post(`${API_URL}/patients`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      const data = req.body;
      requireAdmin(user);
      const result = db.patient.create({
        id: nanoid(),
        createdAt: Date.now(),
        ...data,
      });
      persistDb('patient');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),

  rest.patch(`${API_URL}/patients/:patientId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      const data = req.body;
      const { patientId } = req.params;
      requireAdmin(user);
      const result = db.patient.update({
        where: {
          id: {
            equals: patientId,
          },
        },
        data,
      });
      persistDb('patient');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),

  rest.delete(`${API_URL}/patients/:patientId`, (req, res, ctx) => {
    try {
      const user = requireAuth(req);
      const { patientId } = req.params;
      requireAdmin(user);
      const result = db.patient.delete({
        where: {
          id: {
            equals: patientId,
          },
        },
      });
      persistDb('patient');
      return delayedResponse(ctx.json(result));
    } catch (error) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error?.message || 'Server Error' })
      );
    }
  }),
];
