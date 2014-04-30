<INCLUDE_TYPOSCRIPT: source="DIR:EXT:themes_gridelements/Configuration/TypoScript/" extension="setupts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:theme_bootstrap/Configuration/TypoScript/Library/" extension="setupts">

page {
	typeNum = 0
	config {
		doctype = html5
	}
	#bodyTag = <body data-spy="scroll" data-target=".subnav" data-offset="50">
	includeCSS {
        file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap-3.1.1/less/bootstrap.less
		file2 = EXT:theme_bootstrap/Resources/Public/Stylesheets/main.css
		file3 = EXT:theme_bootstrap/Resources/Private/Dyncss/import.less
	}
	includeJS {
		file1 = EXT:theme_bootstrap/Resources/Public/Contrib/Bootstrap/js/bootstrap.js
	}
}


