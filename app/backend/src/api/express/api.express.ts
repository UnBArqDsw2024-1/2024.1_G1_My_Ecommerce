import cors from 'cors';
import express, { Express, Request, Response } from "express";
import { Api } from "../api";

export class ApiExpress implements Api {
    private constructor(readonly app: Express) { }

    public static build() {
        const app = express();

        // Habilita CORS para todas as rotas
        app.use(cors({
            origin: 'http://localhost:3000', // Permite o acesso do frontend
            methods: ['GET', 'POST'], // Métodos permitidos
            allowedHeaders: ['Content-Type'], // Headers permitidos
        }));

        app.use(express.json());
        return new ApiExpress(app);
    }

    public addGetRoute(
        path: string,
        handler: (req: Request, res: Response) => void
    ): void {
        this.app.get(path, handler);
    }

    public addPostRoute(
        path: string,
        handler: (req: Request, res: Response) => void
    ): void {
        this.app.post(path, handler);
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log("Server running on port " + port);
            this.printRoutes();
        });
    }

    private printRoutes() {
        const routes = this.app._router.stack
            .filter((route: any) => route.route)
            .map((route: any) => {
                return {
                    path: route.route.path,
                    method: route.route.stack[0].method,
                };
            });

        console.log(routes);
    }
}
