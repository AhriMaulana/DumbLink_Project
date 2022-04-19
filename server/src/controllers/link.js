const { link, sosmed } = require("../../models");

exports.addLink = async (req, res) => {

    try {
        const data = req.body
        const createdLink = await link.create({
            title: data.title,
            description: data.description,
            titlefacebook: data.titlefacebook,
            urlfacebook: data.urlfacebook,
            titletwitter: data.titletwitter,
            urltwitter: data.urltwitter,
            titleinstagram: data.titleinstagram,
            urlinstagram: data.urlinstagram,
            titleyoutube: data.titleyoutube,
            urlyoutube: data.urlyoutube,
            titlewhatsapp: data.titlewhatsapp,
            urlwhatsapp: data.urlwhatsapp,
        })
        
        res.send({
            status: "success",
            data: {
                link: createdLink
            }
        })
        console.log(req.body)
    } catch (error) {
        console.log(error);
        res.status(200).send({
            status: "Failed",
            message: "Server error"
        })
    }
}

exports.getlinks = async (req, res) => {

    try {
        const links = await link.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                links
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

exports.getlink = async (req, res) => {

    try {
        const { id } = req.params

        const getdata = await link.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                link: getdata
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

exports.deletelink = async (req, res) => {
    try {
        const { id } = req.params;

        await link.destroy({
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

exports.updatelink = async (req, res) => {
    try {
        const { id } = req.params
        const {
            title,
            description,
            titlefacebook,
            urlfacebook,
            titletwitter,
            urltwitter,
            titleinstagram,
            urlinstagram,
            titleyoutube,
            urlyoutube,
            titlewhatsapp,
            urlwhatsapp,
        } = req.body

        let data = {
            title,
            description,
            titlefacebook,
            urlfacebook,
            titletwitter,
            urltwitter,
            titleinstagram,
            urlinstagram,
            titleyoutube,
            urlyoutube,
            titlewhatsapp,
            urlwhatsapp,
        }

        await link.update(data, {
            where: {
                id
            }
        })

        const update = await link.findOne({
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
                link: update

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