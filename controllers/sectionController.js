const Section = require('../models/Section')

module.exports.getAllSections = async (req, res) => {
  try {
    const allSections = await Section.find()

    res.send(allSections)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.createSection = async (req, res) => {
  try {
    const newSection = await Section.create(req.body)

    res.send(newSection)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.deleteSection = async (req, res) => {
  try {
    await Section.findByIdAndDelete(req.params.id)

    res.send({ message: 'Sections has been deleted !' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}

module.exports.updateSection = async (req, res) => {
  try {
    const updatedSection = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.send(updatedSection)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
}
