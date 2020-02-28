Xrm = window.Xrm || { __namespace: true };
Xrm.RESTBuilder = Xrm.RESTBuilder || { __namespace: true };

Xrm.RESTBuilder.ODataPath = null;
Xrm.RESTBuilder.CrmVersion = [];
Xrm.RESTBuilder.EntityMetadata = [];
Xrm.RESTBuilder.CurrentEntityAttributes = [];
Xrm.RESTBuilder.CurrentEntityOneToManyRelationships = [];
Xrm.RESTBuilder.CurrentEntityManyToOneRelationships = [];
Xrm.RESTBuilder.CurrentEntityManyToManyRelationships = [];
Xrm.RESTBuilder.CurrentEntityAlternateKeys = [];
Xrm.RESTBuilder.RelatedEntities = [];
Xrm.RESTBuilder.CurrentEntityExpandedAttributes = [];
Xrm.RESTBuilder.AssociateEntityOneToManyRelationships = [];
Xrm.RESTBuilder.AssociateEntityManyToManyRelationships = [];
Xrm.RESTBuilder.CurrentEntityActions = [];

Xrm.RESTBuilder.EntitySets = [];
Xrm.RESTBuilder.EntityTypes = [];
Xrm.RESTBuilder.Actions = [];
Xrm.RESTBuilder.QueryFunctions = [];
Xrm.RESTBuilder.Functions = [];
Xrm.RESTBuilder.SelectedAction = null;
Xrm.RESTBuilder.SelectedFunction = null;

Xrm.RESTBuilder.Type = "Retrieve";
Xrm.RESTBuilder.Library = "XMLHTTP";
Xrm.RESTBuilder.Endpoint = "2011";
Xrm.RESTBuilder.FormattedValues = true;
Xrm.RESTBuilder.DetectChanges = false;
Xrm.RESTBuilder.AuthToken = false;
Xrm.RESTBuilder.Impersonate = false;
Xrm.RESTBuilder.ReturnRecord = false;
Xrm.RESTBuilder.PreventCreate = false;
Xrm.RESTBuilder.PreventUpdate = false;
Xrm.RESTBuilder.Async = true;
Xrm.RESTBuilder.Count = false;
Xrm.RESTBuilder.EntityLogical = "";
Xrm.RESTBuilder.EntitySchema = "";
Xrm.RESTBuilder.EntitySetName = "";
Xrm.RESTBuilder.EntityIsActivity = false;

Xrm.RESTBuilder.ReplaceLine = "";
Xrm.RESTBuilder.ErrorReplaceLine = "";
Xrm.RESTBuilder.NoChangeReplaceLine = "";
Xrm.RESTBuilder.RawResults = null;
Xrm.RESTBuilder.ResultsClipboard = null;
Xrm.RESTBuilder.Editor1 = null;
Xrm.RESTBuilder.CodeClipboard1 = null;
Xrm.RESTBuilder.Editor2 = null;
Xrm.RESTBuilder.CodeClipboard2 = null;
Xrm.RESTBuilder.UrlClipboard = null;
Xrm.RESTBuilder.UrlResultEditor = null;
Xrm.RESTBuilder.UrlResultClipboard = null;
Xrm.RESTBuilder.FetchEditor = null;

$(function () {
	Xrm.RESTBuilder.GetCrmVersion();
	Xrm.RESTBuilder.SetWebApiVersion();

	// Make window text selectable in IE
	window._UI_TEXT_SELECTABLE = "1";

	Xrm.RESTBuilder.Block();
	Xrm.RESTBuilder.GetAllEntityMetadata();
	Xrm.RESTBuilder.CreateResetButton();
	Xrm.RESTBuilder.CreateRefreshButton();
	Xrm.RESTBuilder.CreateSwitchIdKeyButton("Retrieve");
	Xrm.RESTBuilder.CreateSwitchIdKeyButton("Update");
	Xrm.RESTBuilder.CreateSwitchIdKeyButton("Delete");
	Xrm.RESTBuilder.CreateCopyResultsButton();
	Xrm.RESTBuilder.CreateCopyCode1Button();
	Xrm.RESTBuilder.CreateCopyCode2Button();
	Xrm.RESTBuilder.CreateCopyUrlResultsButton();
	Xrm.RESTBuilder.CreateCopyUrlButton();
	Xrm.RESTBuilder.CreateCleanResultsButton();
	Xrm.RESTBuilder.CreateBackButton();
	Xrm.RESTBuilder.CreateActionReferenceButton();
	Xrm.RESTBuilder.CreateFunctionReferenceButton();
	Xrm.RESTBuilder.CreateExecuteButton();
	Xrm.RESTBuilder.CreateFormatCodeButton();
	Xrm.RESTBuilder.CreateFormatFetchButton();
	Xrm.RESTBuilder.CreateDisplayRetrieveUrlButton();
	Xrm.RESTBuilder.CreateCreateRequestButton();
	Xrm.RESTBuilder.CreateAddAttributeButtons();
	Xrm.RESTBuilder.CreateGroupButtons();
	Xrm.RESTBuilder.CreateAccordion();
	Xrm.RESTBuilder.CreateRadioButtons();
	Xrm.RESTBuilder.CreateRadioButtons($("#Endpoint"));
	Xrm.RESTBuilder.CreateRadioButtons($("#FormattedValues"));
	Xrm.RESTBuilder.CreateRadioButtons($("#RESTType"));
	Xrm.RESTBuilder.CreateRadioButtons($("#RESTType2"));
	Xrm.RESTBuilder.CreateRadioButtons($("#RESTLibrary"));
	Xrm.RESTBuilder.CreateRadioButtons($("#Async"));
	Xrm.RESTBuilder.CreateRadioButtons($("#DetectChanges"));
	Xrm.RESTBuilder.CreateRadioButtons($("#AuthToken"));
	Xrm.RESTBuilder.CreateRadioButtons($("#Impersonate"));
	Xrm.RESTBuilder.CreateRadioButtons($("#ReturnRecord"));
	Xrm.RESTBuilder.CreateRadioButtons($("#ResultType"));
	Xrm.RESTBuilder.CreateRadioButtons($("#RecordCount"));
	Xrm.RESTBuilder.CreateRadioButtons($("#PreventCreate"));
	Xrm.RESTBuilder.CreateRadioButtons($("#PreventUpdate"));
	Xrm.RESTBuilder.SetTopMax();
	Xrm.RESTBuilder.MakeSpinner(1, 500000, 1, "SkipAmount");
	$("#Endpoint input[name=Endpoint]:radio").change(Xrm.RESTBuilder.Endpoint_Change);
	$("#WebApiVersion").change(Xrm.RESTBuilder.ToggleWebApiFunctionality);
	$("#FormattedValues input[name=FormattedValues]:radio").change(Xrm.RESTBuilder.FormattedValues_Change);
	$("#PreventCreate input[name=PreventCreate]:radio").change(Xrm.RESTBuilder.PreventCreate_Change);
	$("#PreventUpdate input[name=PreventUpdate]:radio").change(Xrm.RESTBuilder.PreventUpdate_Change);
	$("#CreateRequest").click(Xrm.RESTBuilder.CreateRequest_Click);
	$("#Reset").click(Xrm.RESTBuilder.Reset_Click);
	$("#Refresh").click(Xrm.RESTBuilder.Refresh_Click);
	$("#SwitchIdKeyRetrieve").click(Xrm.RESTBuilder.SwitchIdKey_Click);
	$("#SwitchIdKeyUpdate").click(Xrm.RESTBuilder.SwitchIdKey_Click);
	$("#SwitchIdKeyDelete").click(Xrm.RESTBuilder.SwitchIdKey_Click);
	$("#Back").click(Xrm.RESTBuilder.Back_Click);
	$("#ActionReference").click(Xrm.RESTBuilder.ActionReference_Click);
	$("#FunctionReference").click(Xrm.RESTBuilder.FunctionReference_Click);
	$("#RESTType input[name=Type]:radio").change(Xrm.RESTBuilder.Type_Change);
	$("#RESTType2 input[name=Type]:radio").change(Xrm.RESTBuilder.Type_Change);
	$("#RESTLibrary input[name=Library]:radio").change(Xrm.RESTBuilder.Library_Change);
	$("#Async input[name=Async]:radio").change(Xrm.RESTBuilder.Async_Change);
	$("#RecordCount input[name=Count]:radio").change(Xrm.RESTBuilder.Count_Change);
	$("#DetectChanges input[name=DetectChanges]:radio").change(Xrm.RESTBuilder.DetectChanges_Change);
	$("#AuthToken input[name=AuthToken]:radio").change(Xrm.RESTBuilder.AuthToken_Change);
	$("#Impersonate input[name=Impersonate]:radio").change(Xrm.RESTBuilder.Impersonate_Change);
	$("#ReturnRecord input[name=ReturnRecord]:radio").change(Xrm.RESTBuilder.ReturnRecord_Change);
	$("#EntityList").change(Xrm.RESTBuilder.EntityList_Change);
	$("#AlternateKeyRetrieveField").change(Xrm.RESTBuilder.AlternateKeyField_Change);
	$("#AlternateKeyUpdateField").change(Xrm.RESTBuilder.AlternateKeyField_Change);
	$("#AlternateKeyDeleteField").change(Xrm.RESTBuilder.AlternateKeyField_Change);
	$("#AssociateEntity1").change(Xrm.RESTBuilder.AssociateEntity1_Change);
	$("#AssociateEntity2").change(Xrm.RESTBuilder.AssociateEntity2_Change);
	$("#PredefinedQueryType").change(Xrm.RESTBuilder.PredefinedQueryType_Change);
	$("#Actions").change(Xrm.RESTBuilder.Actions_Change);
	$("#Functions").change(Xrm.RESTBuilder.Functions_Change);
	$("#Execute").click(Xrm.RESTBuilder.Execute_Click);
	$("#FormatCode").click(Xrm.RESTBuilder.FormatCode_Click);
	$("#FormatFetch").click(Xrm.RESTBuilder.FormatFetch_Click);
	$("#CleanResults").click(Xrm.RESTBuilder.CleanResults_Click);
	$("#DisplayRetrieveUrl").click(Xrm.RESTBuilder.DisplayRetrieveUrl_Click);
	$("#ExpandEntity").change(Xrm.RESTBuilder.Expand_Change);
	$("#TopAmount").change(Xrm.RESTBuilder.TopAmount_Change);
	$("#AddRetrieve").click(Xrm.RESTBuilder.AddAttribute_Click);
	$("#AddCreateUpdate").click(Xrm.RESTBuilder.AddAttribute_Click);
	$("#AddOrder").click(Xrm.RESTBuilder.AddOrder_Click);
	$("body").on("change", ".Attribute", Xrm.RESTBuilder.Attribute_Change);
	$("#TableRetrieve").on("change", ".Filter", Xrm.RESTBuilder.Filter_Change);
	$("#TableRetrieve").on("change", ".GroupLogical", Xrm.RESTBuilder.GroupLogical_Change);
	$("#TableOrderBy").on("change", ".OrderBy", Xrm.RESTBuilder.OrderBy_Change);
	$("body").on("click", ".DeleteAttribute", Xrm.RESTBuilder.DeleteAttribute_Click);
	$("#OrderBy").on("click", ".DeleteOrderBy", Xrm.RESTBuilder.DeleteOrderBy_Click);
	$("#TableRetrieve").on("click", ".SelectAttribute", Xrm.RESTBuilder.SelectAttribute_Click);
	$("#RetrieveFilters").on("click", "#GroupAdd", Xrm.RESTBuilder.GroupAdd_Click);
	$("#RetrieveFilters").on("click", "#GroupOr", Xrm.RESTBuilder.GroupOr_Click);
	$("#ResultTypeTree, #ResultTypePlain").change(Xrm.RESTBuilder.ResultFormat_Change);
	$("#tabs").tabs({
		activate: function (event, ui) {
			Xrm.RESTBuilder.TabActivate(event, ui);
			Xrm.RESTBuilder.Editor2.refresh();
		}
	});

	Xrm.RESTBuilder.SetDefaultEndpoint();
	Xrm.RESTBuilder.Endpoint_Change();
});

/*
jQueryUI Stuff
*/

Xrm.RESTBuilder.CreateResetButton = function () {
	$("#Reset").button({
		icons: { primary: "ui-icon-arrowrefresh-1-w" },
		text: true
	});
};

Xrm.RESTBuilder.CreateRefreshButton = function () {
	$("#Refresh").button({
		icons: { primary: "ui-icon-refresh" },
		text: true
	});
};

Xrm.RESTBuilder.CreateSwitchIdKeyButton = function (action) {
	$("#SwitchIdKey" + action)
		.button({
			icons: { primary: "ui-icon-transfer-e-w" },
			text: true
		});
};

Xrm.RESTBuilder.CreateCopyResultsButton = function () {
	$("#CopyResults").button({
		icons: { primary: "ui-icon ui-icon-copy" },
		text: true,
		label: "Copy Results"
	});
};

Xrm.RESTBuilder.CreateCopyCode1Button = function () {
	$("#CopyCode1").button({
		icons: { primary: "ui-icon ui-icon-copy" },
		text: true,
		label: "Copy Code"
	});
};

Xrm.RESTBuilder.CreateCopyCode2Button = function () {
	$("#CopyCode2").button({
		icons: { primary: "ui-icon ui-icon-copy" },
		text: true,
		label: "Copy Code"
	});
};

Xrm.RESTBuilder.CreateCopyUrlResultsButton = function () {
	$("#CopyUrlResults").button({
		icons: { primary: "ui-icon ui-icon-copy" },
		text: true,
		label: "Copy Results",
		disabled: true
	});
};

Xrm.RESTBuilder.CreateCopyUrlButton = function () {
	$("#CopyUrl").button({
		icons: { primary: "ui-icon ui-icon-copy" },
		text: true,
		label: "Copy Url"
	});
};

Xrm.RESTBuilder.CreateCleanResultsButton = function () {
	$("#CleanResults").button({
		icons: { primary: "ui-icon-carat-1-n" },
		text: true,
		label: "Clean Results",
		disabled: true
	});
};

Xrm.RESTBuilder.CreateCreateRequestButton = function () {
	$("#CreateRequest").button({
		icons: { primary: "ui-icon-circle-triangle-e" },
		text: true
	});
};

Xrm.RESTBuilder.CreateBackButton = function () {
	$("#Back").button({
		icons: { primary: "ui-icon-circle-triangle-w" },
		text: true
	});
};

Xrm.RESTBuilder.CreateActionReferenceButton = function () {
	$("#ActionReference").button({
		icons: { primary: "ui-icon-info" },
		text: false
	});
}

Xrm.RESTBuilder.CreateFunctionReferenceButton = function () {
	$("#FunctionReference").button({
		icons: { primary: "ui-icon-info" },
		text: false
	});
}

Xrm.RESTBuilder.CreateExecuteButton = function () {
	$("#Execute").button({
		icons: { primary: "ui-icon-notice" },
		text: true
	});
};

Xrm.RESTBuilder.CreateFormatCodeButton = function () {
	$("#FormatCode").button({
		icons: { primary: "ui-icon-carat-2-e-w" },
		text: true
	});
};

Xrm.RESTBuilder.CreateFormatFetchButton = function () {
	$("#FormatFetch").button({
		icons: { primary: "ui-icon-carat-2-e-w" },
		text: true
	});
};

Xrm.RESTBuilder.CreateDisplayRetrieveUrlButton = function () {
	$("#DisplayRetrieveUrl").button({
		icons: { primary: "ui-icon-circle-arrow-e" },
		text: true
	});
};

Xrm.RESTBuilder.CreateRadioButtons = function (ctrl) {
	$(ctrl).buttonset();
};

Xrm.RESTBuilder.CreateAccordion = function () {
	$("#Accordion").accordion({
		collapsible: true,
		active: false
	});
};

Xrm.RESTBuilder.CreateDeleteAttributeButton = function (ctrl) {
	$(ctrl).button({
		icons: { primary: "ui-icon-trash" },
		text: false
	});
};

Xrm.RESTBuilder.CreateSelectAttributeButton = function (ctrl) {
	$(ctrl).button({
		icons: { primary: "ui-icon-star" },
		text: false,
		disabled: true
	});
};

Xrm.RESTBuilder.CreateGroupButtons = function () {
	$("#RetrieveFilters .Group").button({
		icons: { primary: "ui-icon-newwin" },
		text: true,
		disabled: true
	});
};

Xrm.RESTBuilder.CreateAddAttributeButtons = function () {
	$(".AddAttribute").button({
		icons: { primary: "ui-icon-plusthick" },
		text: false
	});
};

Xrm.RESTBuilder.MakeSpinner = function (min, max, step, id) {
	$("#" + id).spinner({
		step: step,
		min: min,
		max: max
	});
};

Xrm.RESTBuilder.MakeDatePicker = function (cls) {
	$("." + cls).datepicker();
};

Xrm.RESTBuilder.SetDefaultEndpoint = function () {
	if (Xrm.RESTBuilder.CrmVersion[0] >= 8) {
		Xrm.RESTBuilder.Endpoint = "WebApi";
		$("label[for='EndpointWebApi']").click();
	} else {
		$("#EndpointWebApi").button("option", "disabled", true);
	}
}

Xrm.RESTBuilder.SetTopMax = function () {
	if (Xrm.RESTBuilder.Endpoint === "WebApi") {
		Xrm.RESTBuilder.MakeSpinner(1, 5000, 1, "TopAmount");
		$("#TopAmount").attr("placeholder", "5000 max");
	} else {
		Xrm.RESTBuilder.MakeSpinner(1, 50, 1, "TopAmount");
		$("#TopAmount").attr("placeholder", "50 max");
	}
}

// Get the CRM version
Xrm.RESTBuilder.GetCrmVersion = function () {
	var request = [];
	request.push("<s:Envelope xmlns:s='http://schemas.xmlsoap.org/soap/envelope/'>");
	request.push("<s:Body>");
	request.push("<Execute xmlns='http://schemas.microsoft.com/xrm/2011/Contracts/Services' xmlns:i='http://www.w3.org/2001/XMLSchema-instance'>");
	request.push("<request i:type='b:RetrieveVersionRequest' xmlns:a='http://schemas.microsoft.com/xrm/2011/Contracts' xmlns:b='http://schemas.microsoft.com/crm/2011/Contracts'>");
	request.push("<a:Parameters xmlns:c='http://schemas.datacontract.org/2004/07/System.Collections.Generic' />");
	request.push("<a:RequestId i:nil='true' />");
	request.push("<a:RequestName>RetrieveVersion</a:RequestName>");
	request.push("</request>");
	request.push("</Execute>");
	request.push("</s:Body>");
	request.push("</s:Envelope>");

	var req = new XMLHttpRequest();
	req.open("POST", Xrm.Page.context.getClientUrl() + "/XRMServices/2011/Organization.svc/web", false);
	req.setRequestHeader("Accept", "application/xml, text/xml, */*");
	req.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
	req.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
	req.onreadystatechange = function () {
		if (req.readyState === 4) {
			req.onreadystatechange = null;
			if (req.status === 200) {
				var version = $(req.responseXML).find("c\\:value, value").text();
				$("#CrmVersion").text(version);
				Xrm.RESTBuilder.CrmVersion = $.map(version.split("."), function (value) {
					return parseInt(value, 10);
				});
			}
		}
	};
	req.send(request.join(""));
}

// Get the Metadata for all entities
Xrm.RESTBuilder.GetAllEntityMetadata = function () {
	var mdq = Sdk.Mdq;
	var semp = mdq.SearchableEntityMetadataProperties;
	var samp = mdq.SearchableAttributeMetadataProperties; //
	var emp = mdq.EntityMetadataProperties;
	var amp = mdq.AttributeMetadataProperties; //

	var entityFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	entityFilter.addCondition(semp.ObjectTypeCode, mdq.MetadataConditionOperator.GreaterThan, 0);

	var entityProperties;
	if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
		entityProperties = new mdq.MetadataPropertiesExpression(false, [emp.Attributes, emp.PrimaryIdAttribute, emp.DisplayName, emp.SchemaName, emp.IsIntersect, emp.EntitySetName, emp.ObjectTypeCode]);
	} else {
		entityProperties = new mdq.MetadataPropertiesExpression(false, [emp.Attributes, emp.PrimaryIdAttribute, emp.DisplayName, emp.SchemaName, emp.IsIntersect, emp.MetadataId]);
	}

	var attributesFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "Virtual");
	attributesFilter.addCondition(samp.IsValidForCreate, mdq.MetadataConditionOperator.Equals, true);
	attributesFilter.addCondition(samp.AttributeOf, mdq.MetadataConditionOperator.Equals, null);
	attributesFilter.addCondition(samp.RequiredLevel, mdq.MetadataConditionOperator.Equals, "ApplicationRequired");

	var attributeProperties;
	if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
		attributeProperties = new mdq.MetadataPropertiesExpression(false, [
			amp.DisplayName, amp.AttributeType, amp.OptionSet, amp.SchemaName, amp.IsValidForUpdate, amp.IsValidForCreate, amp.MaxLength,
			amp.RequiredLevel, amp.MaxValue, amp.MinValue, amp.Precision, amp.Targets, amp.Format, amp.DateTimeBehavior]);
	} else {
		attributeProperties = new mdq.MetadataPropertiesExpression(false, [
			amp.DisplayName, amp.AttributeType, amp.OptionSet, amp.SchemaName, amp.IsValidForUpdate, amp.IsValidForCreate, amp.MaxLength,
			amp.RequiredLevel, amp.MaxValue, amp.MinValue, amp.Precision, amp.Targets, amp.Format]);
	}

	var labelQuery = new mdq.LabelQueryExpression([window.parent.Xrm.Page.context.getUserLcid()]);
	var query = new mdq.EntityQueryExpression(
		entityFilter,
		entityProperties,
		new mdq.AttributeQueryExpression(attributesFilter, attributeProperties),
		null,
		labelQuery);

	var request = new Sdk.RetrieveMetadataChangesRequest(query, null, null);
	Sdk.Async.execute(request,
		Xrm.RESTBuilder.GetAllEntityMetadata_Response,
		function (error) {
			Xrm.RESTBuilder.DisplayAlert(error.message);
		});
};

// Get the Metadata for all entities - Callback
Xrm.RESTBuilder.GetAllEntityMetadata_Response = function (response) {
	var options = [];
	Xrm.RESTBuilder.EntityMetadata = response.getEntityMetadata();
	for (var i = 0; i < response.getEntityMetadata().length; i++) {

		if (Xrm.RESTBuilder.IsUnsearchable(response.getEntityMetadata()[i].SchemaName)) {
			continue;
		}

		var entitySetName = "";
		if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
			entitySetName = response.getEntityMetadata()[i].EntitySetName;
		}
		options.push("<option EntitySetName='" + entitySetName + "' LogicalName='" + response.getEntityMetadata()[i].LogicalName + "' ObjectTypeCode='" + response.getEntityMetadata()[i].ObjectTypeCode +
			"' value='" + response.getEntityMetadata()[i].SchemaName + "' title='" + Xrm.RESTBuilder.GetLabel(response.getEntityMetadata()[i].DisplayName) + "' IsIntersect='" + response.getEntityMetadata()[i].IsIntersect +
			"' metadataid='" + response.getEntityMetadata()[i].MetadataId + "' PrimaryIdAttribute='" + response.getEntityMetadata()[i].PrimaryIdAttribute + "'>" + response.getEntityMetadata()[i].SchemaName + "</option>");
	}
	$("#EntityList").html(options.join(""));
	Xrm.RESTBuilder.SortSelect($("#EntityList")[0]);
	$("#EntityList")[0].selectedIndex = 0;
	Xrm.RESTBuilder.EntityLogical = $("#EntityList option:selected").attr("LogicalName");
	if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
		Xrm.RESTBuilder.EntitySetName = $("#EntityList option:selected").attr("EntitySetName");
	} else {
		Xrm.RESTBuilder.EntitySetName = "";
	}
	Xrm.RESTBuilder.EntitySchema = $("#EntityList").val();
	$("#EntityList option").clone().appendTo("#AssociateEntity1");
	$("#AssociateEntity1 option[isintersect='true']").remove();
	Xrm.RESTBuilder.GetAttributeMetadata(Xrm.RESTBuilder.EntityLogical, Xrm.RESTBuilder.GetAttributeMetadata_Response, null);
};

// Get the Attribute Metadata for the Entity
Xrm.RESTBuilder.GetAttributeMetadata = function (name, callBack, ctrl) {
	var mdq = Sdk.Mdq;
	var semp = mdq.SearchableEntityMetadataProperties;
	var samp = mdq.SearchableAttributeMetadataProperties;
	var emp = mdq.EntityMetadataProperties;
	var amp = mdq.AttributeMetadataProperties;

	var entityFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	entityFilter.addCondition(semp.LogicalName, mdq.MetadataConditionOperator.Equals, name);
	var entityProperties = new mdq.MetadataPropertiesExpression(false, [emp.Attributes, emp.SchemaName, emp.ManyToManyRelationships, emp.ManyToOneRelationships, emp.OneToManyRelationships, emp.IsActivity]);
	var attributesFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "Virtual");
	attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "PartyList");
	attributesFilter.addCondition(samp.IsValidForRead, mdq.MetadataConditionOperator.Equals, true);
	attributesFilter.addCondition(samp.AttributeOf, mdq.MetadataConditionOperator.Equals, null);
	var attributeProperties;
	if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
		attributeProperties = new mdq.MetadataPropertiesExpression(false, [
			amp.DisplayName, amp.AttributeType, amp.OptionSet, amp.SchemaName, amp.IsValidForUpdate, amp.IsValidForCreate, amp.MaxLength,
			amp.RequiredLevel, amp.MaxValue, amp.MinValue, amp.Precision, amp.Targets, amp.Format, amp.DateTimeBehavior]);
	} else {
		attributeProperties = new mdq.MetadataPropertiesExpression(false, [
			amp.DisplayName, amp.AttributeType, amp.OptionSet, amp.SchemaName, amp.IsValidForUpdate, amp.IsValidForCreate, amp.MaxLength,
			amp.RequiredLevel, amp.MaxValue, amp.MinValue, amp.Precision, amp.Targets, amp.Format]);
	}
	var relationshipFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	relationshipFilter.addCondition(samp.IsValidForAdvancedFind, mdq.MetadataConditionOperator.Equals, true);
	var relationshipProperties = new mdq.MetadataPropertiesExpression(true, [emp.ManyToManyRelationships, emp.ManyToOneRelationships, emp.OneToManyRelationships]);
	var labelQuery = new mdq.LabelQueryExpression([Xrm.Page.context.getUserLcid()]);
	var query = new mdq.EntityQueryExpression(
		entityFilter,
		entityProperties,
		new mdq.AttributeQueryExpression(attributesFilter, attributeProperties),
		new mdq.RelationshipQueryExpression(relationshipFilter, relationshipProperties),
		labelQuery);

	var request = new Sdk.RetrieveMetadataChangesRequest(query, null, null);
	Sdk.Async.execute(request,
		(ctrl === null) ? callBack : callBack(ctrl),
		function (error) {
			Xrm.RESTBuilder.DisplayAlert(error.message);
		});
};

// Get the Attribute Metadata for the Entity - Callback
Xrm.RESTBuilder.GetAttributeMetadata_Response = function (entityMetadata) {
	if (entityMetadata.getEntityMetadata().length > 0) {
		Xrm.RESTBuilder.EntityIsActivity = entityMetadata.getEntityMetadata()[0].IsActivity;
		Xrm.RESTBuilder.CurrentEntityAttributes = entityMetadata.getEntityMetadata()[0].Attributes;
		Xrm.RESTBuilder.CurrentEntityOneToManyRelationships = entityMetadata.getEntityMetadata()[0].OneToManyRelationships;
		Xrm.RESTBuilder.CurrentEntityManyToOneRelationships = entityMetadata.getEntityMetadata()[0].ManyToOneRelationships;
		Xrm.RESTBuilder.CurrentEntityManyToManyRelationships = entityMetadata.getEntityMetadata()[0].ManyToManyRelationships;
		Xrm.RESTBuilder.AddAttribute_Click();
		if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
			var ctrl = $("#" + Xrm.RESTBuilder.FindTypeTable()).find("tbody tr:first .Attribute:first");
			Xrm.RESTBuilder.BindAttributeSelectList(ctrl[0], Xrm.RESTBuilder.CurrentEntityAttributes);
			Xrm.RESTBuilder.GetAlternateKeys($("#EntityList option:selected").attr("metadataId"));
			return;
		}
		if (Xrm.RESTBuilder.Type === "Retrieve" || Xrm.RESTBuilder.Type === "RetrieveMultiple" || Xrm.RESTBuilder.Type === "PredefinedQuery") {
			$("#SelectList1").empty();
			Xrm.RESTBuilder.CreateSelectItems();

			Xrm.RESTBuilder.CreateFilterEntities(Xrm.RESTBuilder.CurrentEntityOneToManyRelationships, Xrm.RESTBuilder.CurrentEntityManyToOneRelationships,
				Xrm.RESTBuilder.CurrentEntityManyToManyRelationships);
		}

		Xrm.RESTBuilder.AddOrderByTableRow();
	}

	Xrm.RESTBuilder.GetAlternateKeys($("#EntityList option:selected").attr("metadataId"));
};

Xrm.RESTBuilder.GetAlternateKeys = function (metadataId) {
	if (Xrm.RESTBuilder.Endpoint !== "WebApi") {
		Xrm.RESTBuilder.SetAlternateKeyState();
		return;
	}

	Xrm.RESTBuilder.CurrentEntityAlternateKeys = [];
	var req = new XMLHttpRequest();
	req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v" + $("#WebApiVersion option:selected").val() + "/EntityDefinitions(" + metadataId + ")/Keys?$select=LogicalName,KeyAttributes", true);
	req.setRequestHeader("OData-MaxVersion", "4.0");
	req.setRequestHeader("OData-Version", "4.0");
	req.setRequestHeader("Accept", "application/json");
	req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
	req.onreadystatechange = function () {
		if (req.readyState === 4) {
			req.onreadystatechange = null;
			if (req.status === 200) {
				var result = JSON.parse(req.response);
				var keyAttributes = result.value;
				for (var i = 0; i < keyAttributes.length; i++) {
					Xrm.RESTBuilder.CurrentEntityAlternateKeys.push(keyAttributes[i]);
				}

				Xrm.RESTBuilder.SetAlternateKeyState();
			}
		}
	};
	req.send();
}

Xrm.RESTBuilder.IsUnsearchable = function (schemaName) {
	// Not sure if there is a better way to determine this, but these entities returned errors when manually attempting to query them
	var entities = ["Attribute", "CalendarRule", "ComplexControl", "DataPerformance", "Entity", "holidaywrapper", "LanguageProvisioningState",
		"LookUpMapping", "OfficeGraphDocument", "OptionSet", "PostRegarding", "PrincipalEntityMap", "RuntimeDependency", "SimilarityRule",
		"SubscriptionManuallyTrackedObject", "SubscriptionStatisticsOffline", "SubscriptionStatisticsOutlook", "SubscriptionSyncEntryOffline",
		"SubscriptionSyncEntryOutlook", "SystemUserSyncMappingProfiles", "TeamSyncAttributeMappingProfiles", "TimeStampDateMapping",
	];
	return ((entities.indexOf(schemaName) !== -1) ? true : false);
}

