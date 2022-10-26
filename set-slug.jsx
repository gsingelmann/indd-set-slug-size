// ------------------------------------------------------------------------------------------------------------------
//  set-slug.jsx
//Description:Zeigt die Breite des aktuellen Info-Bereichs an und ändert sie
// [Ver. 1]  
// [Autor: Gerald Singelmann. ] 
// [Lang: DE]  
// [Getestet mit: InDesign CC2022]  
// [Creat: 22-10-26]  
// Bugs & Feedback : gs@cuppascript.com
// www.cuppascript.com
/*
    v1: Prototyp
*/
// ------------------------------------------------------------------------------------------------------------------

if ( app.documents.length ) main();

function main() {
  var doc = app.activeDocument;
  var prefs = app.activeDocument.documentPreferences
  var wd = 50;
  var w = new Window( "dialog {title: 'Infobereich'}" );
  w.r0 = w.add("group {orientation: 'row', alignChildren: ['center', 'top']}");
  w.r1 = w.add("group {orientation: 'row', alignChildren: ['center', 'top']}");
  w.r2 = w.add("group {orientation: 'row', alignChildren: ['center', 'top']}");
  w.r3 = w.add("group {orientation: 'row', alignChildren: ['center', 'top']}");
  w.r4 = w.add("group {orientation: 'row', alignChildren: ['center', 'top']}");

  w.r0.add("statictext", undefined,localize({de:"Größe des Infobereichs", 'en': "Slugsize"}));
  w.top = w.r1.add("edittext", [undefined, undefined, wd, 20]);
  w.left = w.r2.add("edittext", [undefined, undefined, wd, 20]);
  w.r2.add("statictext", [undefined, undefined, wd, 20]," ");
  w.right = w.r2.add("edittext", [undefined, undefined, wd, 20]);
  w.bottom = w.r3.add("edittext", [undefined, undefined, wd, 20]);
  w.defaultElement = w.r4.add("button", undefined, "OK")
  w.cancelElement = w.r4.add("button", undefined, localize({de:"Abbrechen", en:'Cancel'}))

  w.top.text = doc.documentPreferences.slugTopOffset
  w.left.text = prefs.slugInsideOrLeftOffset
  w.bottom.text = doc.documentPreferences.slugBottomOffset
  w.right.text = doc.documentPreferences.slugRightOrOutsideOffset

  if ( w.show() == 1 ) {
    try {
      if (! isNaN( Number( w.top.text ) ) ) doc.documentPreferences.slugTopOffset = w.top.text;
      if (! isNaN( Number( w.left.text ) ) ) doc.documentPreferences.slugInsideOrLeftOffset = w.left.text;
      if (! isNaN( Number( w.bottom.text ) ) ) doc.documentPreferences.slugBottomOffset = w.bottom.text;
      if (! isNaN( Number( w.right.text ) ) ) doc.documentPreferences.slugRightOrOutsideOffset = w.right.text;
    } catch(e) {
      alert(e);
    }
  }
}