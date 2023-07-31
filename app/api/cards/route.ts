import { NextResponse } from 'next/server'
import path from 'path';
import { promises as fs } from 'fs';


export async function GET() {
    const jsonDirectory = path.join(process.cwd(), 'data');
    const data = await fs.readFile(jsonDirectory + '/cards.json', 'utf8');
    const json = JSON.parse(data);
    return NextResponse.json(json);
}
