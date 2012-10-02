var Accordion = function(options) {
	this.$el = $(options.sel)
	// the above is equivalent to: 
	// this.$el = $('#accordion1');
	this.closeAllButFirst();
	this.bind();
};

// functions created on the prototype will be inherited by all new objects created
Accordion.prototype.closeAll = function() {
	this.$el.find('.content').slideUp(300);
};

Accordion.prototype.closeAllButFirst = function() {
	this.$el.find('.content').slideUp(0).eq(0).slideDown(0);
};

Accordion.prototype.bind = function () {
	var that = this;

	this.$el.on('click', '.label', function() {
		console.log(this, that); // on this line, "this" points to the element you clicked on

		that.$el.find('.content').slideUp()
		$(this).next('.content').slideDown();
	});
};