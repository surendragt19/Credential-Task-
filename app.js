
// //create user
// app.get('/create',((req,res)=>{
//     res.render('create')
// }))


// app.post('/create',async(req,res)=>{
//     const {name,email,image}=req.body
//     const createUser=await ejs.create({
//         name,
//         email,
//         image
//     })
//     res.redirect('/')
// })


// //read
// app.get('/',async(req,res)=>{
//     const users=await ejs.find({})
//     res.render('read',{users})
// })



// //delete
// app.get('/delete/:id',async(req,res)=>{
//     const id=req.body.params
//    await ejs.findOneAndDelete({id})
//     res.redirect('/')
// })


// //update
// app.get('/update/:id',(req,res)=>{
//     const id=req.body.params
//     res.render('/update')
// })


// // mongoose.connect('mongodb://127.0.0.1:27017/kuchbhi')

// // const uSchema=new mongoose.Schema({
// //     name:{
// //         type:String,
// //     },
// //     email:{
// //         type:String,
// //     },
// //     address:{
// //         type:String,
// //     }
// // })
// // const userModel=mongoose.model('user',uSchema)
// // //create
// // app.get('/create',async (req,res)=>{
// //     const userCreate=await userModel.create({
// //         name:"surendra",
// //         email:"a@gmail",
// //         address:"asdfgh"
// //     })
// //     res.send({userCreate})
// // })

// // //read
// // app.get('/read',async(req,res)=>{
// //     const allusr=await userModel.find({})
// //     res.send({allusr})
// // })

// // app.get('/readone',async(req,res)=>{
// //     const allusr=await userModel.findOne({name:"surendra"})
// //     res.send({allusr})
// // })

// // app.get('/delete',async(req,res)=>{
// //     const allusr=await userModel.findOneAndDelete({name:'surendra'})
// //     res.send({allusr})
// // })

// // app.get('/update',async(req,res)=>{
// //     const allusr=await userModel.findOneAndUpdate({email:'a@gmail'},{address:"lko"},{new:true})
// //     res.send({"UpdateUser": allusr})
// // })
