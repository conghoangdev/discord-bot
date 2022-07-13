import { modelOptions, getModelForClass, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class AntiSpam {
  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;

  _id: string;

  @prop()
  isEnable: boolean;
}

export const AntiSpamModel = getModelForClass(AntiSpam);