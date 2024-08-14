import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ isRequired: true })
  email: string;

  @Prop({ isRequired: true })
  password: string;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
