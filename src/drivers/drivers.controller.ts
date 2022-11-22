import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from "@nestjs/common";
import { DriverService } from "./drivers.service";
import { CreateDriverDto } from "./dto/create-drivers.dto";
import { UpdateDriverDto } from "./dto/update-drivers.dto";

@Controller("drivers")
export class DriverController {
    constructor(private readonly driverService: DriverService) {}
    @Get()
    getAll() {
        return this.driverService.getAll();
    }
    @Post()
    create(@Body() createDriverDto: CreateDriverDto) {
        return this.driverService.create(createDriverDto);
    }
    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.driverService.getOne(id);
    }
    @Put(":id")
    updateOne(
        @Param("id") id: string,
        @Body() updateDriverDto: UpdateDriverDto
    ) {
        return this.driverService.updateOne(id, updateDriverDto);
    }
    @Delete(":id")
    deleteOne(@Param("id") id: string) {
        return this.driverService.deleteOne(id);
    }
}
