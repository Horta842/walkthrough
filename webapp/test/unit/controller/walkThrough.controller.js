/*global QUnit*/

sap.ui.define([
	"walkthrough/controller/walkThrough.controller"
], function (Controller) {
	"use strict";

	QUnit.module("walkThrough Controller");

	QUnit.test("I should test the walkThrough controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
