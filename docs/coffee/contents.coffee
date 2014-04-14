exports.widgets = [
	{
		name: "typography"
		path: "common"
		include: [
			{
				name: "headings"
				path: "headings"
			}
			{
				name: "body"
				path: "body"
			}
			{
				name: "lists"
				path: "lists"
			}
			{
				name: "code"
				path: "code"
			}
		]
	}
	{
		name: "grid"
		path: "common"
		include: [
			{
				name: "container"
				path: "container"
			}
			{
				name: "row"
				path: "row"
			}
			{
				name: "columns"
				path: "columns"
			}
		]
	}
	{
		name: "tables"
		path: "common"
		include: [
			{
				name: "basic"
				path: "basic"
			}
			{
				name: "striped"
				path: "striped"
			}
			{
				name: "hovered"
				path: "hovered"
			}
			{
				name: "rows"
				path: "rows"
			}
			{
				name: "cells"
				path: "cells"
			}
		]
	}
	{
		name: "forms"
		path: "common"
		include: [
			{
				name: "formgrid"
				path: "grid"
			}
			{
				name: "fieldset"
				path: "fieldset"
			}
			{
				name: "fields"
				path: "fields"
			}
		]
	}
	{
		name: "buttons"
		path: "common"
		include: [
			{
				name: "themes"
				path: "themes"
			}
			{
				name: "sizes"
				path: "sizes"
			}
			{
				name: "states"
				path: "states"
			}
			{
				name: "blocks"
				path: "blocks"
			}
		]
	}
]

exports.utilities = [
	name: "responsive"
	path: "responsive"
]
