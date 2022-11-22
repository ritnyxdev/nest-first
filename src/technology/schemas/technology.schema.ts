import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Company } from "src/company/schemas/company.schema";
import { Builders } from "src/builders/schemas/builders.schema";

export type TechnologyDocument = HydratedDocument<Technologies>;

@Schema()
export class Technologies {
    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Builders" })
    builder_id: Builders;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Company" })
    company_id: Company;
}

export const TechnologySchema = SchemaFactory.createForClass(Technologies);
