var wms_layers = [];

var format_Ocean_0 = new ol.format.GeoJSON();
var features_Ocean_0 = format_Ocean_0.readFeatures(json_Ocean_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocean_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocean_0.addFeatures(features_Ocean_0);
var lyr_Ocean_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocean_0, 
                style: style_Ocean_0,
                popuplayertitle: "Ocean",
                interactive: true,
                title: '<img src="styles/legend/Ocean_0.png" /> Ocean'
            });
var format_export_1 = new ol.format.GeoJSON();
var features_export_1 = format_export_1.readFeatures(json_export_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_export_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_export_1.addFeatures(features_export_1);
var lyr_export_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_export_1, 
                style: style_export_1,
                popuplayertitle: "export",
                interactive: true,
                title: '<img src="styles/legend/export_1.png" /> export'
            });
var format_Lands_2 = new ol.format.GeoJSON();
var features_Lands_2 = format_Lands_2.readFeatures(json_Lands_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lands_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lands_2.addFeatures(features_Lands_2);
var lyr_Lands_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lands_2, 
                style: style_Lands_2,
                popuplayertitle: "Lands",
                interactive: true,
                title: '<img src="styles/legend/Lands_2.png" /> Lands'
            });
var format_deserts_3 = new ol.format.GeoJSON();
var features_deserts_3 = format_deserts_3.readFeatures(json_deserts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deserts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deserts_3.addFeatures(features_deserts_3);
var lyr_deserts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_deserts_3, 
                style: style_deserts_3,
                popuplayertitle: "deserts",
                interactive: true,
                title: '<img src="styles/legend/deserts_3.png" /> deserts'
            });
var format_forest_4 = new ol.format.GeoJSON();
var features_forest_4 = format_forest_4.readFeatures(json_forest_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_forest_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_forest_4.addFeatures(features_forest_4);
var lyr_forest_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_forest_4, 
                style: style_forest_4,
                popuplayertitle: "forest",
                interactive: true,
                title: '<img src="styles/legend/forest_4.png" /> forest'
            });
var format_jungle_5 = new ol.format.GeoJSON();
var features_jungle_5 = format_jungle_5.readFeatures(json_jungle_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jungle_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jungle_5.addFeatures(features_jungle_5);
var lyr_jungle_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jungle_5, 
                style: style_jungle_5,
                popuplayertitle: "jungle",
                interactive: true,
                title: '<img src="styles/legend/jungle_5.png" /> jungle'
            });
var format_mountain_6 = new ol.format.GeoJSON();
var features_mountain_6 = format_mountain_6.readFeatures(json_mountain_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mountain_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mountain_6.addFeatures(features_mountain_6);
var lyr_mountain_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mountain_6, 
                style: style_mountain_6,
                popuplayertitle: "mountain",
                interactive: true,
                title: '<img src="styles/legend/mountain_6.png" /> mountain'
            });
var format_river_7 = new ol.format.GeoJSON();
var features_river_7 = format_river_7.readFeatures(json_river_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_river_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_river_7.addFeatures(features_river_7);
var lyr_river_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_river_7, 
                style: style_river_7,
                popuplayertitle: "river",
                interactive: true,
                title: '<img src="styles/legend/river_7.png" /> river'
            });
var format_MajorRoadways_8 = new ol.format.GeoJSON();
var features_MajorRoadways_8 = format_MajorRoadways_8.readFeatures(json_MajorRoadways_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorRoadways_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorRoadways_8.addFeatures(features_MajorRoadways_8);
var lyr_MajorRoadways_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorRoadways_8, 
                style: style_MajorRoadways_8,
                popuplayertitle: "Major Roadways",
                interactive: true,
                title: '<img src="styles/legend/MajorRoadways_8.png" /> Major Roadways'
            });
var format_borders_9 = new ol.format.GeoJSON();
var features_borders_9 = format_borders_9.readFeatures(json_borders_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_borders_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_borders_9.addFeatures(features_borders_9);
var lyr_borders_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_borders_9, 
                style: style_borders_9,
                popuplayertitle: "borders",
                interactive: true,
                title: '<img src="styles/legend/borders_9.png" /> borders'
            });