Xrm.RESTBuilder.IsInternalAction = function (name) {
	// Not sure if there is a better way to determine this, but these actions are returned in the CSDL but marked as internal only or for future use according to MSDN
	var entities = ["AddChannelAccessProfilePrivileges", "CloneMobileOfflineProfile", "msdyn_AcceptProposedBooking", "msdyn_AcceptTeamRecommendation", "msdyn_AddInvoiceLineDetails",
		"msdyn_applyworktemplate", "msdyn_applyworktemplateforresources", "msdyn_ApprovalStatusApprove", "msdyn_ApprovalStatusReject", "msdyn_AssignGenericResource",
		"msdyn_AutoGenerateProjectTeam", "msdyn_batchentityCUD", "msdyn_BookingResource", "msdyn_BookingResourceRequirement", "msdyn_BulkCreatePredecessorsForTask",
		"msdyn_BulkDeletePredecessorsForTask", "msdyn_CancelBookings", "msdyn_ChangeRequestStatus", "msdyn_cloneentity", "msdyn_CloseAllOpportunityQuotes",
		"msdyn_CloseQuoteAsLost", "msdyn_CloseQuoteAsWon", "msdyn_CompleteResourceRequest", "msdyn_CopyProject", "msdyn_CopyRelatedProjectEntitiesFromTemplate",
		"msdyn_CopyWbsToProject", "msdyn_CorrectInvoice", "msdyn_CreateContractLineDetailsFromEstimate", "msdyn_CreateContractSpecificPriceList", "msdyn_CreateEstimateLines",
		"msdyn_CreateEstimatesForProjectTask", "msdyn_CreateExtensionRequirement", "msdyn_createinvoicefrominvoiceschedule", "msdyn_CreateQuoteFromOpportunity",
		"msdyn_CreateQuoteLineDetailsFromEstimate", "msdyn_CreateQuoteSpecificPriceList", "msdyn_createrequestfromrequirement", "msdyn_CreateSharepointDocumentLocation",
		"msdyn_CreateTaskBasedEstimatesForProject", "msdyn_CreateTemplateFromProject", "msdyn_DeleteEstimateLines", "msdyn_DeleteEstimatesForProjectTask",
		"msdyn_ExpandResourceAssignment", "msdyn_ExpenseApproveAction", "msdyn_ExpenseEntriesApprove", "msdyn_ExpenseEntriesPendingApproval", "msdyn_ExpenseEntriesRecall",
		"msdyn_ExpenseEntriesReject", "msdyn_ExpenseEntriesSubmit", "msdyn_ExpenseRejectAction", "msdyn_ExpenseSubmitAction", "msdyn_ExportActual", "msdyn_FetchProjectCalendarWorkHours",
		"msdyn_FieldServiceSystemAction", "msdyn_FpsAction", "msdyn_FulfillResourceDemand", "msdyn_GenerateContractLineInvoiceSchedule", "msdyn_GenerateContractLineScheduleOfValues",
		"msdyn_GenerateQuoteLineInvoiceSchedule", "msdyn_GenerateQuoteLineScheduleOfValues", "msdyn_GeocodeAddress", "msdyn_GetAvailabilitySummaryFromDemand",
		"msdyn_GetBookingDetailsByRequirementIds", "msdyn_GetBookingDetailsByResource", "msdyn_GetCollectionData", "msdyn_GetContractBillingRadialGaugeData",
		"msdyn_GetContractDetailedTransactions", "msdyn_GetContractEffortRadialGaugeData", "msdyn_GetContractLineChargeability", "msdyn_GetContractLines",
		"msdyn_GetDataForContractPerformance", "msdyn_GetDataForRadialGauge", "msdyn_GetDocumentManagementSettings", "msdyn_GetDocumentStorePath", "msdyn_GetEstimatesforProject",
		"msdyn_GetGenericResourceDetails", "msdyn_GetMultipleResourceBookingDetails", "msdyn_GetMyChangedSkills", "msdyn_GetOfficeGroupForEntity", "msdyn_GetPrice",
		"msdyn_GetProcessNotes", "msdyn_GetProductLine", "msdyn_GetProductLines", "msdyn_GetProjectCoparticipation", "msdyn_GetProjectCurrencies", "msdyn_GetProjectDetails",
		"msdyn_GetProjectMapForContractLine", "msdyn_GetProjectMapForQuoteLine", "msdyn_GetProjects", "msdyn_GetProjectsForContract", "msdyn_GetProjectsForQuote",
		"msdyn_GetProjectTaskCategories", "msdyn_GetProposedResources", "msdyn_GetQuoteLineChargeability", "msdyn_GetRequirementChartData", "msdyn_GetRequirementDemand",
		"msdyn_GetRequirementDemandDisplay", "msdyn_GetResourceAvailability", "msdyn_GetResourceAvailabilitySummary", "msdyn_GetResourceBookingByProject",
		"msdyn_GetResourceBookingDetails", "msdyn_GetResourceBookingFormParameters", "msdyn_GetResourceDemandTimeLine", "msdyn_GetResourcePopupDetails", "msdyn_GetResources",
		"msdyn_GetSummaryBookings", "msdyn_GetTimelineData", "msdyn_GetTransactionUnitPrices", "msdyn_GetUserTimeZoneName", "msdyn_IndentWBSTask", "msdyn_initializedefaultclonequery",
		"msdyn_InvoicePaid", "msdyn_InvoiceRecalculate", "msdyn_IoTSendTestAlert", "msdyn_IsProjectTemplatesView", "msdyn_JoinProjectTeam", "msdyn_LoadFactTableEstimate",
		"msdyn_LogFindWorkEvent", "msdyn_MarkIntegrationJobAsFailedAsync", "msdyn_MoveDownWBSTask", "msdyn_MoveProject", "msdyn_MoveUpWBSTask", "msdyn_MSProject_ExportToProject",
		"msdyn_MSProject_GetFindResourcesURL", "msdyn_MSProject_LinkToProject", "msdyn_MSProject_PublishToExistingProject", "msdyn_MSProject_ReadFromExistingProject",
		"msdyn_MSProject_ReadProjectTeamMembers", "msdyn_MSProject_UnlinkFromProject", "msdyn_NewInvoiceContract", "msdyn_OutdentWBSTask", "msdyn_ParentIoTAlerts",
		"msdyn_PostInvoice", "msdyn_PostJournal", "msdyn_ProjectTeamMemberSignUpProcess", "msdyn_ProjectTeamMemberSignupprocessaccept", "msdyn_ProjectTeamUpdateMembershipStatus",
		"msdyn_ReadEstimateLines", "msdyn_recallrequestforrequirement", "msdyn_RecommendWork", "msdyn_RejectProposedBooking", "msdyn_ResAssignResourcesForTask",
		"msdyn_ResGetResourceDetail", "msdyn_ResolveTimezone", "msdyn_ResourceAssignmentDetailUpdate", "msdyn_ResourceReservationCancel", "msdyn_ResourceSubstitution",
		"msdyn_ResourceUtilization", "msdyn_ResourceUtilizationChart", "msdyn_RetrieveDistanceMatrix", "msdyn_RetrieveResourceAvailability", "msdyn_SaveProjectLineTasks",
		"msdyn_SetDefaultRole", "msdyn_SubmitCategoriesAndPriceLists", "msdyn_SubmitRolesAndPriceLists", "msdyn_TimeEntriesApprove", "msdyn_TimeEntriesCopyPaste",
		"msdyn_TimeEntriesPaste", "msdyn_TimeEntriesPendingApproval", "msdyn_TimeEntriesRecall", "msdyn_TimeEntriesReject", "msdyn_TimeEntriesSubmit",
		"msdyn_UpdateAllEstimatesForProject", "msdyn_UpdateChangedSkills", "msdyn_UpdateEffortContour", "msdyn_UpdateEstimateLineDetails", "msdyn_UpdateEstimateLines",
		"msdyn_updateprojecttask", "msdyn_updateremainingresourcerequirement", "msdyn_UpdateRequirementDemand", "msdyn_ValidateFixedPriceLineTotals", "SetFeatureStatus",
		"SetProcess", "UpdateFeatureConfig"];

	return ((entities.indexOf(name) !== -1) ? true : false);
}

Xrm.RESTBuilder.IsInternalFunction = function (name) {
	// Not sure if there is a better way to determine this, but these functions are returned in the CSDL but marked as internal only according to MSDN
	var entities = ["RetrievePrincipalSyncAttributeMappings"];

	return ((entities.indexOf(name) !== -1) ? true : false);
}

// Get the Attribute Metadata for the Entity
Xrm.RESTBuilder.GetAssociateRelationshipMetadata = function (name) {
	var mdq = Sdk.Mdq;
	var semp = mdq.SearchableEntityMetadataProperties;
	var samp = mdq.SearchableAttributeMetadataProperties;
	var emp = mdq.EntityMetadataProperties;

	var entityFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	entityFilter.addCondition(semp.LogicalName, mdq.MetadataConditionOperator.Equals, name);
	var entityProperties = new mdq.MetadataPropertiesExpression(false, [emp.OneToManyRelationships, emp.ManyToManyRelationships]);
	var relationshipFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	relationshipFilter.addCondition(samp.IsValidForAdvancedFind, mdq.MetadataConditionOperator.Equals, true);
	var relationshipProperties = new mdq.MetadataPropertiesExpression(true, [emp.OneToManyRelationships]);

	var labelQuery = new mdq.LabelQueryExpression([Xrm.Page.context.getUserLcid()]);
	var query = new mdq.EntityQueryExpression(
		entityFilter,
		entityProperties,
		null,
		new mdq.RelationshipQueryExpression(relationshipFilter, relationshipProperties),
		labelQuery);

	var request = new Sdk.RetrieveMetadataChangesRequest(query, null, null);
	Sdk.Async.execute(request,
		Xrm.RESTBuilder.GetAssociateRelationshipMetadata_Response,
		function (error) {
			Xrm.RESTBuilder.DisplayAlert(error.message);
		});
};

Xrm.RESTBuilder.GetAssociateRelationshipMetadata_Response = function (entityMetadata) {
	if (entityMetadata.getEntityMetadata().length === 1) {
		Xrm.RESTBuilder.AssociateEntityOneToManyRelationships = entityMetadata.getEntityMetadata()[0].OneToManyRelationships;
		Xrm.RESTBuilder.AssociateEntityManyToManyRelationships = entityMetadata.getEntityMetadata()[0].ManyToManyRelationships;
		var entity2Options = [];
		entity2Options.push("<option value=''></option>");

		for (var i = 0; i < Xrm.RESTBuilder.AssociateEntityOneToManyRelationships.length; i++) {
			if (Xrm.RESTBuilder.LogicalNameToSchemaName(Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencingEntity) === "") {
				continue;
			}

			var referencingEntity = Xrm.RESTBuilder.LogicalNameToSchemaName(Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencingEntity);
			var entitySetName1 = "";
			if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
				entitySetName1 = Xrm.RESTBuilder.LogicalNameToEntitySetName(Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencingEntity);
			}
			entity2Options.push("<option value='" + referencingEntity + "' logicalname='" + Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencingEntity +
				"' entitysetname='" + entitySetName1 + "'>" + referencingEntity + "</option>");
		}

		for (var j = 0; j < Xrm.RESTBuilder.AssociateEntityManyToManyRelationships.length; j++) {
			var entity1Logical = Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].Entity1LogicalName;
			var entity2Logical = Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].Entity2LogicalName;
			var logical;
			if (entity1Logical === entity2Logical) {
				logical = entity1Logical;
			} else {
				if (Xrm.RESTBuilder.EntityLogical === entity1Logical) {
					logical = entity2Logical;
				}
				else {
					logical = entity1Logical;
				}
			}

			var entitySetName2 = "";
			if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
				entitySetName2 = Xrm.RESTBuilder.LogicalNameToEntitySetName(logical);
			}

			if (Xrm.RESTBuilder.LogicalNameToSchemaName(logical) === "") {
				continue;
			}

			entity2Options.push("<option value='" + Xrm.RESTBuilder.LogicalNameToSchemaName(logical) + "' logicalname='" + logical +
				"' entitysetname='" + entitySetName2 + "'>" + Xrm.RESTBuilder.LogicalNameToSchemaName(logical) + "</option>");
		}

		entity2Options = Xrm.RESTBuilder.RemoveArrayDuplicates(entity2Options);
		$("#AssociateEntity2").html(entity2Options.join(""));
		Xrm.RESTBuilder.SortSelect($("#AssociateEntity2"));
		$("#AssociateRelationship").find("option").remove();
		$("#AssociateEntity2").prop("selectedIndex", 0);
	}
	$.unblockUI();
};

Xrm.RESTBuilder.GetExpandedAttributeMetadata = function (names) {
	var mdq = Sdk.Mdq;
	var semp = mdq.SearchableEntityMetadataProperties;
	var samp = mdq.SearchableAttributeMetadataProperties;
	var emp = mdq.EntityMetadataProperties;
	var amp = mdq.AttributeMetadataProperties;
	if (names.length === 0) // ensuring 'names' doesn't end up as null which breaks the query
		names.push("test");
	var entityFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	entityFilter.addCondition(semp.LogicalName, mdq.MetadataConditionOperator.In, names);
	var entityProperties = new mdq.MetadataPropertiesExpression(false, [emp.Attributes, emp.SchemaName]);
	var attributesFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
	attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "Virtual");
	attributesFilter.addCondition(samp.SchemaName, mdq.MetadataConditionOperator.NotEquals, "Address1_Composite");
	attributesFilter.addCondition(samp.SchemaName, mdq.MetadataConditionOperator.NotEquals, "Address2_Composite");
	attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "PartyList");
	attributesFilter.addCondition(samp.IsValidForRead, mdq.MetadataConditionOperator.Equals, true);
	attributesFilter.addCondition(samp.AttributeOf, mdq.MetadataConditionOperator.Equals, null);
	var attributeProperties = new mdq.MetadataPropertiesExpression(false, [
		amp.DisplayName, amp.AttributeType, amp.OptionSet, amp.SchemaName, amp.MaxLength,
		amp.RequiredLevel, amp.MaxValue, amp.MinValue, amp.Precision
	]);
	var labelQuery = new mdq.LabelQueryExpression([Xrm.Page.context.getUserLcid()]);
	var query = new mdq.EntityQueryExpression(
		entityFilter,
		entityProperties,
		new mdq.AttributeQueryExpression(attributesFilter, attributeProperties),
		null,
		labelQuery);

	var request = new Sdk.RetrieveMetadataChangesRequest(query, null, null);
	Sdk.Async.execute(request,
		Xrm.RESTBuilder.GetExpandedAttributeMetadata_Response,
		function (error) {
			Xrm.RESTBuilder.DisplayAlert(error.message);
		});
};

Xrm.RESTBuilder.GetExpandedAttributeMetadata_Response = function (entityMetadata) {

	$("#SelectList2 li").remove();
	$("#SelectList3 li").remove();
	$("#SelectList4 li").remove();

	if (entityMetadata.getEntityMetadata().length > 0) {
		Xrm.RESTBuilder.CurrentEntityExpandedAttributes = entityMetadata.getEntityMetadata();
		var items = [];
		for (var i = 0; i < Xrm.RESTBuilder.CurrentEntityOneToManyRelationships.length; i++) {
			var otmEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].ReferencingEntity; });
			if (otmEntity.length > 0) {
				var selfReferencing1 = Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].ReferencedEntity === Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].ReferencingEntity;
				for (var j = 0; j < otmEntity[0].Attributes.length; j++) {
					items.push("<li id='" + Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].SchemaName + "/" + otmEntity[0].Attributes[j].SchemaName +
						"'><input type='checkbox' value='" + Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].SchemaName +
						"/" + otmEntity[0].Attributes[j].SchemaName + "' selfreferencing='" + selfReferencing1 + "' />(" + Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].SchemaName + ")  " +
						otmEntity[0].Attributes[j].SchemaName + "</li>");
				}
			}
		}
		$("#SelectList2").html(items.join(""));
		items = [];
		Xrm.RESTBuilder.SortSelectItems($("#SelectList2"));

		for (var k = 0; k < Xrm.RESTBuilder.CurrentEntityManyToOneRelationships.length; k++) {
			var mtoEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].ReferencedEntity; });
			if (mtoEntity.length > 0) {
				for (var l = 0; l < mtoEntity[0].Attributes.length; l++) {
					var selfReferencing2 = Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].ReferencedEntity === Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].ReferencingEntity;
					if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
						items.push("<li id='" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].SchemaName + "/" + mtoEntity[0].Attributes[l].SchemaName +
							"'><input type='checkbox' value='" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].SchemaName +
							"/" + mtoEntity[0].Attributes[l].SchemaName + "' referencingentitynavigationpropertyname='" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].ReferencingEntityNavigationPropertyName +
							"' selfreferencing='" + selfReferencing2 + "' />(" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].SchemaName + ")  " + mtoEntity[0].Attributes[l].SchemaName + "</li>");
					} else {
						items.push("<li id='" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].SchemaName + "/" + mtoEntity[0].Attributes[l].SchemaName +
							"'><input type='checkbox' value='" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].SchemaName +
							"/" + mtoEntity[0].Attributes[l].SchemaName + "' selfreferencing='" + selfReferencing2 + "' />(" + Xrm.RESTBuilder.CurrentEntityManyToOneRelationships[k].SchemaName + ")  " +
							mtoEntity[0].Attributes[l].SchemaName + "</li>");
					}
				}
			}
		}
		$("#SelectList3").html(items.join(""));
		items = [];
		Xrm.RESTBuilder.SortSelectItems($("#SelectList3"));

		for (var m = 0; m < Xrm.RESTBuilder.CurrentEntityManyToManyRelationships.length; m++) {
			var mtmEntity1 = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].Entity1LogicalName && Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].Entity2LogicalName === Xrm.RESTBuilder.EntityLogical; });
			if (mtmEntity1.length > 0) {
				var selfReferencing3 = Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].Entity1LogicalName === Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].Entity2LogicalName;
				for (var n = 0; n < mtmEntity1[0].Attributes.length; n++) {
					items.push("<li id='" + Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].SchemaName + "/" + mtmEntity1[0].Attributes[n].SchemaName +
						"'><input type='checkbox' value='" + Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].SchemaName +
						"/" + mtmEntity1[0].Attributes[n].SchemaName + "' selfreferencing='" + selfReferencing3 + "' />(" + Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[m].SchemaName + ")  " +
						mtmEntity1[0].Attributes[n].SchemaName + "</li>");
				}
			}
		}
		for (var o = 0; o < Xrm.RESTBuilder.CurrentEntityManyToManyRelationships.length; o++) {
			var mtmEntity2 = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].Entity2LogicalName && Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].Entity1LogicalName === Xrm.RESTBuilder.EntityLogical; });
			if (mtmEntity2.length > 0) {
				var selfReferencing4 = Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].Entity1LogicalName === Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].Entity2LogicalName;
				for (var p = 0; p < mtmEntity2[0].Attributes.length; p++) {
					items.push("<li id='" + Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].SchemaName + "/" + mtmEntity2[0].Attributes[p].SchemaName +
						"'><input type='checkbox' value='" + Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].SchemaName +
						"/" + mtmEntity2[0].Attributes[p].SchemaName + "' selfreferencing='" + selfReferencing4 + "' />(" + Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[o].SchemaName + ")  " +
						mtmEntity2[0].Attributes[p].SchemaName + "</li>");
				}
			}
		}
		items = Xrm.RESTBuilder.RemoveArrayDuplicates(items);
		$("#SelectList4").html(items.join(""));
		items = [];
		Xrm.RESTBuilder.SortSelectItems($("#SelectList4"));

		Xrm.RESTBuilder.DisplaySelfReferencingNtoN();
	}

	$("#Accordion").accordion("option", "active", 0);

	if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
		Xrm.RESTBuilder.ToggleWebApiFunctionality();
	}

	$.unblockUI();
};

Xrm.RESTBuilder.GetCsdl = function () {
	var req = new XMLHttpRequest();
	req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v" + $("#WebApiVersion option:selected").val() + "/$metadata", true);
	req.onreadystatechange = function () {
		if (req.readyState === 4) {
			if (req.status === 200) {
				var csdl = req.responseXML;
				Xrm.RESTBuilder.EntitySets = $(csdl).find("EntitySet").toArray();
				Xrm.RESTBuilder.EntityTypes = $(csdl).find("EntityType").toArray();
				Xrm.RESTBuilder.Create_XrmWebApi_EntityMappings();

				// Update the EntitySetName attribute in the Entity drop down 
				$("#EntityList > option").each(function () {
					var logicalName = this.attributes["logicalname"].value;
					var entities = $.grep(Xrm.RESTBuilder.EntitySets, function (e) {
						var metaName = e.attributes["EntityType"].value;
						var metaLogicalName = metaName.substr(metaName.lastIndexOf(".") + 1);
						return metaLogicalName === logicalName;
					});
					if (entities.length === 0)
						return;

					this.attributes["entitysetname"].value = entities[0].attributes["Name"].value;
				});

				var actions = $(csdl).find("Action").toArray();
				var functions = $(csdl).find("Function").toArray();
				actions.forEach(Xrm.RESTBuilder.ProcessActions);
				Xrm.RESTBuilder.ProcessFunctions(functions);

				$("#TypeAction").button("option", "disabled", false);
				$("#TypeFunction").button("option", "disabled", false);
				$("#WebApiVersion").prop("disabled", false);
				$.unblockUI();
			}
		}
	};
	req.send();
}

Xrm.RESTBuilder.SetWebApiVersion = function () {
	if (Xrm.RESTBuilder.CrmVersion[0] < 8) {
		$("#WebApiVersion").hide();
		return;
	}

	var version = Xrm.RESTBuilder.CrmVersion[0] + "." + Xrm.RESTBuilder.CrmVersion[1];
	switch (version) {
		case "8.0":
			$("#WebApiVersion").val("8.0");
			$("#WebApiVersion option[value='8.1']").remove();
			$("#WebApiVersion option[value='8.2']").remove();
			if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
				$("#FormattedValues").buttonset({ disabled: true });
			}
			break;
		case "8.1":
			$("#WebApiVersion").val("8.1");
			$("#WebApiVersion option[value='8.2']").remove();
			if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
				$("#FormattedValues").buttonset({ disabled: true });
			}
			break;
		case "8.2":
			$("#WebApiVersion").val("8.2");
			$("#WebApiVersion option[value='9.0']").remove();
			$("#WebApiVersion option[value='9.1']").remove();
			if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
				$("#FormattedValues").show();
			}
			break;
		case "9.0":
			$("#WebApiVersion").val("9.0");
			$("#WebApiVersion option[value='9.1']").remove();
			if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
				$("#FormattedValues").show();
			}
			break;
		default: //9.1
			$("#WebApiVersion").val("9.1");
			if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
				$("#FormattedValues").show();
			}
			break;
	}
}

Xrm.RESTBuilder.ToggleWebApiFunctionality = function () {
	Xrm.RESTBuilder.Block();

	Xrm.RESTBuilder.Actions = [];
	Xrm.RESTBuilder.QueryFunctions = [];
	Xrm.RESTBuilder.Functions = [];
	Xrm.RESTBuilder.EntitySets = [];
	Xrm.RESTBuilder.EntityTypes = [];
	Xrm.RESTBuilder.SelectedAction = null;
	Xrm.RESTBuilder.SelectedFunction = null;

	$("#WebApiVersion").prop("disabled", true);
	$("#TypeAction").button("option", "disabled", true);
	$("#TypeFunction").button("option", "disabled", true);
	Xrm.RESTBuilder.GetCsdl();

	if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		if ($("#WebApiVersion").val() === "8.0") {
			// Web API - expands on relationships aren't currently supported in 8.0
			Xrm.RESTBuilder.ClearSelectLists(2, 4);
			$("#Accordion").accordion("option", "active", 0);
			$("#ui-accordion-Accordion-header-1").hide();
			$("#ui-accordion-Accordion-header-2").hide();
			$("#ui-accordion-Accordion-header-3").hide();
			$("#ExpandEntity").prop("selectedIndex", 0);
			$("#ExpandEntity").attr("disabled", "disabled");
		} else { // Supported in 8.1+
			$("#ui-accordion-Accordion-header-1").show();
			$("#ui-accordion-Accordion-header-2").show();
			$("#ui-accordion-Accordion-header-3").show();
			$("#ExpandEntity").removeAttr("disabled");
		}
	}

	if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
		if (Number($("#WebApiVersion").val()) < 8.2) {
			$("#ReturnRecord").hide();
			$("#FormattedValues").hide();
		} else {
			$("#ReturnRecord").show();
			$("#FormattedValues").show();
		}
	}

	if (parseFloat($("#WebApiVersion").val()) >= 9) {
		$("#LibraryXrmWebApi").button("option", "disabled", false);
	}
	else {
		$("#LibraryXrmWebApi").button("option", "disabled", true);
		if ($("#LibraryXrmWebApi").is(":checked")) {
			$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
		}
	}

	Xrm.RESTBuilder.ODataPath = Xrm.Page.context.getClientUrl() + "/api/data/v" + $("#WebApiVersion option:selected").val() + "/";
}

Xrm.RESTBuilder.ProcessActions = function (e) {
	if (Xrm.RESTBuilder.IsInternalAction($(e).attr("Name"))) {
		return;
	}

	var action = {};
	action.Name = $(e).attr("Name");
	action.IsBound = ($(e).attr("IsBound") === undefined) ? false : true;
	action.Entity = "none";
	var isCustomAction = false;
	if (action.Name.indexOf("_") > 0 && action.Name.indexOf("msdyn_") !== 0) {
		isCustomAction = true;
	}
	action.IsCustomAction = isCustomAction;
	var parameters = $(e).find("Parameter").toArray();
	var returnTypes = $(e).find("ReturnType").toArray();

	action.Parameters = [];
	parameters.forEach(function (p) {
		var parameter = {};
		parameter.Name = $(p).attr("Name");
		parameter.Type = $(p).attr("Type");
		parameter.Optional = ($(p).attr("Nullable") === undefined) ? true : false;
		if (parameter.Name === "entity") {
			action.Entity = parameter.Type.replace("mscrm.", "");
		}
		action.Parameters.push(parameter);
	});

	action.ReturnTypes = [];
	returnTypes.forEach(function (r) {
		var returnType = {};
		returnType.Type = $(r).attr("Type");
		returnType.Optional = ($(r).attr("Nullable") === undefined) ? true : false;
		action.ReturnTypes.push(returnType);
	});

	Xrm.RESTBuilder.Actions.push(action);
}

Xrm.RESTBuilder.ProcessFunctions = function (functions) {
	for (var i = 0; i < functions.length; i++) {
		if (Xrm.RESTBuilder.IsInternalFunction($(functions[i]).attr("Name"))) {
			continue;
		}

		var func = {};
		func.Name = $(functions[i]).attr("Name");
		func.IsBound = ($(functions[i]).attr("IsBound") === undefined) ? false : true;
		func.Entity = "none";
		func.IsCustomAction = false;
		var parameters = $(functions[i]).find("Parameter").toArray();
		var returnTypes = $(functions[i]).find("ReturnType").toArray();

		func.Parameters = [];
		parameters.forEach(function (p) {
			var parameter = {};
			parameter.Name = $(p).attr("Name");
			parameter.Type = $(p).attr("Type");
			parameter.Optional = ($(p).attr("Nullable") === undefined) ? true : false;
			if (parameter.Name === "entity") {
				func.Entity = parameter.Type.replace("mscrm.", "");
			}
			if (parameter.Name === "entityset") {
				func.Entity = parameter.Type.replace("Collection(mscrm.", "").replace(")", "");
			}
			func.Parameters.push(parameter);
		});

		var isQuery = false;
		func.ReturnTypes = [];
		returnTypes.forEach(function (r) {
			var returnType = {};
			returnType.Type = $(r).attr("Type");
			returnType.Optional = ($(r).attr("Nullable") === undefined) ? true : false;
			func.ReturnTypes.push(returnType);

			if (returnType.Type === "Edm.Boolean") {
				isQuery = true;
			}
		});

		if (isQuery) {
			Xrm.RESTBuilder.QueryFunctions.push(func);
		}
		else {
			Xrm.RESTBuilder.Functions.push(func);
		}
	}
}

Xrm.RESTBuilder.Create_XrmWebApi_EntityMappings = function () {
	// In order to execute a Xrm.WebApi request from this window this object needs 
	// to exist mapping logical name to entity set name
	window["ENTITY_SET_NAMES"] = [];
	var mappings = [];
	var map = {};
	for (var i = 0; i < Xrm.RESTBuilder.EntitySets.length; i++) {
		map[Xrm.RESTBuilder.EntitySets[i].attributes["EntityType"].value.replace("Microsoft.Dynamics.CRM.", "")] =
			Xrm.RESTBuilder.EntitySets[i].attributes["Name"].value;

	};
	mappings.push(map);
	window["ENTITY_SET_NAMES"] = JSON.stringify(map);

	// In order to execute a Xrm.WebApi request from this window this object needs 
	// to exist mapping logical name to primary id attribute
	window["ENTITY_PRIMARY_KEYS"] = [];
	mappings = [];
	map = {};
	for (var i = 0; i < Xrm.RESTBuilder.EntityMetadata.length; i++) {
		map[Xrm.RESTBuilder.EntityMetadata[i].LogicalName] =
			Xrm.RESTBuilder.EntityMetadata[i].PrimaryIdAttribute;

	};
	mappings.push(map);
	window["ENTITY_PRIMARY_KEYS"] = JSON.stringify(map);
}

Xrm.RESTBuilder.BuildActionList = function () {
	Xrm.RESTBuilder.SelectedAction = null;
	$("#Actions").find("option").remove();
	$("#InputParameters tbody").find("tr").remove();
	var selectedEntity = $("#EntityList option:selected").attr("logicalname");
	var entityActions = $.grep(Xrm.RESTBuilder.Actions, function (e) { return e.Entity === selectedEntity; });

	var options = [];
	for (var i = 0; i < entityActions.length; i++) {
		options.push("<option>" + entityActions[i].Name + "</option>");
	}

	if (options.length === 0) {
		$("#CreateRequest").button("option", "disabled", true);
		return;
	}

	$("#CreateRequest").button("option", "disabled", false);
	$("#Actions").html(options.join(""));
	Xrm.RESTBuilder.SortSelect($("#Actions"));
	$("#Actions").prop("selectedIndex", 0);

	Xrm.RESTBuilder.Actions_Change();
}

Xrm.RESTBuilder.BuildFunctionList = function () {
	Xrm.RESTBuilder.SelectedFunction = null;
	$("#Functions").find("option").remove();
	$("#InputParameters tbody").find("tr").remove();
	var selectedEntity = $("#EntityList option:selected").attr("logicalname");
	var entityFunctions = $.grep(Xrm.RESTBuilder.Functions, function (e) { return e.Entity === selectedEntity; });

	var options = [];
	for (var i = 0; i < entityFunctions.length; i++) {
		options.push("<option>" + entityFunctions[i].Name + "</option>");
	}

	if (options.length === 0) {
		$("#CreateRequest").button("option", "disabled", true);
		return;
	}

	$("#CreateRequest").button("option", "disabled", false);
	$("#Functions").html(options.join(""));
	Xrm.RESTBuilder.SortSelect($("#Functions"));
	$("#Functions").prop("selectedIndex", 0);

	Xrm.RESTBuilder.Functions_Change();
}

Xrm.RESTBuilder.IsParameterEntity = function (type) {
	if (type.indexOf("Collection(") === 0)
		return false;
	if (type.indexOf("mscrm.") !== 0)
		return false;
	return (type.charAt(6) === type.charAt(6).toLowerCase());
}

Xrm.RESTBuilder.IsParameterCollection = function (type) {
	if (type.indexOf("mscrm.") === 0)
		return false;
	return (type.indexOf("Collection(") === 0);
}

Xrm.RESTBuilder.ConvertCollectionName = function (type) {
	type = type.replace("mscrm.crmbaseentity", "(Variable Types)");
	type = type.replace("Edm.", "");
	type = type.replace("mscrm.", "");

	return type;
}

Xrm.RESTBuilder.CreateInputParameters = function (item) {
	$("#InputParameters tbody").find("tr").remove();

	if (item.Entity === "none")
		$("#TargetId").attr("disabled", "disabled");
	else
		$("#TargetId").removeAttr("disabled");

	if (!item.Parameters)
		return;

	var populateParameterEntityLists = false;
	for (var i = 0; i < item.Parameters.length; i++) {
		// Skip creating for the "entity" parameter as the id & type are passed in the url
		if (item.IsBound && item.Parameters[i].Name === "entity")
			continue;

		var ctrl = "";
		var entityCtrl = "";
		switch (item.Parameters[i].Type) {
			case "Edm.Boolean":
				var blank = "";
				if (item.Parameters[i].Optional)
					blank = "<option></option>";
				ctrl = "<select class='Boolean ui-corner-all'>" + blank + "<option>True</option><option>False</option></select>";
				break;
			case "Edm.DateTimeOffset":
				ctrl = "<input type='text' class='DateTime ui-corner-all' />" + Xrm.RESTBuilder.CreateTimePicker();
				break;
			case "Edm.Decimal":
			case "Edm.Double":
				ctrl = "<input type='text'  id='" + item.Parameters[i].Name + "' class='Decimal ui-corner-all' placeholder='" + item.Parameters[i].Type + "' />";
				break;
			case "mscrm.Label":
				ctrl = "<input type='text' class='String ui-corner-all ui-widget' />";
				break;
			case "Edm.Int32":
			case "Edm.Int64":
				ctrl = "<input type='text' id='" + item.Parameters[i].Name + "' class='Integer ui-corner-all' placeholder='Integer' />";
				break;
			case "Edm.Binary":
			case "Edm.String":
				if (item.Parameters[i].Name === "EntityName" && !item.IsCustomAction) {
					ctrl = "<select class='ui-corner-all ParameterEntity'></select>";
					populateParameterEntityLists = true;
				}
				else {
					ctrl = "<input type='text' class='String ui-corner-all ui-widget' />";
				}
				break;
			case "Edm.Guid":
				ctrl = "<input type='text' class='Guid focus ui-corner-all' maxlength='36' placeholder='" + Xrm.RESTBuilder.MakeValidGuid(null) + "' />";
				break;
			default:
				if (item.Parameters[i].Type === "Collection(Edm.String)") {
					ctrl = "<input type='text' class='String ui-corner-all ui-widget' />";
				}
				else if (item.Parameters[i].Type === "Collection(Edm.Int32)") {
					ctrl = "<input type='text' id='" + item.Parameters[i].Name + "' class='Integer ui-corner-all' placeholder='Integer' />";
				}
				else if (Xrm.RESTBuilder.IsParameterEntity(item.Parameters[i].Type) || Xrm.RESTBuilder.IsParameterCollection(item.Parameters[i].Type)) {
					ctrl = "<input type='text' class='Guid focus ui-corner-all' maxlength='36' placeholder='" + Xrm.RESTBuilder.MakeValidGuid(null) + "' />";
					if (item.Parameters[i].Type === "mscrm.crmbaseentity" || item.Parameters[i].Type === "Collection(mscrm.crmbaseentity)") {
						entityCtrl = "<select class='ui-corner-all ParameterEntity'></select>"
						populateParameterEntityLists = true;
					}
				} else {
					ctrl = "<span>Not Handled</span>";
				}
				break;
		}

		$("#InputParameters tbody").append("<tr><td>" + item.Parameters[i].Optional + "</td><td><input type='checkbox' class='ParameterInclude' " + ((item.Parameters[i].Optional) ? "" : "checked disabled") + " /></td>" +
			"<td>" + item.Parameters[i].Name + "</td><td>" + item.Parameters[i].Type + "</td><td><nobr>" + ctrl + "</td><td>" + entityCtrl + "</td></tr>");
	}

	if ($.grep(item.Parameters, function (p) { return p.Type === "Edm.DateTimeOffset"; }).length > 0)
		Xrm.RESTBuilder.MakeDatePicker("DateTime");

	if (populateParameterEntityLists)
		$("#EntityList option").clone().appendTo(".ParameterEntity");

	var spinners = $.grep(item.Parameters, function (p) { return p.Type === "Edm.Int32" || p.Type === "Edm.Int64" || p.Type === "Edm.Decimal" || p.Type === "Edm.Double"; });
	for (var j = 0; j < spinners.length; j++) {
		Xrm.RESTBuilder.MakeSpinner(null, null, 1, spinners[j].Name);
	}
}

