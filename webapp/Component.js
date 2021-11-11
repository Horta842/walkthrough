sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"walkthrough/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("walkthrough.Component", {

		metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
      },

		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				recipient : {
				   name : "World"
				}
			 };
			 var oModel = new JSONModel(oData);
			 this.setModel(oModel);
	
			 // set i18n model
			 var i18nModel = new ResourceModel({
				bundleName: "walkthrough.i18n.i18n"
			 });
			 this.setModel(i18nModel, "i18n");
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			 // enable routing
			this.getRouter().initialize();

			// set the device model
			//this.setModel(models.createDeviceModel(), "device");
			
		}
	});
});
