exports.widgets = [
	{
		name: "typography"
		path: "typoCommon"
		include: [
			{
				name: "common"
				path: "typoCommon"
			}
			{
				name: "headings"
				path: "typoHeadings"
			}
			{
				name: "body"
				path: "typoBody"
			}
			{
				name: "lists"
				path: "typoLists"
			}
			{
				name: "code"
				path: "typoCode"
			}
		]
	}
	{
		name: "grid"
		path: "gridCommon"
		include: [
			{
				name: "common"
				path: "gridCommon"
			}
			{
				name: "container"
				path: "gridContainer"
			}
			{
				name: "row"
				path: "gridRow"
			}
			{
				name: "columns"
				path: "gridColumns"
			}
		]
	}
	{
		name: "tables"
		path: "tablesCommon"
		include: [
			{
				name: "common"
				path: "tablesCommon"
			}
			{
				name: "basic"
				path: "tablesbasic"
			}
			{
				name: "striped"
				path: "tablesStriped"
			}
			{
				name: "hovered"
				path: "tablesHovered"
			}
			{
				name: "rows"
				path: "tablesRows"
			}
			{
				name: "cells"
				path: "tablesCells"
			}
		]
	}
	{
		name: "forms"
		path: "formsGrid"
		include: [
			{
				name: "common"
				path: "formsCommon"
			}
			{
				name: "grid"
				path: "formsGrid"
			}
			{
				name: "fields"
				path: "formsFields"
			}
			{
				name: "fieldset"
				path: "formsFieldset"
			}
		]
	}
	{
		name: "buttons"
		path: "buttonsCommon"
		include: [
			{
				name: "common"
				path: "buttonsCommon"
			}
			{
				name: "themes"
				path: "buttonsThemes"
			}
			{
				name: "sizes"
				path: "buttonsSizes"
			}
			{
				name: "states"
				path: "buttonsStates"
			}
			{
				name: "blocks"
				path: "buttonsBlocks"
			}
		]
	}
	{
		name: "groups"
		path: "groupsCommon"
		include: [
			{
				name: "common"
				path: "groupsCommon"
			}
			{
				name: "buttons"
				path: "groupsButtons"
			}
			{
				name: "inputs"
				path: "groupsInputs"
			}
			{
				name: "addons"
				path: "groupsAddons"
			}
		]
	}
]

exports.utilities = [
	name: "responsive"
	path: "responsive"
]
