
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema()
export class Log {
  @Prop()
  datetime: string;

  @Prop()
  method: string;

  @Prop()
  statusCode: number;

  @Prop()
  path: string;

  @Prop()
  body?: string;

  @Prop()
  error?: string

  @Prop()
  ip: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
