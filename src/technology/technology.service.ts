import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Technologies, TechnologyDocument } from "./schemas/technology.schema";
import { CreateTechnologyDto } from "./dto/create-technology.dto";
import { UpdateTechnologyDTO } from "./dto/update-technology.dto";
@Injectable()
export class TechnologyService {
    constructor(
        @InjectModel(Technologies.name)
        private technologyModel: Model<TechnologyDocument>
    ) {}

    async create(
        createTechnologyDto: CreateTechnologyDto
    ): Promise<Technologies> {
        const createdTechnology = new this.technologyModel(createTechnologyDto);
        return (
            await (await createdTechnology.save()).populate("company_id")
        ).populate("builder_id");
    }

    async getAll(): Promise<Technologies[]> {
        return this.technologyModel
            .find()
            .populate("company_id")
            .populate("builder_id");
    }
    async getOne(id: string): Promise<Technologies> {
        return (
            await this.technologyModel.findById(id).populate("company_id")
        ).populate("builder_id");
    }

    async updateOne(
        id: string,
        updateTechnologyDto: UpdateTechnologyDTO
    ): Promise<Technologies> {
        return this.technologyModel
            .findByIdAndUpdate(id, updateTechnologyDto, {
                new: true,
            })
            .populate("company_id")
            .populate("builder_id");
    }
    async deleteOne(id: string): Promise<Technologies> {
        return await this.technologyModel.findByIdAndDelete(id);
    }
}
