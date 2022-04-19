const { user } = require("../../models");

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.user
        const { email, fullname } = req.body

        let data = {
            email,
            fullname
        }

        await user.update(data, {
            where: {
                id
            }
        })

        const update = await user.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password']
            }
        })

        res.send({
            status: 'success',
            data: {
                user: update

            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await user.destroy({
            where: {
                id,
            },
        });

        res.send({
            status: "success",
            data: {
                id: id,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getUserId = async (req, res) => {
    try {
        const id = req.user.id;
        const accountId = await account.findOne({ where: { id: id } });

        res.send({
            status: 'success',
            data: {
                accountId
            }
        })
        console.log(res)
    } catch (error) {
        res.status(500).send({
            status: 'failed',
            massage: error
        })
    }
}