Xrm.RESTBuilder.Associate_XST = function () {
	var js = [];
	js.push("XrmServiceToolkit.Rest.Associate(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "\",");
	js.push("    \"" + $("#AssociateEntity1 option:selected").text() + "Set\",");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "\",");
	js.push("    \"" + $("#AssociateEntity2 option:selected").text() + "Set\",");
	js.push("    \"" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Associate_SDK = function () {
	var js = [];
	js.push("SDK.REST.associateRecords(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "\",");
	js.push("    \"" + $("#AssociateEntity1 option:selected").text() + "\",");
	js.push("    \"" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "\",");
	js.push("    \"" + $("#AssociateEntity2 option:selected").text() + "\",");
	js.push("    function() {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Associate_XMLHTTP = function () {
	var js = [];
	js.push("var association = {};");
	js.push("association.uri = Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + $("#AssociateEntity2 option:selected").text() +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "')\";");
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + $("#AssociateEntity1 option:selected").text() +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "')/$links/" + $("#AssociateRelationship option:selected").val() +
		"\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send(JSON.stringify(association));");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Associate_XMLHTTP_WebApi = function () {
	var js = [];
	js.push("var association = {");
	js.push("\"@odata.id\": Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + $("#AssociateEntity2 option:selected").attr("entitysetname") +
		"(" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + ")\"");
	js.push("};");
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + $("#AssociateEntity1 option:selected").attr("entitysetname") +
		"(" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + ")/" + $("#AssociateRelationship option:selected").attr("webapivalue") + "/$ref\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send(JSON.stringify(association));");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Associate_jQuery_WebApi = function () {
	var js = [];
	js.push("var association = {");
	js.push("\"@odata.id\": Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + $("#AssociateEntity2 option:selected").attr("entitysetname") +
		"(" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + ")\"");
	js.push("};");
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + $("#AssociateEntity1 option:selected").attr("entitysetname") +
		"(" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + ")/" + $("#AssociateRelationship option:selected").attr("webapivalue") + "/$ref\",");
	js.push("    data: JSON.stringify(association),");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); //Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Associate_jQuery = function () {
	var js = [];
	js.push("var association = {};");
	js.push("association.uri = Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + $("#AssociateEntity2 option:selected").text() +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "')\";");
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + $("#AssociateEntity1 option:selected").text() +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "')/$links/" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    data: JSON.stringify(association),");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Associate_XSVC = function () {
	var js = [];
	js.push("XrmSvcToolkit.associate({");
	js.push("    entity1Name: \"" + $("#AssociateEntity1 option:selected").text() + "\",");
	js.push("    entity1Id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "\",");
	js.push("    entity2Name: \"" + $("#AssociateEntity2 option:selected").text() + "\",");
	js.push("    entity2Id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "\",");
	js.push("    relationshipName: \"" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "successCallback: function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_XST = function () {
	var js = [];
	js.push("XrmServiceToolkit.Rest.Disassociate(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "\",");
	js.push("    \"" + $("#AssociateEntity1 option:selected").text() + "Set\",");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "\",");
	js.push("    \"" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    function () {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function (error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_SDK = function () {
	var js = [];
	js.push("SDK.REST.disassociateRecords(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "\",");
	js.push("    \"" + $("#AssociateEntity1 option:selected").text() + "\",");
	js.push("    \"" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "\",");
	js.push("    function() {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_XMLHTTP = function () {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + $("#AssociateEntity1 option:selected").text() +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "')/$links/" + $("#AssociateRelationship option:selected").val() +
		"(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "')\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.setRequestHeader(\"X-HTTP-Method\", \"DELETE\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_XMLHTTP_WebApi = function () {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"DELETE\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + $("#AssociateEntity1 option:selected").attr("entitysetname") +
		"(" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + ")/" + $("#AssociateRelationship option:selected").attr("webapivalue") + "(" +
		Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + ")/$ref\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_jQuery_WebApi = function () {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"DELETE\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + $("#AssociateEntity1 option:selected").attr("entitysetname") +
		"(" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + ")/" + $("#AssociateRelationship option:selected").attr("webapivalue") + "(" +
		Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + ")/$ref\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_jQuery = function () {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + $("#AssociateEntity1 option:selected").text() +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "')/$links/" + $("#AssociateRelationship option:selected").val() + "(guid'" +
		Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "')\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"X-HTTP-Method\", \"DELETE\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Disassociate_XSVC = function () {
	var js = [];
	js.push("XrmSvcToolkit.disassociate({");
	js.push("    entity1Name: \"" + $("#AssociateEntity1 option:selected").text() + "\",");
	js.push("    entity1Id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId1").val()) + "\",");
	js.push("    entity2Name: \"" + $("#AssociateEntity2 option:selected").text() + "\",");
	js.push("    entity2Id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#AssociateId2").val()) + "\",");
	js.push("    relationshipName: \"" + $("#AssociateRelationship option:selected").val() + "\",");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "successCallback: function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_XST = function () {
	var js = [];
	js.push("XrmServiceToolkit.Rest.Delete(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "\",");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "Set\",");
	js.push("    function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_SDK = function () {
	var js = [];
	js.push("SDK.REST.deleteRecord(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "\",");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    function() {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_XMLHTTP = function () {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + Xrm.RESTBuilder.EntitySchema +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "')\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.setRequestHeader(\"X-HTTP-Method\", \"DELETE\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_XMLHTTP_WebApi = function () {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"DELETE\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName + "(" +
		Xrm.RESTBuilder.GenerateIdAlternateKeys("Delete") + ")\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_jQuery_WebApi = function () {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"DELETE\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName + "(" +
		Xrm.RESTBuilder.GenerateIdAlternateKeys("Delete") + ")\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_XrmWebApi_WebApi = function () {
	var js = [];
	// Xrm.WebApi doesn't support using alternate keys yet
	js.push("Xrm.WebApi.online.deleteRecord(\"" + Xrm.RESTBuilder.EntityLogical + "\", \"" + Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "\").then(\n");
	js.push("    function success(result) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }\n");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function success(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
}

Xrm.RESTBuilder.Delete_jQuery = function () {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/XRMServices/2011/OrganizationData.svc/" + Xrm.RESTBuilder.EntitySchema + "Set(guid'" +
		Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "')\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"X-HTTP-Method\", \"DELETE\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_SDKJQ = function () {
	var js = [];
	js.push("SDK.JQuery.deleteRecord(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "\",");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    function() {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Delete_XSVC = function () {
	var js = [];
	js.push("XrmSvcToolkit.deleteRecord({");
	js.push("    entityName: \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#DeleteId").val()) + "\",");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "successCallback: function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_XST = function (js) {
	js.push("XrmServiceToolkit.Rest.Create(");
	js.push("    entity,");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "Set\",");
	js.push("    function(result) {");
	js.push("         var newEntityId = result." + $("select[id=EntityList]").val() + "Id;");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_SDK = function (js) {
	js.push("SDK.REST.createRecord(");
	js.push("    entity,");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    function(result) {");
	js.push("         var newEntityId = result." + $("select[id=EntityList]").val() + "Id;");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_jQuery = function (js) {
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/XRMServices/2011/OrganizationData.svc/" + Xrm.RESTBuilder.EntitySchema + "Set\",");
	js.push("    data: JSON.stringify(entity),");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	js.push("        var result = data.d;");
	js.push("        var newEntityId = result." + $("select[id=EntityList]").val() + "Id;");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "var result = data.d;";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_SDKJQ = function (js) {
	js.push("SDK.JQuery.createRecord(");
	js.push("    entity,");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    function(result) {");
	js.push("         var newEntityId = result." + $("select[id=EntityList]").val() + "Id;");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_XMLHTTP = function (js) {
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", encodeURI(Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" +
		Xrm.RESTBuilder.EntitySchema + "Set\"), " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 201) {");
	js.push("            var result = JSON.parse(req.responseText).d;");
	js.push("            var newEntityId = result." + $("select[id=EntityList]").val() + "Id;");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send(JSON.stringify(entity));");

	Xrm.RESTBuilder.ReplaceLine = "var result = JSON.parse(req.responseText).d;";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_XMLHTTP_WebApi = function (js) {
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName + "\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("req.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === " + ((Xrm.RESTBuilder.ReturnRecord) ? "201" : "204") + ") {");
	js.push("            var uri = req.getResponseHeader(\"OData-EntityId\");");
	js.push("            var regExp = \/\\(([^)]+)\\)\/;");
	js.push("            var matches = regExp.exec(uri);");
	js.push("            var newEntityId = matches[1];");
	if (Xrm.RESTBuilder.ReturnRecord) {
		js.push("            \n// Handle returned attributes\n");
	}
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send(JSON.stringify(entity));");

	Xrm.RESTBuilder.ReplaceLine = "var uri = req.getResponseHeader(\"OData-EntityId\");";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_jQuery_WebApi = function (js) {
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName + "\",");
	js.push("    data: JSON.stringify(entity),");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("        XMLHttpRequest.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	js.push("        var uri = xhr.getResponseHeader(\"OData-EntityId\");");
	js.push("        var regExp = \/\\(([^)]+)\\)\/;");
	js.push("        var matches = regExp.exec(uri);");
	js.push("        var newEntityId = matches[1];");
	if (Xrm.RESTBuilder.ReturnRecord) {
		js.push("        \n// Handle returned attributes\n");
	}
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "var uri = xhr.getResponseHeader(\"OData-EntityId\");";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Create_XrmWebApi_WebApi = function (js) {
	js.push("Xrm.WebApi.online.createRecord(\"" + Xrm.RESTBuilder.EntityLogical + "\", entity).then(\n");
	js.push("    function success(result) {");
	js.push("        var newEntityId = result.id;");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }\n");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "var newEntityId = result.id;";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
}

Xrm.RESTBuilder.Create_XSVC = function (js) {
	js.push("XrmSvcToolkit.createRecord({");
	js.push("    entityName: \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    entity: entity,");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function(result) {");
	js.push("         var newEntityId = result." + $("select[id=EntityList]").val() + "Id;");
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_XST = function (js) {
	js.push("XrmServiceToolkit.Rest.Update(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "\",");
	js.push("    entity,");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "Set\",");
	js.push("    function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_SDK = function (js) {
	js.push("SDK.REST.updateRecord(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "\",");
	js.push("    entity,");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_jQuery = function (js) {
	js.push("$.ajax({\n");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/XRMServices/2011/OrganizationData.svc/" +
		Xrm.RESTBuilder.EntitySchema + "Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "')\",");
	js.push("    data: JSON.stringify(entity),");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"X-HTTP-Method\", \"MERGE\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_SDKJQ = function (js) {
	js.push("SDK.JQuery.updateRecord(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "\",");
	js.push("    entity,");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_XMLHTTP = function (js) {
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + Xrm.RESTBuilder.EntitySchema +
		"Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "')\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.setRequestHeader(\"X-HTTP-Method\", \"MERGE\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 204 || req.status === 1223) {\n");
	js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send(JSON.stringify(entity));");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === 204 || req.status === 1223) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_XMLHTTP_WebApi = function (js) {
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"PATCH\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName + "(" +
		Xrm.RESTBuilder.GenerateIdAlternateKeys("Update") + ")\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("req.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	if (Xrm.RESTBuilder.PreventCreate) {
		js.push("req.setRequestHeader(\"If-Match\", \"*\");");
	}
	if (Xrm.RESTBuilder.PreventUpdate) {
		js.push("req.setRequestHeader(\"If-None-Match\", \"*\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === " + ((Xrm.RESTBuilder.ReturnRecord) ? "200" : "204") + ") {\n");
	if (Xrm.RESTBuilder.ReturnRecord) {
		js.push("            // Handle returned attributes\n");
	} else {
		js.push("            // Success - No Return Data - Do Something\n");
	}
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send(JSON.stringify(entity));");

	Xrm.RESTBuilder.ReplaceLine = "if (req.status === " + ((Xrm.RESTBuilder.ReturnRecord) ? "200" : "204") + ") {";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_jQuery_WebApi = function (js) {
	js.push("$.ajax({");
	js.push("    type: \"PATCH\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" +
		Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.GenerateIdAlternateKeys("Update") + ")\",");
	js.push("    data: JSON.stringify(entity),");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("        XMLHttpRequest.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	if (Xrm.RESTBuilder.PreventCreate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"If-Match\", \"*\");");
	}
	if (Xrm.RESTBuilder.PreventUpdate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"If-None-Match\", \"*\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	if (Xrm.RESTBuilder.ReturnRecord) {
		js.push("        // Handle returned attributes\n");
	} else {
		js.push("        // Success - No Return Data - Do Something\n");
	}
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "success: function(data, textStatus, xhr) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Update_XrmWebApi_WebApi = function (js) {
	// Xrm.WebApi doesn't support using alternate keys yet
	js.push("Xrm.WebApi.online.updateRecord(\"" + Xrm.RESTBuilder.EntityLogical + "\", \"" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "\", entity).then(\n");
	js.push("    function success(result) {");
	js.push("        var updatedEntityId = result.id;");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }\n");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "var updatedEntityId = result.id;";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
}

Xrm.RESTBuilder.Update_XSVC = function (js) {
	js.push("XrmSvcToolkit.updateRecord({");
	js.push("    entityName: \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#UpdateId").val()) + "\",");
	js.push("    entity: entity,");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function() {\n");
	js.push("         // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "successCallback: function() {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_XST = function (selects, expand) {
	var js = [];
	js.push("XrmServiceToolkit.Rest.Retrieve(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "\",");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "Set\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, null, null, null, null, null);
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$select=", "");
	}
	js.push("    " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	seft = Xrm.RESTBuilder.BuildRESTString(null, expand, null, null, null, null);
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$expand=", "").replace("&$expand=", "");
	}
	js.push("    " + ((seft === null) ? "null" : "'" + seft + "'") + ",");
	js.push("    function(result) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 9));
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_SDK = function (selects, expand) {
	var js = [];
	js.push("SDK.REST.retrieveRecord(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "\",");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, null, null, null, null, null);
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$select=", "");
	}
	js.push("    " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	seft = Xrm.RESTBuilder.BuildRESTString(null, expand, null, null, null, null);
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$expand=", "").replace("&$expand=", "");
	}
	js.push("    " + ((seft === null) ? "null" : "'" + seft + "'") + ",");
	js.push("    function(result) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 8));
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_XMLHTTP = function (selects, expand) {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" +
		Xrm.RESTBuilder.EntitySchema + "Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "')");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, null, null, null, null);
	js.push(((seft === null) ? "" : seft) + "\", ");
	js.push(Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 200) {");
	js.push("            var result = JSON.parse(req.responseText).d;");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 12));
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "var result = JSON.parse(req.responseText).d;";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveNextLink_XMLHTTP_WebApi = function () {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", \"" + $("#NextLinkUrl").val() + "\"");
	js.push(", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	if (Xrm.RESTBuilder.FormattedValues) {
		js.push("req.setRequestHeader(\"Prefer\", \"odata.include-annotations=\\\"*\\\"\");");
	}
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("req.setRequestHeader(\"If-None-Match\", \"W\\\/\\\"000000\\\"\"); // Change 000000 to your value\n");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 200) {");
	js.push("            var results = JSON.parse(req.response);");
	js.push(Xrm.RESTBuilder.GenerateResultVarsNextLink_WebApi($("#NextLinkUrl").val(), 12));
	js.push("        }");
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("        else if (req.status === 304) {\n");
		js.push("            // Handle data not changed\n");
		js.push("        }");
	}
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "var results = JSON.parse(req.response);";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.NoChangeReplaceLine = "else if (req.status === 304) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveNextLink_jQuery_WebApi = function () {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: \"" + $("#NextLinkUrl").val() + "\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	if (Xrm.RESTBuilder.FormattedValues) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Prefer\", \"odata.include-annotations=\\\"*\\\"\");");
	}
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("        XMLHttpRequest.setRequestHeader(\"If-None-Match\", \"W\\\/\\\"000000\\\"\"); // Change 000000 to your value\n");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("        if (xhr.status === 304) {\n");
		js.push("            // Handle data not changed\n");
		js.push("        }");
		js.push("        else {");
		js.push("            var results = data;");
		js.push(Xrm.RESTBuilder.GenerateResultVarsNextLink_WebApi($("#NextLinkUrl").val(), 12));
		js.push("        }");
	} else {
		js.push("        var results = data;");
		js.push(Xrm.RESTBuilder.GenerateResultVarsNextLink_WebApi($("#NextLinkUrl").val(), 8));
	}
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	if (Xrm.RESTBuilder.DetectChanges) {
		Xrm.RESTBuilder.ReplaceLine = "var results = data;";
	} else {
		Xrm.RESTBuilder.ReplaceLine = "var results = data;";
	}
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.NoChangeReplaceLine = "if (xhr.status === 304) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_XMLHTTP_WebApi = function (selects, expand) {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" +
		Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.GenerateIdAlternateKeys("Retrieve") + ")");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, null, null, null, null);
	js.push(((seft === null) ? "" : seft) + "\", ");
	js.push(Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("req.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("req.setRequestHeader(\"If-None-Match\", \"W\\\/\\\"000000\\\"\"); // Change 000000 to your value\n");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 200) {");
	js.push("            var result = JSON.parse(req.response);");
	js.push(Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 12));
	js.push("        }");
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("        else if (req.status === 304) {");
		js.push("            // Handle data not changed\n");
		js.push("        }");
	}
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "var result = JSON.parse(req.response);";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.NoChangeReplaceLine = "else if (req.status === 304) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_jQuery_WebApi = function (selects, expand) {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" +
		Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.GenerateIdAlternateKeys("Retrieve") + ")");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, null, null, null, null);
	js.push(((seft === null) ? "" : seft) + "\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("        XMLHttpRequest.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("        XMLHttpRequest.setRequestHeader(\"If-None-Match\", \"W\\\/\\\"000000\\\"\"); // Change 000000 to your value\n");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	if (Xrm.RESTBuilder.DetectChanges) {
		js.push("        if (xhr.status === 304) {");
		js.push("            // Handle data not changed\n");
		js.push("        }");
		js.push("        else {");
		js.push("            var result = data;");
		js.push(Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 12));
		js.push("        }");
	} else {
		js.push("        var result = data;");
		js.push(Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 8));
	}
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	if (Xrm.RESTBuilder.DetectChanges) {
		Xrm.RESTBuilder.ReplaceLine = "var result = data;";
	} else {
		Xrm.RESTBuilder.ReplaceLine = "var result = data;";
	}
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.NoChangeReplaceLine = "if (xhr.status === 304) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_XrmWebApi_WebApi = function (selects, expand) {
	var js = [];
	// Xrm.WebApi doesn't support using alternate keys yet
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, null, null, null, null);
	js.push("Xrm.WebApi.online.retrieveRecord(\"" + Xrm.RESTBuilder.EntityLogical + "\", \"" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "\", \"" + seft + "\").then(\n");
	js.push("    function success(result) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 4));
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }\n");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function success(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
}

Xrm.RESTBuilder.Retrieve_jQuery = function (selects, expand) {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/XRMServices/2011/OrganizationData.svc/" +
		Xrm.RESTBuilder.EntitySchema + "Set(guid'" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "')");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, null, null, null, null);
	js.push(((seft === null) ? "" : seft) + "\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	js.push("        var result = data.d;");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 8));
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "var result = data.d;";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_SDKJQ = function (selects, expand) {
	var js = [];
	js.push("SDK.JQuery.retrieveRecord(");
	js.push("    \"" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "\",");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, null, null, null, null, null);
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$select=", "");
	}
	js.push("    " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	seft = Xrm.RESTBuilder.BuildRESTString(null, expand, null, null, null, null);
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$expand=", "").replace("&$expand=", "");
	}
	js.push("    " + ((seft === null) ? "null" : "'" + seft + "'") + ",");
	js.push("    function(result) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 8));
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Retrieve_XSVC = function (selects, expand) {
	var js = [];
	js.push("XrmSvcToolkit.retrieve({");
	js.push("    entityName: \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	js.push("    id: \"" + Xrm.RESTBuilder.MakeValidGuid($("#RetrieveId").val()) + "\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, null, null, null, null, null);
	var selectItems = [];
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$select=", "");
		var s = seft.split(",");
		for (var i = 0; i < s.length; i++) {
			selectItems[i] = "\"" + s[i] + "\"";
		}
	}
	js.push("    select: [ " + ((seft === null) ? "null" : selectItems.join(",")) + " ],");
	seft = Xrm.RESTBuilder.BuildRESTString(null, expand, null, null, null, null);
	var expandItems = [];
	if (seft !== null && seft !== undefined) {
		seft = seft.replace("?$expand=", "").replace("&$expand=", "");
		var e = seft.split(",");
		for (var j = 0; j < e.length; j++) {
			expandItems[j] = "\"" + e[j] + "\"";
		}
	}
	js.push("    expand: [ " + ((seft === null) ? "null" : "'" + seft + "'") + " ],");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function(result) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 9));
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "successCallback: function(result) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_XST = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	js.push("XrmServiceToolkit.Rest.RetrieveMultiple(");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "Set\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, filter, top, orderby, skip);
	js.push("    " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	js.push("    function(results) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 4));
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    function() {\n");
	js.push("         // On Complete - Do Something\n");
	js.push("    },");
	js.push("    " + Xrm.RESTBuilder.Async + "");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(results) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_SDK = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	js.push("SDK.REST.retrieveMultipleRecords(");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, filter, top, orderby, skip);
	js.push("    " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	js.push("    function(results) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 4));
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    function() {\n");
	js.push("         // On Complete - Do Something\n");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(results) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_XMLHTTP = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", Xrm.Page.context.getClientUrl() + \"/XRMServices/2011/OrganizationData.svc/" + Xrm.RESTBuilder.EntitySchema + "Set");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, filter, top, orderby, skip);
	js.push(((seft === null) ? "" : seft) + "\", ");
	js.push(Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 200) {");
	js.push("            var returned = JSON.parse(req.responseText).d;");
	js.push("            var results = returned.results;");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 12));
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "var results = returned.results;";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_XMLHTTP_WebApi = function (selects, expand, filter, top, orderby, count) {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName);
	var seft = Xrm.RESTBuilder.BuildRESTString_WebApi(selects, expand, filter, orderby, count, null);
	js.push(((seft === null) ? "" : seft) + "\", ");
	js.push(Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, top, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("req.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 200) {");
	js.push("            var results = JSON.parse(req.response);");
	js.push(Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 12));
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "var results = JSON.parse(req.response);";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_jQuery_WebApi = function (selects, expand, filter, top, orderby, count) {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName);
	var seft = Xrm.RESTBuilder.BuildRESTString_WebApi(selects, expand, filter, orderby, count, null);
	js.push(((seft === null) ? "" : seft) + "\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, top, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("        XMLHttpRequest.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	js.push("        var results = data;");
	js.push(Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 8));
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "var results = data;";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_XrmWebApi_WebApi = function (selects, expand, filter, top, orderby, count) {
	var js = [];
	var seft = Xrm.RESTBuilder.BuildRESTString_WebApi(selects, expand, filter, orderby, count, top);
	seft = (seft !== null) ? "\"" + seft + "\"" : "null";
	js.push("Xrm.WebApi.online.retrieveMultipleRecords(\"" + Xrm.RESTBuilder.EntityLogical + "\", " + seft + ").then(\n");
	js.push("    function success(results) {");
	var resultVars = Xrm.RESTBuilder.GenerateResultVars_WebApi(selects, expand, 4);
	resultVars = resultVars.replace(new RegExp("results.value", "g"), "results.entities");
	js.push(resultVars);
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }\n");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function success(results) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
}

Xrm.RESTBuilder.RetrieveMultiple_jQuery = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/XRMServices/2011/OrganizationData.svc/" + Xrm.RESTBuilder.EntitySchema + "Set");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, filter, top, orderby, skip);
	js.push(((seft === null) ? "" : seft) + "\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	js.push("        var results = data.d.results;");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 8));
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "var results = data.d.results;";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_SDKJQ = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	js.push("SDK.JQuery.retrieveMultipleRecords(");
	js.push("    \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, filter, top, orderby, skip);
	js.push("    " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	js.push("    function(results) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 4));
	js.push("    },");
	js.push("    function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    },");
	js.push("    function() {\n");
	js.push("         // On Complete - Do Something\n");
	js.push("    }");
	js.push(");");

	Xrm.RESTBuilder.ReplaceLine = "function(results) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.RetrieveMultiple_XSVC = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	js.push("XrmSvcToolkit.retrieveMultiple({");
	js.push("    entityName: \"" + Xrm.RESTBuilder.EntitySchema + "\",");
	var seft = Xrm.RESTBuilder.BuildRESTString(selects, expand, filter, top, orderby, skip);
	js.push("    odataQuery: " + ((seft === null) ? "null" : "\"" + seft + "\"") + ",");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    successCallback: function(results) {");
	js.push(Xrm.RESTBuilder.GenerateResultVars(selects, 4));
	js.push("    },");
	js.push("    errorCallback: function(error) {");
	js.push("         " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "successCallback: function(results) {";
	Xrm.RESTBuilder.ErrorReplaceLine = "errorCallback: function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.PredefinedQuery_XMLHTTP_WebApi = function () {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName);
	js.push("?" + $("#PredefinedQueryType option:selected").attr("type") + "=");
	if ($("#PredefinedQueryType").val() === "FetchXML") {
		js.push(Xrm.RESTBuilder.CleanFetchXml(Xrm.RESTBuilder.FetchEditor.getValue()));
	} else {
		js.push(Xrm.RESTBuilder.MakeValidGuid($("#QueryId").val()));
	}
	js.push("\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("req.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	js.push("        if (req.status === 200) {");
	js.push("            var results = JSON.parse(req.response);");
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	Xrm.RESTBuilder.ReplaceLine = "var results = JSON.parse(req.response);";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.PredefinedQuery_jQuery_WebApi = function () {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/" + Xrm.RESTBuilder.EntitySetName);
	js.push("?" + $("#PredefinedQueryType option:selected").attr("type") + "=");
	if ($("#PredefinedQueryType").val() === "FetchXML") {
		js.push(Xrm.RESTBuilder.CleanFetchXml(Xrm.RESTBuilder.FetchEditor.getValue()));
	} else {
		js.push(Xrm.RESTBuilder.MakeValidGuid($("#QueryId").val()));
	}
	js.push("\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	var prefer = Xrm.RESTBuilder.BuildPrefer(Xrm.RESTBuilder.FormattedValues, null, Xrm.RESTBuilder.ReturnRecord);
	if (prefer !== null) {
		js.push("        XMLHttpRequest.setRequestHeader(" + prefer + ");");
	}
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {");
	js.push("        var results = data.value;");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	Xrm.RESTBuilder.ReplaceLine = "var results = data.value;";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Action_XMLHTTP_WebApi = function (action, parameters) {
	var js = [];
	js.push(parameters);
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"POST\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/");
	if (action.Entity === "none") { // Unbound
		js.push(action.Name);
	} else { // Bound
		js.push(Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.MakeValidGuid($("#TargetId").val()) + ")/Microsoft.Dynamics.CRM." + action.Name);
	}
	js.push("\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	if (action.ReturnTypes.length > 0) {
		js.push("        if (req.status === 200) {");
		js.push("            var results = JSON.parse(req.response);");
	} else {
		js.push("        if (req.status === 204) {\n");
		js.push("            // Success - No Return Data - Do Something\n");
	}
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	if (parameters)
		js.push("req.send(JSON.stringify(parameters));");
	else
		js.push("req.send();");
	if (action.ReturnTypes.length > 0)
		Xrm.RESTBuilder.ReplaceLine = "var results = JSON.parse(req.response);"
	else
		Xrm.RESTBuilder.ReplaceLine = "// Success - No Return Data - Do Something\n";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Action_jQuery_WebApi = function (action, parameters) {
	var js = [];
	js.push(parameters);
	js.push("$.ajax({");
	js.push("    type: \"POST\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/");
	if (action.Entity === "none") { // Unbound
		js.push(action.Name);
	} else { // Bound
		js.push(Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.MakeValidGuid($("#TargetId").val()) + ")/Microsoft.Dynamics.CRM." + action.Name);
	}
	js.push("\",");
	if (parameters) {
		js.push("    data: JSON.stringify(parameters),");
	}
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	if (action.ReturnTypes.length > 0)
		js.push("        var results = data;");
	else
		js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr, textStatus, errorThrown) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	if (action.ReturnTypes.length > 0)
		Xrm.RESTBuilder.ReplaceLine = "var results = data;";
	else
		Xrm.RESTBuilder.ReplaceLine = "// Success - No Return Data - Do Something\n";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Action_Function_XrmWebApi = function (action, parameters, operationType) {
	var js = [];
	var params = [];
	if (parameters) {
		js.push(parameters);
		var splitParameters = parameters.split("\n");
		for (var i = 0; i < splitParameters.length; i++) {
			if (splitParameters[i].substr(0, 11) === "parameters.")
				params.push(splitParameters[i].split("=")[0].trim());
		}
	}
	var requestName = action["Name"].charAt(0).toLowerCase() + action["Name"].substr(1) + "Request";
	js.push(Xrm.RESTBuilder.Create_XrmWebApi_ActionRequest(action, operationType, params, requestName));
	js.push("Xrm.WebApi.online.execute(" + requestName + ").then(\n");
	js.push("    function success(result) {");
	js.push("        if (result.ok) {\n");
	if (action.ReturnTypes.length > 0)
	{
		js.push("            result.json().then(\n");
		js.push("                 function (response) {\n");
		js.push("            						/*CODE*/	  ");
		js.push("            		});	");	
	}
	else
		js.push("            // Success - No Return Data - Do Something\n");
	js.push("        }");
	js.push("    },");
	js.push("    function(error) {");
	js.push("        " + Xrm.RESTBuilder.Alert("error.message") + ";");
	js.push("    }\n");
	js.push(");");

	if (action.ReturnTypes.length > 0)
		Xrm.RESTBuilder.ReplaceLine = " result.json().then(function (response) { /*CODE*/   });"
	else
		Xrm.RESTBuilder.ReplaceLine = "// Success - No Return Data - Do Something\n";
	Xrm.RESTBuilder.ErrorReplaceLine = "function(error) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
}

Xrm.RESTBuilder.Action_XrmWebApi_WebApi = function (action, parameters) {
	Xrm.RESTBuilder.Action_Function_XrmWebApi(action, parameters, 0);
}

Xrm.RESTBuilder.Create_XrmWebApi_ActionRequest = function (action, operationType, params, requestName) {
	// operationType [action = 0, function = 1, CRUD = 2]
	var js = [];
	var props = [];
	for (var i = 0; i < params.length; i++) {
		$.grep(action.Parameters, function (e) {
			if ("parameters." + e.Name === params[i])
				props.push(e.Name + ": " + params[i] + ",");
		});
	}
	js.push("var " + requestName + " = {");
	if (props.length > 0)
		js.push(props.join("\n") + "\n\n");
	else
		js.push("\n");
	js.push("getMetadata: function () {");
	js.push("return {");
	if (action.IsBound)
		js.push("boundParameter: \"" + action.Parameters[0].Name + "\",");
	else
		js.push("boundParameter: null,");
	js.push("parameterTypes: {");
	var parameterTypes = [];
	for (var i = 0; i < action.Parameters.length; i++) {
		var ps = $.grep(params, function (e) { return e.replace("parameters.", "") === action.Parameters[i].Name });
		if (ps.length === 0)
			continue;
		var parameterType = [];
		parameterType.push("\"" + action.Parameters[i].Name + "\": {")
		parameterType.push("\"typeName\": \"" + action.Parameters[i].Type + "\",")
		parameterType.push("\"structuralProperty\": " + Xrm.RESTBuilder.GetWebApi_StructuralProperty_Value(action.Parameters[i].Type) + "}")
		parameterTypes.push(parameterType.join(""));
	}
	js.push(parameterTypes.join(",") + "},");
	js.push("operationType: " + operationType + ", ");
	js.push("operationName: \"" + action.Name + "\"");
	js.push("};}};\n\n");
	return js.join("");
}

Xrm.RESTBuilder.Function_XMLHTTP_WebApi = function (func, parameters) {
	var js = [];
	js.push("var req = new XMLHttpRequest();");
	js.push("req.open(\"GET\", Xrm.Page.context.getClientUrl() + \"/api/data/v" + $("#WebApiVersion option:selected").val() + "/");
	if (func.Entity === "none") { // Unbound
		js.push(func.Name);
	} else { // Bound
		js.push(Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.MakeValidGuid($("#TargetId").val()) + ")/Microsoft.Dynamics.CRM." + func.Name);
	}
	if (parameters)
		js.push("(" + Xrm.RESTBuilder.CreateGetParameterAliases(parameters) + ")?" + parameters);
	else
		js.push("()");
	js.push("\", " + Xrm.RESTBuilder.Async + ");");
	js.push("req.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("req.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("req.setRequestHeader(\"Accept\", \"application/json\");");
	js.push("req.setRequestHeader(\"Content-Type\", \"application/json; charset=utf-8\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("req.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("req.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("req.onreadystatechange = function() {");
	js.push("    if (req.readyState === 4) {");
	js.push("        req.onreadystatechange = null;");
	if (func.ReturnTypes.length > 0) {
		js.push("        if (req.status === 200) {");
		js.push("            var results = JSON.parse(req.response);");
	} else {
		js.push("        if (req.status === 204) {");
		js.push("            // Success - No Return Data - Do Something\n");
	}
	js.push("        }");
	js.push("        else {");
	js.push("            " + Xrm.RESTBuilder.Alert("req.response") + ";");
	js.push("        }");
	js.push("    }");
	js.push("};");
	js.push("req.send();");

	if (func.ReturnTypes.length > 0)
		Xrm.RESTBuilder.ReplaceLine = "var results = JSON.parse(req.response);"
	else
		Xrm.RESTBuilder.ReplaceLine = "// Success - No Return Data - Do Something\n";
	Xrm.RESTBuilder.ErrorReplaceLine = "else {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Function_jQuery_WebApi = function (func, parameters) {
	var js = [];
	js.push("$.ajax({");
	js.push("    type: \"GET\",");
	js.push("    contentType: \"application/json; charset=utf-8\",");
	js.push("    datatype: \"json\",");
	js.push("    url: " + "Xrm.Page.context.getClientUrl() + " + "\"/api/data/v" + $("#WebApiVersion option:selected").val() + "/");
	if (func.Entity === "none") { // Unbound
		js.push(func.Name);
	} else { // Bound
		js.push(Xrm.RESTBuilder.EntitySetName + "(" + Xrm.RESTBuilder.MakeValidGuid($("#TargetId").val()) + ")/Microsoft.Dynamics.CRM." + func.Name);
	}
	if (parameters)
		js.push("(" + Xrm.RESTBuilder.CreateGetParameterAliases(parameters) + ")?" + parameters);
	else
		js.push("()");
	js.push("\",");
	js.push("    beforeSend: function(XMLHttpRequest) {");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-MaxVersion\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"OData-Version\", \"4.0\");");
	js.push("        XMLHttpRequest.setRequestHeader(\"Accept\", \"application/json\");");
	if (Xrm.RESTBuilder.AuthToken) {
		js.push("        XMLHttpRequest.setRequestHeader(\"Authorization\", \"Bearer \" + token); // Replace token with your token value\n");
	}
	if (Xrm.RESTBuilder.Impersonate) {
		js.push("        XMLHttpRequest.setRequestHeader(\"MSCRMCallerID\", \"" + $("#ImpersonateId").val() + "\");");
	}
	js.push("    },");
	js.push("    async: " + Xrm.RESTBuilder.Async + ",");
	js.push("    success: function(data, textStatus, xhr) {\n");
	if (func.ReturnTypes.length > 0)
		js.push("        var results = data;");
	else
		js.push("        // Success - No Return Data - Do Something\n");
	js.push("    },");
	js.push("    error: function(xhr) {");
	js.push("        " + Xrm.RESTBuilder.Alert("xhr.responseText") + ";");
	js.push("    }");
	js.push("});");

	if (func.ReturnTypes.length > 0)
		Xrm.RESTBuilder.ReplaceLine = "var results = data;";
	else
		Xrm.RESTBuilder.ReplaceLine = "// Success - No Return Data - Do Something\n";
	Xrm.RESTBuilder.ErrorReplaceLine = "error: function(xhr, textStatus, errorThrown) {";
	Xrm.RESTBuilder.DisplayOutPut(window.js_beautify(js.join(""), { indent_size: 4 }));
};

Xrm.RESTBuilder.Function_XrmWebApi_WebApi = function (func, parameters) {
	Xrm.RESTBuilder.Action_Function_XrmWebApi(func, parameters, 1);
}

Xrm.RESTBuilder.Retrieve = function (library) {
	Xrm.RESTBuilder.CreateUrl("Retrieve");
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.Retrieve_XST(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString());
				break;
			case "SDK":
				Xrm.RESTBuilder.Retrieve_SDK(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString());
				break;
			case "SDKJQ":
				Xrm.RESTBuilder.Retrieve_SDKJQ(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString());
				break;
			case "jQuery":
				Xrm.RESTBuilder.Retrieve_jQuery(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString());
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.Retrieve_XMLHTTP(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString());
				break;
			case "XSVC":
				Xrm.RESTBuilder.Retrieve_XSVC(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString());
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.Retrieve_XMLHTTP_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(), Xrm.RESTBuilder.BuildExpandString_WebApi());
				break;
			case "jQuery":
				Xrm.RESTBuilder.Retrieve_jQuery_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(), Xrm.RESTBuilder.BuildExpandString_WebApi());
				break;
			case "XrmWebApi":
				Xrm.RESTBuilder.Retrieve_XrmWebApi_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(), Xrm.RESTBuilder.BuildExpandString_WebApi());
				break;
		}
	}
};

Xrm.RESTBuilder.RetrieveMultiple = function (library) {
	Xrm.RESTBuilder.CreateUrl(null);
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.RetrieveMultiple_XST(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString(),
					Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString(),
					Xrm.RESTBuilder.BuildSkipString());
				break;
			case "SDK":
				Xrm.RESTBuilder.RetrieveMultiple_SDK(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString(),
					Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString(),
					Xrm.RESTBuilder.BuildSkipString());
				break;
			case "SDKJQ":
				Xrm.RESTBuilder.RetrieveMultiple_SDKJQ(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString(),
					Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString(),
					Xrm.RESTBuilder.BuildSkipString());
				break;
			case "jQuery":
				Xrm.RESTBuilder.RetrieveMultiple_jQuery(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString(),
					Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString(),
					Xrm.RESTBuilder.BuildSkipString());
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.RetrieveMultiple_XMLHTTP(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString(),
					Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString(),
					Xrm.RESTBuilder.BuildSkipString());
				break;
			case "XSVC":
				Xrm.RESTBuilder.RetrieveMultiple_XSVC(Xrm.RESTBuilder.BuildSelectString(), Xrm.RESTBuilder.BuildExpandString(),
					Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString(),
					Xrm.RESTBuilder.BuildSkipString());
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.RetrieveMultiple_XMLHTTP_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(), Xrm.RESTBuilder.BuildExpandString_WebApi(),
					Xrm.RESTBuilder.BuildFilterString_WebApi(), Xrm.RESTBuilder.BuildTopString_WebApi(), Xrm.RESTBuilder.BuildOrderByString_WebApi(), Xrm.RESTBuilder.BuildCountString_WebApi());
				break;
			case "jQuery":
				Xrm.RESTBuilder.RetrieveMultiple_jQuery_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(), Xrm.RESTBuilder.BuildExpandString_WebApi(),
					Xrm.RESTBuilder.BuildFilterString_WebApi(), Xrm.RESTBuilder.BuildTopString_WebApi(), Xrm.RESTBuilder.BuildOrderByString_WebApi(), Xrm.RESTBuilder.BuildCountString_WebApi());
				break;
			case "XrmWebApi":
				Xrm.RESTBuilder.RetrieveMultiple_XrmWebApi_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(), Xrm.RESTBuilder.BuildExpandString_WebApi(),
					Xrm.RESTBuilder.BuildFilterString_WebApi(), Xrm.RESTBuilder.BuildTopString(), Xrm.RESTBuilder.BuildOrderByString_WebApi(), Xrm.RESTBuilder.BuildCountString_WebApi());
				break;
		}
	}
};

Xrm.RESTBuilder.CreateUrl = function (action) {
	var url;
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		var seft = Xrm.RESTBuilder.BuildRESTString(Xrm.RESTBuilder.BuildSelectString(),
			Xrm.RESTBuilder.BuildExpandString(), Xrm.RESTBuilder.BuildFilterString(), Xrm.RESTBuilder.BuildTopString(),
			Xrm.RESTBuilder.BuildOrderByString(), Xrm.RESTBuilder.BuildSkipString());
		url = Xrm.RESTBuilder.ODataPath + Xrm.RESTBuilder.EntitySchema +
			"Set";

		if (Xrm.RESTBuilder.Type === "Retrieve") {
			url += "(guid'" + $("#RetrieveId").val() + "')";
		}

		url += (seft === null) ? "" : seft;
	} else {
		var seft2 = Xrm.RESTBuilder.BuildRESTString_WebApi(Xrm.RESTBuilder.BuildSelectString_WebApi(),
			Xrm.RESTBuilder.BuildExpandString_WebApi(), Xrm.RESTBuilder.BuildFilterString_WebApi(),
			Xrm.RESTBuilder.BuildOrderByString_WebApi(), Xrm.RESTBuilder.BuildCountString_WebApi(),
			$("#LibraryXrmWebApi").is(":checked") ? Xrm.RESTBuilder.BuildTopString() : null);
		url = Xrm.RESTBuilder.ODataPath + Xrm.RESTBuilder.EntitySetName;

		if (Xrm.RESTBuilder.Type === "Retrieve") {
			url += "(" + Xrm.RESTBuilder.GenerateIdAlternateKeys(action) + ")";
		}

		url += (seft2 === null) ? "" : seft2;
	}
	$("#RetrieveUrlCount").text(url.length + " Characters ");
	(url.length > 2047) ? $("#RetrieveUrlWarning").show() : $("#RetrieveUrlWarning").hide();

	$("#RetrieveUrl").text(url);
};

Xrm.RESTBuilder.Create = function (library) {
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.Create_XST(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "SDK":
				Xrm.RESTBuilder.Create_SDK(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "SDKJQ":
				Xrm.RESTBuilder.Create_SDKJQ(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "jQuery":
				Xrm.RESTBuilder.Create_jQuery(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.Create_XMLHTTP(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "XSVC":
				Xrm.RESTBuilder.Create_XSVC(Xrm.RESTBuilder.BuildObjectString());
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.Create_XMLHTTP_WebApi(Xrm.RESTBuilder.BuildObjectString_WebApi());
				break;
			case "jQuery":
				Xrm.RESTBuilder.Create_jQuery_WebApi(Xrm.RESTBuilder.BuildObjectString_WebApi());
				break;
			case "XrmWebApi":
				Xrm.RESTBuilder.Create_XrmWebApi_WebApi(Xrm.RESTBuilder.BuildObjectString_WebApi());
				break;
		}
	}
};

Xrm.RESTBuilder.Update = function (library) {
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.Update_XST(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "SDK":
				Xrm.RESTBuilder.Update_SDK(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "SDKJQ":
				Xrm.RESTBuilder.Update_SDKJQ(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "jQuery":
				Xrm.RESTBuilder.Update_jQuery(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.Update_XMLHTTP(Xrm.RESTBuilder.BuildObjectString());
				break;
			case "XSVC":
				Xrm.RESTBuilder.Update_XSVC(Xrm.RESTBuilder.BuildObjectString());
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.Update_XMLHTTP_WebApi(Xrm.RESTBuilder.BuildObjectString_WebApi());
				break;
			case "jQuery":
				Xrm.RESTBuilder.Update_jQuery_WebApi(Xrm.RESTBuilder.BuildObjectString_WebApi());
				break;
			case "XrmWebApi":
				Xrm.RESTBuilder.Update_XrmWebApi_WebApi(Xrm.RESTBuilder.BuildObjectString_WebApi());
				break;
		}
	}
};

Xrm.RESTBuilder.Delete = function (library) {
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.Delete_XST();
				break;
			case "SDK":
				Xrm.RESTBuilder.Delete_SDK();
				break;
			case "SDKJQ":
				Xrm.RESTBuilder.Delete_SDKJQ();
				break;
			case "jQuery":
				Xrm.RESTBuilder.Delete_jQuery();
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.Delete_XMLHTTP();
				break;
			case "XSVC":
				Xrm.RESTBuilder.Delete_XSVC();
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.Delete_XMLHTTP_WebApi();
				break;
			case "jQuery":
				Xrm.RESTBuilder.Delete_jQuery_WebApi();
				break;
			case "XrmWebApi":
				Xrm.RESTBuilder.Delete_XrmWebApi_WebApi();
				break;
		}
	}
};

Xrm.RESTBuilder.Associate = function (library) {
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.Associate_XST();
				break;
			case "SDK":
				Xrm.RESTBuilder.Associate_SDK();
				break;
			case "jQuery":
				Xrm.RESTBuilder.Associate_jQuery();
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.Associate_XMLHTTP();
				break;
			case "XSVC":
				Xrm.RESTBuilder.Associate_XSVC();
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.Associate_XMLHTTP_WebApi();
				break;
			case "jQuery":
				Xrm.RESTBuilder.Associate_jQuery_WebApi();
				break;
		}
	}
};

Xrm.RESTBuilder.Disassociate = function (library) {
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		switch (library) {
			case "XST":
				Xrm.RESTBuilder.Disassociate_XST();
				break;
			case "SDK":
				Xrm.RESTBuilder.Disassociate_SDK();
				break;
			case "jQuery":
				Xrm.RESTBuilder.Disassociate_jQuery();
				break;
			case "XMLHTTP":
				Xrm.RESTBuilder.Disassociate_XMLHTTP();
				break;
			case "XSVC":
				Xrm.RESTBuilder.Disassociate_XSVC();
				break;
		}
	} else {
		switch (library) {
			case "XMLHTTP":
				Xrm.RESTBuilder.Disassociate_XMLHTTP_WebApi();
				break;
			case "jQuery":
				Xrm.RESTBuilder.Disassociate_jQuery_WebApi();
				break;
		}
	}
};

Xrm.RESTBuilder.PredefinedQuery = function (library) {
	switch (library) {
		case "XMLHTTP":
			Xrm.RESTBuilder.PredefinedQuery_XMLHTTP_WebApi();
			break;
		case "jQuery":
			Xrm.RESTBuilder.PredefinedQuery_jQuery_WebApi();
			break;
	}
};

Xrm.RESTBuilder.Action = function (library) {
	var action = Xrm.RESTBuilder.SelectedAction;

	if (!action) {
		return;
	}

	switch (library) {
		case "XMLHTTP":
			Xrm.RESTBuilder.Action_XMLHTTP_WebApi(action, Xrm.RESTBuilder.BuildParameters(action, false));
			break;
		case "jQuery":
			Xrm.RESTBuilder.Action_jQuery_WebApi(action, Xrm.RESTBuilder.BuildParameters(action, false));
			break;
		case "XrmWebApi":
			Xrm.RESTBuilder.Action_XrmWebApi_WebApi(action, Xrm.RESTBuilder.BuildParameters(action, false));
			break;
	}
};

Xrm.RESTBuilder.Function = function (library) {
	var func = Xrm.RESTBuilder.SelectedFunction;

	if (!func) {
		return;
	}

	switch (library) {
		case "XMLHTTP":
			Xrm.RESTBuilder.Function_XMLHTTP_WebApi(func, Xrm.RESTBuilder.BuildParameters(func, true));
			break;
		case "jQuery":
			Xrm.RESTBuilder.Function_jQuery_WebApi(func, Xrm.RESTBuilder.BuildParameters(func, true));
			break;
		case "XrmWebApi":
			Xrm.RESTBuilder.Function_XrmWebApi_WebApi(func, Xrm.RESTBuilder.BuildParameters(func, false));
			break;
	}
};

Xrm.RESTBuilder.RetrieveNextLink = function (library) {
	switch (library) {
		case "XMLHTTP":
			Xrm.RESTBuilder.RetrieveNextLink_XMLHTTP_WebApi();
			break;
		case "jQuery":
			Xrm.RESTBuilder.RetrieveNextLink_jQuery_WebApi();
			break;
	}
}

Xrm.RESTBuilder.ShowResults = function (results) {
	Xrm.RESTBuilder.RawResults = JSON.parse(JSON.stringify(results));

	var label = $("#CleanResults").button("option", "label");
	if (label === "Clean Results") {
		if (results.length !== undefined) {
			for (var i = 0; i < results.length; i++) {
				var result = results[i];
				delete result["__metadata"];
				for (var k in result) {
					if (result.hasOwnProperty(k)) {
						if (result[k]) {
							if (result[k].hasOwnProperty("__metadata")) {
								delete result[k]["__metadata"];
							}
							if (result[k].hasOwnProperty("results")) {
								for (var m = 0; m < result[k]["results"].length; m++) {
									if (result[k]["results"][m].hasOwnProperty("__metadata")) {
										delete result[k]["results"][m]["__metadata"];
									}
								}
							}
						}
					}
				}
			}
		} else {
			delete results["__metadata"];
			for (var j in results) {
				if (results.hasOwnProperty(j)) {
					if (results[j]) {
						if (results[j].hasOwnProperty("__metadata")) {
							delete results[j]["__metadata"];
						}
						if (results[j].hasOwnProperty("results")) {
							for (var n = 0; n < results[j]["results"].length; n++) {
								if (results[j]["results"][n].hasOwnProperty("__metadata")) {
									delete results[j]["results"][n]["__metadata"];
								}
							}
						}
					}
				}
			}
		}
	}

	$("#ResultTree").remove();
	$("#ResponseObject").text("");

	if ($("#ResultTypeTree:checked").val()) {
		$("#Results").append("<div id='ResultTree'></div>");
		$("#ResultTree").jsontree(JSON.stringify(results, null, 4));
	} else if ($("#ResultTypePlain:checked").val()) {
		$("#ResponseObject").append("<xmp style='display:inline;white-space:pre-wrap; word-wrap:break-word;display:inline;'>" + JSON.stringify(results, null, 4) + "</xmp>");
	}

	if (Xrm.RESTBuilder.Endpoint === "2011") {
		$("#CleanResults").button("option", "disabled", false);
	}

	if (Xrm.RESTBuilder.Type === "Retrieve" || Xrm.RESTBuilder.Type === "RetrieveMultiple" ||
		(Xrm.RESTBuilder.Type === "Create" && Xrm.RESTBuilder.Endpoint === "2011") || Xrm.RESTBuilder.Type === "PredefinedQuery") {

		if (!Xrm.RESTBuilder.ResultsClipboard) {
			Xrm.RESTBuilder.ResultsClipboard = new Clipboard(".resultsclipboard", {
				text: function () {
					if ($("#ResultTypeTree:checked").val()) {
						if ($("#ResultTree").text()) {
							return $("#ResultTree").text();
						}
					} else {
						if ($("#ResponseObject").text()) {
							return $("#ResponseObject").text();
						}
					}
					return $("#ResultTree").text();
				}
			});
			Xrm.RESTBuilder.ResultsClipboard.on("success", function (e) {
				e.clearSelection();
				Xrm.RESTBuilder.BlockDiv("#Results", "Copied!");
				setTimeout(function () {
					Xrm.RESTBuilder.UnBlockDiv("#Results");
				}, 300);
			});
			Xrm.RESTBuilder.ResultsClipboard.on("error", function () {
				Xrm.RESTBuilder.BlockDiv("#Results", Xrm.RESTBuilder.CopyFallbackMessage());
				setTimeout(function () {
					Xrm.RESTBuilder.UnBlockDiv("#Results");
				}, 900);
			});
		}
	}
};

Xrm.RESTBuilder.GenerateResultVars = function (selects, spaces) {
	var output = [];
	var pre = "";
	for (var x = 0; x < spaces; x++) {
		pre += " ";
	}

	if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		output.push(pre + "for (var i = 0; i < results.length; i++) {\n");
		pre += "     ";
	}

	var index = (Xrm.RESTBuilder.Type === "Retrieve") ? "" : "s[i]";

	if (selects === null || selects === undefined) {
		return pre + "var " + ((Xrm.RESTBuilder.EntityIsActivity === true) ? "Activity" : Xrm.RESTBuilder.EntitySchema.replace("/", "_")) +
			"Id = result" + index + "." + ((Xrm.RESTBuilder.EntityIsActivity === true) ? "Activity" : Xrm.RESTBuilder.EntitySchema) + "Id;\n";
	}

	var fields = selects.replace("?$select=", "").split(",");
	var entityFields = [];
	var expandFields = [];
	var expandRelationships = [];

	for (var j = 0; j < fields.length; j++) {
		if (fields[j].indexOf("/") === -1) {
			entityFields.push(fields[j]);
		} else {
			expandFields.push(fields[j]);
		}
	}

	expandFields.sort();

	for (var k = 0; k < expandFields.length; k++) {
		if (expandRelationships.indexOf(expandFields[k].split("/")[0]) === -1) {
			expandRelationships.push(expandFields[k].split("/")[0]);
		}
	}

	// Write main entity fields
	for (var i = 0; i < entityFields.length; i++) {
		var entityField = entityFields[i].replace("/", ".");
		output.push(pre + "var " + Xrm.RESTBuilder.GenerateResultVarName(fields[i]) + " = result" + index + "." + entityField + ";\n");

	}

	// Write expand entity fields
	if (expandRelationships.length > 0) {
		var expandVariables = ["a", "b", "c", "d", "e", "f"]; // Should be limited to 6 expands per query
		var expandVariablesCount = -1;
		var currentExpandRelationship = "";
		for (var l = 0; l < expandRelationships.length; l++) {
			var mToOneRelationship = $.grep(Xrm.RESTBuilder.CurrentEntityManyToOneRelationships, function (e) { return e.SchemaName === expandRelationships[l]; });
			if (mToOneRelationship.length > 0) {
				// N:1
				for (var n = 0; n < expandFields.length; n++) {
					if (expandFields[n].indexOf(expandRelationships[l]) !== -1) {
						output.push(pre + "var " + Xrm.RESTBuilder.GenerateResultVarName(expandFields[n]) + " = result" + index + "." + expandRelationships[l] +
							"." + expandFields[n].split("/")[1] + ";\n");
					}
				}
			}
			else {
				// 1:N and N:N
				if (currentExpandRelationship !== expandRelationships[l]) {
					currentExpandRelationship = expandRelationships[l];
					expandVariablesCount++;
					output.push(pre + "for (var " + expandVariables[expandVariablesCount] + " = 0; " + expandVariables[expandVariablesCount] + " < " +
						"result" + index + "." + currentExpandRelationship + ".results.length; " + expandVariables[expandVariablesCount] + "++) {\n");
				}

				for (var m = 0; m < expandFields.length; m++) {
					if (expandFields[m].slice(0, expandRelationships[l].length) === expandRelationships[l]) {
						output.push(pre + "     var " + Xrm.RESTBuilder.GenerateResultVarName(expandFields[m]) + " = result" + index + "." +
							expandRelationships[l] + ".results[" + expandVariables[expandVariablesCount] + "]." + expandFields[m].split("/")[1] + ";\n");
					}
				}

				if ((expandRelationships.length < expandRelationships.length + 1) || expandRelationships[l + 1] !== currentExpandRelationship) {
					output.push(pre + "}\n");
				}
			}
		}
	}

	if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		output.push(pre.replace("     ", "") + "}\n");
	}

	return output.join("");
};

Xrm.RESTBuilder.GenerateResultVarsNextLink_WebApi = function (url, spaces) {
	if (url.indexOf("select=") === -1) {
		return "";
	}

	var output = [];
	var pre = "";
	for (var x = 0; x < spaces; x++) {
		pre += " ";
	}

	output.push(pre + "for (var i = 0; i < results.value.length; i++) {\n");
	pre += "    ";

	var fieldString = url.split("select=")[1];
	var fields = fieldString.split(",");

	for (var i = 0; i < fields.length; i++) {
		output.push(pre + "var " + fields[i] + " = results.value[i][\"" + fields[i] + "\"];\n");
		if (Xrm.RESTBuilder.FormattedValues) {
			// TODO: Handle formatted values
		}
	}

	output.push(pre.replace("    ", "") + "}\n");

	return output.join("");
}

Xrm.RESTBuilder.GenerateResultVars_WebApi = function (selects, expand, spaces) {
	var output = [];
	var pre = "";
	for (var x = 0; x < spaces; x++) {
		pre += " ";
	}

	if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		if (Xrm.RESTBuilder.Count) {
			output.push(pre + "var recordCount = results[\"@odata.count\"];\n");
		}
		output.push(pre + "for (var i = 0; i < results.value.length; i++) {\n");
		pre = pre + "     ";
	}

	var index = (Xrm.RESTBuilder.Type === "Retrieve") ? "" : "s.value[i]";

	if (selects === null || selects === undefined) {
		output.push(pre + "var " + ((Xrm.RESTBuilder.EntityIsActivity === true) ? "activity" : Xrm.RESTBuilder.EntityLogical.replace("/", "_")) +
			"id = result" + index + "[\"" + ((Xrm.RESTBuilder.EntityIsActivity === true) ? "activity" : Xrm.RESTBuilder.EntityLogical) + "id\"];\n");
	}

	if (selects !== null && selects !== undefined) {
		var selectFields = selects.replace("?$select=", "").split(",");
		for (var i = 0; i < selectFields.length; i++) {
			var field = selectFields[i];
			if (field.charAt(0) === "_" && field.indexOf("_value") !== -1) {
				field = field.substring(1, field.length - 6);
			}
			var selectType = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.LogicalName === field; })[0].AttributeType;
			output.push(pre + "var " + Xrm.RESTBuilder.GenerateResultVarName(selectFields[i]) + " = result" + index + "[\"" + selectFields[i] + "\"];\n");

			if (Xrm.RESTBuilder.FormattedValues) {
				if (selectType !== null && selectType !== undefined) {
					if (selectType === "Picklist" || selectType === "Money" || selectType === "Boolean" || selectType === "Integer" || selectType === "Double" || selectType === "Decimal" ||
						selectType === "State" || selectType === "Owner" || selectType === "Customer" || selectType === "Lookup") {
						output.push(pre + "var " + Xrm.RESTBuilder.GenerateResultVarName(selectFields[i] + "_formatted = result") + index + "[\"" + selectFields[i] + "@OData.Community.Display.V1.FormattedValue\"];\n");
						if (selectType === "Owner" || selectType === "Customer" || selectType === "Lookup") {
							output.push(pre + "var " + Xrm.RESTBuilder.GenerateResultVarName(selectFields[i] + "_lookuplogicalname = result") + index + "[\"" + selectFields[i] + "@Microsoft.Dynamics.CRM.lookuplogicalname\"];\n");
						}
					}
				}
			}
		}
	}

	// Web API does not return related items in a RetrieveMultiple so you don't accidentally return 25,000,000 records (5,000 x 5,000)
	// Instead you need to use the @odata.nextLink to return the individual collection results
	if (expand !== null && expand !== undefined && Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		expand = expand.replace("$expand=", "");
		var expandRelationshipsLink = expand.split("),");
		output.push(pre + "//Use @odata.nextLink to query resulting related records\n");
		for (var l = 0; l < expandRelationshipsLink.length; l++) {
			var expandNameLink = expandRelationshipsLink[l].split("(")[0];
			output.push(pre + "var " + Xrm.RESTBuilder.GenerateResultVarName(expandNameLink) + "_NextLink = results.value[i][\"" + expandNameLink + "@odata.nextLink\"];\n");
		}
	}

	if (expand !== null && expand !== undefined && Xrm.RESTBuilder.Type !== "RetrieveMultiple") {
		var expandVariables = ["a", "b", "c", "d", "e", "f"]; // Should be limited to 6 expands per query
		var expandVariablesCount = -1;
		var currentExpandRelationship = "";
		expand = expand.replace("$expand=", "");
		var expandRelationships = expand.split("),");
		for (var k = 0; k < expandRelationships.length; k++) {
			var expandName = expandRelationships[k].split("(")[0];
			var mToOneRelationship = $.grep(Xrm.RESTBuilder.CurrentEntityManyToOneRelationships, function (e) { return e.ReferencingEntityNavigationPropertyName === expandName; });
			var regExp = /\((.*)\)/;
			if (expandRelationships[k].charAt(expandRelationships[k].length - 1) !== ")") {
				expandRelationships[k] += ")";
			}
			var expandFields = regExp.exec(expandRelationships[k].replace("$select=", ""))[1].split(",");

			if (mToOneRelationship.length > 0) {
				// N:1
				output.push(pre + "if(result" + index + ".hasOwnProperty(\"" + expandName + "\")) {\n");
				for (var n = 0; n < expandFields.length; n++) {
					output.push(pre + "    var " + Xrm.RESTBuilder.GenerateResultVarName(expandName + "_" + expandFields[n]) + " = result" + index + "[\"" + expandName +
						"\"][\"" + expandFields[n] + "\"];\n");
					if (Xrm.RESTBuilder.FormattedValues) {
						var relationshipEntityName = mToOneRelationship[0].ReferencedEntity;
						var relationshipEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === relationshipEntityName; });
						var expandType = $.grep(relationshipEntity[0].Attributes, function (e) { return e.LogicalName === expandFields[n]; })[0].AttributeType;
						if (expandType !== null && expandType !== undefined) {
							if (expandType === "Picklist" || expandType === "Money" || expandType === "Boolean" || expandType === "Integer" || expandType === "Double" || expandType === "Decimal" || expandType === "State") {
								output.push(pre + "    var " + Xrm.RESTBuilder.GenerateResultVarName(expandName + "_" + expandFields[n]) + "_formatted = result" + index + "[\"" + expandName +
									"\"][\"" + expandFields[n] + "@OData.Community.Display.V1.FormattedValue\"];\n");
							}
						}
					}
				}
				output.push(pre + "}\n");
			}
			else {
				// 1:N and N:N
				if (currentExpandRelationship !== expandRelationships[k]) {
					currentExpandRelationship = expandName;
					expandVariablesCount++;
					output.push(pre + "for (var " + expandVariables[expandVariablesCount] + " = 0; " + expandVariables[expandVariablesCount] + " < " +
						"result" + index + "." + currentExpandRelationship + ".length; " + expandVariables[expandVariablesCount] + "++) {\n");
				}

				for (var m = 0; m < expandFields.length; m++) {
					output.push(pre + "    var " + Xrm.RESTBuilder.GenerateResultVarName(expandName + "_" + expandFields[m]) + " = result" + index + "." +
						expandName + "[" + expandVariables[expandVariablesCount] + "]" + "[\"" + expandFields[m] + "\"];\n");
					if (Xrm.RESTBuilder.FormattedValues) {
						var relationship = $.grep(Xrm.RESTBuilder.CurrentEntityOneToManyRelationships, function (e) { return e.SchemaName === expandName; });
						var relationshipEntityName2;
						if (relationship.length !== 0) {
							relationshipEntityName2 = relationship[0].ReferencingEntity;
						} else {
							relationship = $.grep(Xrm.RESTBuilder.CurrentEntityManyToManyRelationships, function (e) { return e.SchemaName === expandName; });
							if (relationship[0].Entity1LogicalName !== Xrm.RESTBuilder.EntityLogical) {
								relationshipEntityName2 = relationship[0].Entity1LogicalName;
							} else {
								relationshipEntityName2 = relationship[0].Entity2LogicalName;
							}
						}

						var relationshipEntity2 = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === relationshipEntityName2; });
						var expandType2 = $.grep(relationshipEntity2[0].Attributes, function (e) { return e.LogicalName === expandFields[m]; })[0].AttributeType;
						if (expandType2 !== null && expandType2 !== undefined) {
							if (expandType2 === "Picklist" || expandType2 === "Money" || expandType2 === "Boolean" || expandType2 === "Integer" || expandType2 === "Double" || expandType2 === "Decimal" || expandType2 === "State") {
								output.push(pre + "    var " + Xrm.RESTBuilder.GenerateResultVarName(expandName + "_" + expandFields[m]) + "_formatted = result." + expandName + "[" + expandVariables[expandVariablesCount] +
									"][\"" + expandFields[m] + "@OData.Community.Display.V1.FormattedValue\"];\n");
							}
						}
					}
				}

				if ((expandRelationships.length < expandRelationships.length + 1) || expandRelationships[k + 1] !== currentExpandRelationship) {
					output.push(pre + "}\n");
				}
			}
		}
	}

	if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		output.push(pre.replace("     ", "") + "}\n");
	}

	return output.join("");
};

Xrm.RESTBuilder.GenerateIdAlternateKeys = function (action) {
	if ($("#" + action + "GUID").is(":visible")) {
		return Xrm.RESTBuilder.MakeValidGuid($("#" + action + "Id").val());
	} else {
		var keys = [];
		var rows = $("#AlternateKey" + action + "Table").find("tbody tr");
		for (var i = 0; i < rows.length; i++) {
			var inputField = $(rows[i]).find("input:first");
			var logical = $(rows[i]).find("td:first").html();
			var field = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.LogicalName === logical; })[0];
			var id = inputField.val().replace(/\"/g, '\\"');
			if (field.AttributeType === "String") {
				keys.push(logical + "='" + id + "'");
			} else {
				keys.push(logical + "=" + id);
			}
		}

		return keys.join(",");
	}
}

Xrm.RESTBuilder.GenerateResultVarName = function (value) {
	value = value.replace("/", "_");
	value = value.charAt(0).toLowerCase() + value.slice(1);
	return value;
}

Xrm.RESTBuilder.BuildObjectString = function () {
	var js = [];
	js.push("var entity = {};\n");
	for (var i = 0; i < $("#TableCreateUpdate tbody tr").length; i++) {
		var tr = $("#TableCreateUpdate tbody tr")[i];
		var field = $(tr).find(".Attribute:first").val();
		var val1 = $(tr).find("input:first").val();
		var sel1 = $(tr).find("select:eq(1)").val();

		if (field === null) {
			continue;
		}

		var type = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === field; })[0].AttributeType;
		switch (type) {
			case "Double":
			case "Decimal":
				var decAttr = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === field; });
				js.push(Xrm.RESTBuilder.REST_Decimal(field, val1, decAttr[0].Precision));
				break;
			case "Money":
				var doubAttr = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === field; });
				js.push(Xrm.RESTBuilder.REST_Money(field, val1, doubAttr[0].Precision));
				break;
			case "Integer":
				js.push(Xrm.RESTBuilder.REST_Integer(field, val1));
				break;
			case "Uniqueidentifier":
				js.push(Xrm.RESTBuilder.REST_Uniqueidentifier(field, val1));
				break;
			case "Memo":
			case "String":
				js.push(Xrm.RESTBuilder.REST_String(field, val1));
				break;
			case "Boolean":
				js.push(Xrm.RESTBuilder.REST_Boolean(field, sel1));
				break;
			case "Status":
			case "Picklist":
				js.push(Xrm.RESTBuilder.REST_Picklist(field, sel1));
				break;
			case "Customer":
			case "Owner":
			case "Lookup":
				js.push(Xrm.RESTBuilder.REST_Lookup(field, val1, sel1));
				break;
			case "DateTime":
				js.push(Xrm.RESTBuilder.REST_DateTime(field, val1, sel1));
				break;
			case "EntityName":
				var value = $(tr).find("select:eq(1) option:selected").attr("logicalname");
				js.push(Xrm.RESTBuilder.REST_EntityName(field, value));
				break;
		}
	}
	js.push("\n");
	return js;
};

