import { Controller, Get, Redirect, Query } from "@nestjs/common";
import { AppService } from "./app.service";
@Controller("/api")
export class AppController {
    constructor(private appService: AppService) {}
    @Get()
    getAll() {
        return this.appService.getAll();
    }

    @Get("docs")
    @Redirect("https://docs.nestjs.com", 302)
    getDocs(@Query("version") version: string) {
        if (version && version === "5") {
            return { url: "https://docs.nestjs.com/v5" };
        }
    }
}
