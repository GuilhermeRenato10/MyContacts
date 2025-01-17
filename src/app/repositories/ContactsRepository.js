const { v4 } = require('uuid');

let contacts = [
    {
        //'uuid -> Universal Unique ID'
        id: v4(),
        name: 'Guilherme',
        email: 'guirenato@mail.com',
        phone: '123456789',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Marcela',
        email: 'cela@mail.com',
        phone: '9988887849',
        category_id: v4(),
    },
]

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }

    findById(id) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id === id),
        ));
    }

    findByEmail(email) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email === email),
        ));
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id != id);
            resolve();
        });
    }

    create({
        name, email, phone, category_id
    }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id
            }
            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update(id, {
        name, email, phone, category_id
    }) {
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id
            };

            contacts = contacts.map((contact) => (
                contact.id === id ? updatedContact : contact //se o id do contato for igual ao id pesquisado, retorna updatedContact se nao retorna o contact
            ));

            resolve(updatedContact);
        });
    }
}

module.exports= new ContactsRepository();
