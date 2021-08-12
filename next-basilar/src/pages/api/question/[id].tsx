export default function question(req: { method: string; query: { id: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: any; utterance: string; resp: string[] }): void; new(): any }; send: { (): void; new(): any } } }) {
    if (req.method === 'GET') {
        get(req, res)
    } else {
        res.status(404).send()
    }
}

function get(req: any, res: any) {
    if (req.method === 'GET') {
        const id = req.query.id
        res.status(200).json({
            id,
            utterance: 'Qual é a sua cor preferida?',
            resp: ['Branca', 'Azul', 'Vermelha', 'Amarela', 'Rosa', 'Violeta']
        })
    }
}