Xrm.RESTBuilder.BuildObjectString_WebApi = function () {
	var js = [];
	js.push("var entity = {};\n");
	for (var i = 0; i < $("#TableCreateUpdate tbody tr").length; i++) {
		var tr = $("#TableCreateUpdate tbody tr")[i];
		var field = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
		if (field.length === 0) {
			continue;
		}
		var logical = field[0].LogicalName;
		var val1 = $(tr).find("input:first").val();
		var sel1 = $(tr).find("select:eq(1)").val();

		var type = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.LogicalName === logical; })[0].AttributeType;
		switch (type) {
			case "Double":
			case "Decimal":
				js.push(Xrm.RESTBuilder.REST_Decimal_WebApi(logical, val1));
				break;
			case "Money":
				var doubAttr = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.LogicalName === logical; });
				js.push(Xrm.RESTBuilder.REST_Money_WebApi(logical, val1, doubAttr[0].Precision));
				break;
			case "Integer":
				js.push(Xrm.RESTBuilder.REST_Integer(logical, val1));
				break;
			case "Uniqueidentifier":
				js.push(Xrm.RESTBuilder.REST_Uniqueidentifier(logical, val1));
				break;
			case "Memo":
			case "String":
				js.push(Xrm.RESTBuilder.REST_String(logical, val1));
				break;
			case "Boolean":
				js.push(Xrm.RESTBuilder.REST_Boolean(logical, sel1));
				break;
			case "ManagedProperty":
				js.push(Xrm.RESTBuilder.REST_BooleanManagedProperty_WeApi(logical, sel1));
				break;
			case "State":
			case "Status":
			case "Picklist":
				js.push(Xrm.RESTBuilder.REST_Picklist_WebApi(logical, sel1));
				break;
			case "Customer":
			case "Owner":
			case "Lookup":
				var relatedLogical = null;
				if ($(tr).find("select:eq(1) option").size() >= 1) {
					relatedLogical = $(tr).find("select:eq(1) option:selected").attr("logicalname");
				}
				var entitySetName = Xrm.RESTBuilder.GetEntitySetName(relatedLogical);
				js.push(Xrm.RESTBuilder.REST_Lookup_WebApi(logical, val1, entitySetName, relatedLogical));
				break;
			case "DateTime":
				js.push(Xrm.RESTBuilder.REST_DateTime_WebApi(logical, val1, sel1));
				break;
			case "EntityName":
				var value = $(tr).find("select:eq(1) option:selected").attr("logicalname");
				js.push(Xrm.RESTBuilder.REST_EntityName(logical, value));
				break;
		}
	}
	js.push("\n");
	return js;
};

Xrm.RESTBuilder.BuildRESTString = function (selects, expand, filter, top, orderby, skip) {
	var js = [];
	if (selects === null && expand == null && filter === null && top == null && orderby == null && skip == null) {
		return null;
	}

	if (selects !== null) {
		js.push(selects);
	}

	if (expand !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + expand);
		} else {
			js.push("?" + expand);
		}
	}

	if (filter !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + filter);
		} else {
			js.push("?" + filter);
		}
	}

	if (top !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + top);
		} else {
			js.push("?" + top);
		}
	}

	if (orderby !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + orderby);
		} else {
			js.push("?" + orderby);
		}
	}

	if (skip !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + skip);
		} else {
			js.push("?" + skip);
		}
	}

	return js.join("");
};

