import jwt from 'jsonwebtoken'

const auth = (req, res, next)=>{
    // It will check if the req has proper headers and parameters and if yes, then only the next function will be called.
    // Thats how middleware works ;)
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token,process.env.JWT_SECRET) // process.env.JWT_SECRET is given in the signup function, which is the secret for verifying
        req.userId = decodeData?.id
        next() // Only After verifying , the next function is called. Providing Security. :)
    } catch (error) {
        console.log(error);
    }

}
export default auth