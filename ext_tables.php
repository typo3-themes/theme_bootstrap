<?php
/**
 *
 * Configuration of theme_bootstrap
 *
 */
//if(!\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('themes')) {
//    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', $_EXTKEY . ': theme');
//}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'subheader;LLL:EXT:theme_bootstrap/Resources/Private/Language/locallang.xlf:content.pricing_table_listheader', 'bullets', 'replace:header_link');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'altText;LLL:EXT:theme_bootstrap/Resources/Private/Language/locallang.xlf:content.pricing_table_linktext,header_link', 'bullets', 'after:bodytext');

