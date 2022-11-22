import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DriverController } from "./drivers.controller";
import { DriverService } from "./drivers.service";
import { Drivers, DriversSchema } from "./schemas/drivers.schema";
// import { TechnologySchema, Technologies } from "./schemas/technology.schema";
// import { TechnologyController } from "./technology.controller";
// import { TechnologyService } from "./technology.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Drivers.name, schema: DriversSchema },
        ]),
    ],
    controllers: [DriverController],
    providers: [DriverService],
})
export class DriverModule {}
