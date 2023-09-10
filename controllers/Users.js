import Users from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json({
            status: "success",
            data: users
        })
    } catch (error) {
        console.log("error", error)
    }
}

export const Register = async (req, res) => {
    const { name, address, gender, date_of_birth } = req.body;
    try {
        await Users.create({
            name,
            address,
            gender,
            date_of_birth
        });
        res.status(200).json({
            status: "success",
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: "error",
            message: error,
        })
    }
}

export const Update = async (req, res) => {
    const { id, name, address, gender, date_of_birth } = req.body;
    try {
        await Users.update({
            name,
            address,
            gender,
            date_of_birth
        },{
            where: {
              id: id,
            },
          });
        res.status(200).json({
            status: "success",
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: "error",
            message: error,
        })
    }
}

export const Delete = async (req, res) => {
    const { id } = req.body;
    try {
        await Users.destroy({
            where: {
              id: id
            },
          });
        res.status(200).json({
            status: "success",
        })
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: "error",
            message: error,
        })
    }
}