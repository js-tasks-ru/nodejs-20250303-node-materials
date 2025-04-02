import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import mongoose from 'mongoose';

@Schema()
export class Task {
  @Prop({ index: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  assignee: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

TaskSchema.index({ title: 1, description: 1 });