Xrm.RESTBuilder.BuildRESTString_WebApi = function (selects, expand, filter, orderby, count, top) {
	var js = [];
	if (selects === null && expand == null && filter === null && orderby == null && count == null && top == null) {
		return null;
	}

	if (selects !== null) {
		js.push(selects);
	}

	if (expand !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + expand);
		} else {
			js.push("?" + expand);
		}
	}

	if (filter !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + filter);
		} else {
			js.push("?" + filter);
		}
	}

	if (orderby !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + orderby);
		} else {
			js.push("?" + orderby);
		}
	}

	if (count !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + count);
		} else {
			js.push("?" + count);
		}
	}

	if (top !== null) {
		if (Xrm.RESTBuilder.StartsWithQ(js)) {
			js.push("&" + top);
		} else {
			js.push("?" + top);
		}
	}

	return js.join("");
};

Xrm.RESTBuilder.StartsWithQ = function (js) {
	if (js.length === 0) return false;
	return (js[0].charAt(0) === "?");
};

Xrm.RESTBuilder.BuildSelectString = function () {
	var selects = [];
	for (var x = 1; x < 5; x++) {
		for (var i = 0; i < $("#SelectList" + x + " li input:checked").length; i++) {
			var selfReferencing = "";
			if (x > 1 && x < 5) {
				selfReferencing = (JSON.parse($($("#SelectList" + x + " li input:checked")[i]).attr("selfreferencing")) ? "Referencing" : "");
			}
			selects.push(selfReferencing + $($("#SelectList" + x + " li input:checked")[i]).val() + ",");
		}
	}
	return (selects.length > 0) ? "?$select=" + selects.join("").slice(0, -1).trim() : null;
};

Xrm.RESTBuilder.BuildSelectString_WebApi = function () {
	var selects = [];
	for (var i = 0; i < $("#SelectList1 li input:checked").length; i++) {
		var attribute = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === $($("#SelectList1 li input:checked")[i]).val() })[0];
		var logical = attribute.LogicalName;
		var type = attribute.AttributeType;
		if (type === "Owner" || type === "Customer" || type === "Lookup") {
			logical = "_" + logical + "_value";
		}
		selects.push(logical + ",");
	}
	return (selects.length > 0) ? "?$select=" + selects.join("").slice(0, -1).trim() : null;
};

Xrm.RESTBuilder.CreateSelectItems = function () {
	var items = [];
	for (var i = 0; i < Xrm.RESTBuilder.CurrentEntityAttributes.length; i++) {
		items.push("<li id='" + Xrm.RESTBuilder.CurrentEntityAttributes[i].SchemaName + "'><input type='checkbox' value='" + Xrm.RESTBuilder.CurrentEntityAttributes[i].SchemaName +
			"' />" + Xrm.RESTBuilder.CurrentEntityAttributes[i].SchemaName + " (" + Xrm.RESTBuilder.GetLabel(Xrm.RESTBuilder.CurrentEntityAttributes[i].DisplayName) + ")</li>");
	}
	$("#SelectList1").html(items.join(""));
	Xrm.RESTBuilder.SortSelectItems($("#SelectList1"));
};

Xrm.RESTBuilder.CreateFilterEntities = function (oneToMany, manyToOne, manyToMany) {
	$("#ExpandEntity option").remove();
	Xrm.RESTBuilder.RelatedEntities = [];
	for (var i = 0; i < oneToMany.length; i++) {
		Xrm.RESTBuilder.RelatedEntities.push(oneToMany[i].ReferencingEntity);
	}
	var options = [];
	for (var j = 0; j < manyToOne.length; j++) {
		var mtoEntity = $.grep($("#EntityList option"), function (e) { return $(e).attr("LogicalName") === manyToOne[j].ReferencedEntity; });
		if (mtoEntity.length > 0) {
			var option = "<option EntityLogicalName='" + manyToOne[j].ReferencedEntity + "'";
			var selfReferencing = "";
			if (Xrm.RESTBuilder.Endpoint === "2011") {
				selfReferencing = ((manyToOne[j].ReferencedEntity === manyToOne[j].ReferencingEntity) ? "Referencing" : "");
			}
			option += "RelationshipSchemaName='" + selfReferencing + manyToOne[j].SchemaName + "'";
			option += "ReferencingAttribute='" + manyToOne[j].ReferencingAttribute + "'>";
			option += "(N:1) (" + manyToOne[j].SchemaName + ") " + $(mtoEntity[0]).attr("value") + "</option>";
			options.push(option);
		}
		$("#ExpandEntity").html(options.join(""));
		Xrm.RESTBuilder.RelatedEntities.push(manyToOne[j].ReferencedEntity);
	}
	for (var k = 0; k < manyToMany.length; k++) {
		Xrm.RESTBuilder.RelatedEntities.push(manyToMany[k].Entity1LogicalName);
		Xrm.RESTBuilder.RelatedEntities.push(manyToMany[k].Entity2LogicalName);
	}
	Xrm.RESTBuilder.SortSelect($("#ExpandEntity"));
	$("#ExpandEntity").prepend("<option EntityLogicalName='' RelationshipSchemaName='' ReferencingAttribute=''>(Entity) " + Xrm.RESTBuilder.EntitySchema + "</option>");
	if (Xrm.RESTBuilder.CurrentEntityExpandedAttributes.length === 0) {
		Xrm.RESTBuilder.RelatedEntities = Xrm.RESTBuilder.RemoveArrayDuplicates(Xrm.RESTBuilder.RelatedEntities);
		Xrm.RESTBuilder.GetExpandedAttributeMetadata(Xrm.RESTBuilder.RelatedEntities);
	}
	$("#ExpandEntity").prop("selectedIndex", 0);
};

Xrm.RESTBuilder.BuildTopString = function () {
	var top = $("#TopAmount").val();
	top = Xrm.RESTBuilder.MakeValidNumber(top);
	return (top !== "") ? "$top=" + top : null;
};

Xrm.RESTBuilder.BuildTopString_WebApi = function () {
	var top = $("#TopAmount").val();
	top = Xrm.RESTBuilder.MakeValidNumber(top);
	return (top !== "") ? "odata.maxpagesize=" + top : null;
};

Xrm.RESTBuilder.BuildCountString_WebApi = function () {
	return (Xrm.RESTBuilder.Count) ? "$count=true" : null;
};

Xrm.RESTBuilder.BuildSkipString = function () {
	var skip = $("#SkipAmount").val();
	skip = Xrm.RESTBuilder.MakeValidNumber(skip);
	return (skip !== "") ? "$skip=" + skip : null;
};

Xrm.RESTBuilder.BuildPrefer = function (annotations, top, returnRecord) {

	var preferItems = [];
	var prefer = null;
	if (annotations) {
		preferItems.push("odata.include-annotations=\\\"*\\\"");
	}

	if (top) {
		preferItems.push(top);
	}

	if (returnRecord) {
		preferItems.push("return=representation");
	}

	if (preferItems.length) {
		prefer = preferItems.join(",");
		prefer = "\"Prefer\", \"" + prefer;
		prefer += "\"";
	}

	return prefer;
}

Xrm.RESTBuilder.BuildExpandString = function () {
	var expand = [];
	if ($("#ExpandEntity option:selected").attr("RelationshipSchemaName") !== "" && Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		expand.push($("#ExpandEntity option:selected").attr("RelationshipSchemaName"));
	}

	for (var i = 2; i < 5; i++) {
		for (var j = 0; j < $("#SelectList" + i + " li input:checked").length; j++) {
			var selfReferencing = (JSON.parse($($("#SelectList" + i + " li input:checked")[j]).attr("selfreferencing")) ? "Referencing" : "");
			expand.push(selfReferencing + $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[0]);
		}
	}

	expand = Xrm.RESTBuilder.RemoveArrayDuplicates(expand);
	return (expand.length > 0) ? "$expand=" + expand.join(",").trim() : null;
};

Xrm.RESTBuilder.BuildExpandString_WebApi = function () {
	var expand = [];
	if ($("#ExpandEntity option:selected").attr("ReferencingAttribute") !== "") {
		expand.push($("#ExpandEntity option:selected").attr("ReferencingAttribute"));
	}

	var expands = [];
	for (var i = 2; i < 5; i++) {
		var entities = [];
		var entity = new Object();
		entity.name = "";
		entity.fields = [];

		for (var j = 0; j < $("#SelectList" + i + " li input:checked").length; j++) {
			var referenceEntity, logical;
			switch (i) {
				case 2:
					referenceEntity = $.grep(Xrm.RESTBuilder.CurrentEntityOneToManyRelationships, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[0] })[0].ReferencingEntity;
					var otmEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === referenceEntity; });
					logical = $.grep(otmEntity[0].Attributes, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[1] })[0].LogicalName;
					break;
				case 3:
					referenceEntity = $.grep(Xrm.RESTBuilder.CurrentEntityManyToOneRelationships, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[0] })[0].ReferencedEntity;
					var mtoEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === referenceEntity; });
					logical = $.grep(mtoEntity[0].Attributes, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[1] })[0].LogicalName;
					break;
				case 4:
					referenceEntity = $.grep(Xrm.RESTBuilder.CurrentEntityManyToManyRelationships, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[0] })[0].Entity1LogicalName;
					if (referenceEntity === Xrm.RESTBuilder.EntityLogical) {
						referenceEntity = $.grep(Xrm.RESTBuilder.CurrentEntityManyToManyRelationships, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[0] })[0].Entity2LogicalName;
					}
					var mtmEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === referenceEntity; });
					logical = $.grep(mtmEntity[0].Attributes, function (e) { return e.SchemaName === $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[1] })[0].LogicalName;
					break;
			}
			var tempName;
			if (i === 3) {
				tempName = $($("#SelectList" + i + " li input:checked")[j]).attr("referencingentitynavigationpropertyname");
			} else {
				tempName = $($("#SelectList" + i + " li input:checked")[j]).val().split("/")[0];
			}
			if (tempName !== entity.name) {
				entity = new Object();
				entity.name = tempName;
				entity.fields = [];
				entities.push(entity);
			}
			entity.fields.push(logical);
		}

		for (var l = 0; l < entities.length; l++) {
			var select = entities[l].fields.join(",");
			expands.push(entities[l].name + "($select=" + select + ")");
		}
	}

	return (expands.length > 0) ? "$expand=" + expands.join(",").trim() : null;
};

Xrm.RESTBuilder.BuildFilterString = function () {
	var filters = [];
	var groups = [];
	var rowGroups = [];
	var ex = $("#ExpandEntity option:selected").attr("RelationshipSchemaName");

	// Remove any empty filter rows
	var rows = $("#TableRetrieve tbody tr");
	for (var z = 0; z < rows.length; z++) {
		var attrField = $(rows[z]).find(".Attribute:first").val();
		if (attrField === null || attrField === undefined) {
			$("#TableRetrieve tbody tr").eq(z).remove();
		}
	}

	for (var a = 0; a < $("#TableRetrieve tbody tr").length; a++) {
		var tr = $("#TableRetrieve tbody tr")[a];
		var filter = [];
		var field = $(tr).find(".Attribute:first").val();
		var cop = $(tr).find(".Filter:first").val();
		var val = $(tr).find("input:first").val();
		var sel = $(tr).find("td:eq(3) select:first").val();
		var lop = $(tr).find(".Logical:first").val();

		var allcls = $(tr).attr("class");
		if (allcls !== null && allcls != undefined) {
			var cls = allcls.split(" ");
			for (var x = 0; x < cls.length; x++) {
				if (cls[x].indexOf("and|") !== -1 || cls[x].indexOf("or|") !== -1) {
					groups[a] = cls[x];
					rowGroups[a] = $(tr).find("td:eq(5) .GroupLogical").val();
				}
			}
		}

		// Is the value the input or select field
		var value = (val !== null && val !== undefined) ? val : sel;
		if (field === null || field === undefined) {
			continue;
		}

		var type = null;
		if ($("#ExpandEntity").prop("selectedIndex") === 0) {
			type = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
		} else {
			var expandEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === $("#ExpandEntity option:selected").attr("EntityLogicalName"); });
			type = $.grep(expandEntity[0].Attributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
		}
		type = type[0].AttributeType;

		if (type !== "DateTime") {
			value = Xrm.RESTBuilder.ReplaceSpecial(value);
		}

		if (ex !== "") {
			filter.push(ex + "/");
		}

		if (cop !== "[field] ne null" && cop !== "[field] eq null") {
			if (cop.indexOf("[field]") === -1) {
				filter.push(field);
				if (type === "Owner" || type === "Customer" || type === "Lookup") {
					filter.push("/Id");
				}
				if (type === "Picklist" || type === "Money" || type === "State" || type === "Status") {
					filter.push("/Value");
				}
			}
		}

		filter.push(" ");
		cop = cop.replace("[field]", field);
		if (cop.indexOf("[value]") !== -1) {
			filter.push(cop.replace("[value]", "'" + value + "'"));
		} else {
			if (type === "Uniqueidentifier" || type === "Owner" || type === "Customer" || type === "Lookup") {
				filter.push(cop + (($(tr).find("input:first").is(":visible") ? " (guid'" + value + "')" : "")));
			} else if (type === "DateTime") {
				filter.push(cop + (($(tr).find("input:first").is(":visible") ? " datetime'" + new Date(value + ((sel !== undefined) ? " " + sel : "")).toISOString() + "'" : "")));
			} else if (type === "Boolean") {
				var booleanValue = (value === "0") ? "false" : "true";
				filter.push(cop + (($(tr).find("td:eq(3) select:first").is(":visible") ? " " + booleanValue : "")));
			} else if (type === "Decimal" || type === "Double" || type === "BigInt" || type === "Integer" || type === "Money" || type === "State" || type === "Status" || type === "Picklist") {
				if (type !== "State" && type !== "Status" && type !== "Picklist") {
					filter.push(cop + (($(tr).find("input:first").is(":visible") ? " " + value : "")));
				} else {
					filter.push(cop + (($(tr).find("td:eq(3) select:first").is(":visible") ? " " + value : "")));
				}
			} else if (type === "EntityName") {
				filter.push(cop + (($(tr).find("td:eq(3) select:first").is(":visible") ? " '" + $(tr).find("td:eq(3) select:first option:selected").attr("logicalname") + "'" : "")));
			} else {
				filter.push(cop + (($(tr).find("input:first").is(":visible") ? " '" + value + "'" : "")));
			}
		}

		if (!($("#TableRetrieve tbody tr").length - 1 === a)) {
			filter.push(" ");
			filter.push(lop);
		}

		filters.push(filter.join(""));
	}

	for (var i = 0; i < filters.length; i++) {
		if ((groups[i] !== null && groups[i] !== undefined) && (groups[i] !== groups[i - 1])) {
			filters[i] = "(" + filters[i];
		}

		if ((groups[i] !== null && groups[i] !== undefined) && (groups[i] !== groups[i + 1])) {
			if (filters[i].indexOf(" and") !== -1) {
				filters[i] = filters[i].substring(0, filters[i].length - 4);
			}
			if (filters[i].indexOf(" or") !== -1) {
				filters[i] = filters[i].substring(0, filters[i].length - 3);
			}
			filters[i] += ")";
			if (i !== (filters.length - 1)) {
				filters[i] += " " + rowGroups[i];
			}
		}
	}

	Xrm.RESTBuilder.AddAttribute_Click();

	return (filters.length > 0) ? "$filter=" + filters.join(" ").trim() : null;
};

Xrm.RESTBuilder.BuildFilterString_WebApi = function () {
	var filters = [];
	var groups = [];
	var rowGroups = [];

	// Remove any empty filter rows
	var rows = $("#TableRetrieve tbody tr");
	for (var z = 0; z < rows.length; z++) {
		var attrField = $(rows[z]).find(".Attribute:first").val();
		if (attrField === null || attrField === undefined) {
			$("#TableRetrieve tbody tr").eq(z).remove();
		}
	}

	for (var a = 0; a < $("#TableRetrieve tbody tr").length; a++) {
		var tr = $("#TableRetrieve tbody tr")[a];
		var filter = [];
		var attribute = null;
		var isExpandFilter = $("#ExpandEntity").prop("selectedIndex") !== 0 ? true : false;

		if ($("#ExpandEntity").prop("selectedIndex") === 0) {
			attribute = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
		} else {
			var expandEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === $("#ExpandEntity option:selected").attr("EntityLogicalName"); });
			attribute = $.grep(expandEntity[0].Attributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
		}
		var type = attribute[0].AttributeType;
		var field = attribute[0].LogicalName;


		var cop = $(tr).find(".Filter:first").val();
		if (cop.indexOf("substringof([value],[field])") !== -1) {
			cop = cop.replace("substringof([value],[field])", "contains([field], [value])");
		}

		cop = cop.replace("[field] ", "");

		var val = null;
		if (type === "Boolean" || type === "State" || type === "Status" || type === "Picklist" || type === "ManagedProperty") {
			if ($(tr).find("td:eq(4) select:first").is(":visible")) {
				val = $(tr).find("td:eq(4) select:first").val();
			}
		}
		else {
			val = $(tr).find("input:first").val();
		}

		var sel = $(tr).find("td:eq(3) select:first").val();
		var lop = $(tr).find(".Logical:first").val();

		var allcls = $(tr).attr("class");
		if (allcls !== null && allcls != undefined) {
			var cls = allcls.split(" ");
			for (var x = 0; x < cls.length; x++) {
				if (cls[x].indexOf("and|") !== -1 || cls[x].indexOf("or|") !== -1) {
					groups[a] = cls[x];
					rowGroups[a] = $(tr).find("td:eq(5) .GroupLogical").val();
				}
			}
		}

		// Is the value the input or select field
		var value = (val !== null && val !== undefined) ? val : sel;
		if (field === null || field === undefined) {
			continue;
		}

		if (type !== "DateTime" && val !== null) {
			value = Xrm.RESTBuilder.ReplaceSpecial(value);
		}

		if (isExpandFilter) {
			filter.push($("#ExpandEntity option:selected").attr("ReferencingAttribute") + "/");
		}

		if (cop.indexOf("[value]") !== -1) {
			filter.push(cop.replace("[field]", field).replace("[value]", "'" + value + "'"));
		} else {
			if (!isExpandFilter) {
				filter.push(" ");
			}

			if (type === "Owner" || type === "Customer" || type === "Lookup") {
				filter.push("_" + field + "_value" + " " + cop + (($(tr).find("input:first").is(":visible") ? " " + value : "")));
			}
			else if (type === "DateTime") {
				var dateType = attribute[0].Format;
				if (dateType === "DateOnly") {
					var dateSplit = value.split("/");
					filter.push(field + " " + cop + (($(tr).find("input:first").is(":visible") ? " " + dateSplit[2] + "-" + dateSplit[0] + "-" + dateSplit[1] : "")));
				} else {
					var timeVal = $(tr).find(".Time").val();
					filter.push(field + " " + cop + (($(tr).find("input:first").is(":visible") ? " " + new Date(value + ((timeVal !== "") ? " " + timeVal : "")).toISOString() : "")));
				}
			}
			else if (type === "Boolean") {
				var booleanValue = (value === "0") ? "false" : "true";
				filter.push(field + " " + cop + (($(tr).find("td:eq(4) select:first").is(":visible") ? " " + booleanValue : "")));
			}
			else if (type === "ManagedProperty") {
				filter.push(field + "/Value " + cop + (($(tr).find("td:eq(4) select:first").is(":visible") ? " " + value : "")));
			}
			else if (type === "Decimal" || type === "Double" || type === "BigInt" || type === "Integer" || type === "Money" ||
				type === "Uniqueidentifier" || type === "State" || type === "Status" || type === "Picklist") {
				if (type !== "State" && type !== "Status" && type !== "Picklist") {
					filter.push(field + " " + cop + (($(tr).find("input:first").is(":visible") ? " " + value : "")));
				}
				else {
					filter.push(field + " " + cop + (($(tr).find("td:eq(4) select:first").is(":visible") ? " " + value : "")));
				}
			}
			else if (type === "EntityName") {
				filter.push(field + " " + cop + " '" + $(tr).find("td:eq(4) select:first option:selected").attr("logicalname") + "'");
			}
			else {
				filter.push(field + " " + cop + (($(tr).find("input:first").is(":visible") ? " " + "'" + value + "'" : "")));
			}
		}

		if (!($("#TableRetrieve tbody tr").length - 1 === a)) {
			filter.push(" ");
			filter.push(lop);
		}

		filters.push(filter.join(""));
	}

	for (var i = 0; i < filters.length; i++) {
		if ((groups[i] !== null && groups[i] !== undefined) && (groups[i] !== groups[i - 1])) {
			filters[i] = "(" + filters[i];
		}

		if ((groups[i] !== null && groups[i] !== undefined) && (groups[i] !== groups[i + 1])) {
			if (filters[i].indexOf(" and") !== -1) {
				filters[i] = filters[i].substring(0, filters[i].length - 4);
			}
			if (filters[i].indexOf(" or") !== -1) {
				filters[i] = filters[i].substring(0, filters[i].length - 3);
			}
			filters[i] += ")";
			if (i !== (filters.length - 1)) {
				filters[i] += " " + rowGroups[i];
			}
		}
	}

	Xrm.RESTBuilder.AddAttribute_Click();

	return (filters.length > 0) ? "$filter=" + filters.join(" ").trim() : null;
};

Xrm.RESTBuilder.BuildOrderByString = function () {
	var orderby = "";
	for (var i = 0; i < $("#TableOrderBy tbody tr").length; i++) {
		var tr = $("#TableOrderBy tbody tr")[i];
		var attr = $(tr).find(".OrderBy").val();
		var order = $(tr).find("input[name^='Order_']:checked").val();
		if (attr !== null && attr !== undefined) {
			orderby += attr + " " + order + ",";
		}
	}
	return (orderby !== "") ? "$orderby=" + orderby.slice(0, -1).trim() : null;
};

Xrm.RESTBuilder.BuildOrderByString_WebApi = function () {
	var orderby = "";
	for (var i = 0; i < $("#TableOrderBy tbody tr").length; i++) {
		var tr = $("#TableOrderBy tbody tr")[i];
		if ($(tr).find(".OrderBy").val() === null) {
			continue;
		}
		var attr = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === $(tr).find(".OrderBy").val(); })[0].LogicalName;
		var order = $(tr).find("input[name^='Order_']:checked").val();
		if (attr !== null && attr !== undefined) {
			orderby += attr + " " + order + ",";
		}
	}
	return (orderby !== "") ? "$orderby=" + orderby.slice(0, -1).trim() : null;
};

Xrm.RESTBuilder.CreateGetParameter = function (name, value) {
	value = encodeURIComponent(value);
	value = value.replaceAll("'", "%27");
	return "@" + name + "=" + value;
}

Xrm.RESTBuilder.CreateGetParameterAliases = function (parameters) {
	if (!parameters)
		return null;

	var aliases = [];
	var split = parameters.split("&")
	for (var i = 0; i < split.length; i++) {
		var name = split[i].split("=");
		aliases.push(name[0].slice(1) + "=" + name[0]);
	}
	return aliases.join(",");
}

Xrm.RESTBuilder.BuildParameters = function (item, returnGetParameters) {
	if (item.Parameters === null || item.Parameters === undefined || item.Parameters.length === 0)
		return null;

	var parameters = [];
	var getParameters = [];
	parameters.push("var parameters = {};\n");
	if (item.IsBound && item.Parameters[0].Name === "entity" && Xrm.RESTBuilder.Library === "XrmWebApi") {
		parameters.push("var entity = {};\n");
		parameters.push("entity.id = \"" + $("#TargetId").val() + "\";\n");
		parameters.push("entity.entityType = \"" + Xrm.RESTBuilder.ParameterTypeToEntityName(item.Parameters[0].Type) + "\";\n");
		parameters.push("parameters.entity = entity;\n");
	}

	for (var i = 0; i < $("#InputParameters tbody tr").length; i++) {
		var tr = $("#InputParameters tbody tr")[i];
		var parameter = $.grep(item.Parameters, function (e) { return e.Name === $(tr).find("td:eq(2)").text(); });

		// Skip creating for the "entity" parameter as the id & type are passed in the url except Xrm.WebApi
		if (item.IsBound && parameter[0].Name === "entity" && Xrm.RESTBuilder.Library !== "XrmWebApi")
			continue;

		if (!$(tr).find("input:checkbox:first").is(":checked"))
			continue;

		switch (parameter[0].Type) {
			case "Edm.Boolean":
				var booleanValue = $(tr).find("select:first option:selected").val();
				if (!booleanValue)
					booleanValue = "true";
				parameters.push("parameters." + parameter[0].Name + " = " + booleanValue.toLowerCase() + ";\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, booleanValue.toLowerCase()));
				break;
			case "Edm.DateTimeOffset":
				var date = $(tr).find("input:eq(1)").val();
				if (!date)
					date = new Date().toLocaleDateString();
				var time = $(tr).find("select:eq(0)").val();
				var value = date + ((time !== "" && time !== undefined) ? " " + time : "");
				if (Xrm.RESTBuilder.Library !== "XrmWebApi")
					parameters.push("parameters." + parameter[0].Name + " = new Date(\"" + value + "\").toISOString();\n");
				else // this is a workaround becase Xrm.WebApi doesn't wrap the date in quotes on the body otherwise and it errors
					parameters.push("parameters." + parameter[0].Name + " = JSON.stringify(new Date(\"" + value + "\").toISOString());\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, new Date(value).toISOString()));
				break;
			case "Edm.Double":
			case "Edm.Decimal":
				var numberValue = $(tr).find("input:eq(1)").val();
				if (!numberValue)
					numberValue = 0;
				else
					numberValue = Xrm.RESTBuilder.MakeValidNumber(numberValue, true);
				parameters.push("parameters." + parameter[0].Name + " = " + numberValue + ";\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, numberValue));
				break;
			case "Edm.Int32":
			case "Edm.Int64":
				var numberValue = $(tr).find("input:eq(1)").val();
				if (!numberValue)
					numberValue = 0;
				else
					numberValue = Xrm.RESTBuilder.MakeValidNumber(numberValue);
				parameters.push("parameters." + parameter[0].Name + " = " + numberValue + ";\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, numberValue));
				break;
			case "mscrm.Label":
				var labelValue = $(tr).find("input:eq(1)").val();
				labelValue = Xrm.RESTBuilder.MakeValidString(labelValue);
				if (parameter[0].Optional && labelValue === "")
					continue;
				parameters.push("var " + parameter[0].Name.toLowerCase() + " = {};\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabels = [];\n");
				parameters.push("var " + parameter[0].Name.toLowerCase() + ".LocalizedLabel = {};\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabel.Label = \"" + labelValue + "\";\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabel.LanguageCode = 1033;\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabel.IsManaged = false;\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabel.MetadataId = \"" + Xrm.RESTBuilder.GenerateGuid() + "\";\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabel.HasChanged = false;\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".LocalizedLabels.push(" + parameter[0].Name.toLowerCase() + ".LocalizedLabel);\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".UserLocalizedLabel = {};\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".UserLocalizedLabel.Label = \"" + labelValue + "\";\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".UserLocalizedLabel.LanguageCode = 1033;\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".UserLocalizedLabel.IsManaged = false;\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".UserLocalizedLabel.MetadataId = \"" + Xrm.RESTBuilder.GenerateGuid() + "\";\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".UserLocalizedLabel.HasChanged = false;\n");
				parameters.push("parameters." + parameter[0].Name + " = " + parameter[0].Name.toLowerCase() + ";\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, "Not Handled"));
				break;
			case "Edm.Binary":
			case "Edm.String":
				var stringValue = "";
				if (parameter[0].Name === "EntityName" && !item.IsCustomAction) {
					stringValue = $(tr).find("select:first option:selected").attr("logicalname");
				}
				else {
					stringValue = $(tr).find("input:eq(1)").val();
				}
				stringValue = Xrm.RESTBuilder.MakeValidString(stringValue);
				parameters.push("parameters." + parameter[0].Name + " = \"" + stringValue + "\";\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, "'" + stringValue + "'"));
				break;
			case "Edm.Guid":
				var guidValue = $(tr).find("input:eq(1)").val();
				guidValue = Xrm.RESTBuilder.MakeValidGuid(guidValue);
				parameters.push("var " + parameter[0].Name.toLowerCase() + " = {};\n");
				parameters.push(parameter[0].Name.toLowerCase() + ".guid = \"" + guidValue + "\";\n");
				parameters.push("parameters." + parameter[0].Name + " = " + parameter[0].Name.toLowerCase() + ";\n");
				getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, guidValue));
				break;
			default:
				if (parameter[0].Type === "Collection(Edm.String)") {
					var stringValue = $(tr).find("input:eq(1)").val();
					stringValue = Xrm.RESTBuilder.MakeValidString(stringValue);
					parameters.push("parameters." + parameter[0].Name + " = [\"" + stringValue + "\"];\n");
					getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, "['" + stringValue + "']"));
				}
				else if (parameter[0].Type === "Collection(Edm.Int32)") {
					var numberValue = $(tr).find("input:eq(1)").val();
					if (!numberValue)
						numberValue = 0;
					else
						numberValue = Xrm.RESTBuilder.MakeValidNumber(numberValue);
					parameters.push("parameters." + parameter[0].Name + " = [" + numberValue + "];\n");
					getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, "[" + numberValue + "]"));
				}
				else if (Xrm.RESTBuilder.IsParameterEntity(parameter[0].Type) || Xrm.RESTBuilder.IsParameterCollection(parameter[0].Type)) {
					var entityLogical = Xrm.RESTBuilder.ParameterTypeToEntityName(parameter[0].Type);
					var primaryIdAttribute = Xrm.RESTBuilder.GetPrimaryIdAttribute(entityLogical);
					if (primaryIdAttribute === "") {
						primaryIdAttribute = "REPLACE_WITH_PRIMARY_ID_ATTRIBUTE";
						var parameterEntity = $(tr).find("select:first option:selected").attr("logicalname");
						if (parameterEntity !== "none") {
							var parameterEntityPrimaryId = Xrm.RESTBuilder.GetPrimaryIdAttribute(parameterEntity);
							if (parameterEntityPrimaryId)
								primaryIdAttribute = parameterEntityPrimaryId
						}
					}

					var parameterName = parameter[0].Name.toLowerCase();
					if (Xrm.RESTBuilder.IsParameterCollection(parameter[0].Type))
						parameterName = parameterName + "1";

					parameters.push("var " + parameterName + " = {};\n");
					var guidValue = $(tr).find("input:eq(1)").val();
					guidValue = Xrm.RESTBuilder.MakeValidGuid(guidValue);
					parameters.push(parameterName + "." + primaryIdAttribute + " = \"" + guidValue + "\"; // Delete if creating new record \n");

					var parameterEntityLogical = Xrm.RESTBuilder.ParameterTypeToEntityName(parameter[0].Type);
					if (parameterEntityLogical.substr(0, 7) === "REPLACE") {
						var parameterEntity = $(tr).find("select:first option:selected").attr("logicalname");
						if (parameterEntity !== "none")
							parameterEntityLogical = parameterEntity;
					}

					parameters.push(parameterName + "[\"@odata.type\"]" + " = \"Microsoft.Dynamics.CRM." + parameterEntityLogical + "\";\n");
					getParameters.push(Xrm.RESTBuilder.CreateGetParameter(parameter[0].Name, "{\"" + primaryIdAttribute + "\":\"" + guidValue + "\",\"@odata.type\":\"Microsoft.Dynamics.CRM."
						+ parameterEntityLogical + "\"}"));
					if (entityLogical.substr(0, 7) !== "REPLACE") {
						var entities = $.grep(Xrm.RESTBuilder.EntityMetadata, function (e) { return e.LogicalName === entityLogical; });
						if (entities.length === 1) {
							for (var j = 0; j < entities[0].Attributes.length; j++) {
								var entityTypes = $.grep(Xrm.RESTBuilder.EntityTypes, function (e) { return e.attributes.Name.value === entityLogical; });
								if (entityTypes.length !== 1)
									continue;
								var properties = $.grep($(entityTypes[0]).find("Property").toArray(), function (e) {
									var logicalName = entities[0].Attributes[j].LogicalName;
									if (entities[0].Attributes[j].AttributeType === "Lookup")
										logicalName = "_" + logicalName + "_value";
									return e.attributes.Name.value === logicalName;
								});
								if (properties.length !== 1)
									continue;
								var navigationProperties = $.grep($(entityTypes[0]).find("NavigationProperty").toArray(), function (e) {
									return e.attributes.Name.value === entities[0].Attributes[j].LogicalName;
								});
								if (navigationProperties.length !== 1)
									continue;
								parameters.push(Xrm.RESTBuilder.BuildParametersForEntity(properties[0].attributes.Type.value, entities[0].Attributes[j].LogicalName,
									navigationProperties[0].attributes.Type.value, parameterName));
							}
						}
					}
					if (Xrm.RESTBuilder.IsParameterEntity(parameter[0].Type))
						parameters.push("parameters." + parameter[0].Name + " = " + parameterName + ";\n");
					if (Xrm.RESTBuilder.IsParameterCollection(parameter[0].Type))
						parameters.push("parameters." + parameter[0].Name + " = [" + parameterName + "];\n");
				}
				else {
					parameters.push("parameters." + parameter[0].Name + " = \"" + parameter[0].Type + " Not Handled" + "\";\n");
				}
		}
	}

	if (parameters.length === 1)
		return null;

	parameters.push("\n");
	return !returnGetParameters ? parameters.join("") : getParameters.join("&");
}

Xrm.RESTBuilder.BuildParametersForEntity = function (type, paramName, entityType, variableName) {
	var parameters = [];
	switch (type) {
		case "Edm.Boolean":
			parameters.push(variableName + "." + paramName + " = true;\n");
			break;
		case "Edm.DateTimeOffset":
			parameters.push(variableName + "." + paramName + " = new Date(\"" + new Date().toLocaleString() + "\").toISOString();\n");
			break;
		case "Edm.Double":
		case "Edm.Decimal":
		case "Edm.Int32":
		case "Edm.Int64":
			parameters.push(variableName + "." + paramName + " = 0;\n");
			break;
		case "mscrm.Label":
			parameters.push("var " + paramName.toLowerCase() + " = {};\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabels = [];\n");
			parameters.push("var " + paramName.toLowerCase() + ".LocalizedLabel = {};\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabel.Label = \"???\";\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabel.LanguageCode = 1033;\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabel.IsManaged = false;\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabel.MetadataId = \"" + Xrm.RESTBuilder.GenerateGuid() + "\";\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabel.HasChanged = false;\n");
			parameters.push(paramName.toLowerCase() + ".LocalizedLabels.push(" + paramName.toLowerCase() + ".LocalizedLabel);\n");
			parameters.push(paramName.toLowerCase() + ".UserLocalizedLabel = {};\n");
			parameters.push(paramName.toLowerCase() + ".UserLocalizedLabel.Label = \"???\";\n");
			parameters.push(paramName.toLowerCase() + ".UserLocalizedLabel.LanguageCode = 1033;\n");
			parameters.push(paramName.toLowerCase() + ".UserLocalizedLabel.IsManaged = false;\n");
			parameters.push(paramName.toLowerCase() + ".UserLocalizedLabel.MetadataId = \"" + Xrm.RESTBuilder.GenerateGuid() + "\";\n");
			parameters.push(paramName.toLowerCase() + ".UserLocalizedLabel.HasChanged = false;\n");
			parameters.push(variableName + "." + paramName + " = " + paramName.toLowerCase() + ";\n");
			break;
		case "Edm.Binary":
		case "Edm.String":
			parameters.push(variableName + "." + paramName + " = \"???\";\n");
			break;
		case "Edm.Guid":
			var entityLogical = Xrm.RESTBuilder.ParameterTypeToEntityName(entityType);
			var primaryIdAttribute = "REPLACE_WITH_PRIMARY_ID_ATTRIBUTE";
			var entitySetName = "REPLACE_WITH_ENTITY_SET_NAME";
			if (entityLogical.substr(0, 7) !== "REPLACE") {
				primaryIdAttribute = Xrm.RESTBuilder.GetPrimaryIdAttribute(entityLogical);
				entitySetName = Xrm.RESTBuilder.GetEntitySetName(entityLogical);
			}
			parameters.push(variableName + "[\"" + primaryIdAttribute + "@odata.bind\"] = \"/" + entitySetName + "(" + Xrm.RESTBuilder.MakeValidGuid(null) + ")\";\n");
			break;
		default:
			parameters.push(variableName + "." + paramName + " = \"" + type + " Not Handled" + "\";\n");
			break;
	}

	return parameters.join("");
}

Xrm.RESTBuilder.GenerateGuid = function () {
	var d = new Date().getTime();
	var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
	});
	return uuid;
}

