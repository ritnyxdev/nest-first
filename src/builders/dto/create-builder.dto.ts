import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsMongoId,
    IsPhoneNumber,
} from "class-validator";

export class CreatebuildersDto {
    @IsString({ message: "Iltimos first_name ni string qiling!" })
    @IsNotEmpty()
    readonly first_name: string;
    @IsString({ message: "Iltimos last_name ni string qiling!" })
    @IsNotEmpty()
    readonly last_name: string;
    @IsNumber()
    @IsNotEmpty()
    readonly salary: number;
    @IsMongoId({ message: "Iltimos Company ID ni togri qiling!" })
    @IsNotEmpty()
    readonly company_id: string;
}
