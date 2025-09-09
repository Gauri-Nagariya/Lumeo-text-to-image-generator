// import Jwt from "jsonwebtoken";

// const userAuth = async(req, res, next)=>{
//     const {token}= req.headers;

//     if (!token) {
//         return res.json({sucess: false, message: 'Not Authorized. Login Again'});

//         try {
//             const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

// if(tokenDecode.id){
//     req.body.userID = tokenDecode.id;
// }else{
//     return res.json({sucess: false, message: 'Not Authorized. Login Again'});

// }
// next();
//         } catch (error) {
//             res.json({sucess: false, message: error.message});
     
//         }
//     }
// };

// export default userAuth;




import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.id) {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }

    req.user = { id: decoded.id }; // 👈 attach user ID safely
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};

export default userAuth;
