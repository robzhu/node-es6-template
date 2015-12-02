export default class HelloController{
  hello(req, res){
    res.status(200).send("meow");
  }
}
