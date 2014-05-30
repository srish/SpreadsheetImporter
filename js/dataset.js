/* global $,Miso,JST */
$(function(){

  var cakes = new Miso.Dataset({
    importer : Miso.Dataset.Importers.GoogleSpreadsheet,
    parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
    key: "1HFXxHu1kvEkgk1Hl65Sy_3jutddXoawupruDVgwPYI4",
    worksheet: "0"
  });

  var workingColumns = [
    "Project",
    "Profile Link",
    "URL for Gallery"
  ];

  var $el = $("#datasets");
  cakes.fetch().done(function() {
    cakes.each(function(dataset) {
       $el.append(JST["templates/dataset.html"]({
         dataset : dataset,
         controls : workingColumns
       }));
    });
  });
}());