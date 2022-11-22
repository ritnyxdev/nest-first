import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Company } from "src/company/schemas/company.schema";

export type BuildersDocuemnt = HydratedDocument<Builders>;

@Schema()
export class Builders {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;
    @Prop()
    salary: number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Company" })
    company_id: Company;
}

export const BuildersSchema = SchemaFactory.createForClass(Builders)