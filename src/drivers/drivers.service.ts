import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Drivers, DriverDocument } from "./schemas/drivers.schema";
import { CreateDriverDto } from "./dto/create-drivers.dto";
import { UpdateDriverDto } from "./dto/update-drivers.dto";
@Injectable()
export class DriverService {
    constructor(
        @InjectModel(Drivers.name)
        private driverModel: Model<DriverDocument>
    ) {}

    async create(createDriverDto: CreateDriverDto): Promise<Drivers> {
        const createdDriver = new this.driverModel(createDriverDto);
        return (
            await (await createdDriver.save()).populate("company_id")
        ).populate("technology_id");
    }

    async getAll(): Promise<Drivers[]> {
        return this.driverModel
            .find()
            .populate("company_id")
            .populate("technology_id");
    }
    async getOne(id: string): Promise<Drivers> {
        return (
            await this.driverModel.findById(id).populate("company_id")
        ).populate("technology_id");
    }

    async updateOne(
        id: string,
        updateDriverDto: UpdateDriverDto
    ): Promise<Drivers> {
        return this.driverModel
            .findByIdAndUpdate(id, updateDriverDto, {
                new: true,
            })
            .populate("company_id")
            .populate("technology_id");
    }
    async deleteOne(id: string): Promise<Drivers> {
        return (
            await (
                await this.driverModel.findByIdAndDelete(id)
            )
        )
    }
}
