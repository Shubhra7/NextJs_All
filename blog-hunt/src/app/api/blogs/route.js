import {promises as fs} from 'fs';
import path from 'path';

export async function GET(request) {
    try {
        const dirPath = path.join(process.cwd(),'src','blogdata');
        const files = await fs.readdir(dirPath);
        console.log(typeof files);
        
        

        return new Response(JSON.stringify(files),{
            status:200,
            headers: {'Content-Type' : 'application/json'},
        });
        
    } catch (error) {
        return new Response(JSON.stringify({ error: 'dir not found or failed to read'}),{
            status: 500,
            headers: {'Content-Type' : 'application/json'},
        });
        
    }
}
