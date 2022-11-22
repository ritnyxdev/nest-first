import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Builders, BuildersDocuemnt } from "./schemas/builders.schema";
import { CreatebuildersDto } from "./dto/create-builder.dto";
import { UpdateBuildersDto } from "./dto/update-builder.dto";
@Injectable()
export class BuildersService {
    constructor(
        @InjectModel(Builders.name)
        private buildersModel: Model<BuildersDocuemnt>
    ) {}

    async create(createBuildersDto: CreatebuildersDto): Promise<Builders> {
        const createdBuilders = new this.buildersModel(createBuildersDto);
        return (await createdBuilders.save()).populate("company_id");
    }

    async getAll(): Promise<Builders[]> {
        return this.buildersModel.find().populate("company_id");
    }
    async getOne(id: string): Promise<Builders> {
        return this.buildersModel.findById(id).populate("company_id");
    }

    async updateOne(
        id: string,
        updateBuildersDto: UpdateBuildersDto
    ): Promise<Builders> {
        return this.buildersModel
            .findByIdAndUpdate(id, updateBuildersDto, {
                new: true,
            })
            .populate("company_id");
    }
    async deleteOne(id: string): Promise<Builders> {
        return this.buildersModel.findByIdAndDelete(id);
    }
}
