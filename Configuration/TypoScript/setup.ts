<INCLUDE_TYPOSCRIPT: source="DIR:EXT:themes_gridelements/Configuration/TypoScript/">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:theme_bootstrap/Configuration/TypoScript/Library/">

page {
	typeNum = 0
	config {
		doctype = html5
	}
	#bodyTag = <body data-spy="scroll" data-target=".subnav" data-offset="50">
	includeCSS {
        file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap-3.1.1/less/bootstrap.less
		file2 = EXT:theme_bootstrap/Resources/Public/Stylesheets/main.css
	}
	includeJS {
		file1 = EXT:theme_bootstrap/Resources/Public/Contrib/Bootstrap/js/bootstrap.js
	}
}


