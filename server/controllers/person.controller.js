const Person = require('../models/person');

const personCtrl = {};

personCtrl.getPersons = async(req, res) => {
    const persons = await Person.find()
    res.json({
        ok: true,
        persons
    });

};
personCtrl.getPerson = async(req, res) => {
    const person = await Person.findById(req.params.id);
    res.json(person);

};

personCtrl.createPerson = async(req, res) => {
    const person = new Person(req.body);
    await person.save();
    res.json({
        'status': 'Person Saved'
    });
};

personCtrl.editPerson = async(req, res) => {
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

personCtrl.deletePerson = async(req, res) => {
    await Person.findByIdAndRemove(req.params.id);
    res.json({ status: 'Person Deleted' });

}

module.exports = personCtrl;