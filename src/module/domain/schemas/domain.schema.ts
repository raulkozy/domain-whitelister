import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DomainDocument = Domain & Document;

@Schema()
export class Domain {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ auto: true, default: new Date() })
  createdAt: Date;

  @Prop({ required: true, default: true })
  isActive: boolean;
}

export const DomainSchema = SchemaFactory.createForClass(Domain);
