function AddressBook() {
    this.contactList = new Array();
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function (cb) {
    var self = this;

    setTimeout(function () {
        self.initialComplete = true;
        if (cb)
            return cb();
    }, 3);
};

AddressBook.prototype.addContact = function (contact) {
    this.contactList.push(contact);
};

AddressBook.prototype.getContact = function (index) {
    return this.contactList[index];
};
AddressBook.prototype.deleteContact = function (index) {
    return this.contactList.splice(index,1);
};