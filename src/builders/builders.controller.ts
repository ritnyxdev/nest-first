import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from "@nestjs/common";
import { BuildersService } from "./builders.service";
import { CreatebuildersDto } from "./dto/create-builder.dto";
import { UpdateBuildersDto } from "./dto/update-builder.dto";

@Controller("builders")
export class BuildersController {
    constructor(private readonly buildersService: BuildersService) {}
    @Get()
    getAll() {
        return this.buildersService.getAll();
    }
    @Post()
    create(@Body() createBuildersDto: CreatebuildersDto) {
        return this.buildersService.create(createBuildersDto);
    }
    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.buildersService.getOne(id);
    }
    @Put(":id")
    updateOne(
        @Param("id") id: string,
        @Body() updateBuildersDto: UpdateBuildersDto
    ) {
        return this.buildersService.updateOne(id, updateBuildersDto);
    }
    @Delete(":id")
    deleteOne(@Param("id") id: string) {
        return this.buildersService.deleteOne(id);
    }
}
