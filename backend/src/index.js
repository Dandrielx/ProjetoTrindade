import http from "http";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

// Carrega variáveis de ambiente (.env)
dotenv.config();

export const sql = neon(process.env.DATABASE_URL);

const requestHandler = async (req, res) => {
    try {
        const result = await sql`SELECT version()`;
        const { version } = result[0];
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(version);
    } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erro ao conectar com o banco");
        console.error(error);
    }
};

http.createServer(requestHandler).listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
