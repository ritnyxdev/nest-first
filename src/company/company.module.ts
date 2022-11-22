import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CompanyController } from "./company.controller";
import { CompanyService } from "./company.service";
import { CompanySchema, Company } from "./schemas/company.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Company.name, schema: CompanySchema },
        ]),
    ],
    controllers: [CompanyController],
    providers: [CompanyService],
})
export class CompanyModule {}
