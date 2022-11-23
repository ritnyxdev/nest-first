import { IsString, IsNumber, IsMongoId, IsOptional } from "class-validator";

export class UpdateBuildersDto {
    @IsString({ message: "Iltimos first_name ni string qiling!" })
    @IsOptional()
    readonly first_name?: string;
    @IsString({ message: "Iltimos last_name ni string qiling!" })
    @IsOptional()
    readonly last_name?: string;
    @IsNumber()
    @IsOptional()
    readonly salary?: number;
    @IsMongoId({ message: "Iltimos Company ID ni togri kiriting!" })
    @IsOptional()
    readonly company_id?: string;
}