Xrm.RESTBuilder.ParameterTypeToEntityName = function (type) {
	type = type.replace("Collection(", "");
	type = type.replace(")", "");
	type = type.replace("mscrm.", "");
	type = type.replace("crmbaseentity", "REPLACE_WITH_ENTITY_LOGICAL_NAME");

	return type;
}

Xrm.RESTBuilder.ReplaceSpecial = function (value) {
	return encodeURIComponent(value).replace("'", "''");
}

Xrm.RESTBuilder.DisplayOutPut = function (js) {
	if (Xrm.RESTBuilder.Editor1 || Xrm.RESTBuilder.Editor2) {
		Xrm.RESTBuilder.Editor1.toTextArea();
		Xrm.RESTBuilder.Editor2.toTextArea();
	}

	Xrm.RESTBuilder.Editor1 = CodeMirror.fromTextArea(document.getElementById("ScriptOutput"), {
		mode: "javascript",
		lineNumbers: true,
		readOnly: true,
		blur: function () {
			Xrm.RESTBuilder.Editor1.setSelection(0);
		}
	});
	Xrm.RESTBuilder.Editor1.getDoc().setValue(js);

	if (!Xrm.RESTBuilder.CodeClipboard1) {
		Xrm.RESTBuilder.CodeClipboard1 = new Clipboard(".clipcode1", {
			text: function () {
				return Xrm.RESTBuilder.GetCodeMirrorJQuery("#ScriptOutput" + " + .CodeMirror").getDoc().getValue();
			}
		});
		Xrm.RESTBuilder.CodeClipboard1.on("success", function (e) {
			e.clearSelection();
			Xrm.RESTBuilder.BlockDiv(".CodeMirror", "Copied!");
			setTimeout(function () {
				Xrm.RESTBuilder.UnBlockDiv(".CodeMirror");
			}, 300);
		});
		Xrm.RESTBuilder.CodeClipboard1.on("error", function () {
			Xrm.RESTBuilder.BlockDiv(".CodeMirror", Xrm.RESTBuilder.CopyFallbackMessage());
			setTimeout(function () {
				Xrm.RESTBuilder.UnBlockDiv(".CodeMirror");
			}, 900);
		});
	}

	Xrm.RESTBuilder.Editor2 = CodeMirror.fromTextArea(document.getElementById("ScriptOutput2"), {
		mode: "javascript",
		lineNumbers: true,
		readOnly: false,
		blur: function () {
			Xrm.RESTBuilder.Editor2.setSelection(0);
		},
		indentUnit: 4
	});
	Xrm.RESTBuilder.Editor2.getDoc().setValue(js);

	if (!Xrm.RESTBuilder.CodeClipboard2) {
		Xrm.RESTBuilder.CodeClipboard2 = new Clipboard(".clipcode2", {
			text: function () {
				return Xrm.RESTBuilder.GetCodeMirrorJQuery("#ScriptOutput2" + " + .CodeMirror").getDoc().getValue();
			}
		});
		Xrm.RESTBuilder.CodeClipboard2.on("success", function (e) {
			e.clearSelection();
			Xrm.RESTBuilder.BlockDiv(".CodeMirror", "Copied!");
			setTimeout(function () {
				Xrm.RESTBuilder.UnBlockDiv(".CodeMirror");
			}, 300);
		});
		Xrm.RESTBuilder.CodeClipboard2.on("error", function () {
			Xrm.RESTBuilder.BlockDiv(".CodeMirror", Xrm.RESTBuilder.CopyFallbackMessage());
			setTimeout(function () {
				Xrm.RESTBuilder.UnBlockDiv(".CodeMirror");
			}, 900);
		});
	}

	$("#Generate").hide();
	$("#Output").show();
};

Xrm.RESTBuilder.CopyFallbackMessage = function () {
	var actionMsg;
	var actionKey = (action === "cut" ? "X" : "C");

	if (/iPhone|iPad/i.test(navigator.userAgent)) {
		actionMsg = "No support :(";
	}
	else if (/Mac/i.test(navigator.userAgent)) {
		actionMsg = "Press ⌘-" + actionKey + " to " + action;
	}
	else {
		actionMsg = "Press Ctrl-" + actionKey + " to " + action;
	}
	return actionMsg;
}

/*
Events
*/

// Execute JavaScript in code output window
Xrm.RESTBuilder.Execute_Click = function () {
	var editor = ($("#tabs").tabs("option", "active") === 0) ? Xrm.RESTBuilder.Editor1 : Xrm.RESTBuilder.Editor2;
	$("#ResponseObject").text("");

	var script;
	if (editor === Xrm.RESTBuilder.Editor1) {
		if (Xrm.RESTBuilder.ReplaceLine.indexOf("results") !== -1) {
			script = editor.getValue().replace(Xrm.RESTBuilder.ReplaceLine, Xrm.RESTBuilder.ReplaceLine + " Xrm.RESTBuilder.ShowResults(results);$.unblockUI();");
		} else if (Xrm.RESTBuilder.ReplaceLine.indexOf("result") !== -1) {
			script = editor.getValue().replace(Xrm.RESTBuilder.ReplaceLine, Xrm.RESTBuilder.ReplaceLine + " Xrm.RESTBuilder.ShowResults(result);$.unblockUI();");
		} else {
			script = editor.getValue().replace(Xrm.RESTBuilder.ReplaceLine, Xrm.RESTBuilder.ReplaceLine + " $.unblockUI();");
		}
		script = script.replace(Xrm.RESTBuilder.ErrorReplaceLine, Xrm.RESTBuilder.ErrorReplaceLine + " $.unblockUI();");
		if (Xrm.RESTBuilder.NoChangeReplaceLine !== "" && Xrm.RESTBuilder.NoChangeReplaceLine !== undefined) {
			script = script.replace(Xrm.RESTBuilder.NoChangeReplaceLine, Xrm.RESTBuilder.NoChangeReplaceLine + " $.unblockUI();");
		}
	} else {
		script = editor.getValue();
	}

	if (!Xrm.RESTBuilder.ValidateCode(script)) {
		return;
	}

	if (editor === Xrm.RESTBuilder.Editor1) {
		Xrm.RESTBuilder.Block();
	}

	var error = Xrm.RESTBuilder.ExecuteCode(script);
	if (error) {
		return;
	}

	if (Xrm.RESTBuilder.Type === "Retrieve" || Xrm.RESTBuilder.Type === "RetrieveMultiple" || Xrm.RESTBuilder.Type === "RetrieveNextLink" ||
		(Xrm.RESTBuilder.Type === "Create" && Xrm.RESTBuilder.Endpoint === "2011") || Xrm.RESTBuilder.Type === "PredefinedQuery" ||
		(Xrm.RESTBuilder.Type === "Action" && Xrm.RESTBuilder.SelectedAction.ReturnTypes.length !== 0) ||
		(Xrm.RESTBuilder.Type === "Function" && Xrm.RESTBuilder.SelectedFunction.ReturnTypes.length !== 0)) {
		$("#tabs").tabs({ active: 1 });
	}
};

Xrm.RESTBuilder.ExecuteCode = function (script) {
	var generatedCode = new Function(script);

	try {
		generatedCode();
	} catch (e) {
		$.unblockUI();
		Xrm.RESTBuilder.DisplayAlert(e.message);
		return true;
	}

	return false;
}

Xrm.RESTBuilder.FormatCode_Click = function () {
	var unformatted = Xrm.RESTBuilder.Editor2.getValue();
	var formatted = window.js_beautify(unformatted, { indent_size: 4 });
	Xrm.RESTBuilder.Editor2.setValue(formatted);
}

Xrm.RESTBuilder.FormatFetch_Click = function () {
	var unformatted = Xrm.RESTBuilder.FetchEditor.getValue();
	var formatted = vkbeautify.xml(unformatted, 2);
	Xrm.RESTBuilder.FetchEditor.setValue(formatted);
}

Xrm.RESTBuilder.ValidateCode = function (script) {
	try {
		var syntax = esprima.parse(script, { tolerant: true, loc: true });
		var errors = syntax.errors;
		if (errors.length > 0) {
			var errorString = "";
			for (var j = 0; j < errors.length; j++) {
				errorString += "Line " + errors[j].lineNumber + ": " + errors[j].description + "\n";
			}
			Xrm.RESTBuilder.DisplayAlert("Code Errors Detected:\n" + errorString);
			return false;
		}
	} catch (e) {
		Xrm.RESTBuilder.DisplayAlert("Code Errors Detected:\n" + e.message);
		return false;
	}

	return true;
}

Xrm.RESTBuilder.ValidateFetchXml = function (xml) {
	try {
		$.parseXML(xml);
		return true;
	} catch (e) {
		return false;
	}
}

Xrm.RESTBuilder.GetCodeMirrorJQuery = function (target) {
	// http://stackoverflow.com/questions/9492842/does-codemirror-provide-cut-copy-and-paste-api
	var $target = target instanceof jQuery ? target : $(target);
	if ($target.length === 0) {
		throw new Error("Element does not reference a CodeMirror instance.");
	}

	if (!$target.hasClass("CodeMirror")) {
		if ($target.is("textarea")) {
			$target = $target.next(".CodeMirror");
		}
	}

	return $target.get(0).CodeMirror;
};

Xrm.RESTBuilder.CleanResults_Click = function () {
	var label = $("#CleanResults").button("option", "label");
	if (label === "Raw Results") {
		$("#CleanResults").button("option", "label", "Clean Results").button("option", "icons", { primary: "ui-icon-carat-1-s" });
	} else {
		$("#CleanResults").button("option", "label", "Raw Results").button("option", "icons", { primary: "ui-icon-carat-1-n" });
	}

	Xrm.RESTBuilder.ShowResults(Xrm.RESTBuilder.RawResults);
};

Xrm.RESTBuilder.DisplayRetrieveUrl_Click = function () {
	$("#Url .CodeMirror").remove();

	var req = new XMLHttpRequest();
	req.open("GET", $("#RetrieveUrl").text(), true);
	req.onreadystatechange = function () {
		if (req.readyState === 4 && req.status === 200) {
			Xrm.RESTBuilder.UrlResultEditor = CodeMirror.fromTextArea(document.getElementById("RetrieveUrlResult"), {
				mode: "xml",
				readOnly: true,
				blur: function () {
					Xrm.RESTBuilder.UrlResultEditor.setSelection(0);
				}
			});
			Xrm.RESTBuilder.UrlResultEditor.setSize("100%", "425px");
			Xrm.RESTBuilder.UrlResultEditor.getDoc().setValue(req.responseText);
			$("#CopyUrlResults").button("option", "disabled", false);

			if (!Xrm.RESTBuilder.UrlResultClipboard) {
				Xrm.RESTBuilder.UrlResultClipboard = new Clipboard(".clipurlresult", {
					text: function () {
						return Xrm.RESTBuilder.GetCodeMirrorJQuery("#RetrieveUrlResult" + " + .CodeMirror").getDoc().getValue();
					}
				});
				Xrm.RESTBuilder.UrlResultClipboard.on("success", function (e) {
					e.clearSelection();
					Xrm.RESTBuilder.BlockDiv(".CodeMirror", "Copied!");
					setTimeout(function () {
						Xrm.RESTBuilder.UnBlockDiv(".CodeMirror");
					}, 300);
				});
				Xrm.RESTBuilder.UrlResultClipboard.on("error", function () {
					Xrm.RESTBuilder.BlockDiv(".CodeMirror", Xrm.RESTBuilder.CopyFallbackMessage());
					setTimeout(function () {
						Xrm.RESTBuilder.UnBlockDiv(".CodeMirror");
					}, 900);
				});
			}
		}
	};
	req.send(null);
};

Xrm.RESTBuilder.Async_Change = function () {
	Xrm.RESTBuilder.Async = $.parseJSON($("input[name='Async']:checked").val());
};

Xrm.RESTBuilder.Count_Change = function () {
	Xrm.RESTBuilder.Count = $.parseJSON($("input[name='Count']:checked").val());
};

Xrm.RESTBuilder.DetectChanges_Change = function () {
	Xrm.RESTBuilder.DetectChanges = $.parseJSON($("input[name='DetectChanges']:checked").val());
};

Xrm.RESTBuilder.AuthToken_Change = function () {
	Xrm.RESTBuilder.AuthToken = $.parseJSON($("input[name='AuthToken']:checked").val());
};

Xrm.RESTBuilder.Impersonate_Change = function () {
	Xrm.RESTBuilder.Impersonate = $.parseJSON($("input[name='Impersonate']:checked").val());
	if (Xrm.RESTBuilder.Impersonate) {
		$("#ImpersonateId").show();
	} else {
		$("#ImpersonateId").hide();
	}
};

Xrm.RESTBuilder.ReturnRecord_Change = function () {
	Xrm.RESTBuilder.ReturnRecord = $.parseJSON($("input[name='ReturnRecord']:checked").val());

	if (Xrm.RESTBuilder.ReturnRecord) {
		$("#FormattedValuesTrue").prop("checked", "true").button("refresh");
	} else {
		$("#FormattedValuesFalse").prop("checked", "true").button("refresh");
	}
	Xrm.RESTBuilder.FormattedValues_Change();
};

Xrm.RESTBuilder.FormattedValues_Change = function () {
	Xrm.RESTBuilder.FormattedValues = $.parseJSON($("input[name='FormattedValues']:checked").val());
};

Xrm.RESTBuilder.PreventCreate_Change = function () {
	Xrm.RESTBuilder.PreventCreate = $.parseJSON($("input[name='PreventCreate']:checked").val());
	if (Xrm.RESTBuilder.PreventUpdate) {
		$("#PreventUpdateFalse").prop("checked", "true").button("refresh");
		Xrm.RESTBuilder.PreventUpdate = false;
	}
};

Xrm.RESTBuilder.PreventUpdate_Change = function () {
	Xrm.RESTBuilder.PreventUpdate = $.parseJSON($("input[name='PreventUpdate']:checked").val());
	if (Xrm.RESTBuilder.PreventCreate) {
		$("#PreventCreateFalse").prop("checked", "true").button("refresh");
		Xrm.RESTBuilder.PreventCreate = false;
	}
};

Xrm.RESTBuilder.SetAlternateKeyState = function () {
	if (Xrm.RESTBuilder.Type !== "Retrieve" && Xrm.RESTBuilder.Type !== "Update" && Xrm.RESTBuilder.Type !== "Delete") {
		$(".AltKey").hide();
		$(".AltKeyField").hide();
	} else {
		$(".AltKey").show();
	}

	if (Xrm.RESTBuilder.Library === "XrmWebApi") {
		$(".AltKey").button("option", "disabled", true);
	}
	else {
		if (Xrm.RESTBuilder.Endpoint === "WebApi" && Xrm.RESTBuilder.CurrentEntityAlternateKeys.length > 0) {
			$(".AltKey").button("option", "disabled", false);
		} else {
			$(".AltKey").button("option", "disabled", true);
		}
	}

	if ($("#AlternateKeyRetrieve").is(":visible")) {
		$("#AlternateKeyRetrieve").hide();
	}
	if (Xrm.RESTBuilder.Type === "Retrieve") {
		$("#RetrieveGUID").show();
	}
	if ($("#AlternateKeyUpdate").is(":visible")) {
		$("#AlternateKeyUpdate").hide();
	}
	if (Xrm.RESTBuilder.Type === "Update")
		$("#UpdateGUID").show();
	else
		$("#UpdateGUID").hide();
	if ($("#AlternateKeyDelete").is(":visible")) {
		$("#AlternateKeyDelete").hide();
	}
	$("#DeleteGUID").show();

	$(".AltKey").button("option", "label", "Use Alt. Key");
}

Xrm.RESTBuilder.Endpoint_Change = function () {
	Xrm.RESTBuilder.Endpoint = $("input[name='Endpoint']:checked").val();
	$("#TypeAction").button("option", "disabled", true);
	$("#TypeFunction").button("option", "disabled", true);
	Xrm.RESTBuilder.SetTopMax();
	Xrm.RESTBuilder.SetAlternateKeyState();

	if (Xrm.RESTBuilder.Endpoint === "2011") {
		$("#LibraryXRMST").button("option", "disabled", false);
		$("#LibrarySDK").button("option", "disabled", false);
		$("#LibrarySDKJQ").button("option", "disabled", false);
		$("#LibraryXSVC").button("option", "disabled", false);
		$("#LibraryXrmWebApi").button("option", "disabled", true);
		if ($("#LibraryXrmWebApi").is(":checked")) {
			$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
			Xrm.RESTBuilder.Library_Change();
		}
		$("#TypePredefinedQuery").button("option", "disabled", true);
		$("#FormattedValues").hide();
		$("#DetectChanges").hide();
		$("#AuthToken").hide();
		$("#Impersonate").hide();
		$("#ReturnRecord").hide();
		$("#RetrieveSkip").show();
		$("#RecordCount").hide();
		$("#ui-accordion-Accordion-header-1").show();
		$("#ui-accordion-Accordion-header-2").show();
		$("#ui-accordion-Accordion-header-3").show();
		$("#WebApiVersion").prop("disabled", true);
		$("#ExpandEntity").removeAttr("disabled");
		$("#TypeRetrieveNextLink").button("option", "disabled", true);
		$("#Upsert").hide();

		$("#PredefinedQuery").hide();
		if (Xrm.RESTBuilder.Type === "PredefinedQuery" || Xrm.RESTBuilder.Type === "Action") {
			$("#TypeRetrieveMultiple").prop("checked", "true").button("refresh");
			Xrm.RESTBuilder.Type_Change();
		}

		if (Xrm.RESTBuilder.Type === "Associate" || Xrm.RESTBuilder.Type === "Disassociate") {
			$("#LibrarySDKJQ").button("option", "disabled", true);
			if ($("#LibrarySDKJQ").is(":checked")) {
				$("#LibrarySDKJQ").prop("checked", "false").button("refresh");
				$("#LibraryJQ").prop("checked", "true").button("refresh");
			}
		}

		Xrm.RESTBuilder.DisplaySelfReferencingNtoN();
		Xrm.RESTBuilder.DisplaySelfReferencingAssociateNtoN();

		Xrm.RESTBuilder.ODataPath = Xrm.Page.context.getClientUrl() + "/XRMServices/2011/OrganizationData.svc/";
	} else {
		$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
		Xrm.RESTBuilder.Library = "XMLHTTP";
		$("#LibraryXRMST").button("option", "disabled", true);
		$("#LibrarySDK").button("option", "disabled", true);
		$("#LibrarySDKJQ").button("option", "disabled", true);
		$("#LibraryXSVC").button("option", "disabled", true);
		$("#TypePredefinedQuery").button("option", "disabled", false);
		$("#TypeAction").button("option", "disabled", false);
		$("#TypeFunction").button("option", "disabled", false);
		$("#WebApiVersion").prop("disabled", false);
		$("#ExpandEntity").removeAttr("disabled");
		$("#FormattedValues").show();
		$("#DetectChanges").show();
		$("#AuthToken").show();
		$("#Impersonate").show();
		$("#RetrieveSkip").hide();
		$("#RecordCount").show();
		$("#TypeRetrieveNextLink").button("option", "disabled", false);

		if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
			// Web API - expands on relationships aren't currently supported in 8.0
			if ($("#WebApiVersion").val() === "8.0") { // Expands are allowed in 8.1+
				Xrm.RESTBuilder.ClearSelectLists(2, 4);
				$("#Accordion").accordion("option", "active", 0);
				$("#ui-accordion-Accordion-header-1").hide();
				$("#ui-accordion-Accordion-header-2").hide();
				$("#ui-accordion-Accordion-header-3").hide();
				$("#ExpandEntity").attr("disabled", "disabled");
			}
		}

		if (parseFloat($("#WebApiVersion").val()) >= 9) {
			$("#LibraryXrmWebApi").button("option", "disabled", false);
		}
		else {
			$("#LibraryXrmWebApi").button("option", "disabled", true);
			$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
		}

		if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
			$("#ReturnRecord").show();
		}

		if (Xrm.RESTBuilder.Type === "Update") {
			$("#Upsert").show();
		}

		// Clear checked items in related entities until Web API supports this
		$("#Accordion").accordion("option", "active", 0);
		for (var x = 2; x < 5; x++) {
			$("#SelectList" + x + " li input:checked").removeAttr("checked");
		}

		Xrm.RESTBuilder.DisplaySelfReferencingNtoN();

		Xrm.RESTBuilder.ODataPath = Xrm.Page.context.getClientUrl() + "/api/data/v" + $("#WebApiVersion option:selected").val() + "/";
	}
};

Xrm.RESTBuilder.DisplaySelfReferencingNtoN = function () {
	// Web API - exapnds on self-referecing N:N relationships aren't possible in 8.0
	for (var i = 0; i < $("#SelectList4 li input").length; i++) {
		if (JSON.parse($($("#SelectList4 li input")[i]).attr("selfreferencing"))) {
			if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
				if (Xrm.RESTBuilder.Endpoint === "2011") {
					$($("#SelectList4 li")[i]).show();
				} else {
					if ($("#WebApiVersion").val() === "8.1") { // Expands are allowed in 8.1+
						$($("#SelectList4 li")[i]).show();
					} else {
						$($("#SelectList4 li")[i]).hide();
					}
				}
			} else {
				$($("#SelectList4 li")[i]).show();
			}
		}
	}
}

Xrm.RESTBuilder.DisplaySelfReferencingAssociateNtoN = function () {
	// Web API - associate/disassociate on self-referecing N:N relationships aren't possible
	for (var i = 0; i < $("#AssociateRelationship option").length; i++) {
		if (JSON.parse($($("#AssociateRelationship option")[i]).attr("selfreferencing")) && $($("#AssociateRelationship option")[i]).text().indexOf("(N:N)") !== -1) {
			if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
				if (Xrm.RESTBuilder.Endpoint === "2011") {
					$($("#AssociateRelationship option")[i]).show();
				} else {
					$($("#AssociateRelationship option")[i]).hide();
				}
			} else {
				$($("#AssociateRelationship option")[i]).show();
			}
		}
	}
}

Xrm.RESTBuilder.Type_Change = function () {
	Xrm.RESTBuilder.Type = $("input[name='Type']:checked").val();
	$("#" + Xrm.RESTBuilder.FindTypeTable()).find(" tbody tr").remove();
	$("#TableOrderBy tbody tr").remove();
	$("div.Method").hide();
	if (Xrm.RESTBuilder.Endpoint === "2011") {
		$("#LibrarySDKJQ").button("enable");
	}

	$("#EntityList option").filter(function () { return !this.value || $.trim(this.value).length === 0; }).remove();
	$("#CreateRequest").button("option", "disabled", false);
	$("#FormattedValues").show();
	$("#Entity").show();
	$("#Upsert").hide();

	switch (Xrm.RESTBuilder.Type) {
		case "RetrieveMultiple":
			$("#ExpandEntity").prop("selectedIndex", 0);
			$("#ExpandEntity").removeAttr("disabled");
			$("#OrderBy").show();
			$("#Retrieve").show();
			Xrm.RESTBuilder.AddAttribute_Click();
			Xrm.RESTBuilder.AddOrder_Click();
			if (Xrm.RESTBuilder.Endpoint === "WebApi") {
				// Web API - expands on relationships aren't currently supported in 8.0
				if ($("#WebApiVersion").val() === "8.0") { // Expands are allowed in 8.1+
					Xrm.RESTBuilder.ClearSelectLists(2, 4);
					$("#Accordion").accordion("option", "active", 0);
					$("#ui-accordion-Accordion-header-1").hide();
					$("#ui-accordion-Accordion-header-2").hide();
					$("#ui-accordion-Accordion-header-3").hide();
					$("#ExpandEntity").attr("disabled", "disabled");
				}

				$("#DetectChanges").hide();
				$("#FormattedValues").show();
				$("#ReturnRecord").hide();
				$("#RecordCount").show();

				// Clear checked items in related entities until Web API supports this
				$("#Accordion").accordion("option", "active", 0);
				for (var x = 2; x < 5; x++) {
					$("#SelectList" + x + " li input:checked").removeAttr("checked");
				}

				if (parseFloat($("#WebApiVersion").val()) >= 9) {
					$("#LibraryXrmWebApi").button("option", "disabled", false);
				}
				else {
					$("#LibraryXrmWebApi").button("option", "disabled", true);
				}
			} else {
				$("#DetectChanges").hide();
				$("#FormattedValues").hide();
				$("#RecordCount").hide();
			}
			break;
		case "Retrieve":
			$("#OrderBy").hide();
			$("#Retrieve").show();
			if (Xrm.RESTBuilder.Endpoint === "WebApi") {
				$("#DetectChanges").show();
				$("#FormattedValues").show();
				$("#RecordCount").hide();
				$("#ReturnRecord").hide();
				if (parseFloat($("#WebApiVersion").val()) >= 9) {
					$("#LibraryXrmWebApi").button("option", "disabled", false);
				}
				else {
					$("#LibraryXrmWebApi").button("option", "disabled", true);
				}
			} else {
				$("#DetectChanges").hide();
				$("#FormattedValues").hide();
				$("#RecordCount").hide();
			}
			// Expands on relationships aren't currently supported
			$("#ui-accordion-Accordion-header-1").show();
			$("#ui-accordion-Accordion-header-2").show();
			$("#ui-accordion-Accordion-header-3").show();
			break;
		case "Create":
		case "Update":
			Xrm.RESTBuilder.AddAttribute_Click();
			$("#CreateUpdate").show();
			if (Xrm.RESTBuilder.Endpoint === "WebApi") {
				if (Xrm.RESTBuilder.Type === "Update") {
					$("#Upsert").show();
				}
				$("#DetectChanges").hide();
				$("#FormattedValues").show();
				$("#RecordCount").hide();
				if (Number($("#WebApiVersion").val() >= 8.2)) {
					$("#ReturnRecord").show();
					$("#FormattedValues").show();
					if (!Xrm.RESTBuilder.ReturnRecord) {
						$("#FormattedValuesFalse").prop("checked", "true").button("refresh");
						Xrm.RESTBuilder.FormattedValues_Change();
					}
				} else {
					$("#FormattedValues").hide();
				}
				if (parseFloat($("#WebApiVersion").val()) >= 9) {
					$("#LibraryXrmWebApi").button("option", "disabled", false);
				}
				else {
					$("#LibraryXrmWebApi").button("option", "disabled", true);
				}
			}
			else {
				$("#DetectChanges").hide();
				$("#FormattedValues").hide();
				$("#RecordCount").hide();
			}
			break;
		case "Delete":
			$("#Delete").show();
			if (Xrm.RESTBuilder.Endpoint === "WebApi") {
				$("#DetectChanges").hide();
				$("#FormattedValues").hide();
				$("#RecordCount").hide();
				$("#ReturnRecord").hide();
				if (parseFloat($("#WebApiVersion").val()) >= 9) {
					$("#LibraryXrmWebApi").button("option", "disabled", false);
				}
				else {
					$("#LibraryXrmWebApi").button("option", "disabled", true);
				}
			}
			else {
				$("#DetectChanges").hide();
				$("#FormattedValues").hide();
				$("#RecordCount").hide();
			}
			break;
		case "Associate":
		case "Disassociate":
			$("#AssociateDisassociate").show();
			$("#LibraryXrmWebApi").button("option", "disabled", true);
			if ($("#LibraryXrmWebApi").is(":checked")) {
				$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
				Xrm.RESTBuilder.Library_Change();
			}
			if (Xrm.RESTBuilder.Endpoint === "WebApi") {
				$("#FormattedValues").hide();
				$("#DetectChanges").hide();
				$("#RecordCount").hide();
				$("#ReturnRecord").hide();
			}
			else {
				$("#DetectChanges").hide();
				$("#FormattedValues").hide();
				$("#RecordCount").hide();
			}
			$("#LibrarySDKJQ").button("option", "disabled", true);
			if ($("#LibrarySDKJQ").is(":checked")) {
				$("#LibrarySDKJQ").prop("checked", "false").button("refresh");
				$("#LibraryJQ").prop("checked", "true").button("refresh");
				Xrm.RESTBuilder.Library_Change();
			}
			if (Xrm.RESTBuilder.AssociateEntityOneToManyRelationships.length === 0) {
				Xrm.RESTBuilder.Block();
				Xrm.RESTBuilder.GetAssociateRelationshipMetadata($("#AssociateEntity1 option:selected").attr("LogicalName"));
			}
			break;
		case "PredefinedQuery":
			$("#DetectChanges").hide();
			$("#PredefinedQuery").show();
			$("#ReturnRecord").hide();
			$("#LibraryXrmWebApi").button("option", "disabled", true);
			if ($("#LibraryXrmWebApi").is(":checked")) {
				$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
				Xrm.RESTBuilder.Library_Change();
			}
			if (Xrm.RESTBuilder.FetchEditor) {
				Xrm.RESTBuilder.FetchEditor.toTextArea();
			}

			Xrm.RESTBuilder.FetchEditor = CodeMirror.fromTextArea(document.getElementById("Fetch"), {
				mode: "xml",
				lineNumbers: true
			});

			break;
		case "Action":
			$("#FormattedValues").hide();
			$("#DetectChanges").hide();
			$("#AuthToken").show();
			$("#Impersonate").show();
			$("#ReturnRecord").hide();
			$("#Message").show();
			$("#ActionDefinition").show();
			$("#EntityList").prepend("<option value='' logicalname='none' selected='selected'></option>");
			$("#TargetId").attr("disabled", "disabled");
			$("#FunctionDefinition").hide();
			$("#ActionDefinition").show();
			Xrm.RESTBuilder.BuildActionList();
			if (parseFloat($("#WebApiVersion").val()) >= 9) {
				$("#LibraryXrmWebApi").button("option", "disabled", false);
			}
			else {
				$("#LibraryXrmWebApi").button("option", "disabled", true);
			}
			break;
		case "Function":
			$("#FormattedValues").hide();
			$("#DetectChanges").hide();
			$("#AuthToken").show();
			$("#Impersonate").show();
			$("#ReturnRecord").hide();
			$("#Message").show();
			$("#FunctionDefinition").show();
			$("#EntityList").prepend("<option value='' logicalname='none' selected='selected'></option>");
			$("#TargetId").attr("disabled", "disabled");
			$("#FunctionDefinition").show();
			$("#ActionDefinition").hide();
			Xrm.RESTBuilder.BuildFunctionList();
			if (parseFloat($("#WebApiVersion").val()) >= 9) {
				$("#LibraryXrmWebApi").button("option", "disabled", false);
			}
			else {
				$("#LibraryXrmWebApi").button("option", "disabled", true);
			}
			break;
		case "RetrieveNextLink":
			$("#NextLink").show();
			$("#DetectChanges").show();
			$("#Entity").hide();
			$("#ReturnRecord").hide();
			$("#LibraryXrmWebApi").button("option", "disabled", true);
			if ($("#LibraryXrmWebApi").is(":checked")) {
				$("#LibraryXMLHTTP").prop("checked", "true").button("refresh");
				Xrm.RESTBuilder.Library_Change();
			}
			break;
	}

	Xrm.RESTBuilder.SetAlternateKeyState();
	(Xrm.RESTBuilder.Type === "Update") ? $("#UpdateGUID").show() : $("#UpdateGUID").hide();
	(Xrm.RESTBuilder.Type === "Retrieve") ? $("#RetrieveGUID").show() : $("#RetrieveGUID").hide();
	(Xrm.RESTBuilder.Type === "RetrieveMultiple") ? $("#RetrieveExtras").show() : $("#RetrieveExtras").hide();
	(Xrm.RESTBuilder.Type === "RetrieveMultiple") ? $("#RetrieveFilters").show() : $("#RetrieveFilters").hide();
	(Xrm.RESTBuilder.Type === "Associate" || Xrm.RESTBuilder.Type === "Disassociate") ? $("label[for=EntityList],#EntityList").hide() : $("label[for=EntityList],#EntityList").show();
	Xrm.RESTBuilder.SetXrmWebApiStates();
};

Xrm.RESTBuilder.Library_Change = function () {
	Xrm.RESTBuilder.Library = $("input[name='Library']:checked").val();
	$("#AsyncFalse").button("option", "disabled", false);
	if (Xrm.RESTBuilder.Library === "SDK" || Xrm.RESTBuilder.Library === "SDKJQ" || Xrm.RESTBuilder.Library === "XrmWebApi") {
		$("#AsyncFalse").removeAttr("checked");
		$("#AsyncTrue").prop("checked", "true");
		$("#AsyncFalse").button("refresh");
		$("#AsyncTrue").button("refresh");
		$("#AsyncFalse").button("option", "disabled", true);
	}
	Xrm.RESTBuilder.SetXrmWebApiStates();
};

