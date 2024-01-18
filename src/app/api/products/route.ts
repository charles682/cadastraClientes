import data from './data.json'

//A Responsen representa a resposta a uma solicitação.
export async function GET() {
    return Response.json(data.products)
}