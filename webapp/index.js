sap.ui.define([
	//"sap/m/Text,"
    "sap/ui/core/mvc/XMLView"
], function (/*Text*/XMLView) {
	"use strict";

	XMLView.create({
		viewName: "walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});