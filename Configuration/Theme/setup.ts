<INCLUDE_TYPOSCRIPT: source="DIR:EXT:themes_gridelements/Configuration/TypoScript/">

page {
	typeNum = 0
	config {
		doctype = html5
	}
	#bodyTag = <body data-spy="scroll" data-target=".subnav" data-offset="50">
	includeCSS {
		#file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/less/bootstrap.less
		#file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/css/bootstrap.css
		file1 = {$plugin.tx_theme_bootstrap.bootstrapTheme}
		#file2 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/less/responsive.less
		file2 = EXT:theme_bootstrap/Resources/Public/Stylesheets/main.css
	}
	includeJS {
		file1 = EXT:theme_bootstrap/Resources/Public/Contrib/Bootstrap/js/bootstrap.js
	}
}


