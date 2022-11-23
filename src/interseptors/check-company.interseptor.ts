import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class CheckCompanyInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log("Before...");
        const req = context.switchToHttp().getRequest();
        const res = context.switchToHttp().getResponse();
        if (req.body.salary < 100_000) {
            res.json({ message: "Bad Salary" });
        } else {
            const now = Date.now();
            return next
                .handle()
                .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
        }
    }
}
