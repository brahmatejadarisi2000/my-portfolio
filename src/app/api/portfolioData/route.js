
import { portfolioData } from "@/app/data/portfolioData";
export const GET = async (request) => {
    return new Response(JSON.stringify(portfolioData), { status: 200 })
} 