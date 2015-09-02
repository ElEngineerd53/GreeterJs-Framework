/*!
 * Greetr JavaScript Library v.0.0.1
 * http://greetr.org
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 Amir Yacaman Foundation, Inc. and other contributors
 * Released under the MIT license
 *
 * Date: 2015-08-03T16:01Z
 */
 
 (function(global,$){
	 var Greetr = function(firstName, lastName, language) {
		 // Return function constructor so that the user does
		 // not have to declare the new keyword.
		 return new Greetr.init(firstName,lastName,language);
	 }
	 // This is where we will store Properties & Methods that we want to use
	 // inside the object that is returned from Greetr. 
	 Greetr.prototype = {};
	 
	 // This is the Greetr function.
	 Greetr.init = function(firstName, lastName, language) {
		 // Check to see if firstName & lastName are initialize,
		 // and if not set them equal to an empty string.
		 // For language set it equal to english if no language was passed.
		 var self = this;
		 self.firstName = firstName || '';
		 self.lastName = lastName || '';
		 self.language = language || 'en';
	 }
	 // Here is where the objects will point to. 
	 Greetr.init.prototype = Greetr.prototype;
	 // Exposing the Greetr function so the user can use 'G$()'.
	 global.Greetr = global.G$ = Greetr;
 })(window,jQuery);