var format_distrcvits_10 = new ol.format.GeoJSON();
var features_distrcvits_10 = format_distrcvits_10.readFeatures(json_distrcvits_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distrcvits_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distrcvits_10.addFeatures(features_distrcvits_10);
var lyr_distrcvits_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distrcvits_10, 
                style: style_distrcvits_10,
                popuplayertitle: "distrcvits",
                interactive: true,
                title: '<img src="styles/legend/distrcvits_10.png" /> distrcvits'
            });
var format_DisputedBorders_11 = new ol.format.GeoJSON();
var features_DisputedBorders_11 = format_DisputedBorders_11.readFeatures(json_DisputedBorders_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DisputedBorders_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DisputedBorders_11.addFeatures(features_DisputedBorders_11);
var lyr_DisputedBorders_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DisputedBorders_11, 
                style: style_DisputedBorders_11,
                popuplayertitle: "Disputed Borders",
                interactive: true,
                title: '<img src="styles/legend/DisputedBorders_11.png" /> Disputed Borders'
            });
var format_labels_12 = new ol.format.GeoJSON();
var features_labels_12 = format_labels_12.readFeatures(json_labels_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_labels_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_labels_12.addFeatures(features_labels_12);
var lyr_labels_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_labels_12, 
                style: style_labels_12,
                popuplayertitle: "labels",
                interactive: true,
                title: '<img src="styles/legend/labels_12.png" /> labels'
            });
var format_GeographyLabels_13 = new ol.format.GeoJSON();
var features_GeographyLabels_13 = format_GeographyLabels_13.readFeatures(json_GeographyLabels_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeographyLabels_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeographyLabels_13.addFeatures(features_GeographyLabels_13);
var lyr_GeographyLabels_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeographyLabels_13, 
                style: style_GeographyLabels_13,
                popuplayertitle: "Geography Labels",
                interactive: true,
                title: '<img src="styles/legend/GeographyLabels_13.png" /> Geography Labels'
            });
var format_waterborders_14 = new ol.format.GeoJSON();
var features_waterborders_14 = format_waterborders_14.readFeatures(json_waterborders_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterborders_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterborders_14.addFeatures(features_waterborders_14);
var lyr_waterborders_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterborders_14, 
                style: style_waterborders_14,
                popuplayertitle: "water borders",
                interactive: true,
                title: '<img src="styles/legend/waterborders_14.png" /> water borders'
            });
var format_waterdisputed_15 = new ol.format.GeoJSON();
var features_waterdisputed_15 = format_waterdisputed_15.readFeatures(json_waterdisputed_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterdisputed_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterdisputed_15.addFeatures(features_waterdisputed_15);
var lyr_waterdisputed_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterdisputed_15, 
                style: style_waterdisputed_15,
                popuplayertitle: "water disputed",
                interactive: true,
                title: '<img src="styles/legend/waterdisputed_15.png" /> water disputed'
            });
var format_cities_16 = new ol.format.GeoJSON();
var features_cities_16 = format_cities_16.readFeatures(json_cities_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cities_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cities_16.addFeatures(features_cities_16);
var lyr_cities_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cities_16, 
                style: style_cities_16,
                popuplayertitle: "cities",
                interactive: true,
                title: '<img src="styles/legend/cities_16.png" /> cities'
            });
var format_citiespt2_17 = new ol.format.GeoJSON();
var features_citiespt2_17 = format_citiespt2_17.readFeatures(json_citiespt2_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_citiespt2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_citiespt2_17.addFeatures(features_citiespt2_17);
var lyr_citiespt2_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_citiespt2_17, 
                style: style_citiespt2_17,
                popuplayertitle: "citiespt2",
                interactive: true,
                title: '<img src="styles/legend/citiespt2_17.png" /> citiespt2'
            });

