const projects = require('../model/ProjectModel')

exports.addproject = async (req, res) => {
    try {
        console.log(req.files)
        const image = req.file.filename
        const { title, description, languages, github, demo } = req.body
        const userid = req.payload
        console.log(userid)
        if (!title || !description || !languages || !github || !demo || !image) {
            res.status(406).json("invalid data !!")

        }
        else {
            const existingProject = await projects.findOne({ github })
            if (existingProject) {
                res.status(406).json("Project Already exists")
            }
            else {
                const newProject = new projects({
                    title, description, languages, github, demo, image, userid//if the variable is dffrnt title:title,languages:languages
                })
                await newProject.save()
                res.status(200).json(newProject)

            }


        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.getProjets = async (req, res) => {
    try {
        const userid = req.payload
        const projectlist = await projects.find({ userid })
        res.status(200).json(projectlist)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)

    }
}

exports.deleteprojects = async (req, res) => {
    try {
        const { pid } = req.params
        const pro = await projects.findOneAndDelete(pid)
        res.status(200).json(pro)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)

    }

}
exports.updateproject = async (req, res) => {
    try {
        const { pid } = req.params
        const userid = req.payload
        console.log(req.file)
        if (req.file) {
            var image = req.file.filename
            var { title, description, languages, github, demo } = req.body

        }
        else {
            var { title, description, languages, github, demo, image } = req.body
        }
        const pro = await projects.findByIdAndUpdate(pid,
            { title, description, languages, github, demo, image, userid }
        )
        res.status(200).json(pro)


    }

    catch (err) {
        console.log(err)
        res.status(400).json(err)

    }
}