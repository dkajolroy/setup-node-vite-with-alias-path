import { importEnv } from "@src/config/env_config";
import { v2 as ImageCloud } from "cloudinary";
import { NextFunction, Request, Response } from "express";
import sharp from "sharp";

// Cloud config
async function Uploader(file: string, folder: string) {
  ImageCloud.config({
    cloud_name: importEnv().CLOUD_NAME,
    api_key: importEnv().CLOUD_API_KEY,
    api_secret: importEnv().CLOUD_API_SECRET,
  });
  const res = await ImageCloud.uploader.upload(file, {
    resource_type: "auto",
    folder: `campus/${folder}`,
  });
  return res;
}
// minify image
async function sharpImage(buffer: Buffer) {
  return await sharp(buffer).resize(800).webp().toBuffer();
}

const fields = ["images", "videos"];

// dynamic fields
export function handlerUpload(name: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(name); //test
    console.log(req); //test
    try {
      const files = { images: [] };
      if (files.images) {
        const base64images = await Promise.all(
          files.images.map(async (file) => {
            const im = await sharpImage(file.buffer);
            const base64 = Buffer.from(im).toString("base64");
            let dataURI = "data:" + file.mimetype + ";base64," + base64;
            return dataURI;
          })
        );
        req.body.images = await Promise.all(
          base64images.map(async (x) => {
            return await Uploader(x, "post/images");
          })
        );
      }
    } catch (error) {}
  };
}
