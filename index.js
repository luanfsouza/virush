// Importe os módulos necessários
import request from "request";
import akaneko from "akaneko";
import { promises as fs } from "fs";
import download from "image-downloader";
import https from "https";
import path from "path";
import {getWallpaper,setWallpaper} from "wallpaper";

// Tente fazer uma solicitação HTTP para um site conhecido
request("https://www.google.com", (error, response, body) => {
  // Se a solicitação for bem-sucedida, há internet
  if (!error && response.statusCode === 200) {
    console.log("Há internet!");
  } else {
    console.log("Não há internet!");
  }
});
async function yourFunctionName() {
  // Get SFW Neko Images, uwu //
  console.log("SFW Neko: " + (await akaneko.neko()));

  let url = await akaneko.neko();

  console.log("oiii" + url);
  const string = url;

  // Divide a string em duas partes
  const parts = string.split("/neko/");

  // Pega a segunda parte
  const result = parts[1];

  console.log("aquiii" + result);

  const downloadImage = async (url, path) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(path, buffer);
  };

  for (let i = 0; i < 5; i++) {
    //await downloadImage(url, result);
  }

  const options = {
    url: url,
    dest: process.cwd(), // will be saved to /path/to/dest/photo.jpg
  };
  // Baixe a imagem

  await downloadImage(url, result);
  const cwd = process.cwd();
  const imagePath = path.join(cwd, result);
  await setWallpaper(result);
  // Get Lewd Neko (NSFW), owo //
  //console.log("Lewd Neko:" + (await akaneko.lewdNeko()));

  // Lewd Bomb me onii-san~~ //
  //console.log("Lewd Bomb: " + (await akaneko.lewdBomb(5)));

  // Get other NSFW Images //
  //console.log("BDSM: " + (await akaneko.nsfw.bdsm()));
  //console.log("Maid: " + (await akaneko.nsfw.maid()));
  //console.log("Hentai: " + (await akaneko.nsfw.hentai()));
}
for (let i = 0; i < 100 + 1; i++) {
  
  setTimeout(() => {yourFunctionName();}, 1000 * i);
}

