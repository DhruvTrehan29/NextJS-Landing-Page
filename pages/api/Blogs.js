// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {
  let data=await fs.promises.readdir("BlogData")
  let MyFile;
  let allBlogs=[];
  for(let index=0;index<data.length;index++){
    const item=data[index];
     console.log(item)
     MyFile= await fs.promises.readFile(("BlogData/"+item),'utf-8')
     allBlogs.push(JSON.parse(MyFile))
     console.log(allBlogs)
  }
  res.status(200).json(allBlogs)
}
