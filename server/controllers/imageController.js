// import axios from "axios";
// import userModel from "../models/userModel.js";
// import FormData from "form-data";

// export const generateImage = async (req, res) => {
//   try {
//     const { userID, prompt } = req.body;

//     const user = await userModel.findById(userID);

//     if (!user || !prompt) {
//       return res.json({ sucess: false, message: "Missing Details" });
//     }

//     if (user.creditBalance === 0 || userModel.creditBalance < 0) {
//       return res.json({
//         sucess: false,
//         message: "No Credit balance",
//         creditBalance: user.creditBalance,
//       });
//     }

//     const formData = new FormData();
//     formData.append("prompt", prompt);

//     const { data } = await axios.post(
//       "https://clipdrop-api.co/text-to-image/v1",
//       formData,
//       {
//         headers: {
//           "x-api-key": process.env.CLIPDROP_API,
//         },
//         responseType: "arraybuffer",
//       }
//     );

//     const base64Image = Buffer.from(data, "binary").toString("base64");
//     const resultImage = `data:image/png;base64,${base64Image}`;

//     await userModel.findByIdAndUpdate(user._id, {
//       creditBalance: user.creditBalance - 1,
//     });

//     res.json({
//       sucess: true,
//       message: "image Generated",
//       creditBalance: user.creditBalance - 1,
//       resultImage,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ sucess: false, message: error.message });
//   }
// };




import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userID = req.user.id; // 👈 from middleware, not body

    if (!prompt) {
      return res.json({ success: false, message: "Missing prompt" });
    }

    const user = await userModel.findById(userID);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit balance",
        creditBalance: user.creditBalance,
      });
    }

    console.log("Prompt:", prompt);
    console.log("Clipdrop Key:", process.env.CLIPDROP_API ? "Loaded" : "Missing");

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formData.getHeaders(),
        },
        responseType: "arraybuffer",
        timeout: 20000, // prevent hanging forever
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: user.creditBalance - 1,
      resultImage,
    });
  } catch (error) {
    console.error("Backend error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
