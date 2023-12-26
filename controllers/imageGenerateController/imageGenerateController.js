import OpenAI from "openai";
import config from "config"
import axios from "axios"

export const imageGenerateController = async(req,res) =>{
   const {Field , Size ,Quantity } = req.body
console.log(Field);
      const options = {
         method: 'GET',
         url: 'https://text-to-image7.p.rapidapi.com/',
         params: {
           prompt: Field,
           batch_size: Quantity,
           negative_prompt: 'ugly, duplicate, morbid, mutilated, [out of frame], extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, bad anatomy, bad proportions'
         },
         headers: {
            'X-RapidAPI-Key': '132180dd5emsh18c57a00d145641p12924bjsn84ace4644b87',
            'X-RapidAPI-Host': 'text-to-image7.p.rapidapi.com'
          }
        };
   try {

      const response = await axios.request(options);
      console.log(response);
     return res.status(200).send(response.data)
   } catch (error) {
      return  res.status(500).send({ message: error.message });
   }
}
// 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
// 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
// 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