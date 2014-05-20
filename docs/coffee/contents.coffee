exports.start = [
	{
		name: "download"
		path: "dowloadCommon"
	}
	{
		name: "difference"
		path: "differenceCommon"
	}
	{
		name: "structure"
		path: "commonStructure"
		include: [
			{
				name: 'common'
				path: 'commonStructure'
				invisible: yes
			}
			{
				name: 'build'
				path: 'structureBuild'
			}
			{
				name: 'sources'
				path: 'structureSources'
			}
		]
	}
	{
		name: "howto"
		path: "commonHowto"
		include: [
			{
				name: 'common'
				path: 'commonHowto'
				invisible: yes
			}
			{
				name: 'install'
				path: 'howtoInstall'
			}
			{
				name: 'build'
				path: 'howtoBuild'
			}
			{
				name: 'themeManage'
				menu: 'add or edit themes'
				path: 'howtoThemeManage'
			}
			{
				name: 'sizeManage'
				menu: 'add or edit sizes'
				path: 'howtoSizeManage'
			}
		]
	}
]


exports.basic = [
	{
		name: "typography"
		path: "typoCommon"
		include: [
			{
				name: "common"
				path: "typoCommon"
				invisible: yes
			}
			{
				name: "rtl"
				path: "typoRtl"
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
				name: "links"
				path: "typoLinks"
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
				invisible: yes
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
				invisible: yes
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
				invisible: yes
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
]


exports.widgets = [
	{
		name: "buttons"
		path: "buttonsCommon"
		include: [
			{
				name: "common"
				path: "buttonsCommon"
				invisible: yes
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
			{
				name: "ghost"
				path: "buttonsGhost"
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
				invisible: yes
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
	{
		name: "dropdowns"
		path: "dropdownsCommon"
	}
	{
		name: "nav"
		path: "navCommon"
		include: [
			{
				name: "common"
				path: "navCommon"
				invisible: yes
			}
			{
				name: "menu"
				path: "navMenu"
			}
			{
				name: "tabs"
				path: "navTabs"
			}
			{
				name: "pills"
				path: "navPills"
			}
			{
				name: "bar"
				path: "navBar"
			}
			{
				name: "list-group"
				path: "navListGroup"
			}
		]
	}
	{
		name: "labels"
		path: "labelsCommon"
	}
	{
		name: "badges"
		path: "badgesCommon"
	}
	{
		name: "progress"
		path: "progressCommon"
	}
	{
		name: "alerts"
		path: "alertsCommon"
	}
	{
		name: "thumbnails"
		path: "thumbnailsCommon"
		include: [
			{
				name: "common"
				path: "thumbnailsCommon"
				invisible: yes
			}
			{
				name: "captions"
				path: "thumbnailsCaptions"
			}
		]
	}
	{
		name: "spinners"
		path: "spinnersCommon"
		include: [
			{
				name: "common"
				path: "spinnersCommon"
				invisible: yes
			}
			{
				name: "square"
				path: "spinnersSquare"
			}
			{
				name: "ring"
				path: "spinnersRing"
			}
			{
				name: "fb"
				path: "spinnersFb"
			}
			{
				name: "waves"
				path: "spinnersWaves"
			}
		]
	}
	{
		name: "shaders"
		path: "shadersCommon"
		include: [
			{
				name: "common"
				path: "shadersCommon"
				invisible: yes
			}
		]
	}
]

exports.utilities = [
	{
		name: "responsive"
		path: "responsiveCommon"
	}
	{
		name: "order"
		path: "orderCommon"
	}
]



exports.components = [
	{
		name: "button"
		path: "buttonCommon"
	}
	{
		name: "popup"
		path: "popupCommon"
	}
	{
		name: "tabs"
		path: "tabsCommon"
	}
	{
		name: "modal"
		path: "modalCommon"
	}
	{
		name: "scrollspy"
		path: "scrollspyCommon"
	}
	{
		name: "affix"
		path: "affixCommon"
	}
]