lyr_Ocean_0.setVisible(true);lyr_export_1.setVisible(true);lyr_Lands_2.setVisible(true);lyr_deserts_3.setVisible(true);lyr_forest_4.setVisible(true);lyr_jungle_5.setVisible(true);lyr_mountain_6.setVisible(true);lyr_river_7.setVisible(true);lyr_MajorRoadways_8.setVisible(true);lyr_borders_9.setVisible(true);lyr_distrcvits_10.setVisible(true);lyr_DisputedBorders_11.setVisible(true);lyr_labels_12.setVisible(true);lyr_GeographyLabels_13.setVisible(true);lyr_waterborders_14.setVisible(true);lyr_waterdisputed_15.setVisible(true);lyr_cities_16.setVisible(true);lyr_citiespt2_17.setVisible(true);
var layersList = [lyr_Ocean_0,lyr_export_1,lyr_Lands_2,lyr_deserts_3,lyr_forest_4,lyr_jungle_5,lyr_mountain_6,lyr_river_7,lyr_MajorRoadways_8,lyr_borders_9,lyr_distrcvits_10,lyr_DisputedBorders_11,lyr_labels_12,lyr_GeographyLabels_13,lyr_waterborders_14,lyr_waterdisputed_15,lyr_cities_16,lyr_citiespt2_17];
lyr_Ocean_0.set('fieldAliases', {'id': 'id', });
lyr_export_1.set('fieldAliases', {'id': 'id', });
lyr_Lands_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_deserts_3.set('fieldAliases', {'id': 'id', });
lyr_forest_4.set('fieldAliases', {'id': 'id', });
lyr_jungle_5.set('fieldAliases', {'id': 'id', });
lyr_mountain_6.set('fieldAliases', {'id': 'id', });
lyr_river_7.set('fieldAliases', {'id': 'id', });
lyr_MajorRoadways_8.set('fieldAliases', {'id': 'id', });
lyr_borders_9.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_distrcvits_10.set('fieldAliases', {'id': 'id', });
lyr_DisputedBorders_11.set('fieldAliases', {'id': 'id', 'names': 'names', });
lyr_labels_12.set('fieldAliases', {'id': 'id', 'label': 'label', });
lyr_GeographyLabels_13.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_waterborders_14.set('fieldAliases', {'id': 'id', 'names': 'names', });
lyr_waterdisputed_15.set('fieldAliases', {'id': 'id', 'names': 'names', });
lyr_cities_16.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_citiespt2_17.set('fieldAliases', {'id': 'id', 'names': 'names', });
lyr_Ocean_0.set('fieldImages', {'id': '', });
lyr_export_1.set('fieldImages', {'id': '', });
lyr_Lands_2.set('fieldImages', {'id': '', 'Name': '', });
lyr_deserts_3.set('fieldImages', {'id': '', });
lyr_forest_4.set('fieldImages', {'id': '', });
lyr_jungle_5.set('fieldImages', {'id': '', });
lyr_mountain_6.set('fieldImages', {'id': '', });
lyr_river_7.set('fieldImages', {'id': '', });
lyr_MajorRoadways_8.set('fieldImages', {'id': '', });
lyr_borders_9.set('fieldImages', {'id': '', 'name': '', });
lyr_distrcvits_10.set('fieldImages', {'id': '', });
lyr_DisputedBorders_11.set('fieldImages', {'id': '', 'names': '', });
lyr_labels_12.set('fieldImages', {'id': '', 'label': '', });
lyr_GeographyLabels_13.set('fieldImages', {'id': '', 'name': '', });
lyr_waterborders_14.set('fieldImages', {'id': '', 'names': '', });
lyr_waterdisputed_15.set('fieldImages', {'id': '', 'names': '', });
lyr_cities_16.set('fieldImages', {'id': '', 'name': '', });
lyr_citiespt2_17.set('fieldImages', {'id': '', 'names': '', });
lyr_Ocean_0.set('fieldLabels', {'id': 'no label', });
lyr_export_1.set('fieldLabels', {'id': 'no label', });
lyr_Lands_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_deserts_3.set('fieldLabels', {'id': 'no label', });
lyr_forest_4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_jungle_5.set('fieldLabels', {'id': 'no label', });
lyr_mountain_6.set('fieldLabels', {'id': 'no label', });
lyr_river_7.set('fieldLabels', {'id': 'no label', });
lyr_MajorRoadways_8.set('fieldLabels', {'id': 'no label', });
lyr_borders_9.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_distrcvits_10.set('fieldLabels', {'id': 'no label', });
lyr_DisputedBorders_11.set('fieldLabels', {'id': 'no label', 'names': 'no label', });
lyr_labels_12.set('fieldLabels', {'id': 'no label', 'label': 'header label - visible with data', });
lyr_GeographyLabels_13.set('fieldLabels', {'id': 'no label', 'name': 'header label - visible with data', });
lyr_waterborders_14.set('fieldLabels', {'id': 'no label', 'names': 'no label', });
lyr_waterdisputed_15.set('fieldLabels', {'id': 'header label - always visible', 'names': 'no label', });
lyr_cities_16.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_citiespt2_17.set('fieldLabels', {'id': 'no label', 'names': 'no label', });
lyr_citiespt2_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});