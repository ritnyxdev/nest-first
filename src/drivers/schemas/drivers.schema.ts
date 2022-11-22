import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Company } from "src/company/schemas/company.schema";
// import { Builders } from "src/builders/schemas/builders.schema";
import { Technologies } from "src/technology/schemas/technology.schema";

export type DriverDocument = HydratedDocument<Drivers>;

@Schema()
export class Drivers {
    @Prop()
    first_name: string;

    @Prop()
    last_name: string;

    @Prop()
    age: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Technologies" })
    technology_id: Technologies;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Company" })
    company_id: Company;
}

export const DriversSchema = SchemaFactory.createForClass(Drivers);
