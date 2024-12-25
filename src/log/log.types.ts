import { Log } from 'src/schemas/log.schema';

export type ResultQueryLogs = {
  data: Log[];
  total: number;
};
