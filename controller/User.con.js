import prisma from "../db/db.config.js";


export const createUser = async(req,res) =>{
    const {name,email,pass} = req.body;
    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(findUser){
        return res.send(`Email Allready Used`);
    }

    const newUser = await prisma.user.create({
        data:{
            name:name,
            email:email,
            pass:pass
        }
    });

    res.send(`User Created`);
}

