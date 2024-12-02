const express = require("express");
const userRouter = express.Router();
const z = require("zod");
const jwt = require("jsonwebtoken");
const jwtpassword = require("../config");
const {User,Account} = require("../../database/db");
const authenticationMiddleware = require("../Middleware/middleware");

userRouter.get('/getUserDetails',authenticationMiddleware,async (req,res)=>{
  const userdata = await User.findOne({
    _id:req.body.userId
  }).select("_id firstname lastname")
  userdata ? res.status(200).json(userdata) : res.status(406).json({message:"User not found"})
})

userRouter.get('/me',authenticationMiddleware,(req,res)=>{
  res.status(200).json({
    message:"ok"
  })
})

userRouter.put("/", authenticationMiddleware, async (req, res) => {
  const dataToBeUpdated = {};
  const body = req.body;
  const firstname = body.firstname;
  const lastname = body.lastname;
  const password = body.password;
  if (firstname) {
    dataToBeUpdated.firstname = firstname;
  }
  if (lastname) {
    dataToBeUpdated.lastname = lastname;
  }
  if (password) {
    dataToBeUpdated.password = password;
  }
  const userId = body.userId;
  const query = { _id: userId };
  await User.findOneAndUpdate(query, dataToBeUpdated);
  res.status(200).json({ message: "Updated successfully" });
});

userRouter.get("/bulk", authenticationMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({ $or:[
    { firstname: { $regex: filter, $options:"i" }} ,
    { lastname: { $regex: filter }}
]}).select("_id firstname lastname");
  res.status(200).json({users})
});

userRouter.post("/signup", async (req, res) => {
  const body = req.body;
  const username = body.username;
  const inputdata = {
    username: body.username,
    password: body.password,
    firstname: body.firstname,
    lastname: body.lastname,
  };
  const UserDetailsValidate = z.object({
    username: z.string().min(1,"Username cannot be empty").email(),
    password: z.string().min(6,"Password needs to be 6 min"),
    firstname: z.string().min(4,"Firstname needs min 4 letters"),
    lastname: z.string().min(4,"Lastname needs min 4 letters"),
  });

  const parseResult = UserDetailsValidate.safeParse(inputdata);
  
  const findIfUserPresent = await User.findOne({ username: username });
  if(!parseResult.success){
    return res
      .status(406)
      .json({ message: parseResult.error.issues[0]?.message });
  
  }
  if ( findIfUserPresent) {
    return res
      .status(406)
      .json({ message: "Email already taken " });
  }
  
  const dbuser = await User.create(inputdata);
  await Account.create({
    userId:dbuser._id,
    balance: 1 + Math.random()*10000
  })
  const token = jwt.sign(
    {
      userId: dbuser._id,
    },
    jwtpassword
  );
  res.status(200).json({
    message: "User created successfully",
    token,
  });
});

userRouter.post("/signin", async (req, res) => {
  const body = req.body;
  const inputdata = {
    username: body.username,
    password: body.password,
  };
  const userDetailsValidate = z.object({
    username: z.string().min(1,"Username cannot be empty").email(),
    password: z.string().min(6,"Password needs 6 letters"),
  });
  const parseResult = userDetailsValidate.safeParse(inputdata);
  console.log(parseResult)
  if (!parseResult.success) {
    return res.status(406).json({ message: parseResult.error.issues[0]?.message });
  }
  const dbuser = await User.findOne( inputdata );
  if (!dbuser) {
    return res.status(406).json({ message: "User Does Not Exist" });
  }
  const token = jwt.sign({ userId: dbuser._id }, jwtpassword);
  res.status(200).json({ token });
});

userRouter.post("/", authenticationMiddleware, (req, res) => {
  res.end();
});

module.exports = userRouter;