Xrm.RESTBuilder.SetXrmWebApiStates = function () {
	if (Xrm.RESTBuilder.Endpoint === "WebApi") {
		if (Xrm.RESTBuilder.Library === "XrmWebApi") {
			$("#FormattedValuesTrue").prop("checked", "true").button("refresh");
			$("#FormattedValuesFalse").button("option", "disabled", true);
			$("#RecordCountFalse").prop("checked", "true").button("refresh");
			$("#RecordCountTrue").button("option", "disabled", true);
			$("#AuthTokenFalse").prop("checked", "true").button("refresh");
			$("#AuthTokenTrue").button("option", "disabled", true);
			$("#ImpersonateFalse").prop("checked", "true").button("refresh");
			$("#ImpersonateTrue").button("option", "disabled", true);
			$("#DetectChangesFalse").prop("checked", "true").button("refresh");
			$("#DetectChangesTrue").button("option", "disabled", true);
			$("#ReturnRecordFalse").prop("checked", "true").button("refresh");
			$("#ReturnRecordTrue").button("option", "disabled", true);
			$("#PreventCreateFalse").prop("checked", "true").button("refresh");
			$("#PreventCreateTrue").button("option", "disabled", true);
			$("#PreventUpdateFalse").prop("checked", "true").button("refresh");
			$("#PreventUpdateTrue").button("option", "disabled", true);

			Xrm.RESTBuilder.FormattedValues_Change();
			Xrm.RESTBuilder.Count_Change();
			Xrm.RESTBuilder.AuthToken_Change();
			Xrm.RESTBuilder.Impersonate_Change();
			Xrm.RESTBuilder.DetectChanges_Change();
			Xrm.RESTBuilder.PreventCreate_Change();
			Xrm.RESTBuilder.PreventUpdate_Change();
		}
		else {
			$("#FormattedValuesFalse").button("option", "disabled", false);
			$("#RecordCountTrue").button("option", "disabled", false);
			$("#AuthTokenTrue").button("option", "disabled", false);
			$("#ImpersonateTrue").button("option", "disabled", false);
			$("#DetectChangesTrue").button("option", "disabled", false);
			$("#ReturnRecordTrue").button("option", "disabled", false);
			$("#PreventCreateTrue").button("option", "disabled", false);
			$("#PreventUpdateTrue").button("option", "disabled", false);
		}
		Xrm.RESTBuilder.SetAlternateKeyState();
	}
}

Xrm.RESTBuilder.CreateRequest_Click = function () {
	$("#ScriptOutput").val("");
	$("#tabs").tabs({ active: 0 });
	$("#tabs").tabs("disable", 3);
	$("#RetrieveFrame").attr("src", "");
	$("#ResultTypeTree").prop("checked", "checked").button("refresh");
	$("#ResponseObject").text("");
	$("#ResultTree").remove();
	Xrm.RESTBuilder.RawResults = null;
	Xrm.RESTBuilder.ResultFormat_Change();
	switch (Xrm.RESTBuilder.Type) {
		case "Retrieve":
			Xrm.RESTBuilder.Retrieve(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("enable", 3);
			$("#tabs").tabs("enable", 1);
			break;
		case "RetrieveMultiple":
			Xrm.RESTBuilder.RetrieveMultiple(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("enable", 3);
			$("#tabs").tabs("enable", 1);
			break;
		case "Create":
			Xrm.RESTBuilder.Create(Xrm.RESTBuilder.Library);
			if (Xrm.RESTBuilder.Endpoint === "2011") {
				$("#tabs").tabs("enable", 1);
			} else {
				$("#tabs").tabs("disable", 1);
			}
			break;
		case "Update":
			Xrm.RESTBuilder.Update(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("disable", 1);
			break;
		case "Delete":
			Xrm.RESTBuilder.Delete(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("disable", 1);
			break;
		case "Associate":
			Xrm.RESTBuilder.Associate(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("disable", 1);
			break;
		case "Disassociate":
			Xrm.RESTBuilder.Disassociate(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("disable", 1);
			break;
		case "PredefinedQuery":
			if ($("#PredefinedQueryType").val() === "FetchXML") {
				var valid = Xrm.RESTBuilder.ValidateFetchXml(Xrm.RESTBuilder.FetchEditor.getValue());
				if (!valid) {
					Xrm.RESTBuilder.DisplayAlert("Invalid FetchXML");
					return;
				}
				valid = Xrm.RESTBuilder.ValidateSelectedFetchXmlEntity();
				if (!valid) {
					Xrm.RESTBuilder.DisplayAlert("Mismatch between selected Primary Entity and FetchXML entity");
					return;
				}
			}

			Xrm.RESTBuilder.PredefinedQuery(Xrm.RESTBuilder.Library);
			$("#tabs").tabs("enable", 1);
			break;
		case "Action":
			Xrm.RESTBuilder.Action(Xrm.RESTBuilder.Library);
			break;
		case "Function":
			Xrm.RESTBuilder.Function(Xrm.RESTBuilder.Library);
			break;
		case "RetrieveNextLink":
			Xrm.RESTBuilder.RetrieveNextLink(Xrm.RESTBuilder.Library);
			break;
	}
	Xrm.RESTBuilder.Editor1.refresh();
	$("#CopyUrlResults").button("option", "disabled", true);
	if (Xrm.RESTBuilder.UrlResultEditor) {
		Xrm.RESTBuilder.UrlResultEditor.toTextArea();
		$("#RetrieveUrlResult").val("");
	}
};

Xrm.RESTBuilder.Refresh_Click = function () {
	location.reload();
}

Xrm.RESTBuilder.Reset_Click = function () {
	Xrm.RESTBuilder.Type_Change();
	$("#DeleteId").val("");
	$("#UpdateId").val("");
	$("#AssociateId1").val("");
	$("#AssociateId2").val("");
	$("#QueryId").val("");
	$("#TargetId").val("");
	$("#NextLinkUrl").val("");
	$("#AssociateEntity1").prop("selectedIndex", 0);
	$("#AssociateRelationship").prop("selectedIndex", 0);
	$("#ScriptOutput").val("");
	$("#ScriptOutput2").val("");
	if (Xrm.RESTBuilder.FetchEditor) {
		Xrm.RESTBuilder.FetchEditor.toTextArea();
		$("#Fetch").val("");
	}

	Xrm.RESTBuilder.FetchEditor = CodeMirror.fromTextArea(document.getElementById("Fetch"), {
		mode: "xml",
		lineNumbers: true
	});
	$("#ResponseObject").text("");
	$("#ResultTree").remove();
	$("#CleanResults").button("option", "disabled", true);
	$("#RecordCountFalse").prop("checked", "true").button("refresh");
	$("#ImpersonateFalse").prop("checked", "true").button("refresh");
	Xrm.RESTBuilder.Impersonate_Change();
	$("#ImpersonateId").val("");
	$("#ImpersonateId").hide();
	if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
		$("#FormattedValuesFalse").prop("checked", "true").button("refresh");
		Xrm.RESTBuilder.FormattedValues = false;
	} else {
		$("#FormattedValuesTrue").prop("checked", "true").button("refresh");
		Xrm.RESTBuilder.FormattedValues = true;
	}
	$("#ReturnRecordFalse").prop("checked", "true").button("refresh");
	Xrm.RESTBuilder.ReturnRecord = false;
	$("#DetectChangesFalse").prop("checked", "true").button("refresh");
	Xrm.RESTBuilder.DetectChanges_Change();
	$("#AuthTokenFalse").prop("checked", "true").button("refresh");
	Xrm.RESTBuilder.AuthToken_Change();
	$("#PreventCreateFalse").prop("checked", "true").button("refresh");
	Xrm.RESTBuilder.PreventCreate_Change();
	$("#PreventUpdateFalse").prop("checked", "true").button("refresh");
	Xrm.RESTBuilder.PreventUpdate_Change();
	Xrm.RESTBuilder.RawResults = null;
	$("#Accordion").accordion("option", "active", 0);
	if (Xrm.RESTBuilder.Type === "Retrieve" || Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		$("#RetrieveId").val("");
		Xrm.RESTBuilder.ClearSelectLists(1, 4);
		$("#ExpandEntity").prop("selectedIndex", 0);
		Xrm.RESTBuilder.EnableGroupButtons();
		$("#TopAmount").val("");
		$("#SkipAmount").val("");
	}
	if (Xrm.RESTBuilder.Type === "Associate" || Xrm.RESTBuilder.Type === "Disassociate") {
		$("#AssociateRelationship").find("option").remove();
		Xrm.RESTBuilder.AssociateEntity1_Change();
	}
};

Xrm.RESTBuilder.ClearSelectLists = function (start, end) {
	for (var x = start; x <= end; x++) {
		$("#SelectList" + x + " li input:checked").removeAttr("checked");
	}
};

Xrm.RESTBuilder.SwitchIdKey_Click = function () {
	var action = $(this).attr("action");

	if ($("#" + action + "GUID").is(":visible")) {
		$("#" + action + "GUID").hide();
		$("#" + action + "GUID").val("");
		$("#AlternateKey" + action).show();
		$(this).button("option", "label", "Use Id");
		Xrm.RESTBuilder.DisplayAlternateKeys(action);
	} else {
		$("#AlternateKey" + action).hide();
		$("#" + action + "GUID").show();
		$(this).button("option", "label", "Use Alt. Key");
	}
	Xrm.RESTBuilder.CreateSwitchIdKeyButton(action);
}

Xrm.RESTBuilder.DisplayAlternateKeys = function (action) {
	$("#AlternateKey" + action + "Field").find("option").remove();
	var options = [];
	for (var i = 0; i < Xrm.RESTBuilder.CurrentEntityAlternateKeys.length; i++) {
		options.push("<option>" + Xrm.RESTBuilder.CurrentEntityAlternateKeys[i].LogicalName + "</option>");
	}

	$("#AlternateKey" + action + "Field").html(options.join(""));
	Xrm.RESTBuilder.AlternateKeyField_Change();
}

Xrm.RESTBuilder.AlternateKeyField_Change = function () {
	$("#AlternateKey" + Xrm.RESTBuilder.Type + "Table").find("tbody tr").remove();
	var option = $("#AlternateKey" + Xrm.RESTBuilder.Type + "Field option:selected")[0];
	var key = $.grep(Xrm.RESTBuilder.CurrentEntityAlternateKeys, function (e) { return e.LogicalName === $(option).val(); })[0];

	for (var i = 0; i < key["KeyAttributes"].length; i++) {
		var field = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.LogicalName === key["KeyAttributes"][i]; })[0];

		var row = "";
		switch (field.AttributeType) {
			case "Integer":
				row = "<tr><td>" + field.LogicalName + "</td><td><input type='text' id='AK" + field.LogicalName + "' class='Integer ui-corner-all' placeholder='" + field.AttributeType + "' /></td></tr>";
				break;
			case "Decimal":
				row = "<tr><td>" + field.LogicalName + "</td><td><input type='text' id='AK" + field.LogicalName + "' class='Decimal ui-corner-all' placeholder='" + field.AttributeType + " (" + field.Precision + " digits)' /></td></tr>";
				break;
			case "String":
				row = "<tr><td>" + field.LogicalName + "</td><td><input type='text' id='AK" + field.LogicalName + "' class='String ui-corner-all ui-widget' maxlength='" + field.MaxLength + "' placeholder='" + field.AttributeType + "' /></td></tr>";
				break;
		}

		$("#AlternateKey" + Xrm.RESTBuilder.Type + "Table").find("tbody").append(row);

		if (field.AttributeType === "Decimal" || field.AttributeType === "Integer") {
			Xrm.RESTBuilder.MakeSpinner(field.MinValue, field.MaxValue, 1, "AK" + field.LogicalName);
		}
	}
}

Xrm.RESTBuilder.Back_Click = function () {
	$("#Generate").show();
	$("#Output").hide();
};

Xrm.RESTBuilder.ActionReference_Click = function () {
	window.open("https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/actions?view=dynamics-ce-odata-9");
}

Xrm.RESTBuilder.FunctionReference_Click = function () {
	window.open("https://docs.microsoft.com/en-us/dynamics365/customer-engagement/web-api/functions?view=dynamics-ce-odata-9");
}

Xrm.RESTBuilder.EntityList_Change = function () {
	Xrm.RESTBuilder.EntityLogical = $("#EntityList option:selected").attr("LogicalName");
	if (Xrm.RESTBuilder.CrmVersion[0] > 7) {
		Xrm.RESTBuilder.EntitySetName = $("#EntityList option:selected").attr("EntitySetName");
	}
	Xrm.RESTBuilder.EntitySchema = $("#EntityList").val();

	if (Xrm.RESTBuilder.Type === "Action" || Xrm.RESTBuilder.Type === "Function") {
		$("#TargetId").attr("disabled", "disabled");
		$("#TargetId").val(null);
		Xrm.RESTBuilder.EntitySetName = $("#EntityList option:selected").attr("EntitySetName");
	}

	if (Xrm.RESTBuilder.Type === "Action") {
		Xrm.RESTBuilder.BuildActionList();
		return;
	}

	if (Xrm.RESTBuilder.Type === "Function") {
		Xrm.RESTBuilder.BuildFunctionList();
		return;
	}

	if (Xrm.RESTBuilder.Type === "Retrieve" || Xrm.RESTBuilder.Type === "RetrieveMultiple" || Xrm.RESTBuilder.Type === "PredefinedQuery") {
		$("#TableOrderBy tbody tr").remove();
		$("#Accordion").accordion({ active: false });
		Xrm.RESTBuilder.Block();
	}
	$("#ExpandEntity").prop("selectedIndex", 0);
	Xrm.RESTBuilder.CurrentEntityExpandedAttributes = [];
	$("#" + Xrm.RESTBuilder.FindTypeTable()).find("tbody tr").remove();
	Xrm.RESTBuilder.GetAttributeMetadata(Xrm.RESTBuilder.EntityLogical, Xrm.RESTBuilder.GetAttributeMetadata_Response, null);
};

Xrm.RESTBuilder.AssociateEntity1_Change = function () {
	Xrm.RESTBuilder.Block();
	Xrm.RESTBuilder.GetAssociateRelationshipMetadata($("#AssociateEntity1 option:selected").attr("LogicalName"));
	$("#AssociateRelationship").find("option").remove();
	$("#AssociateId1").val("");
	$("#AssociateId2").val("");
};

Xrm.RESTBuilder.AssociateEntity2_Change = function () {
	$("#AssociateRelationship").find("option").remove();
	var relationshipOptions = [];
	relationshipOptions.push("<option value='' selfreferencing='false'></option>");
	for (var i = 0; i < Xrm.RESTBuilder.AssociateEntityOneToManyRelationships.length; i++) {
		if (Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencingEntity === $("#AssociateEntity2 option:selected").attr("logicalname")) {
			var selfReferencing1 = ((Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].ReferencedEntity === Xrm.RESTBuilder.CurrentEntityOneToManyRelationships[i].ReferencingEntity) ? "Referenced" : "");
			var schemaName1 = Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].SchemaName;
			var webApiValue = schemaName1
			var entities = $.grep(Xrm.RESTBuilder.EntityTypes, function (e) {
				return e.attributes.Name.value === $("#AssociateEntity1 option:selected").attr("logicalname");
			});
			if (entities.length !== 0) {
				var navProps = $.grep($(entities[0]).children().filter("NavigationProperty"), function (e) {
					return e.attributes.Name.value.toLowerCase() === schemaName1.toLowerCase();
				});
				if (navProps.length !== 0) {
					webApiValue = navProps[0].attributes.Name.value;
				}
			}

			relationshipOptions.push("<option value='" + selfReferencing1 + schemaName1 + "' webapivalue='" + webApiValue +
				"' selfreferencing='" + ((selfReferencing1 === "") ? false : true) + "' referenced='" + Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencedEntity +
				"' referencing='" + Xrm.RESTBuilder.AssociateEntityOneToManyRelationships[i].ReferencingEntity + "'>(1:N) " + schemaName1 + "</option>");
		}
	}

	for (var j = 0; j < Xrm.RESTBuilder.AssociateEntityManyToManyRelationships.length; j++) {
		if ((Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].Entity1LogicalName === $("#AssociateEntity1 option:selected").attr("logicalname") &&
			Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].Entity2LogicalName === $("#AssociateEntity2 option:selected").attr("logicalname")) ||
			(Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].Entity1LogicalName === $("#AssociateEntity2 option:selected").attr("logicalname") &&
				Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].Entity2LogicalName === $("#AssociateEntity1 option:selected").attr("logicalname"))) {
			var selfReferencing2 = ((Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[j].Entity1LogicalName === Xrm.RESTBuilder.CurrentEntityManyToManyRelationships[j].Entity2LogicalName) ? "Referenced" : "");
			var schemaName2 = Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].SchemaName;
			var webApiValue = schemaName2
			var entities = $.grep(Xrm.RESTBuilder.EntityTypes, function (e) {
				return e.attributes.Name.value === $("#AssociateEntity1 option:selected").attr("logicalname");
			});
			if (entities.length !== 0) {
				var navProps = $.grep($(entities[0]).children().filter("NavigationProperty"), function (e) {
					return e.attributes.Name.value.toLowerCase() === schemaName1.toLowerCase();
				});
				if (navProps.length !== 0) {
					webApiValue = navProps[0].attributes.Name.value;
				}
			}
			relationshipOptions.push("<option value='" + selfReferencing2 + schemaName2 + "' webapivalue='" + webApiValue +
				"' selfreferencing='" + ((selfReferencing2 === "") ? false : true) + "'  referenced='" + Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].ReferencedEntity +
				"' referencing='" + Xrm.RESTBuilder.AssociateEntityManyToManyRelationships[j].ReferencingEntity + "'>(N:N) " + schemaName2 + "</option>");
		}
	}

	relationshipOptions = Xrm.RESTBuilder.RemoveArrayDuplicates(relationshipOptions);
	$("#AssociateRelationship").html(relationshipOptions.join(""));
	Xrm.RESTBuilder.SortSelect($("#AssociateRelationship"));
	Xrm.RESTBuilder.DisplaySelfReferencingAssociateNtoN();
};

Xrm.RESTBuilder.PredefinedQueryType_Change = function () {
	switch ($(this).val()) {
		case "FetchXML":
			$("#FetchXmlWrapper").show();
			$("#SavedUserQuery").hide();
			break;
		default:
			$("#FetchXmlWrapper").hide();
			$("#SavedUserQuery").show();
			break;
	}
};

Xrm.RESTBuilder.Actions_Change = function () {
	var selectedAction = $("#Actions option:selected").val();
	var action = $.grep(Xrm.RESTBuilder.Actions, function (e) {
		return e.Name === selectedAction && e.Entity === $("#EntityList option:selected").attr("LogicalName");
	});
	if (action.length !== 1) {
		$("#TargetId").attr("disabled", "disabled");
		return;
	}
	Xrm.RESTBuilder.SelectedAction = action[0];
	Xrm.RESTBuilder.CreateInputParameters(Xrm.RESTBuilder.SelectedAction);
}

Xrm.RESTBuilder.Functions_Change = function () {
	var selectedFunction = $("#Functions option:selected").val();
	var func = $.grep(Xrm.RESTBuilder.Functions, function (e) { return e.Name === selectedFunction && e.Entity === $("#EntityList option:selected").attr("LogicalName"); });
	if (func.length !== 1) {
		$("#TargetId").attr("disabled", "disabled");
		return;
	}

	Xrm.RESTBuilder.SelectedFunction = func[0];
	Xrm.RESTBuilder.CreateInputParameters(Xrm.RESTBuilder.SelectedFunction);
}

Xrm.RESTBuilder.ObjectTypeCodeToLogicalName = function (objectTypeCode) {
	var logicalName = "";
	$("#EntityList").find("option").each(function () {
		if ($(this).attr("ObjectTypeCode") === objectTypeCode) {
			logicalName = $(this).attr("LogicalName");
		}
	});
	return logicalName;
};

Xrm.RESTBuilder.LogicalNameToSchemaName = function (logicalname) {
	var schemaName = "";
	$("#EntityList").find("option").each(function () {
		if ($(this).attr("LogicalName") === logicalname) {
			schemaName = $(this)[0].value;
		}
	});
	return schemaName;
};

Xrm.RESTBuilder.LogicalNameToEntitySetName = function (logicalname) {
	var entitySetName = "";
	$("#EntityList").find("option").each(function () {
		if ($(this).attr("LogicalName") === logicalname) {
			entitySetName = $(this).attr("EntitySetName");
		}
	});
	return entitySetName;
};

Xrm.RESTBuilder.AddAttribute_Click = function () {
	Xrm.RESTBuilder.AddTableRow();
	var table = Xrm.RESTBuilder.FindTypeTable();
	var ctrlA = $("#" + table).find("tbody tr:last .Attribute:first");
	if (Xrm.RESTBuilder.Type !== "RetrieveMultiple") {
		Xrm.RESTBuilder.BindAttributeSelectList(ctrlA[0], Xrm.RESTBuilder.CurrentEntityAttributes);
	} else {
		Xrm.RESTBuilder.BindAttributeSelectList(ctrlA[0], Xrm.RESTBuilder.GetSelectedAttributes());
	}

	if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
		Xrm.RESTBuilder.SetAttributeItemDisabled();
	}

	return false;
};

Xrm.RESTBuilder.AddTableRow = function () {
	var table = Xrm.RESTBuilder.FindTypeTable();
	var html = [];
	html.push("<tr>");
	html.push("    <td>");
	html.push("        <a href='#' class='DeleteAttribute'>Delete Attribute</a>");
	html.push(((table === "TableRetrieve") ? "<a href='#' class='SelectAttribute'>Select/Un-Select Attribute</a>" : ""));
	html.push("    </td>");
	html.push("    <td>");
	html.push("        <select class='Attribute ui-corner-all'></select>");
	html.push("    </td>");
	html.push("    <td></td>");
	html.push("    <td></td>");
	html.push(((Xrm.RESTBuilder.Type === "RetrieveMultiple") ? "<td></td>" : ""));
	html.push("    <td></td>");
	html.push("</tr>");
	$("#" + table).find("tbody").append(html.join(""));

	Xrm.RESTBuilder.CreateDeleteAttributeButton($("#" + table + " tr:last .DeleteAttribute"));
	if (table === "TableRetrieve") {
		Xrm.RESTBuilder.CreateSelectAttributeButton($("#TableRetrieve tr:last .SelectAttribute"));
	};

	Xrm.RESTBuilder.SetAttributeItemDisabled();
};

Xrm.RESTBuilder.AddOrderByTableRow = function () {
	var num0 = Math.floor(Math.random() * 100001);
	var num1 = Math.floor(Math.random() * 100001);
	var num2 = Math.floor(Math.random() * 100001);
	var html = [];
	html.push("<tr>");
	html.push("<td><a href='#' class='DeleteOrderBy'>Delete Order By</a></td>");
	html.push("<td><select class='OrderBy ui-corner-all'></select></td>");
	html.push("<td><div class='OrderByRadio'><input type='radio' id='OrderBy_ " + num1 + "' value='asc' name='Order_" + num0 + "' checked='checked'>");
	html.push("<label for='OrderBy_ " + num1 + "' class='radio ascdesc'>Ascending</label>");
	html.push("<input type='radio' id='OrderBy_ " + num2 + "' value='desc' name='Order_" + num0 + "'><label for='OrderBy_ " + num2 + "' class='radio ascdesc'>Descending</label></div></td>");
	html.push("</tr>");
	$("#TableOrderBy tbody").append(html.join(""));
	Xrm.RESTBuilder.CreateRadioButtons($("#TableOrderBy tr:last .OrderByRadio"));
	Xrm.RESTBuilder.CreateDeleteAttributeButton($("#TableOrderBy tr:last .DeleteOrderBy"));
	Xrm.RESTBuilder.BindAttributeSelectList($("#TableOrderBy tr:last .OrderBy"), Xrm.RESTBuilder.CurrentEntityAttributes);
	$("#TableOrderBy tr:last .OrderBy").prop("selectedIndex", -1);
	Xrm.RESTBuilder.SetOrderByItemDisabled();
};

Xrm.RESTBuilder.SetOrderByItemDisabled = function () {
	var items = Xrm.RESTBuilder.GetExistingOrderBys();
	for (var i = 0; i < $("#TableOrderBy tbody tr").length; i++) {
		var tr = $("#TableOrderBy tbody tr")[i];
		for (var j = 0; j < $(tr).find(".OrderBy option").length; j++) {
			var opt = $(tr).find(".OrderBy option")[j];
			$(opt).removeAttr("disabled");
			var exists = $.inArray($(opt).val(), items);
			if (exists !== -1 && !$(opt).is(":selected")) {
				$(opt).attr("disabled", "disabled");
			}
		}
	}
};

Xrm.RESTBuilder.OrderBy_Change = function () {
	Xrm.RESTBuilder.SetOrderByItemDisabled();
};

Xrm.RESTBuilder.GetExistingOrderBys = function () {
	var items = [];
	for (var i = 0; i < $("#TableOrderBy tbody tr").length; i++) {
		var tr = $("#TableOrderBy tbody tr")[i];
		for (var j = 0; j < $(tr).find(".OrderBy option:selected").length; j++) {
			var opt = $(tr).find(".OrderBy option:selected")[j];
			items.push($(opt).val());
		}
	}
	return items;
};

Xrm.RESTBuilder.SetFilterItemDisabled = function () {
	var items = Xrm.RESTBuilder.GetExistingFilters();
	for (var i = 0; i < $("#TableRetrieve tbody tr").length; i++) {
		var tr = $("#TableRetrieve tbody tr")[i];
		for (var j = 0; j < $(tr).find("select:eq(0) option").length; j++) {
			var opt = $(tr).find("select:eq(0) option")[j];
			$(opt).removeAttr("disabled");
			var exists = $.inArray($(opt).val(), items);
			if (exists !== -1 && !$(opt).is(":selected")) {
				$(opt).attr("disabled", "disabled");
			}
		}
	}
};

Xrm.RESTBuilder.GetExistingFilters = function () {
	var items = [];
	for (var i = 0; i < $("#TableRetrieve tbody tr").length; i++) {
		var tr = $("#TableRetrieve tbody tr")[i];
		for (var j = 0; j < $(tr).find("select:eq(0) option:selected").length; j++) {
			var opt = $(tr).find("select:eq(0) option:selected")[j];
			items.push($(opt).val());
		}
	}
	return items;
};

Xrm.RESTBuilder.SetAttributeItemDisabled = function () {
	var items = Xrm.RESTBuilder.GetExistingAttributes();
	for (var i = 0; i < $("#TableCreateUpdate tbody tr").length; i++) {
		var tr = $("#TableCreateUpdate tbody tr")[i];
		for (var j = 0; j < $(tr).find("select:eq(0) option").length; j++) {
			var opt = $(tr).find("select:eq(0) option")[j];
			$(opt).removeAttr("disabled");
			var exists = $.inArray($(opt).val(), items);
			if (exists !== -1 && !$(opt).is(":selected")) {
				$(opt).attr("disabled", "disabled");
			}
		}
	}
};

Xrm.RESTBuilder.GetExistingAttributes = function () {
	var items = [];
	for (var i = 0; i < $("#TableCreateUpdate tbody tr").length; i++) {
		var tr = $("#TableCreateUpdate tbody tr")[i];
		for (var j = 0; j < $(tr).find("select:eq(0) option:selected").length; j++) {
			var opt = $(tr).find("select:eq(0) option:selected")[j];
			items.push($(opt).val());
		}
	}
	return items;
};

Xrm.RESTBuilder.AddOrder_Click = function () {
	Xrm.RESTBuilder.AddOrderByTableRow();
	$("#AddOrder").button("option", "disabled", $("#TableOrderBy tbody tr").length === 12);
	return false;
};

Xrm.RESTBuilder.DeleteOrderBy_Click = function () {
	$(this).parent().parent().remove();
	$("#AddOrder").button("option", "disabled", $("#TableOrderBy tbody tr").length === 12);

	if ($("#TableOrderBy tbody tr").length === 0) {
		Xrm.RESTBuilder.AddOrderByTableRow();
	}

	Xrm.RESTBuilder.SetOrderByItemDisabled();
	return false;
};

Xrm.RESTBuilder.DeleteAttribute_Click = function () {
	Xrm.RESTBuilder.GroupRowDeleteUnSelect($(this));
	$(this).parent().parent().remove();
	Xrm.RESTBuilder.EnableGroupButtons();
	if ($("#" + Xrm.RESTBuilder.FindTypeTable() + " tbody tr").length === 0) {
		Xrm.RESTBuilder.AddAttribute_Click();
	}

	if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
		Xrm.RESTBuilder.SetAttributeItemDisabled();
	}

	return false;
};

Xrm.RESTBuilder.GroupAdd_Click = function () {
	Xrm.RESTBuilder.SortSelectedRows("selected");
	var num = Math.floor(Math.random() * 100001);
	for (var i = 0; i < $("#TableRetrieve tbody tr").length; i++) {
		var tr = $("#TableRetrieve tbody tr")[i];
		if ($(tr).hasClass("selected")) {
			$(tr).removeClass("selected").addClass("grouped").addClass("and|" + num);
			$(tr).find(".Logical").prop("selectedIndex", 0);
			$(tr).find(".Logical").attr("disabled", "disabled");
			$(tr).find("td:eq(5)").html("<select class='GroupLogical ui-corner-all'><option value='and' selected='selected'>And</option><option value='or'>Or</option></select>");
		}
	}
	Xrm.RESTBuilder.EnableGroupButtons();
	return false;
};

Xrm.RESTBuilder.GroupOr_Click = function () {
	Xrm.RESTBuilder.SortSelectedRows("selected");
	var num = Math.floor(Math.random() * 100001);
	for (var i = 0; i < $("#TableRetrieve tbody tr").length; i++) {
		var tr = $("#TableRetrieve tbody tr")[i];
		if ($(tr).hasClass("selected")) {
			$(tr).removeClass("selected").addClass("grouped").addClass("or|" + num);
			$(tr).find(".Logical").prop("selectedIndex", 1);
			$(tr).find(".Logical").attr("disabled", "disabled");
			$(tr).find("td:eq(5)").html("<select class='GroupLogical ui-corner-all'><option value='and' selected='selected'>And</option><option value='or'>Or</option></select>");
		}
	}
	Xrm.RESTBuilder.EnableGroupButtons();
	return false;
};

Xrm.RESTBuilder.SelectAttribute_Click = function () {
	if (!$(this).parent().parent().hasClass("grouped")) {
		if ($(this).parent().parent().hasClass("selected")) {
			$(this).parent().parent().removeClass("selected");
		} else {
			$(this).parent().parent().addClass("selected");
		}
	} else {
		Xrm.RESTBuilder.GroupRowDeleteUnSelect($(this));
	}

	Xrm.RESTBuilder.EnableGroupButtons();
	Xrm.RESTBuilder.SortSelectedRows("grouped");
	return false;
};

Xrm.RESTBuilder.GroupRowDeleteUnSelect = function (ctrl) {
	var tr = $(ctrl).parent().parent();
	var allcls = $(ctrl).parent().parent().attr("class");
	if (allcls !== null && allcls != undefined) {
		var cls = allcls.split(" ");
		for (var i = 0; i < cls.length; i++) {
			if (cls[i].indexOf("and|") !== -1 || cls[i].indexOf("or|") !== -1) {
				var l = 0;
				for (var j = 0; j < $("#TableRetrieve tbody tr").length; j++) {
					if ($($("#TableRetrieve tbody tr")[j]).hasClass(cls[i])) {
						l++;
						$($("#TableRetrieve tbody tr")[j]).find(".Logical").removeAttr('disabled');
						$($("#TableRetrieve tbody tr")[j]).find("td:eq(5)").empty();
					}
				}
				if (l < 3) {
					for (var k = 0; k < $("#TableRetrieve tbody tr").length; k++) {
						var r = $("#TableRetrieve tbody tr")[k];
						if ($(r).hasClass(cls[i])) {
							$(r).removeClass(cls[i]).removeClass("grouped");
						}
					}
				} else {
					$(tr).removeClass(cls[i]).removeClass("grouped");
				}
			}
		}
	}
};

Xrm.RESTBuilder.SortSelectedRows = function (cls) {
	var table = $("#TableRetrieve");
	var rows = $("tbody > tr", table);
	rows.sort(function (a) {
		return $(a).hasClass(cls);
	});
	for (var i = 0; i < rows.length; i++) {
		var selInd = rows[i].children[2].children[0].selectedIndex;
		table.append(rows[i]);
		if (selInd === -1) {
			rows[i].children[2].children[0].selectedIndex = -1;
		}
	}
};

Xrm.RESTBuilder.EnableGroupButtons = function () {
	var selCount = 0;
	for (var i = 0; i < $("#TableRetrieve tbody tr").length; i++) {
		selCount += ($($("#TableRetrieve tbody tr")[i]).hasClass("selected") ? 1 : 0);
	}
	(selCount > 1) ? $(".Group").button("option", "disabled", false) : $(".Group").button("option", "disabled", true);
};

Xrm.RESTBuilder.BindAttributeSelectList = function (ctrl, attributes) {
	$(ctrl).empty();
	var options = [];
	for (var i = 0; i < attributes.length; i++) {
		if ((Xrm.RESTBuilder.Type === "Create" && attributes[i].IsValidForCreate) || (Xrm.RESTBuilder.Type === "Update" && attributes[i].IsValidForUpdate) ||
			(Xrm.RESTBuilder.Type === "Retrieve") || (Xrm.RESTBuilder.Type === "RetrieveMultiple"))
			options.push("<option value='" + attributes[i].SchemaName + "' class='" + Xrm.RESTBuilder.GetAttributeClass(attributes[i].RequiredLevel) + "' title='" +
				Xrm.RESTBuilder.GetLabel(attributes[i].DisplayName) + "'>" + attributes[i].SchemaName + "</option>");
	}
	$(ctrl).html(options.join(""));
	Xrm.RESTBuilder.SortSelect(ctrl);
	ctrl.selectedIndex = -1;
};

Xrm.RESTBuilder.GetAttributeClass = function (level) {
	switch (level.Value) {
		case "SystemRequired":
		case "None":
		case "":
			return "";
		case "Recommended":
			return "recommended";
		case "ApplicationRequired":
			return "required";
	}
	return "";
};

