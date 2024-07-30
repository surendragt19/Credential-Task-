const express=require('express')
const mongoose=require('mongoose')
const app=express()
const path=require('path')
const cookieParser=require('cookie-parser')
const userModel=require('./models/user.model')

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser())



app.get('/',(req,res)=>{
    res.render('singUp')
})


//register

app.post('/register',(req,res)=>{
    let {name,email,password}=req.body;
    let saltRound=10;
        bcrypt.hash(password,saltRound,async(err,hash)=>{
           const user= await userModel.create({
                name,
                email,
                password:hash
            })

            //send token browser
            let payload={
                email:email,
                id:user._id
            }
            let secretKey="SUrendra"
            let token=jwt.sign(payload,secretKey)
            res.cookie("token",token)
            res.redirect('/login')
        })
    })

app.get('/login',(req,res)=>{
    res.render('singIn')
})

//login

app.post('/login', async (req,res)=>{
    const { email, password } = req.body;
    const loginUser=await userModel.findOne({email})
    const isMatch = await bcrypt.compare(password, loginUser.password);
        if (isMatch) {
            let payload={
                email:loginUser.email,
                id:loginUser._id
            }
            let secKey="Surendra"
            let token=jwt.sign(payload,secKey)
            res.cookie("token",token)
            res.send('You are logged in');
        } else {
            res.send('Password is incorrect');
        }
})

//logout
app.get('/logout',(req,res)=>{
    res.cookie("token","")
    res.redirect('/login')
})



// app.get('/',(req,res)=>{
//     res.cookie("name","surendra")
//     res.send("done")
// })

// app.get('/a',(req,res)=>{
//     console.log(req.cookies)
//     res.send("done")
// })

const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on Port : ${port}`)
})