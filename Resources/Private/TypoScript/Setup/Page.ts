page {
	config {
		doctype = html5
	}
	#bodyTag = <body data-spy="scroll" data-target=".subnav" data-offset="50">
	includeCSS {
		#file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/less/bootstrap.less
		file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/css/bootstrap.css
		#file2 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/less/responsive.less
		file3 = EXT:theme_bootstrap/Resources/Public/Stylesheets/main.css
	}
	includeJS {
		file1 = EXT:theme_bootstrap/Resources/Public/Contrib/bootstrap/js/bootstrap.js
	}
}

includeLibs.t3jquery = EXT:t3jquery/class.tx_t3jquery.php
page.75 = USER
page.75.userFunc = tx_t3jquery->addJqJS