Xrm.RESTBuilder.Attribute_Change = function () {
	$(this).removeClass("recommended-border").removeClass("required-border");
	var cls = $(this).find("option:selected").attr("class");
	if (cls !== "") {
		$(this).addClass(cls + "-border");
	}
	var tr = $(this).parent().parent();
	var attribute;
	if (($("#ExpandEntity").prop("selectedIndex") === 0 && Xrm.RESTBuilder.Type === "RetrieveMultiple") ||
		(Xrm.RESTBuilder.Type !== "RetrieveMultiple")) {
		attribute = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
	} else {
		var relatedEntity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === $("#ExpandEntity option:selected").attr("EntityLogicalName"); });
		attribute = $.grep(relatedEntity[0].Attributes, function (e) { return e.SchemaName === $(tr).find(".Attribute:first").val(); });
	}
	if (attribute.length > 0) {
		if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
			$(tr).find("td:eq(3)").empty();
			$(tr).find("td:eq(4)").empty();
			switch (attribute[0].AttributeType) {
				case "Decimal":
				case "Double":
					$(tr).find("td:eq(3)").html("<input type='text' id='" + attribute[0].LogicalName + "' class='Decimal ui-corner-all' placeholder='" + attribute[0].AttributeType + " (" + attribute[0].Precision + " digits)' />");
					Xrm.RESTBuilder.MakeSpinner(attribute[0].MinValue, attribute[0].MaxValue, 1, attribute[0].LogicalName);
					break;
				case "BigInt":
				case "Integer":
					$(tr).find("td:eq(3)").html("<input type='text' id='" + attribute[0].LogicalName + "' class='Integer ui-corner-all' placeholder='" + attribute[0].AttributeType + "' />");
					Xrm.RESTBuilder.MakeSpinner(attribute[0].MinValue, attribute[0].MaxValue, 1, attribute[0].LogicalName);
					break;
				case "Money":
					$(tr).find("td:eq(3)").html("<input type='text' id='" + attribute[0].LogicalName + "' class='Money ui-corner-all' placeholder='" + attribute[0].AttributeType + " (" + attribute[0].Precision + " digits)' />");
					Xrm.RESTBuilder.MakeSpinner(attribute[0].MinValue, attribute[0].MaxValue, 1, attribute[0].LogicalName);
					break;
				case "Uniqueidentifier":
					$(tr).find("td:eq(3)").html("<input type='text' class='Uniqueidentifier ui-corner-all' maxlength='36' placeholder='" + Xrm.RESTBuilder.MakeValidGuid(null) + "' />");
					break;
				case "Memo":
				case "String":
					$(tr).find("td:eq(3)").html("<input type='text' class='String ui-corner-all ui-widget' maxlength='" + attribute[0].MaxLength + "' placeholder='" + attribute[0].AttributeType + "' />");
					break;
				case "Boolean":
					var boolItems1 = Xrm.RESTBuilder.CreateBooleanSelects(attribute[0].OptionSet);
					$(tr).find("td:eq(3)").html("<select class='Boolean ui-corner-all'>" + boolItems1 + "</select>");
					Xrm.RESTBuilder.SortSelect($(tr).find("td:eq(3)").find("select"));
					$(tr).find("td:eq(3)").find("select")[0].selectedIndex = -1;
					break;
				case "State":
				case "Status":
				case "Picklist":
					var osItems1 = Xrm.RESTBuilder.CreateOptionsetSelects(attribute[0].OptionSet.Options);
					$(tr).find("td:eq(3)").html("<select class='Picklist ui-corner-all'>" + osItems1 + "</select>");
					Xrm.RESTBuilder.SortSelect($(tr).find("td:eq(3)").find("select"));
					$(tr).find("td:eq(3)").find("select")[0].selectedIndex = -1;
					break;
				case "Owner":
				case "Customer":
				case "Lookup":
					$(tr).find("td:eq(3)").html("<input type='text' class='Guid ui-corner-all' maxlength='36' placeholder='" + Xrm.RESTBuilder.MakeValidGuid(null) + "' />");
					$(tr).find("td:eq(4)").append($("#EntityList").clone().attr("id", null));
					Xrm.RESTBuilder.ApplyLookupTargets($(tr).find("select:eq(1)"), attribute[0].Targets);
					break;
				case "DateTime":
					var isDateTime = attribute[0].Format === "DateAndTime";
					$(tr).find("td:eq(3)").html("<input type='text' class='" + (isDateTime ? "DateTime" : "Date") + " ui-corner-all' />");
					if (isDateTime)
						$(tr).find("td:eq(3)").append(Xrm.RESTBuilder.CreateTimePicker());
					Xrm.RESTBuilder.MakeDatePicker(isDateTime ? "DateTime" : "Date");
					break;
				case "EntityName":
					var entityOptions = $("#EntityList option");
					var options;
					for (var j = 0; j < entityOptions.length; j++) {
						options += $(entityOptions[j]).prop("outerHTML");
					}
					$(tr).find("td:eq(3)").html("<select class='Picklist ui-corner-all'>" + options + "</select>");
					Xrm.RESTBuilder.SortSelect($(tr).find("td:eq(3)").find("select"));
					// Special case: add a "None" option to the entity list
					if (Xrm.RESTBuilder.EntityLogical === "workflow" && attribute[0].LogicalName === "primaryentity") {
						$($(tr).find("td:eq(3)").find("select")[0]).prepend("<option entitysetname='' logicalname='none' objecttypecode='' value='None' title='None'>None</option>");
					}
					$(tr).find("td:eq(3)").find("select")[0].selectedIndex = -1;
					break;
				case "ManagedProperty":
					if (attribute[0].ValueAttributeTypeCode === "Boolean") {
						var boolItems4 = "<option value='null'></option><option value='true'>True</option><option value='false'>False</option>";
						$(tr).find("td:eq(3)").html("<select class='Boolean ui-corner-all'>" + boolItems4 + "</select>");
						$(tr).find("td:eq(3)").find("select")[0].selectedIndex = -1;
					}
					break;
			}
			$(tr).find("td:eq(2)").html(attribute[0].AttributeType);
		} else {
			$(tr).find("td:eq(3)").empty();
			$(tr).find("td:eq(4)").empty();
			$(tr).find("td:eq(3)").html(Xrm.RESTBuilder.CreateFilterSelect(attribute[0].AttributeType));
			switch (attribute[0].AttributeType) {
				case "Decimal":
				case "Double":
					$(tr).find("td:eq(4)").html("<input type='text' id='" + attribute[0].LogicalName + "' class='Decimal ui-corner-all' placeholder='" + attribute[0].AttributeType + " (" + attribute[0].Precision + " digits)' />");
					Xrm.RESTBuilder.MakeSpinner(attribute[0].MinValue, attribute[0].MaxValue, 1, attribute[0].LogicalName);
					break;
				case "BigInt":
				case "Integer":
					$(tr).find("td:eq(4)").html("<input type='text' id='" + attribute[0].LogicalName + "' class='Integer ui-corner-all' placeholder='" + attribute[0].AttributeType + "' />");
					Xrm.RESTBuilder.MakeSpinner(attribute[0].MinValue, attribute[0].MaxValue, 1, attribute[0].LogicalName);
					break;
				case "Money":
					$(tr).find("td:eq(4)").html("<input type='text' id='" + attribute[0].LogicalName + "' class='Money ui-corner-all' placeholder='" + attribute[0].AttributeType + " (" + attribute[0].Precision + " digits)' />");
					Xrm.RESTBuilder.MakeSpinner(attribute[0].MinValue, attribute[0].MaxValue, 1, attribute[0].LogicalName);
					break;
				case "Uniqueidentifier":
					$(tr).find("td:eq(4)").html("<input type='text' class='Uniqueidentifier ui-corner-all' maxlength='36' placeholder='" + Xrm.RESTBuilder.MakeValidGuid(null) + "' />");
					break;
				case "Memo":
				case "String":
					$(tr).find("td:eq(4)").html("<input type='text' class='String ui-corner-all ui-widget' maxlength='" + attribute[0].MaxLength + "' placeholder='" + attribute[0].AttributeType + "' />");
					break;
				case "Boolean":
					var boolItems2 = Xrm.RESTBuilder.CreateBooleanSelects(attribute[0].OptionSet);
					$(tr).find("td:eq(4)").html("<select class='Boolean ui-corner-all'>" + boolItems2 + "</select>");
					$(tr).find("td:eq(4)").find("select")[0].selectedIndex = -1;
					break;
				case "State":
				case "Status":
				case "Picklist":
					var osItems2 = Xrm.RESTBuilder.CreateOptionsetSelects(attribute[0].OptionSet.Options);
					$(tr).find("td:eq(4)").html("<select class='Picklist ui-corner-all'>" + osItems2 + "</select>");
					$(tr).find("td:eq(4)").find("select")[0].selectedIndex = -1;
					break;
				case "Owner":
				case "Customer":
				case "Lookup":
					$(tr).find("td:eq(4)").html("<input type='text' class='Guid ui-corner-all' maxlength='36' placeholder='" + Xrm.RESTBuilder.MakeValidGuid(null) + "' />");
					break;
				case "DateTime":
					var isDateTime = attribute[0].Format === "DateAndTime";
					$(tr).find("td:eq(4)").html("<input type='text' class='" + (isDateTime ? "DateTime" : "Date") + " ui-corner-all' placeholder='" + attribute[0].AttributeType + "' />");
					if (isDateTime)
						$(tr).find("td:eq(4)").append(Xrm.RESTBuilder.CreateTimePicker());
					Xrm.RESTBuilder.MakeDatePicker(isDateTime ? "DateTime" : "Date");
					break;
				case "EntityName":
					var entityOptions2 = $("#EntityList option");
					var options2;
					for (var i = 0; i < entityOptions2.length; i++) {
						options2 += $(entityOptions2[i]).prop("outerHTML");
					}
					$(tr).find("td:eq(4)").html("<select class='Picklist ui-corner-all'>" + options2 + "</select>");
					// Special case: add a "None" option to the entity list
					if (Xrm.RESTBuilder.EntityLogical === "workflow" && attribute[0].LogicalName === "primaryentity") {
						$($(tr).find("td:eq(3)").find("select")[0]).prepend("<option entitysetname='' logicalname='none' objecttypecode='' value='None' title='None'>None</option>");
					}
					$(tr).find("td:eq(4)").find("select")[0].selectedIndex = -1;
					break;
				case "ManagedProperty":
					if (attribute[0].ValueAttributeTypeCode === "Boolean") {
						var boolItems3 = "<option value='null'></option><option value='true'>True</option><option value='false'>False</option>";
						$(tr).find("td:eq(4)").html("<select class='Boolean ui-corner-all'>" + boolItems3 + "</select>");
						$(tr).find("td:eq(4)").find("select")[0].selectedIndex = -1;
					}
					break;
			}
			$(tr).find("td:eq(2)").html(attribute[0].AttributeType);
		}

		if (Xrm.RESTBuilder.Type === "RetrieveMultiple") {
			$(tr).find("td:eq(5)").empty().html("<select class='Logical ui-corner-all'><option value='and' selected='selected'>And</option><option value='or'>Or</option></select>");
		}
		$(tr).find(".SelectAttribute").button("option", "disabled", false);
	}

	if (Xrm.RESTBuilder.Type === "Create" || Xrm.RESTBuilder.Type === "Update") {
		Xrm.RESTBuilder.SetAttributeItemDisabled();
	}
};

Xrm.RESTBuilder.Filter_Change = function () {
	var tr = $(this).parent().parent();
	var val = $(tr).find("td:eq(4) input:first");
	var sel1 = $(tr).find("td:eq(4) select:first");
	var sel2 = $(tr).find("td:eq(4) select:last");

	// Is the value the input or select field
	var ctrl1 = (val.length !== 0) ? val : sel1;

	var filter = $(this).val();
	if (filter === "[field] ne null" || filter === "[field] eq null") {
		$(ctrl1).hide();
		$(sel2).hide();
	} else {
		$(ctrl1).show();
		$(sel2).show();
	}
};

Xrm.RESTBuilder.Expand_Change = function () {
	$("#TableRetrieve").find("tbody tr").remove();
	Xrm.RESTBuilder.AddTableRow();
	var ctrlA = $("#TableRetrieve").find("tbody tr:last .Attribute:first");
	Xrm.RESTBuilder.BindAttributeSelectList(ctrlA[0], Xrm.RESTBuilder.GetSelectedAttributes());
};

Xrm.RESTBuilder.TopAmount_Change = function () {
	var top = $("#TopAmount").val();
	top = Xrm.RESTBuilder.MakeValidNumber(top);
	if (Xrm.RESTBuilder.Endpoint === "WebApi") {
		if (top > 5000) {
			$("#TopAmount").val(5000);
			return;
		}
	} else {
		if (top > 50) {
			$("#TopAmount").val(50);
			return;
		}
	}

	if (top <= 0) {
		$("#TopAmount").val(null);
		return;
	}
}

Xrm.RESTBuilder.GetSelectedAttributes = function () {
	var name = $("#ExpandEntity").find("option:selected").attr("EntityLogicalName");
	if (name === "" || name === undefined) {
		return Xrm.RESTBuilder.CurrentEntityAttributes;
	}
	else {
		var entity = $.grep(Xrm.RESTBuilder.CurrentEntityExpandedAttributes, function (e) { return e.LogicalName === name; });
		return entity[0].Attributes;
	}
};

Xrm.RESTBuilder.GroupLogical_Change = function () {
	var selInd = $(this).prop("selectedIndex");
	var row = $(this).parent().parent();
	var allcls = $(row).attr("class");
	var group = "";
	if (allcls !== null && allcls != undefined) {
		var cls = allcls.split(" ");
		for (var i = 0; i < cls.length; i++) {
			if (cls[i].indexOf("and|") !== -1 || cls[i].indexOf("or|") !== -1) {
				group = cls[i];
			}
		}
	}

	for (var j = 0; j < $("#TableRetrieve tbody tr").length; j++) {
		if ($($("#TableRetrieve tbody tr")[j]).hasClass(group)) {
			$($("#TableRetrieve tbody tr")[j]).find("td:eq(5) select").prop("selectedIndex", selInd);
		}
	}
};

Xrm.RESTBuilder.TabActivate = function () {
	switch ($("#tabs").tabs("option", "active")) {
		case 0:
			$("#Execute").button("option", "label", "Execute Code (Read-Only)");
			$("#Execute").button("enable");
			$("#tabs").tabs("enable", 1);
			break;
		case 1:
			$("#Execute").button("option", "label", "Execute Code");
			$("#Execute").button("disable");
			break;
		case 2:
			$("#Execute").button("option", "label", "Execute Code (Editor)");
			$("#Execute").button("enable");
			$("#tabs").tabs("disable", 1);
			break;
		case 3:
			if (!Xrm.RESTBuilder.UrlClipboard) {
				Xrm.RESTBuilder.UrlClipboard = new Clipboard(".urlclipboard", {
					text: function () {
						return $("#RetrieveUrl").val();
					}
				});
				Xrm.RESTBuilder.UrlClipboard.on("success", function (e) {
					e.clearSelection();
					Xrm.RESTBuilder.BlockDiv("#RetrieveUrlContainer", "Copied!");
					setTimeout(function () {
						Xrm.RESTBuilder.UnBlockDiv("#RetrieveUrlContainer");
					}, 300);
				});
				Xrm.RESTBuilder.UrlClipboard.on("error", function () {
					Xrm.RESTBuilder.BlockDiv("#RetrieveUrlContainer", Xrm.RESTBuilder.CopyFallbackMessage());
					setTimeout(function () {
						Xrm.RESTBuilder.UnBlockDiv("#RetrieveUrlContainer");
					}, 900);
				});
			}
			break;
	}
};

Xrm.RESTBuilder.ResultFormat_Change = function () {
	if ($("#ResultTypeTree:checked").val()) {
		$("#ResultTree").show();
		$("#ResponseObject").hide();
	} else {
		$("#ResultTree").hide();
		$("#ResponseObject").show();
	}

	if (Xrm.RESTBuilder.RawResults !== null) {
		Xrm.RESTBuilder.ShowResults(Xrm.RESTBuilder.RawResults);
	}
};

/*
Utility
*/

Xrm.RESTBuilder.ValidateSelectedFetchXmlEntity = function () {
	var xml = Xrm.RESTBuilder.FetchEditor.getValue();
	var xmlDoc = $.parseXML(xml);
	var $xml = $(xmlDoc);
	var $entityName = $xml.find("entity").attr("name");
	if (!$entityName) {
		return false;
	}
	return Xrm.RESTBuilder.EntityLogical === $entityName.toLowerCase();
}

Xrm.RESTBuilder.Alert = function (message) {
	if (Xrm.RESTBuilder.CrmVersion[0] < 6) {
		return "alert(" + message + ")";
	}
	if ((Xrm.RESTBuilder.CrmVersion[0] >= 6 && Xrm.RESTBuilder.CrmVersion[0] < 9) || Xrm.RESTBuilder.Endpoint === "2011") {
		return "Xrm.Utility.alertDialog(" + message + ")";
	}
	return "Xrm.Navigation.openAlertDialog({ confirmButtonLabel: \"OK\", text: " + message + ", title: \"Error\" })";
}

Xrm.RESTBuilder.DisplayAlert = function (message) {
	if (Xrm.RESTBuilder.CrmVersion[0] < 6) {
		alert(message);
	}
	if (Xrm.RESTBuilder.CrmVersion[0] > 6 && Xrm.RESTBuilder.CrmVersion[0] < 9) {
		Xrm.Utility.alertDialog(message);
	}
	var alertStrings = { confirmButtonLabel: "OK", text: message, title: "Error" }
	Xrm.Navigation.openAlertDialog(alertStrings);
}

Xrm.RESTBuilder.Block = function () {
	$.blockUI({
		css: {
			border: "none",
			padding: "15px",
			backgroundColor: "#000",
			"-webkit-border-radius": "10px",
			"-moz-border-radius": "10px",
			opacity: .5,
			color: "#fff"
		},
		ignoreIfBlocked: true
	});
};

Xrm.RESTBuilder.BlockDiv = function (div, message) {
	$(div).block({
		css: {
			border: "none",
			padding: "15px",
			backgroundColor: "#000",
			"-webkit-border-radius": "10px",
			"-moz-border-radius": "10px",
			opacity: .5,
			color: "#fff"
		},
		message: ((message === null || message === undefined) ? "<h1>Please wait...</h1>" : "<h1>" + message + "</h1>")
	});
}

Xrm.RESTBuilder.UnBlockDiv = function (div) {
	$(div).unblock();
}

Xrm.RESTBuilder.CreateTimePicker = function () {
	var times = [];
	times.push("<select class='Time ui-corner-all'>");
	times.push("<option value='00:00:00'>12:00am</option>");
	times.push("<option value='00:30:00'>12:30am</option>");
	times.push("<option value='01:00:00'>1:00am</option>");
	times.push("<option value='01:30:00'>1:30am</option>");
	times.push("<option value='02:00:00'>2:00am</option>");
	times.push("<option value='02:30:00'>2:30am</option>");
	times.push("<option value='03:00:00'>3:00am</option>");
	times.push("<option value='03:30:00'>3:30am</option>");
	times.push("<option value='04:00:00'>4:00am</option>");
	times.push("<option value='04:30:00'>4:30am</option>");
	times.push("<option value='05:00:00'>5:00am</option>");
	times.push("<option value='05:30:00'>5:30am</option>");
	times.push("<option value='06:00:00'>6:00am</option>");
	times.push("<option value='06:30:00'>6:30am</option>");
	times.push("<option value='07:00:00'>7:00am</option>");
	times.push("<option value='07:30:00'>7:30am</option>");
	times.push("<option value='08:00:00'>8:00am</option>");
	times.push("<option value='08:30:00'>8:30am</option>");
	times.push("<option value='09:00:00'>9:00am</option>");
	times.push("<option value='09:30:00'>9:30am</option>");
	times.push("<option value='10:00:00'>10:00am</option>");
	times.push("<option value='10:30:00'>10:30am</option>");
	times.push("<option value='11:00:00'>11:00am</option>");
	times.push("<option value='11:30:00'>11:30am</option>");
	times.push("<option value='12:00:00'>12:00pm</option>");
	times.push("<option value='12:30:00'>12:30pm</option>");
	times.push("<option value='13:00:00'>1:00pm</option>");
	times.push("<option value='13:30:00'>1:30pm</option>");
	times.push("<option value='14:00:00'>2:00pm</option>");
	times.push("<option value='14:30:00'>2:30pm</option>");
	times.push("<option value='15:00:00'>3:00pm</option>");
	times.push("<option value='15:30:00'>3:30pm</option>");
	times.push("<option value='16:00:00'>4:00pm</option>");
	times.push("<option value='16:30:00'>4:30pm</option>");
	times.push("<option value='17:00:00'>5:00pm</option>");
	times.push("<option value='17:30:00'>5:30pm</option>");
	times.push("<option value='18:00:00'>6:00pm</option>");
	times.push("<option value='18:30:00'>6:30pm</option>");
	times.push("<option value='19:00:00'>7:00pm</option>");
	times.push("<option value='19:30:00'>7:30pm</option>");
	times.push("<option value='20:00:00'>8:00pm</option>");
	times.push("<option value='20:30:00'>8:30pm</option>");
	times.push("<option value='21:00:00'>9:00pm</option>");
	times.push("<option value='21:30:00'>9:30pm</option>");
	times.push("<option value='22:00:00'>10:00pm</option>");
	times.push("<option value='22:30:00'>10:30pm</option>");
	times.push("<option value='23:00:00'>11:00pm</option>");
	times.push("<option value='23:30:00'>11:30pm</option>");
	times.push("</select>");
	return times.join("");
};

Xrm.RESTBuilder.FindTypeTable = function () {
	if (Xrm.RESTBuilder.Type === "Retrieve" || Xrm.RESTBuilder.Type === "RetrieveMultiple") {
		return "TableRetrieve";
	}
	return "TableCreateUpdate";
};

// Filters the select based on the Lookup target(s)
Xrm.RESTBuilder.ApplyLookupTargets = function (ctrl, targets) {
	var options = $(ctrl).find("option");
	for (var i = 0; i < options.length; i++) {
		if ($.inArray(options[i].value.toLowerCase(), targets) === -1) {
			$(options[i]).remove();
		}
	}
	$(ctrl).removeAttr("selected").find("option:first").attr("selected", "selected");
};

// Create options from boolean
Xrm.RESTBuilder.CreateBooleanSelects = function (options) {
	var output = [];
	output.push("<option value='null'></option>");
	var label = Xrm.RESTBuilder.GetLabel(options.FalseOption.Label);
	var value = options.FalseOption.Value;
	output.push("<option value='" + value + "'>" + label + "</option>");
	label = Xrm.RESTBuilder.GetLabel(options.TrueOption.Label);
	value = options.TrueOption.Value;
	output.push("<option value='" + value + "'>" + label + "</option>");

	return output.join("");
};

// Create options from optionset
Xrm.RESTBuilder.CreateOptionsetSelects = function (options) {
	var output = [];
	output.push("<option value='null'></option>");
	for (var i = 0; i < options.length; i++) {
		var label = Xrm.RESTBuilder.GetLabel(options[i].Label);
		var value = options[i].Value;
		output.push("<option value='" + value + "'>" + label + "</option>");
	}
	return output.join("");
};

Xrm.RESTBuilder.GetLabel = function (obj) {
	if (obj.UserLocalizedLabel !== null) {
		return obj.UserLocalizedLabel.Label;
	} else {
		for (var j = 0; j < obj.LocalizedLabels.length; j++) {
			if (obj.LocalizedLabels[j].LanguageCode === Xrm.Page.context.getUserLcid()) {
				return obj.LocalizedLabels[j].Label;
			}
		}
	}
	return "[No Display Name]";
};

// Sorts a select list based on the text value
Xrm.RESTBuilder.SortSelect = function (ctrl) {
	var options = $(ctrl).find("option");
	options.sort(function (a, b) {
		if (a.text.toLowerCase() > b.text.toLowerCase()) return 1;
		else if (a.text.toLowerCase() < b.text.toLowerCase()) return -1;
		else return 0;
	});
	$(ctrl).empty().html(options);
};

Xrm.RESTBuilder.SortSelectItems = function (ctrl) {
	var selects = $(ctrl).find("li");
	selects.sort(function (a, b) {
		if (a.id.toLowerCase() > b.id.toLowerCase()) return 1;
		else if (a.id.toLowerCase() < b.id.toLowerCase()) return -1;
		else return 0;
	});
	$(ctrl).empty().html(selects);
};

Xrm.RESTBuilder.GetEntitySetName = function (logicalName) {
	var entitySets = $.grep(Xrm.RESTBuilder.EntitySets, function (e) { return e.attributes.EntityType.value === "Microsoft.Dynamics.CRM." + logicalName; });
	if (entitySets.length === 1) {
		return entitySets[0].attributes.Name.value;
	}
	return "";
}

Xrm.RESTBuilder.GetPrimaryIdAttribute = function (name) {
	var names = $.grep($("#EntityList option"), function (e) { return $(e).attr("logicalname") === name; });
	if (names.length === 1) {
		return $(names[0]).attr("PrimaryIdAttribute");
	}
	return "";
}

Xrm.RESTBuilder.CreateFilterSelect = function (type) {
	var ctrl = $("<select class='Filter ui-corner-all' />");
	var options = [];
	options.push("<option value='eq'>Equal</option>");
	options.push("<option value='ne'>Not Equal</option>");
	options.push("<option value='[field] ne null'>Contains Data</option>");
	options.push("<option value='[field] eq null'>Does Not Contain Data</option>");

	switch (type) {
		case "Memo":
		case "String":
			options.push("<option value='substringof([value],[field])'>Contains</option>");
			options.push("<option value='not substringof([value],[field])'>Does Not Contain</option>");
			options.push("<option value='startswith([field],[value])'>Begins With</option>");
			options.push("<option value='not startswith([field],[value])'>Does Not Begins With</option>");
			options.push("<option value='endswith([field],[value])'>Ends With</option>");
			options.push("<option value='not endswith([field],[value])'>Does Not End With</option>");
			break;
		case "Decimal":
		case "Double":
		case "BigInt":
		case "Integer":
			options.push("<option value='[field] gt'>Is Greater Than</option>");
			options.push("<option value='[field] ge'>Is Greater Than Or Equal To</option>");
			options.push("<option value='[field] lt'>Is Less Than</option>");
			options.push("<option value='[field] le'>Is Less Than Or Equal To</option>");
			break;
		case "Money":
			options.push("<option value='gt'>Is Greater Than</option>");
			options.push("<option value='ge'>Is Greater Than Or Equal To</option>");
			options.push("<option value='lt'>Is Less Than</option>");
			options.push("<option value='le'>Is Less Than Or Equal To</option>");
			break;
		case "DateTime":
			options.push("<option value='[field] gt'>After</option>");
			options.push("<option value='[field] ge'>On Or After</option>");
			options.push("<option value='[field] lt'>Before</option>");
			options.push("<option value='[field] le'>On Or Before</option>");
			break;
	}
	return ctrl.html(options.join(""));
};

Xrm.RESTBuilder.RemoveArrayDuplicates = function (input) {
	var i,
		len = input.length,
		out = [],
		obj = {};

	for (i = 0; i < len; i++) {
		obj[input[i]] = 0;
	}
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			out.push(i);
		}
	}
	return out;
};

Xrm.RESTBuilder.GetWebApi_StructuralProperty_Value = function (type) {
	if (type.substr(0, 4) === "Edm.")
		return 1;
	if (type.substr(0, 11) === "Collection(")
		return 4;
	if (type.substr(0, 6) === "mscrm.")
		return 5;
}

// Create REST String
Xrm.RESTBuilder.REST_String = function (schemaOrLogicalName, value) {
	value = Xrm.RESTBuilder.MakeValidString(value);
	return "entity." + schemaOrLogicalName + " = \"" + value + "\";\n";
};

// Create REST Lookup and Customer
Xrm.RESTBuilder.REST_Lookup = function (schemaOrLogicalName, id, entityName) {
	var name = (id === "" || id === null) ? "null" : entityName.toLowerCase();
	id = Xrm.RESTBuilder.MakeValidGuid(id);
	return "entity." + schemaOrLogicalName + " = {\n" +
		"            Id: \"" + id + "\",\n" +
		"            LogicalName: \"" + name + "\"\n" +
		"        };\n";
};

// Create REST Lookup and Customer - Web API
Xrm.RESTBuilder.REST_Lookup_WebApi = function (schemaOrLogicalName, id, entitySetName, entityName) {
	var name = (entityName === "" || entityName === null) ? "" : "_" + entityName;
	id = Xrm.RESTBuilder.MakeValidGuid(id);
	var entities = $.grep(Xrm.RESTBuilder.EntityTypes, function (e) {
		return e.attributes.Name.value === Xrm.RESTBuilder.EntityLogical;
	});
	var output = "entity[\"" + schemaOrLogicalName + name + "@odata.bind\"] = \"/" + entitySetName + "(" + id + ")\";\n";
	if (entities.length === 0)
		return output;
	var navProps = $.grep($(entities[0]).children().filter("NavigationProperty"), function (e) {
		return e.attributes.Name.value.toLowerCase() === (schemaOrLogicalName + name).toLowerCase() ||
			e.attributes.Name.value.toLowerCase() === (schemaOrLogicalName + name + "_" + Xrm.RESTBuilder.EntityLogical).toLowerCase();
	});
	if (navProps.length === 0)
		return "entity[\"" + schemaOrLogicalName + "@odata.bind\"] = \"/" + entitySetName + "(" + id + ")\";\n";

	return "entity[\"" + navProps[0].attributes.Name.value + "@odata.bind\"] = \"/" + entitySetName + "(" + id + ")\";\n";
};

// Create REST Picklist
Xrm.RESTBuilder.REST_Picklist = function (schemaOrLogicalName, value) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = { Value: null };\n";
	else
		return "entity." + schemaOrLogicalName + " = { Value: " + value + " };\n";
};

// Create REST Picklist - Web API
Xrm.RESTBuilder.REST_Picklist_WebApi = function (logicalName, value) {
	if (value === "" || value === null)
		return "entity." + logicalName + " = null;\n";
	else
		return "entity." + logicalName + " = " + value + ";\n";
};

// Create REST Boolean Managed Property  - Web API
Xrm.RESTBuilder.REST_BooleanManagedProperty_WeApi = function (logicalName, value) {
	var output = "entity." + logicalName + " = {};\n"
	output += "entity." + logicalName + ".Value = " + value + ";\n";
	return output;
}

// Create REST Money
Xrm.RESTBuilder.REST_Money = function (schemaOrLogicalName, value, precision) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = { Value: null };\n";
	else {
		value = Xrm.RESTBuilder.MakeValidNumber(value, true);
		return "entity." + schemaOrLogicalName + " = { Value: parseFloat(" + value + ").toFixed(" + precision + ") };\n";
	}
};

// Create REST Money - Web API
Xrm.RESTBuilder.REST_Money_WebApi = function (logicalname, value, precision) {
	if (value === "" || value === null)
		return "entity." + logicalname + " = null;\n";
	else {
		value = Xrm.RESTBuilder.MakeValidNumber(value, true);
		return "entity." + logicalname + " = Number(parseFloat(" + value + ").toFixed(" + precision + "));\n";
	}
};

// Create REST Decimal and Double/Float
Xrm.RESTBuilder.REST_Decimal = function (schemaOrLogicalName, value, precision) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = null;\n";
	else {
		value = Xrm.RESTBuilder.MakeValidNumber(value, true);
		return "entity." + schemaOrLogicalName + " = parseFloat(" + value + ").toFixed(" + precision + ");\n";
	}
};

// Create REST Decimal and Double/Float - Web API
Xrm.RESTBuilder.REST_Decimal_WebApi = function (schemaOrLogicalName, value) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = null;\n";
	else {
		value = Xrm.RESTBuilder.MakeValidNumber(value, true);
		return "entity." + schemaOrLogicalName + " = " + value + ";\n";
	}
};

// Create REST Boolean
Xrm.RESTBuilder.REST_Boolean = function (schemaOrLogicalName, value) {
	if (value === "null" || value === null)
		return "entity." + schemaOrLogicalName + " = null ;\n";
	else
		return "entity." + schemaOrLogicalName + " = " + ((value === "0") ? false : true) + ";\n";
};

// Create REST DateTime
Xrm.RESTBuilder.REST_DateTime = function (schemaName, date, time) {
	if (date === "" || date === null)
		return "entity." + schemaName + " = null;\n";
	else {
		var value = date + ((time !== "" && time !== undefined) ? " " + time : "");
		return "entity." + schemaName + " = new Date(\"" + value + "\").toLocaleString();\n";
	}
};

// Create REST DateTime - Web API
Xrm.RESTBuilder.REST_DateTime_WebApi = function (logicalName, date, time) {
	if (date === "" || date === null)
		return "entity." + logicalName + " = null;\n";
	else {
		var dateType = $.grep(Xrm.RESTBuilder.CurrentEntityAttributes, function (e) { return e.LogicalName === logicalName; })[0].DateTimeBehavior.Value;
		if (dateType === "DateOnly") {
			if (date === undefined) {
				return "entity." + logicalName + " = null;\n";
			}
			var dateSplit = date.split("/");
			return "entity." + logicalName + " = \"" + dateSplit[2] + "-" + dateSplit[0] + "-" + dateSplit[1] + "\";\n";
		} else {
			var value = date + ((time !== "" && time !== undefined) ? " " + time : "");
			return "entity." + logicalName + " = new Date(\"" + value + "\").toISOString();\n";
		}
	}
};

// Create REST Integer
Xrm.RESTBuilder.REST_Integer = function (schemaOrLogicalName, value) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = null;\n";
	else {
		value = Xrm.RESTBuilder.MakeValidNumber(value);
		return "entity." + schemaOrLogicalName + " = " + value + ";\n";
	}
};

// Create REST Uniqueidentifier
Xrm.RESTBuilder.REST_Uniqueidentifier = function (schemaOrLogicalName, value) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = null;\n";
	else {
		value = Xrm.RESTBuilder.MakeValidGuid(value);
		return "entity." + schemaOrLogicalName + " = \"" + value + "\";\n";
	}
};

// Create REST EntityName
Xrm.RESTBuilder.REST_EntityName = function (schemaOrLogicalName, value) {
	if (value === "" || value === null)
		return "entity." + schemaOrLogicalName + " = \"\";\n";
	else {
		value = Xrm.RESTBuilder.MakeValidGuid(value);
		return "entity." + schemaOrLogicalName + " = '" + value + "';\n";
	}
}

Xrm.RESTBuilder.CleanFetchXml = function (xmlString) {
	var output = xmlString.trim();
	output = output.replace(/>\s+</g, "><");
	output = encodeURIComponent(output);
	return output;
}

Xrm.RESTBuilder.MakeValidString = function (value) {
	if (value) {
		value = value.replace(/\"/g, '\\"');
	}
	return value;
}

Xrm.RESTBuilder.MakeValidNumber = function (value, includeDecimal) {
	if (value) {
		if (includeDecimal) {
			value = value.replace(/[^0-9.]/ig, "");
		}
		else {
			value = value.replace(/[^0-9]/ig, "");
		}
	}
	return value;
}

Xrm.RESTBuilder.MakeValidGuid = function (value) {
	if (value) {
		value = value.replace(/[^a-z0-9-]/ig, "");
		return value;
	}
	return "00000000-0000-0000-0000-000000000000";
}

String.prototype.replaceAll = function (search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};