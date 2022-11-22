import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BuildersModule } from "./builders/builders.module";
import { CompanyModule } from "./company/company.module";
import { DriverModule } from "./drivers/drivers.module";
import { TechnologyModule } from "./technology/technology.module";
@Module({
    imports: [
        MongooseModule.forRoot("mongodb://127.0.0.1/nest-one"),
        CompanyModule,
        BuildersModule,
        TechnologyModule,
        DriverModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
