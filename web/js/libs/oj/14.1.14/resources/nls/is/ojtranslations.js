define({"oj-message":{fatal:"Alvarlegt",error:"Villa",warning:"Viðvörun",info:"Uppl.",confirmation:"Staðfesting","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Gildi er ekki með væntu sniði.",detail:"Skráið gildi með væntu sniði.","plural-separator":", ",hint:{summary:"Dæmi: {exampleValue}",detail:"Skráið gildi með þessu sniði: '{exampleValue}'.","detail-plural":"Skráið gildi með þessum sniðum: '{exampleValue}'."},optionHint:{detail:"Viðurkennt gildi fyrir valkost '{propertyName}' er '{propertyValueValid}'.","detail-plural":"Viðurkennd gildi fyrir valkost '{propertyName}' eru '{propertyValueValid}'."},optionTypesMismatch:{summary:"Gildi fyrir valkostinn '{requiredPropertyName}' er áskilið þegar valkosturinn '{propertyName}' er stilltur á '{propertyValue}'."},optionTypeInvalid:{summary:"Gildi af væntri tegund var ekki gefið upp fyrir valkost '{propertyName}'."},optionOutOfRange:{summary:"Gildi {propertyValue} er utan sviðs fyrir valkostinn '{propertyName}'."},optionValueInvalid:{summary:"Ógilt gildi '{propertyValue}' var tilgreint fyrir valkostinn '{propertyName}'."},number:{decimalFormatMismatch:{summary:"Uppgefið gildi er ekki með væntu talnasniði."},shortLongUnsupportedParse:{summary:"'stutt' og 'langt' eru ekki studd fyrir þáttun gagnabreytis.",detail:"Breytið hlut í lesaðgang. Lesaðgangssvæði kalla ekki upp þáttunarvirkni gagnabreytisins."},currencyFormatMismatch:{summary:"Uppgefið gildi er ekki með væntu gjaldmiðilssniði."},percentFormatMismatch:{summary:"Uppgefið gildi er ekki með væntu prósentusniði."},invalidNumberFormat:{summary:"Uppgefið gildi er ekki gild tala.",detail:"Gefið upp gilda tölu."}},color:{invalidFormat:{summary:"Ógilt litasnið.",detail:"Ógild valkostslýsing litasniðs."},invalidSyntax:{summary:"Ógild litalýsing.",detail:"Skráið litagildi í samræmi við CSS3 staðalinn."}},datetime:{datetimeOutOfRange:{summary:"Gildi '{value}' er utan sviðs fyrir '{propertyName}'.",detail:"Skráið gildi á milli '{minValue}' og '{maxValue}'.",hour:"klst.",minute:"mínúta",second:"sekúnda",millisec:"millisek.",month:"mánuður",day:"dagur",year:"ár","month name":"mánaðarheiti",weekday:"vikudagur"},dateFormatMismatch:{summary:"Uppgefið gildi er ekki með væntu dagsetningarsniði."},invalidTimeZoneID:{summary:"Ógilt kenni tímabeltis {timeZoneID} gefið upp."},nonExistingTime:{summary:"Innskráður tími er ekki til af því hann fellur út við árstíðabundna klukkubreytingu."},missingTimeZoneData:{summary:"Tímabeltisgögn vantar. Kallið 'ojs/ojtimezonedata' áskilin til að hlaða tímabeltisgögnum."},timeFormatMismatch:{summary:"Uppgefið gildi er ekki með væntu tímasniði."},datetimeFormatMismatch:{summary:"Uppgefið gildi er ekki með væntu dagsetningar- og tímasniði."},dateToWeekdayMismatch:{summary:"Dagur '{date}' fellur ekki á '{weekday}'.",detail:"Skráið virkan dag í samræmi við dagsetninguna."},invalidISOString:{invalidRangeSummary:"Gildið '{value}' er utan sviðs fyrir '{propertyName}' svæðið í ISO 8601 strengnum '{isoStr}'.",summary:"Uppgefinn '{isoStr}' er ekki gildur ISO 8601 strengur.",detail:"Gefið upp gildan ISO 8601 streng."}}},"oj-validator":{length:{hint:{min:"Skráið {min} eða fleiri tákn.",max:"Skráið {max} eða færri tákn.",inRange:"Skráið {min} til {max} tákn.",exact:"Skráið {length} tákn."},messageDetail:{tooShort:"Skráið {min} eða fleiri tákn.",tooLong:"Skráið ekki fleiri en {max} tákn."},messageSummary:{tooShort:"Það eru of fá tákn.",tooLong:"Það eru of mörg tákn."}},range:{number:{hint:{min:"Skráið tölu hærri eða jafna og {min}.",max:"Skráið tölu lægri eða jafna og {max}.",inRange:"Skráið tölu á milli {min} og {max}.",exact:"Skráið töluna {num}."},messageDetail:{rangeUnderflow:"Skráið {min} eða hærri tölu.",rangeOverflow:"Skráið {max} eða lægri tölu.",exact:"Skráið töluna {num}."},messageSummary:{rangeUnderflow:"Talan er of lág.",rangeOverflow:"Talan er of há."}},datetime:{hint:{min:"Skráið dagsetningu og tíma á eða eftir {min}.",max:"Skráið dagsetningu og tíma á eða fyrir {max}.",inRange:"Skráið dagsetningu og tíma á milli {min} og {max}."},messageDetail:{rangeUnderflow:"Skráið dagsetningu á eða eftir {min}.",rangeOverflow:"Skráið dagsetningu á eða fyrir {max}."},messageSummary:{rangeUnderflow:"Dagsetning og tími er á undan elstu dagsetningu og tíma.",rangeOverflow:"Dagsetning og tími er á eftir nýjustu dagsetningu og tíma."}},date:{hint:{min:"Skráið dagsetningu á eða eftir {min}.",max:"Skráið dagsetningu á eða fyrir {max}.",inRange:"Skráið dagsetningu á milli {min} og {max}."},messageDetail:{rangeUnderflow:"Skráið dagsetningu á eða eftir {min}.",rangeOverflow:"Skráið dagsetningu á eða fyrir {max}."},messageSummary:{rangeUnderflow:"Dagsetning er á undan elstu dagsetningu.",rangeOverflow:"Dagsetning er á eftir nýjustu dagsetningu."}},time:{hint:{min:"Skráið tíma á eða eftir {min}.",max:"Skráið tíma á eða fyrir {max}.",inRange:"Skráið tíma á milli {min} og {max}."},messageDetail:{rangeUnderflow:"Skráið tíma á eða eftir {min}.",rangeOverflow:"Skráið tíma á eða fyrir {max}."},messageSummary:{rangeUnderflow:"Tími er fyrr en elsti tími.",rangeOverflow:"Tími er seinna en nýjasti tími."}}},restriction:{date:{messageSummary:"Dags. {value} er úr afvirkjaðri skráningu.",messageDetail:"Valin dagsetning er ekki tiltæk. Reynið aðra dagsetningu."}},regExp:{summary:"Snið er rangt.",detail:"Skráið leyfð gildi sem lýst er í þessari reglulegu segð: '{pattern}'."},required:{summary:"Gildi er áskilið.",detail:"Skráið gildi."}},"oj-ojEditableValue":{loading:"Hleður",requiredText:"Áskilið",helpSourceText:"Fá að vita meira..."},"oj-ojInputDate":{done:"Lokið",cancel:"Hætta við",time:"Tími",prevText:"Fyrri",nextText:"Næsta",currentText:"Í dag",weekHeader:"Vika",tooltipCalendar:"Velja dags.",tooltipCalendarTime:"Velja dags. og tíma",tooltipCalendarDisabled:"Velja dags. afvirkjað.",tooltipCalendarTimeDisabled:"Velja dags. og tími afvirkjað.",picker:"Veljari",weekText:"Vika",datePicker:"Dags.veljari",inputHelp:"Veljið lykil niður eða lykil upp til að fara í dagatal.",inputHelpBoth:"Veljið lykil niður eða lykil upp fyrir aðgang að dagatali og skipti + lykill niður eða skipti lykill upp fyrir aðgang að tímafellilista.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"Hætta við",okText:"Í lagi",currentTimeText:"Núna",hourWheelLabel:"Klst.",minuteWheelLabel:"Mínúta",ampmWheelLabel:"FHEH",tooltipTime:"Velja tíma.",tooltipTimeDisabled:"Velja tími afvirkjaður",inputHelp:"Veljið lykil niður eða lykil upp til að komast í tímafellilista.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Farið framyfir {len} hámarkslengd.",accessibleMaxLengthRemaining:"{chars} tákn eftir."},"oj-ojInputText":{accessibleClearIcon:"Hreinsa"},"oj-ojInputPassword":{regexp:{messageDetail:"Gildi verður að samrýmast þessu munstri: '{pattern}'."},accessibleShowPassword:"Sýna aðgangsorð.",accessibleHidePassword:"Fela aðgangsorð."},"oj-ojFilmStrip":{labelAccFilmStrip:"Birti síðu {pageIndex} af {pageCount}",labelAccArrowNextPage:"Veljið næst til að birta næstu síðu",labelAccArrowPreviousPage:"Veljið fyrra til að birta fyrri síðu",tipArrowNextPage:"Næsta",tipArrowPreviousPage:"Fyrri"},"oj-ojDataGrid":{accessibleSortAscending:"{id} raðað í hækkandi röð",accessibleSortDescending:"{id} raðað í lækkandi röð",accessibleSortable:"{id} raðanlegt",accessibleActionableMode:"Fara í aðgerðaham.",accessibleNavigationMode:"Fara í leiðsöguham, veljið F2 til að fara í breytinga- eða aðgerðaham.",accessibleEditableMode:"Fara í breytingaham, veljið Esc til að fara út fyrir gagnagrindina.",accessibleSummaryExact:"Þetta er gagnagrind með {rownum} röðum og {colnum} dálkum",accessibleSummaryEstimate:"Þetta er gagnagrind með óþekktum fjölda raða og dálka",accessibleSummaryExpanded:"Núna eru {num} raðir útvíkkaðar",accessibleRowExpanded:"Röð útvíkkuð",accessibleExpanded:"Útvíkkað",accessibleRowCollapsed:"Röð felld saman",accessibleCollapsed:"Fellt saman",accessibleRowSelected:"Röð {row} valin",accessibleColumnSelected:"Dálkur {column} valinn",accessibleStateSelected:"valið",accessibleMultiCellSelected:"{num} reitir valdir",accessibleColumnSpanContext:"{extent} breitt",accessibleRowSpanContext:"{extent} hátt",accessibleRowContext:"Röð {index}",accessibleColumnContext:"Dálkur {index}",accessibleRowHeaderContext:"Raðarhaus {index}",accessibleColumnHeaderContext:"Dálkhaus {index}",accessibleRowEndHeaderContext:"Raðarendahaus {index}",accessibleColumnEndHeaderContext:"Dálkendahaus{index}",accessibleRowHeaderLabelContext:"Merki raðarhauss {level}",accessibleColumnHeaderLabelContext:"Merki dálkhauss {level}",accessibleRowEndHeaderLabelContext:"Merki raðarendahauss {level}",accessibleColumnEndHeaderLabelContext:"Merki dálkendahauss {level}",accessibleLevelContext:"Stig {level}",accessibleRangeSelectModeOn:"Hamurinn bæta við völdu bili reita virkur.",accessibleRangeSelectModeOff:"Hamurinn bæta við völdu bili reita óvirkur.",accessibleFirstRow:"Þú ert kominn að fyrstu röð.",accessibleLastRow:"Þú ert kominn að síðustu röð.",accessibleFirstColumn:"Þú ert kominn að fyrsta dálki.",accessibleLastColumn:"Þú ert kominn að síðasta dálki.",accessibleSelectionAffordanceTop:"Efsta valhandfang.",accessibleSelectionAffordanceBottom:"Neðsta valhandfang.",accessibleLevelHierarchicalContext:"Stig {level}",accessibleRowHierarchicalFull:"Röð {posInSet} af {setSize} röðum",accessibleRowHierarchicalPartial:"Röð {posInSet} af a.m.k. {setSize} röðum",accessibleRowHierarchicalUnknown:"A.m.k. röð {posInSet} af a.m.k. {setSize} röðum",accessibleColumnHierarchicalFull:"Dálkur {posInSet} af {setSize} dálkum",accessibleColumnHierarchicalPartial:"Dálkur {posInSet} af a.m.k. {setSize} dálkum",accessibleColumnHierarchicalUnknown:"A.m.k. dálkur {posInSet} af a.m.k. {setSize} dálkum",msgFetchingData:"Sæki gögn...",msgNoData:"Ekkert til birtingar.",labelResize:"Breyta stærð",labelResizeWidth:"Breyta breidd",labelResizeHeight:"Breyta hæð",labelSortAsc:"Raða hækkandi",labelSortDsc:"Raða lækkandi",labelSortRow:"Raða röð",labelSortRowAsc:"Raða röð hækkandi",labelSortRowDsc:"Raða röð lækkandi",labelSortCol:"Raða dálki",labelSortColAsc:"Raða dálki hækkandi",labelSortColDsc:"Raða dálki lækkandi",labelCut:"Klippa",labelPaste:"Líma",labelCutCells:"Klippa",labelPasteCells:"Líma",labelCopyCells:"Afrita",labelAutoFill:"Sjálfvirk fylling",labelEnableNonContiguous:"Virkja ósamlægt val",labelDisableNonContiguous:"Afvirkja ósamlægt val",labelResizeDialogSubmit:"Í lagi",labelResizeDialogCancel:"Hætta við",accessibleContainsControls:"Inniheldur stýringar",labelSelectMultiple:"Velja marga",labelResizeDialogApply:"Nota",labelResizeFitToContent:"Breyta stærð til að passi",columnWidth:"Breidd í dílum",rowHeight:"Hæð í dílum",labelResizeColumn:"Stærðarbreyta dálki",labelResizeRow:"Breyta raðarstærð",resizeColumnDialog:"Stærðarbreyta dálki",resizeRowDialog:"Breyta raðarstærð",collapsedText:"Fella saman",expandedText:"Víkka út",tooltipRequired:"Áskilið"},"oj-ojRowExpander":{accessibleLevelDescription:"Stig {level}",accessibleRowDescription:"Stig {level}, röð {num} af {total}",accessibleRowExpanded:"Röð útvíkkuð",accessibleRowCollapsed:"Röð felld saman",accessibleStateExpanded:"útvíkkað",accessibleStateCollapsed:"fellt saman"},"oj-ojStreamList":{msgFetchingData:"Sæki gögn..."},"oj-ojListView":{msgFetchingData:"Sæki gögn...",msgNoData:"Ekkert til birtingar.",msgItemsAppended:"{count} liðum bætt við til enda.",msgFetchCompleted:"Allir liðir eru sóttir.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleExpandCollapseInstructionText:"Notið örvalykla til að víkka og fella saman.",accessibleGroupExpand:"Útvíkkað",accessibleGroupCollapse:"Fellt saman",accessibleReorderTouchInstructionText:"Tvísmellið og haldið.  Bíðið eftir hljóðinu og dragið til að endurraða.",accessibleReorderBeforeItem:"Fyrir {item}",accessibleReorderAfterItem:"Eftir {item}",accessibleReorderInsideItem:"Inn í {item}",accessibleNavigateSkipItems:"Sleppi {numSkip} liðum",labelCut:"Klippa",labelCopy:"Afrita",labelPaste:"Líma",labelPasteBefore:"Líma á undan",labelPasteAfter:"Líma á eftir"},"oj-ojWaterfallLayout":{msgFetchingData:"Sæki gögn..."},"oj-_ojLabel":{tooltipHelp:"Hjálp",tooltipRequired:"Áskilið"},"oj-ojLabel":{tooltipHelp:"Hjálp",tooltipRequired:"Áskilið"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Minnkun",tooltipIncrement:"Aukning"},"oj-ojTable":{accessibleAddRow:"Skráið gögn til að bæta nýrri röð við.",accessibleColumnContext:"Dálkur {index}",accessibleColumnFooterContext:"Dálkfótur {index}",accessibleColumnHeaderContext:"Dálkhaus {index}",accessibleContainsControls:"Inniheldur stýringar",accessibleColumnsSpan:"Nær yfir {count} dálka",accessibleRowContext:"Röð {index}",accessibleSortable:"{id} raðanlegt",accessibleSortAscending:"{id} raðað í hækkandi röð",accessibleSortDescending:"{id} raðað í lækkandi röð",accessibleStateSelected:"valið",accessibleStateUnselected:"afvalið",accessibleSummaryEstimate:"Tafla með {colnum} dálkum og meira en {rownum} röðum",accessibleSummaryExact:"Tafla með {colnum} dálkum og {rownum} röðum",labelAccSelectionAffordanceTop:"Efsta valhandfang",labelAccSelectionAffordanceBottom:"Neðsta valhandfang",labelEnableNonContiguousSelection:"Virkja ósamlægt val",labelDisableNonContiguousSelection:"Afvirkja ósamlægt val",labelResize:"Breyta stærð",labelResizeColumn:"Stærðarbreyta dálki",labelResizePopupSubmit:"Í lagi",labelResizePopupCancel:"Hætta við",labelResizePopupSpinner:"Stærðarbreyta dálki",labelResizeColumnDialog:"Stærðarbreyta dálki",labelColumnWidth:"Breidd í dílum",labelResizeDialogApply:"Nota",labelSelectRow:"Velja röð",labelSelectAllRows:"Velja allar raðir",labelEditRow:"Breyta röð",labelSelectAndEditRow:"Velja og breyta röð",labelSelectColumn:"Velja dálk",labelSort:"Raða",labelSortAsc:"Raða hækkandi",labelSortDsc:"Raða lækkandi",msgFetchingData:"Sæki gögn...",msgNoData:"Engin gögn til birtingar",msgInitializing:"Frumstilli...",msgColumnResizeWidthValidation:"Breiddargildi verður að vera heiltala.",msgScrollPolicyMaxCountSummary:"Farið framúr hámarksfjölda raða í töfluskruni.",msgScrollPolicyMaxCountDetail:"Endurhlaðið með smærri gagnahópi.",msgStatusSortAscending:"{0} raðað í hækkandi röð.",msgStatusSortDescending:"{0} raðað í lækkandi röð.",tooltipRequired:"Áskilið"},"oj-ojTabs":{labelCut:"Klippa",labelPasteBefore:"Líma á undan",labelPasteAfter:"Líma á eftir",labelRemove:"Fjarlægja",labelReorder:"Endurraða",removeCueText:"Fjarlægjanlegt"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Velja gildi."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Velja gildi."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Velja gildi."},searchField:"Leitarsvæði",noMatchesFound:"Ekkert samsvarandi fannst",noMoreResults:"Engar fleiri niðurstöður",oneMatchesFound:"Ein samsvörun fannst",moreMatchesFound:"{num} samsvaranir fundust",filterFurther:"Fleiri niðurstöður tiltækar, afmarkið nánar."},"oj-ojSwitch":{SwitchON:"Kveikt",SwitchOFF:"Slökkt"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Ekkert samsvarandi fannst",noMoreResults:"Engar fleiri niðurstöður",oneMatchesFound:"Ein samsvörun fannst",moreMatchesFound:"{num} samsvaranir fundust",filterFurther:"Fleiri niðurstöður tiltækar, afmarkið nánar."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Velja gildi."},noMatchesFound:"Ekkert samsvarandi fannst",oneMatchFound:"Ein samsvörun fannst",multipleMatchesFound:"{num} samsvaranir fundust",nOrMoreMatchesFound:"{num} eða fleiri samsvaranir fundust",cancel:"Hætta við",labelAccOpenDropdown:"víkka út",labelAccClearValue:"hreinsa gildi",noResultsLine1:"Engar niðurstöður fundust",noResultsLine2:"Ekkert fannst sem samsvarar leitinni."},"oj-ojInputSearch2":{cancel:"Hætta við",noSuggestionsFound:"Engar tillögur fundust"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"Ekkert samsvarandi fannst",oneMatchesFound:"Ein samsvörun fannst",moreMatchesFound:"{num} samsvaranir fundust"},"oj-ojTreeView":{treeViewSelectorAria:"TreeView veljari {rowKey}",retrievingDataAria:"Sæki gögn fyrir hnút: {nodeText}",receivedDataAria:"Móttekin gögn fyrir hnút: {nodeText}"},"oj-ojTree":{stateLoading:"Hleður...",labelNewNode:"Nýr hnútur",labelMultiSelection:"Margt valið",labelEdit:"Breyta",labelCreate:"Stofna",labelCut:"Klippa",labelCopy:"Afrita",labelPaste:"Líma",labelPasteAfter:"Líma á eftir",labelPasteBefore:"Líma á undan",labelRemove:"Fjarlægja",labelRename:"Endurnefna",labelNoData:"Engin gögn"},"oj-ojPagingControl":{labelAccPaging:"Síðusetning",labelAccPageNumber:"Síðuefni {pageNum} hlaðið",labelAccNavFirstPage:"Fyrsta síða",labelAccNavLastPage:"Síðasta síða",labelAccNavNextPage:"Næsta síða",labelAccNavPreviousPage:"Fyrri síða",labelAccNavPage:"Síða",labelLoadMore:"Sýna fleira...",labelLoadMoreMaxRows:"Hámarki{maxRows} raða náð",labelNavInputPage:"Síða",labelNavInputPageMax:"af {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} af {pageMax} síðum",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} af a.m.k. {pageMax} síðum",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} af u.þ.b. {pageMax} síðum",msgItemRangeNoTotal:"Síður {pageFrom}-{pageTo}",fullMsgItem:"{pageTo} af {pageMax} síðum",fullMsgItemAtLeast:"{pageTo} af a.m.k. {pageMax} síðum",fullMsgItemApprox:"{pageTo} af u.þ.b. {pageMax} síðum",msgItemNoTotal:"{pageTo} síður",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"af",msgItemRangeOfAtLeast:"af a.m.k.",msgItemRangeOfApprox:"af u.þ.b.",msgItemRangeItems:"síður",tipNavInputPage:"Fara á síðu",tipNavPageLink:"Fara á síðu {pageNum}",tipNavNextPage:"Næsta",tipNavPreviousPage:"Fyrri",tipNavFirstPage:"Fyrsta",tipNavLastPage:"Síðasta",pageInvalid:{summary:"Skráð síðugildi er ógilt.",detail:"Skráið hærra gildi en 0."},maxPageLinksInvalid:{summary:"Gildi fyrir maxPageLinks er ógilt.",detail:"Skráið hærra gildi en 4."}},"oj-ojMasonryLayout":{labelCut:"Klippa",labelPasteBefore:"Líma á undan",labelPasteAfter:"Líma á eftir"},"oj-panel":{labelAccButtonExpand:"Víkka út",labelAccButtonCollapse:"Fella saman",labelAccButtonRemove:"Fjarlægja",labelAccFlipForward:"Fletta áfram",labelAccFlipBack:"Fletta til baka",tipDragToReorder:"Dragið til að endurraða",labelAccDragToReorder:"Dragið til að endurraða, samhengisvalmynd tiltæk"},"oj-ojChart":{labelDefaultGroupName:"Hóður {0}",labelSeries:"Röð",labelGroup:"Hópur",labelDate:"Dags.",labelValue:"Gildi",labelTargetValue:"Mark",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Prósenta",labelLow:"Lágt",labelHigh:"Hátt",labelOpen:"Opið",labelClose:"Loka",labelVolume:"Rúmmál",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Lágm.",labelMax:"Hám.",labelOther:"Annað",tooltipPan:"Hliðra",tooltipSelect:"Marquee val",tooltipZoom:"Marquee þysjun",componentName:"Tafla"},"oj-dvtBaseGauge":{componentName:"Mælir"},"oj-ojDiagram":{promotedLink:"{0} tengill",promotedLinks:"{0} tenglar",promotedLinkAriaDesc:"Óbeint",componentName:"Línurit"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} dagar",accessibleDurationHours:"{0} klst.",accessibleTaskInfo:"Upphafstími er {0}, lokatími er {1}, tímalengd er {2}",accessibleMilestoneInfo:"Tími er {0}",accessibleRowInfo:"Röð {0}",accessibleTaskTypeMilestone:"Þáttaskil",accessibleTaskTypeSummary:"Samantekt",accessiblePredecessorInfo:"{0} forverar",accessibleSuccessorInfo:"{0} eftirmenn",accessibleDependencyInfo:"Háð tengslategund {0}, tengir {1} við {2}",startStartDependencyAriaDesc:"upphaf til upphafs",startFinishDependencyAriaDesc:"upphaf til loka",finishStartDependencyAriaDesc:"lok til upphafs",finishFinishDependencyAriaDesc:"lok til loka",tooltipZoomIn:"Þysja inn",tooltipZoomOut:"Þysja út",labelLevel:"Stig",labelRow:"Röð",labelStart:"Upphaf",labelEnd:"Endir",labelDate:"Dags.",labelBaselineStart:"Grunnáætlað upphaf",labelBaselineEnd:"Grunnáætluð lok",labelBaselineDate:"Grunnáætluð dags.",labelDowntimeStart:"Upphaf niðritíma",labelDowntimeEnd:"Lok niðritíma",labelOvertimeStart:"Upphaf yfirtíma",labelOvertimeEnd:"Lok yfirtíma",labelAttribute:"Eiginleiki",labelLabel:"Merki",labelProgress:"Framvinda",labelMoveBy:"Flytja fyrir",labelResizeBy:"Stærðarbreyta fyrir",taskMoveInitiated:"Verkþáttarflutningur hafinn",taskResizeEndInitiated:"Lok stærðarbr. verkþ. hafin",taskResizeStartInitiated:"Upphaf stærðarbr. verkþ. hafið",taskMoveSelectionInfo:"{0} annað valið",taskResizeSelectionInfo:"{0} annað valið",taskMoveInitiatedInstruction:"Notið örvalykla til að flytja",taskResizeInitiatedInstruction:"Notið örvalykla til að stærðarbreyta",taskMoveFinalized:"Verkþáttarflutningi lokið",taskResizeFinalized:"Stærðarbreyting verkþáttar lokið",taskMoveCancelled:"Hætt við verkþáttarflutning",taskResizeCancelled:"Hætt við stærðarbreytingu verkþáttar",taskResizeStartHandle:"Byrjunarhandfang stærðarbr. verkþ.",taskResizeEndHandle:"Endahandfang stærðarbr. verkþ."},"oj-ojLegend":{componentName:"Skýringatexti",tooltipExpand:"Víkka út",tooltipCollapse:"Fella saman"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Annað",labelGroup:"Hópur",labelSize:"Stærð",labelAdditionalData:"Viðbótargögn",componentName:"{0} Box"},"oj-ojPictoChart":{componentName:"Myndtafla"},"oj-ojSparkChart":{componentName:"Tafla"},"oj-ojSunburst":{labelColor:"Litur",labelSize:"Stærð",tooltipExpand:"Víkka út",tooltipCollapse:"Fella saman",componentName:"Sólstafir"},"oj-ojTagCloud":{componentName:"Merkjaský"},"oj-ojThematicMap":{componentName:"Þemakort",areasRegion:"Svæði",linksRegion:"Tenglar",markersRegion:"Staðvísar"},"oj-ojTimeAxis":{componentName:"Tímaás"},"oj-ojTimeline":{componentName:"Tímalína",accessibleItemDesc:"Lýsing er {0}.",accessibleItemEnd:"Lokatími er {0}.",accessibleItemStart:"Upphafstími er {0}.",accessibleItemTitle:"Titill er {0}.",labelSeries:"Röð",tooltipZoomIn:"Þysja inn",tooltipZoomOut:"Þysja út",labelStart:"Upphaf",labelEnd:"Endir",labelAccNavNextPage:"Næsta síða",labelAccNavPreviousPage:"Fyrri síða",tipArrowNextPage:"Næsta",tipArrowPreviousPage:"Fyrri",navArrowDisabledState:"Afvirkjað",labelDate:"Dags.",labelTitle:"Titill",labelDescription:"Lýsing",labelMoveBy:"Flytja fyrir",labelResizeBy:"Stærðarbreyta fyrir",itemMoveInitiated:"Flutningur atriðis hafinn",itemResizeEndInitiated:"Lok stærðarbr. atriðis hafin",itemResizeStartInitiated:"Upphaf stærðarbr. atriðis hafið",itemMoveSelectionInfo:"{0} annað valið",itemResizeSelectionInfo:"{0} annað valið",itemMoveInitiatedInstruction:"Notið örvalykla til að flytja",itemResizeInitiatedInstruction:"Notið örvalykla til að stærðarbreyta",itemMoveFinalized:"Flutningi atriðis lokið",itemResizeFinalized:"Stærðarbreytingu atriðis lokið",itemMoveCancelled:"Hætt við flutning atriðis",itemResizeCancelled:"Hætt við stærðarbreytingu atriðis",itemResizeStartHandle:"Handfang upph. stærðarbr. atriðis",itemResizeEndHandle:"Handfang loka stærðarbr. atriðis"},"oj-ojTreemap":{labelColor:"Litur",labelSize:"Stærð",tooltipIsolate:"Einangra",tooltipRestore:"Endursetja",componentName:"Trjákort"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Ógild gögn",labelNoData:"Engin gögn til birtingar",labelClearSelection:"Hreinsa val",labelDataVisualization:"Gagnasýning",stateSelected:"Valið",stateUnselected:"Afvalið",stateMaximized:"Hámarkað",stateMinimized:"Lágmarkað",stateExpanded:"Útvíkkað",stateCollapsed:"Fellt saman",stateIsolated:"Einangrað",stateHidden:"Falið",stateVisible:"Sýnilegt",stateDrillable:"Boranlegt",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} af {1}",accessibleContainsControls:"Inniheldur stýringar"},"oj-ojRatingGauge":{labelInvalidData:"Ógild gögn",labelNoData:"Engin gögn til birtingar",labelClearSelection:"Hreinsa val",labelDataVisualization:"Gagnasýning",stateSelected:"Valið",stateUnselected:"Afvalið",stateMaximized:"Hámarkað",stateMinimized:"Lágmarkað",stateExpanded:"Útvíkkað",stateCollapsed:"Fellt saman",stateIsolated:"Einangrað",stateHidden:"Falið",stateVisible:"Sýnilegt",stateDrillable:"Boranlegt",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} af {1}",accessibleContainsControls:"Inniheldur stýringar",componentName:"Mælir"},"oj-ojStatusMeterGauge":{labelInvalidData:"Ógild gögn",labelNoData:"Engin gögn til birtingar",labelClearSelection:"Hreinsa val",labelDataVisualization:"Gagnasýning",stateSelected:"Valið",stateUnselected:"Afvalið",stateMaximized:"Hámarkað",stateMinimized:"Lágmarkað",stateExpanded:"Útvíkkað",stateCollapsed:"Fellt saman",stateIsolated:"Einangrað",stateHidden:"Falið",stateVisible:"Sýnilegt",stateDrillable:"Boranlegt",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} af {1}",accessibleContainsControls:"Inniheldur stýringar",componentName:"Mælir"},"oj-ojNavigationList":{defaultRootLabel:"Leiðsögulisti",hierMenuBtnLabel:"Hnappur stigskiptrar valmyndar",selectedLabel:"valið",previousIcon:"Fyrri",msgFetchingData:"Sæki gögn...",msgNoData:"Ekkert til birtingar.",overflowItemLabel:"Meira",accessibleReorderTouchInstructionText:"Tvísmellið og haldið.  Bíðið eftir hljóðinu og dragið til að endurraða.",accessibleReorderBeforeItem:"Fyrir {item}",accessibleReorderAfterItem:"Eftir {item}",labelCut:"Klippa",labelPasteBefore:"Líma á undan",labelPasteAfter:"Líma á eftir",labelRemove:"Fjarlægja",removeCueText:"Fjarlægjanlegt"},"oj-ojSlider":{noValue:"ojSlider hefur ekkert gildi",maxMin:"Hámark má ekki vera minna en eða jafnt og lágmark",startEnd:"gildi.upphaf má ekki vera hærra en gildi.lok",valueRange:"Gildi verður að vera innan bils frá lágmarki til hámarks",optionNum:"{option} valkostur er ekki tala",invalidStep:"Ógilt skref; skref verður að vera > 0",lowerValueThumb:"sleði lægra gildis",higherValueThumb:"sleði hærra gildis"},"oj-ojDialog":{labelCloseIcon:"Loka"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Fara í sprettisvæði. Veljið F6 til að fara á milli sprettisvæðis og tengdrar stýringar.",ariaLiveRegionInitialFocusNone:"Sprettisvæði opnað. Veljið F6 til að fara á milli sprettisvæðis og tengdrar stýringar.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Fara í sprettisvæði. Hægt er að loka sprettisvæði með því að fara í síðasta tengilinn innan sprettisvæðisins.",ariaLiveRegionInitialFocusNoneTouch:"Sprettisvæði opnað. Farið í næsta tengil til að mynda fókus innan sprettisvæðisins.",ariaFocusSkipLink:"Tvísmellið til að fara í opna sprettisvæðið.",ariaCloseSkipLink:"Tvísmellið til að loka opna sprettisvæðinu."},"oj-ojRefresher":{ariaRefreshLink:"Virkið tengil til að endurvekja efni",ariaRefreshingLink:"Endurvek efni",ariaRefreshCompleteLink:"Endurvakningu lokið"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Sýna upphafsaðgerðir",ariaShowEndActionsDescription:"Sýna lokaaðgerðir",ariaHideActionsDescription:"Fela aðgerðir"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Enginn samsvarandi hóphaus",ariaOthersLabel:"tala",ariaInBetweenText:"Á milli {first} og {second}",ariaKeyboardInstructionText:"Veljið skrá til að velja gildi",ariaTouchInstructionText:"Tvísmellið og haldið til að fara í strokham, dragið síðan upp og niður til að breyta gildi."},"oj-ojMenu":{labelCancel:"Hætta við",ariaFocusSkipLink:"Fókus er innan valmyndar, tvísmellið eða strjúkið til að færa fókus til fyrsta liðar valmyndar."},"oj-ojColorSpectrum":{labelHue:"Blær",labelOpacity:"Hula",labelSatLum:"Mettun/ljómi",labelThumbDesc:"Fjórstefnusleði litrófs"},"oj-ojColorPalette":{labelNone:"Ekkert"},"oj-ojColorPicker":{labelSwatches:"Prufubúnt",labelCustomColors:"Sérsniðnir litir",labelPrevColor:"Fyrri litur",labelDefColor:"Sjálfgefinn litur",labelDelete:"Eyða",labelDeleteQ:"Eyða?",labelAdd:"Bæta við",labelAddColor:"Bæta við lit",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Blær",labelSliderSaturation:"Mettun",labelSliderSat:"Met.",labelSliderLightness:"Ljósleiki",labelSliderLum:"Birtustig",labelSliderAlpha:"Alfa",labelOpacity:"Hula",labelSliderRed:"Rauð",labelSliderGreen:"Græn",labelSliderBlue:"Blá"},"oj-ojFilePicker":{dropzoneText:"Sleppið skrám hér eða smellið til að hlaða upp",singleFileUploadError:"Hlaðið einni skrá upp í einu.",singleFileTypeUploadError:"Ekki er hægt að hlaða upp skrám af tegundinni {fileType}.",multipleFileTypeUploadError:"Ekki er hægt að hlaða upp skrám af tegundinni {fileTypes}.",dropzonePrimaryText:"Draga og sleppa",secondaryDropzoneText:"Veljið skrá eða sleppið skrá hér",secondaryDropzoneTextMultiple:"Veljið eða sleppið skrám hér",unknownFileType:"óþekkt"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"Í vinnslu"},"oj-ojMessage":{labelCloseIcon:"Loka",categories:{error:"Villa",warning:"Viðvörun",info:"Upplýsingar",confirmation:"Staðfesting",none:"Ekkert"}},"oj-ojSelector":{checkboxAriaLabel:"Val hakreits {rowKey}",checkboxAriaLabelSelected:" valið",checkboxAriaLabelUnselected:" afvalið"},"oj-ojMessages":{labelLandmark:"Skilaboð",ariaLiveRegion:{navigationFromKeyboard:"Skráningarsvæði skilaboða. Veljið F6 til að fara til baka í fyrri þátt.",navigationToTouch:"Ný skilaboð eru á skilaboðasvæði. Notið voice-over snúð til að fara í leiðarmark skilaboða.",navigationToKeyboard:"Ný skilaboð eru á skilaboðasvæði.  Veljið F6 til að fara í síðasta skilaboðasvæði.",newMessage:"Skilaboðaflokkur {category}. {summary}. {detail}.",noDetail:"Upplýsingar eru ekki tiltækar"}},"oj-ojMessageBanner":{close:"Loka",navigationFromMessagesRegion:"Skráningarsvæði skilaboða. Veljið F6 til að fara til baka í fyrri þátt.",navigationToMessagesRegion:"Ný skilaboð eru á skilaboðasvæði. Veljið F6 til að fara í síðasta skilaboðasvæði.",error:"Villa",warning:"Viðvörun",info:"Upplýsingar",confirmation:"Staðfesting"},"oj-ojConveyorBelt":{tipArrowNext:"Næsta",tipArrowPrevious:"Fyrri"},"oj-ojTrain":{stepInfo:"Skref {index} af {count}.",stepStatus:"Staða: {status}.",stepCurrent:"Núverandi",stepVisited:"Skoðað",stepNotVisited:"Ekki skoðað",stepDisabled:"Afvirkjað",stepMessageType:"Tegund boða: {messageType}.",stepMessageConfirmation:"Staðfest",stepMessageInfo:"Uppl.",stepMessageWarning:"Viðvörun",stepMessageError:"Villa"}});