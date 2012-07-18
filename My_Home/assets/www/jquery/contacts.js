			var TAP = ('ontouchend' in window) ? 'touchend' : 'click';
			document.addEventListener('DOMContentLoaded', function () {
             x$('#houseSubmit').on(TAP, function () {
             var filter = x$('#houseName')[0].value;
                 if (!filter) {
				// no contents
							return;
				} else {
							findContactByName(filter, function (contacts) {
							alert(contacts.length + ' contact(s) found matching "' + filter + '"');
					});
	}
       
       function findContactByName(name, callback) {
              function onError() {
                   alert('Error: unable to read contacts');
              };
                   var fields = ["displayName", "name"],
                      options = new ContactFindOptions();
                      options.filter = name;
                      options.multiple = true;
                    // find contacts
                   navigator.service.contacts.find(fields, callback, onError, options);
}

			var item = '<li>{{ name }}</li>';
				if (!filter) {
					// no contents
							return;
			} else {
						findContactByName(filter, function (contacts) {
								var i = 0, contactItem, data;
						for (i; i<contacts.length; i++) {
						data = { name: contacts[i].name.formatted }						
						contactItem = Mustache.to_html(item, data);
						x$('#houseList').bottom(contactItem);
						x$('#houseList').bottom(contacts[i].name);
					}
				});
