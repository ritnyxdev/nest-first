import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BuildersController } from "./builders.controller";
import { BuildersService } from "./builders.service";
import { BuildersSchema, Builders } from "./schemas/builders.schema";

// @Global()
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Builders.name, schema: BuildersSchema },
        ]),
    ],
    controllers: [BuildersController],
    providers: [BuildersService],
    exports: [BuildersService],
})
export class BuildersModule {}
