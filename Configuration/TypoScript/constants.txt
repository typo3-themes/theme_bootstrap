<INCLUDE_TYPOSCRIPT: source="FILE:EXT:themes_gridelements/Configuration/TypoScript/constants.ts">

themes {
	bootstrapTheme = {$themes.resourcesPublicPath}Contrib/Bootstrap/css/bootstrap.min.css

    configuration {
        siteName = Bootstrap Theme
        colors {
            # cat=site colors; type=color; label= color: a color picker
            #link      = #FF0000
            #primary   = #FF0000
            #secondary = #FF0000

            # cat=site colors; type=color; label= Success color
            information = #eaf7ff
            # cat=site colors; type=color; label= Success color
            success   = #cdeaca
            # cat=site colors; type=color; label= Notice and information color
            notice    = #f6f7fa
            # cat=site colors; type=color; label= Warning color
            warning   = #fbf6de
            # cat=site colors; type=color; label= Error color
            error     = #f6d3cf
        }
    }
    # Page-IDs of DataStorages
    #container {
    #    frontendUser =
    #    news =
    #    address =
    #    newsletter =
    #}
}