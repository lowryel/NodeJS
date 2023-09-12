const express = require('express');
const router = express.Router();
const products = require("../../data");
const uuid = require("uuid");
// const appDataSource = require("../../datasource")
// const Photo = require("../../TypeORM")

// const userData = appDataSource.getRepository(Photo)

// const user = new Photo()
// user.name="Demo";
// user.email = "demo2@gmail.com"
// await appDataSource.save(user)

// Get all products
router.get('/', (req, res) => {
  res.json(products)
  // res.send('Hello World, my first node project!')
  // res.writeHead(200, { 'content-type': 'text/html' })
  // res.sendFile(path.resolve(__dirname, "./index.html")) //this is the official method for routing static files
             // but you can also ignore that once you have your static artifacts in the public folder
  // res.end()
})


//  Get single member
router.get("/:productID", (req, res)=>{
  const found = products.some(member => member.id === parseInt(req.params.productID))
  if (found) {
    const product = products.filter((product) => product.id === parseInt(req.params.productID));
    res.json(product)
  }else{
    return res.status(404).json({ msg: `Product with ID ${req.params.productID} not found` });
  }
//   res.json(products);
})


// Create a new product 
router.post("/", (req, res)=>{
    // console.log("hello world");
    const newProduct = {
        id: uuid.v4(),
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        availability: 'true',
    }
    //   console.log(req.body.name);
    if (!newProduct.name || !newProduct.price ) {
        return res.status(404).json({ msg: `Provide name and price` });
    }
    products.push(newProduct);
    res.json(products); //Use this when building an API
    // res.redirect("/") //while dealing with templates
})

// Update a product
router.put("/:productID", (req, res)=>{
    const found = products.some(product => product.id === parseInt(req.params.productID));
    if (found){
        const updProduct = req.body;
        products.forEach(product => {
            if (product.id === parseInt(req.params.productID)){
                product.name=updProduct.name ? updProduct.name : product.name;
                product.price=updProduct.price ? updProduct.price : product.price;
                product.desc=updProduct.desc ? updProduct.desc : product.desc;
                product.availability=updProduct.availability ? updProduct.availability : product.availability;
                res.json({ msg: "member updated", product })
            }
        });
    }
    else{
        res.status(404).json({ msg: `Product with ID ${req.params.productID} not found` });
    }
});


router.delete("/:productID", (req, res)=>{
  const found = products.some(member => member.id === parseInt(req.params.productID))
  if (found) {
    const product = products.filter((product) => product.id !== parseInt(req.params.productID));
    res.json({ msg: "Product deleted", product })
  }else{
    return res.status(404).json({ msg: `Product with ID ${req.params.productID} not found` });
  }
})

module.exports = router;
