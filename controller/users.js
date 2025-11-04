import User from "../model/User.js";

const getUsersController = async (req, res) => {
  try {
    const Users = await Product.find();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};


export {
  getUsersController,
};
