import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Company, CompanyDocument } from "./schemas/company.schema";
import { CreateCompanyDTO } from "./dto/create-company.dto";
import { UpdateCompanyDTO } from "./dto/update-company.dto";
@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>
    ) {}

    async create(createCompanyDto: CreateCompanyDTO): Promise<Company> {
        const createdCompany = new this.companyModel(createCompanyDto);
        return createdCompany.save();
    }

    async getAll(): Promise<Company[]> {
        const data = this.companyModel.find();
        return data;
    }
    async getOne(id: string): Promise<Company> {
        return this.companyModel.findById(id);
    }
    async updateOne(id: string, updateDto: UpdateCompanyDTO): Promise<Company> {
        return this.companyModel.findByIdAndUpdate(id, updateDto, {
            new: true,
        });
    }
    async deleteOne(id: string): Promise<Company> {
        return this.companyModel.findByIdAndDelete(id, { new: true });
    }
}