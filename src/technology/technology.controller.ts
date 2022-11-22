import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from "@nestjs/common";
import { CreateTechnologyDto } from "./dto/create-technology.dto";
import { UpdateTechnologyDTO } from "./dto/update-technology.dto";
import { TechnologyService } from "./technology.service";
@Controller("techs")
export class TechnologyController {
    constructor(private readonly technologyService: TechnologyService) {}
    @Get()
    getAll() {
        return this.technologyService.getAll();
    }
    @Post()
    create(@Body() createTechDto: CreateTechnologyDto) {
        return this.technologyService.create(createTechDto);
    }
    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.technologyService.getOne(id);
    }
    @Put(":id")
    updateOne(
        @Param("id") id: string,
        @Body() updateTechDto: UpdateTechnologyDTO
    ) {
        return this.technologyService.updateOne(id, updateTechDto);
    }
    @Delete(":id")
    deleteOne(@Param("id") id: string) {
        return this.technologyService.deleteOne(id);
    }
}
