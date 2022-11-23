import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BuildersModule } from "src/builders/builders.module";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { CompanySchema, Company } from "./schemas/company.schema";

@Module({
    imports: [
        BuildersModule,
        MongooseModule.forFeature([
            { name: Company.name, schema: CompanySchema },
        ]),
    ],
    controllers: [CompanyController],
    providers: [CompanyService],
})
export class CompanyModule {}
