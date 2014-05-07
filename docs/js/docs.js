// commercial = [
// 	{
// 		"name": "tiltimage",
// 		"path": "tiltimage"
// 	}
// ]
//
// exports.components = [
// 	{
// 		"name": "modal",
// 		"path": "../components/modal"
// 	},
// 	{
// 		"name": "popup",
// 		"path": "../components/popup"
// 	},
// 	{
// 		"name": "affix",
// 		"path": "../components/affix"
// 	},
// 	{
// 		"name": "button",
// 		"path": "../components/button"
// 	},
// 	{
// 		"name": "tabs",
// 		"path": "../components/tabs"
// 	},
// 	{
// 		"name": "scrollspy",
// 		"path": "../components/scrollspy"
// 	}
// ]
//
// exports.widgets = [
// 	{
// 		"name": "dropdowns",
// 		"path": "dropdowns"
// 	},
//
// 	{
// 		"name": "groups",
// 		"path": "groups",
//
// 		"include": [
// 			{
// 				"name": "buttons",
// 				"path": "groups/buttons"
// 			},
// 			{
// 				"name": "inputs",
// 				"path": "groups/inputs"
// 			},
// 			{
// 				"name": "addons",
// 				"path": "groups/addons"
// 			}
// 		]
// 	},
//
// 	{
// 		"name": "nav",
// 		"path": "nav",
//
// 		"include": [
// 			{
// 				"name": "tabs",
// 				"path": "nav/tabs"
// 			},
// 			{
// 				"name": "pills",
// 				"path": "nav/pills"
// 			},
// 			{
// 				"name": "menu",
// 				"path": "nav/menu"
// 			},
// 			{
// 				"name": "list-group",
// 				"path": "nav/list-group"
// 			},
// 			{
// 				"name": "bar",
// 				"path": "nav/bar"
// 			}
// 		]
// 	},
//
// 	{
// 		"name": "labels",
// 		"path": "labels"
// 	},
//
// 	{
// 		"name": "badges",
// 		"path": "badges"
// 	},
//
// 	{
// 		"name": "thumbnails",
// 		"path": "thumbnails",
//
// 		"include": [
// 			{
// 				"name": "captions",
// 				"path": "thumbnails/captions"
// 			}
// 		]
// 	},
//
// 	{
// 		"name": "alerts",
// 		"path": "alerts"
// 	},
//
// 	{
// 		"name": "progress",
// 		"path": "progress"
// 	}
// ]


exports.widgets = [
	{
		"name": "typography",
		"path": "common",

		"include": [
			{
				"name": "headings",
				"path": "headings"
			},
			{
				"name": "body",
				"path": "body"
			},
			{
				"name": "lists",
				"path": "lists"
			},
			{
				"name": "code",
				"path": "code"
			}
		]
	},

	{
		"name": "grid",
		"path": "common",

		"include": [
			{
				"name": "container",
				"path": "container"
			},

			{
				"name": "row",
				"path": "row"
			},

			{
				"name": "columns",
				"path": "columns"
			}
		]
	},

	{
		"name": "tables",
		"path": "common",

		"include": [
			{
				"name": "basic",
				"path": "basic"
			},

			{
				"name": "striped",
				"path": "striped"
			},

			{
				"name": "hovered",
				"path": "hovered"
			},

			{
				"name": "rows",
				"path": "rows"
			},

			{
				"name": "cells",
				"path": "cells"
			}
		]
	},

	{
		"name": "forms",
		"path": "common",

		"include": [
			{
				"name": "formgrid",
				"path": "grid"
			},

			{
				"name": "fieldset",
				"path": "fieldset"
			},

			{
				"name": "fields",
				"path": "fields"
			}
		]
	},

	{
		"name": "buttons",
		"path": "common",

		"include": [
			{
				"name": "themes",
				"path": "themes"
			},

			{
				"name": "sizes",
				"path": "sizes"
			},

			{
				"name": "states",
				"path": "states"
			},

			{
				"name": "blocks",
				"path": "blocks"
			}
		]
	}
]

exports.utilities = [
	{
		"name": "responsive",
		"path": "responsive"
	}
]
