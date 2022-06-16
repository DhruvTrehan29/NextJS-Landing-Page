import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.body);
      let data=await fs.promises.readdir('ContactData')
      console.log(data);
      fs.promises.writeFile(`ContactData/${data.length+1}.json`,JSON.stringify(req.body),()=>{})
      res.status(200).json("Yes")

      // Process a POST request
    } else {
      res.status(200).json("allBlog")
    }
  }