import { Router } from "express";
const carRouter = new Router();


function getCar(req,res){
  res.json({
    id:"1",
    data:"some data"
  })
  next()
}
carRouter.use(()=>{
  console.log('car router middleware');
  next()
})

carRouter.get("/car", (req, res) => {
  res.json({
    id: "1",
    data: "some data here"
  })
  next()
});

export { carRouter }
