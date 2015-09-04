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
		 return new Greetr.init(firstName, lastName, language);
	 }
	 
	 // Setting up languages our framework supports.
	 var supportedLangs = ['en', 'es'];
	 
	 // Setting up greetings to be called. 
	 var greetings = {
		 en: 'Hello',
		 es: 'Hola'
	 };
	 // Setting up formal greetings to be called.
	 var formalGreetings = {
		en: 'Greetings',
		es:	'Saludos'
	 };
	 // It is good practice to log a message when 
	 // an item has been used.
	 var logMessages = {
		 en: 'Logged In',
		 es: 'Inició Sesión'
	 }
	 
	 // This is where we will store Properties & Methods that we want to use
	 // inside the object that is returned from Greetr. 
	 Greetr.prototype = {
		 fullName: function(){
			 return this.firstName + ' ' + this.lastName;
		 },
		 // Verifies they have selected a valid language.
		 validate: function(){
			 if (supportedLangs.indexOf(this.language) === -1) {
				 throw "Invalid Language";
			 }
		 },
		 greeting: function(){
			 return greetings[this.language] + ' ' + this.firstName + '!';
		 },
		 formalGreeting: function() {
			 return formalGreetings[this.language] + ', ' + this.fullName();
		 },
		 greet: function(formal){
			 var msg;
			 
			 // if undefined or null it will coerced to 'false'
			 if (formal){
				 msg = this.formalGreeting();
			 }
			 else {
				 msg = this.greeting();
			 }
			 if (console) {
				 console.log(msg);
			 }
			 // 'this' refers to the calling object at execution time 
			 // make the method chainable.
			 return this;
		 },
		 log: function(){
			 if (console) {
				 console.log(logMessages[this.language] + ': ' + this.fullName());
			 }
			 return this;
		 },
		 setLang: function(lang) {
			 this.language = lang;
			 
			 this.validate();
			 
			 return this; 
		 } 
	 };
	 
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