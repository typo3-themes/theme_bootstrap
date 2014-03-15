



lib.nav.main = HMENU
lib.nav.main.entryLevel       = 0
lib.nav.main.includeNotInMenu = 0
lib.nav.main.wrap    = <ul class="nav navbar-nav"> | </ul>
lib.nav.main.1 = TMENU
lib.nav.main.1 {
  expAll = 1
  stdWrapHtmlSpecialChars = 0
  wrapHtmlSpecialChars    = 0
  NO.wrapItemAndSub.insertData = 1
  NO.wrapItemAndSub = <li class="state-no uid-{field:uid} point-{register:count_MENUOBJ} first">|</li>|*|<li class="state-no uid-{field:uid} point-{register:count_MENUOBJ} middle">|</li>|*|<li class="state-no uid-{field:uid} point-{register:count_MENUOBJ} last">|</li>
  NO.stdWrapHtmlSpecialChars = 0
  NO.wrapHtmlSpecialChars    = 0
  ACT < .NO
  ACT = 1
  ACT.wrapItemAndSub.insertData = 1
  ACT.wrapItemAndSub = <li class="state-act active uid-{field:uid} point-{register:count_MENUOBJ} first">|</li>|*|<li class="state-act active uid-{field:uid} point-{register:count_MENUOBJ} middle">|</li>|*|<li class="state-act active uid-{field:uid} point-{register:count_MENUOBJ} last">|</li>
  ACT.stdWrapHtmlSpecialChars = 0
  ACT.wrapHtmlSpecialChars    = 0
  IFSUB < .NO
  IFSUB = 1
  IFSUB.wrapItemAndSub.insertData = 1
  IFSUB.wrapItemAndSub = <li class="state-ifsub uid-{field:uid} point-{register:count_MENUOBJ} first">|</li>|*|<li class="state-ifsub uid-{field:uid} point-{register:count_MENUOBJ} middle">|</li>|*|<li class="state-ifsub uid-{field:uid} point-{register:count_MENUOBJ} last">|</li>
  IFSUB.stdWrapHtmlSpecialChars = 0
  IFSUB.wrapHtmlSpecialChars    = 0
  IFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
  IFSUB.after = <b class="caret"></b></a>
  IFSUB.doNotLinkIt = 1
  ACTIFSUB < .ACT
  ACTIFSUB = 1
  ACTIFSUB.wrapItemAndSub.insertData = 1
  ACTIFSUB.wrapItemAndSub = <li class="state-actifsub active uid-{field:uid} point-{register:count_MENUOBJ} first">|</li>|*|<li class="state-actifsub active uid-{field:uid} point-{register:count_MENUOBJ} middle">|</li>|*|<li class="state-actifsub active uid-{field:uid} point-{register:count_MENUOBJ} last">|</li>
  ACTIFSUB.stdWrapHtmlSpecialChars = 0
  ACTIFSUB.wrapHtmlSpecialChars    = 0
  ACTIFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
  ACTIFSUB.after = <b class="caret"></b></a>
  ACTIFSUB.doNotLinkIt = 1
}
lib.nav.main.2 = TMENU
lib.nav.main.2 {
  expAll = 0
  stdWrapHtmlSpecialChars = 0
  wrapHtmlSpecialChars    = 0
  wrap    = <ul role="menu" class="dropdown-menu"> | </ul>
  NO.wrapItemAndSub.insertData = 1
  NO.wrapItemAndSub = <li class="state-no uid-{field:uid} point-{register:count_MENUOBJ} first">|</li>|*|<li class="state-no uid-{field:uid} point-{register:count_MENUOBJ} middle">|</li>|*|<li class="state-no uid-{field:uid} point-{register:count_MENUOBJ} last">|</li>
  NO.stdWrapHtmlSpecialChars = 0
  NO.wrapHtmlSpecialChars    = 0
  ACT < .NO
  ACT = 1
  ACT.wrapItemAndSub.insertData = 1
  ACT.wrapItemAndSub = <li class="state-act active uid-{field:uid} point-{register:count_MENUOBJ} first">|</li>|*|<li class="state-act active uid-{field:uid} point-{register:count_MENUOBJ} middle">|</li>|*|<li class="state-act active uid-{field:uid} point-{register:count_MENUOBJ} last">|</li>
  ACT.stdWrapHtmlSpecialChars = 0
  ACT.wrapHtmlSpecialChars    = 0
}
