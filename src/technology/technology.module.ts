import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TechnologySchema, Technologies } from "./schemas/technology.schema";
import { TechnologyController } from "./technology.controller";
import { TechnologyService } from "./technology.service";
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Technologies.name, schema: TechnologySchema },
        ]),
    ],
    controllers: [TechnologyController],
    providers: [TechnologyService],
})
export class TechnologyModule {}
