function ContactController(random, words) {
	random.name = 'Bill Gates';

	words(function () {
		random.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);