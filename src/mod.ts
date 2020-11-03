import { serve } from "https://deno.land/std/http/server.ts";
import Utilities from './lib/utilities.ts';

const url = Deno.args[0];
if (!Utilities.isValidUrl(url)) {
    console.log('not a valid url');
    Deno.exit();
}

const port = 8000;
const res = await fetch(url);
const body = new Uint8Array(await res.arrayBuffer());

const server = serve({ port });
console.log("http://localhost:8000/");
for await (const req of server) {
    req.respond({ body });
}
