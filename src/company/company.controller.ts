import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
} from "@nestjs/common";
import { BuildersService } from "src/builders/builders.service";
import { CompanyService } from "./company.service";
import { CreateCompanyDTO } from "./dto/create-company.dto";
import { UpdateCompanyDTO } from "./dto/update-company.dto";

@Controller("company")
export class CompanyController {
    constructor(
        private readonly companyService: CompanyService,
        private readonly builderService: BuildersService
    ) {}
    @Get()
    getAll() {
        return this.companyService.getAll();
    }
    @Post()
    create(@Body() createCompanyDto: CreateCompanyDTO) {
        return this.companyService.create(createCompanyDto);
    }
    @Get("builders/:id")
    getAllbuilders(@Param("id") id: string) {
        return this.builderService.getAllBuilders(id);
    }
    @Get(":id")
    getOne(@Param("id") id: string) {
        return this.companyService.getOne(id);
    }
    @Put(":id")
    updateOne(
        @Param("id") id: string,
        @Body() updateCompanyDto: UpdateCompanyDTO
    ) {
        return this.companyService.updateOne(id, updateCompanyDto);
    }
    @Delete(":id")
    deleteOne(@Param("id") id: string) {
        return this.companyService.deleteOne(id);
    }
}
