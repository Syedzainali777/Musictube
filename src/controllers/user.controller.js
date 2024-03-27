import { asyncHandler } from "../utlis/AsyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(500).json({
    message: "Zain aur code",
  });
});

export {
    registerUser
}