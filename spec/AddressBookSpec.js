/// <reference path="../typings\globals\jasmine\index.d.ts" />

describe('Address Book', function() {

    var addressBook,
        thisContact;

    //Chamado antes de cada specs (it)
    beforeEach(function() {
        addressBook = new AddressBook(),
        thisContact = new Contact();
    })
    

    it('should be able to add a contact', function () {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    })

    //Exemplo que o initialContacts não foi buscado no teste, pois é assincrono
    //A solução está na proima Suite (Async Address Book)
    it('should NOT grab initial contacts in test, because it is async',function(done) {
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(false);
        done();
    });
});

describe('Async Address Book', function () {
    var addressBook = new AddressBook();


    //deve-se chamar o método done para informar que uma operação async foi finalizada
    //http://stackoverflow.com/a/28412223/3424212
    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    //No caso abaixo, não precisa de utilizar o done, já que só consome o assincrono utilizado no beforeEach
    it('should grab initial contacts',function() {
        expect(addressBook.initialComplete).toBe(true);
    });
})