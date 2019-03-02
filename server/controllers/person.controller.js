const Person = require('../models/person');

const personCtrl = {};

personCtrl.getPersons = async(req, res, next) => {
    const persons = await Person.find()
    res.json(persons);

};
personCtrl.getPerson = async(req, res, next) => {
    const person = await Person.findById(req.params.id);
    res.json(person);

};

personCtrl.createPerson = async(req, res, next) => {
    const person = new Person({
        name: req.body.name,
        age: req.body.age
    });
    await person.save();
    res.json({
        status: 'Person Saved'
    });
};

personCtrl.editPerson = async(req, res, next) => {
    const { id } = req.params;
    const person = {
        name: req.body.name,
        age: req.body.age
    };
    await Person.findByIdAndUpdate(id, { $set: person }, { new: true });
    res.json({
        status: 'Person Updated'
    });
};

personCtrl.deletePerson = async(req, res, next) => {
    await Person.findByIdAndRemove(req.params.id);
    res.json({ status: 'Person Deleted' });

}

module.exports = personCtrl;