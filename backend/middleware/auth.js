import jwt from "jsonwebtoken";
export const auth = async(request,response,next)=>{
 try{ 
  let cookies = request.cookies;
  let token = cookies.token;
  let decodeMessage =  jwt.verify(token,process.env.SECRET);
  console.log(decodeMessage);
  next();
 }
 catch(err){
   console.log(err);
   return response.status(401).json({error: "Unauthorized user | Inavlid token"});
 } 
}
