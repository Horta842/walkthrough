sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment"
], function(
	Controller,
    MessageToast,
    JSONModel,
    ResourceModel,
    Fragment
) {
	"use strict";

	return Controller.extend("walkthrough.controller.HelloPanel", {
       
         
        onShowHello : function () {
             // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
         },
         onOpenDialog : function () {
 
             // create dialog lazily
             if (!this.pDialog) {
                 this.pDialog = this.loadFragment({
                     name: "walkthrough.view.HelloDialog"
                 });
             } 
             this.pDialog.then(function(oDialog) {
                 oDialog.open();
             });
         }
	});
});