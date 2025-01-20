const {products} = require('./products');
const express = require('express');
app = express();
console.log(products);
const newProducts = products.map((product)=>{
    const {id, name, price} = product;
    return {id, name, price};
});
app.get('/',(req, res)=>{
    res.json(newProducts);
})
app.get('/products',(req, res)=>{
    res.json(newProducts);
})
app.get('/products/:productId',(req,res)=>{
    const productId = req.params.productId;
    console.log(productId);
    const singleproduct = products.find((product)=>
        product.id === Number(productId)
    )
    if(!singleproduct){
        res.status(404).send('Not found');
    }
    else{
    res.json(singleproduct);
    }
});

app.all('*', (req,res)=>{
    res.status(404).json({message: 'Not found'});
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})