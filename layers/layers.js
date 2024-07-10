ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Trsimportant_1 = new ol.format.GeoJSON();
var features_Trsimportant_1 = format_Trsimportant_1.readFeatures(json_Trsimportant_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Trsimportant_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trsimportant_1.addFeatures(features_Trsimportant_1);
var lyr_Trsimportant_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trsimportant_1, 
                style: style_Trsimportant_1,
                popuplayertitle: "Très important",
                interactive: true,
                title: '<img src="styles/legend/Trsimportant_1.png" /> Très important'
            });
var format_Important_2 = new ol.format.GeoJSON();
var features_Important_2 = format_Important_2.readFeatures(json_Important_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Important_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Important_2.addFeatures(features_Important_2);
var lyr_Important_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Important_2, 
                style: style_Important_2,
                popuplayertitle: "Important",
                interactive: true,
                title: '<img src="styles/legend/Important_2.png" /> Important'
            });
var format_Moyen_3 = new ol.format.GeoJSON();
var features_Moyen_3 = format_Moyen_3.readFeatures(json_Moyen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Moyen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moyen_3.addFeatures(features_Moyen_3);
var lyr_Moyen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moyen_3, 
                style: style_Moyen_3,
                popuplayertitle: "Moyen",
                interactive: true,
                title: '<img src="styles/legend/Moyen_3.png" /> Moyen'
            });
var format_Faible_4 = new ol.format.GeoJSON();
var features_Faible_4 = format_Faible_4.readFeatures(json_Faible_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Faible_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faible_4.addFeatures(features_Faible_4);
var lyr_Faible_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Faible_4, 
                style: style_Faible_4,
                popuplayertitle: "Faible",
                interactive: true,
                title: '<img src="styles/legend/Faible_4.png" /> Faible'
            });
var format_Important_5 = new ol.format.GeoJSON();
var features_Important_5 = format_Important_5.readFeatures(json_Important_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Important_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Important_5.addFeatures(features_Important_5);
var lyr_Important_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Important_5, 
                style: style_Important_5,
                popuplayertitle: "Important",
                interactive: true,
                title: '<img src="styles/legend/Important_5.png" /> Important'
            });
var format_Moyen_6 = new ol.format.GeoJSON();
var features_Moyen_6 = format_Moyen_6.readFeatures(json_Moyen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Moyen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moyen_6.addFeatures(features_Moyen_6);
var lyr_Moyen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moyen_6, 
                style: style_Moyen_6,
                popuplayertitle: "Moyen",
                interactive: true,
                title: '<img src="styles/legend/Moyen_6.png" /> Moyen'
            });
var format_Faible_7 = new ol.format.GeoJSON();
var features_Faible_7 = format_Faible_7.readFeatures(json_Faible_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Faible_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faible_7.addFeatures(features_Faible_7);
var lyr_Faible_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Faible_7, 
                style: style_Faible_7,
                popuplayertitle: "Faible",
                interactive: true,
                title: '<img src="styles/legend/Faible_7.png" /> Faible'
            });
var format_Trsfaible_8 = new ol.format.GeoJSON();
var features_Trsfaible_8 = format_Trsfaible_8.readFeatures(json_Trsfaible_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Trsfaible_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trsfaible_8.addFeatures(features_Trsfaible_8);
var lyr_Trsfaible_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trsfaible_8, 
                style: style_Trsfaible_8,
                popuplayertitle: "Très faible",
                interactive: true,
                title: '<img src="styles/legend/Trsfaible_8.png" /> Très faible'
            });
var format_Commune_9 = new ol.format.GeoJSON();
var features_Commune_9 = format_Commune_9.readFeatures(json_Commune_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Commune_9 = new ol.source.Vector({
    attributions: ' &middot; <a href="">IGB/BNDT-2012</a>',
});
jsonSource_Commune_9.addFeatures(features_Commune_9);
var lyr_Commune_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_9, 
                style: style_Commune_9,
                popuplayertitle: "Commune",
                interactive: true,
                title: '<img src="styles/legend/Commune_9.png" /> Commune'
            });
var format_Burkina_Faso_10 = new ol.format.GeoJSON();
var features_Burkina_Faso_10 = format_Burkina_Faso_10.readFeatures(json_Burkina_Faso_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Burkina_Faso_10 = new ol.source.Vector({
    attributions: ' &middot; <a href="">BNDT-2012</a>',
});
jsonSource_Burkina_Faso_10.addFeatures(features_Burkina_Faso_10);
var lyr_Burkina_Faso_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burkina_Faso_10, 
                style: style_Burkina_Faso_10,
                popuplayertitle: "Burkina_Faso",
                interactive: true,
                title: '<img src="styles/legend/Burkina_Faso_10.png" /> Burkina_Faso'
            });
var group_ZONEDARRIVEE = new ol.layer.Group({
                                layers: [lyr_Important_5,lyr_Moyen_6,lyr_Faible_7,lyr_Trsfaible_8,],
                                fold: "open",
                                title: "ZONE D'ARRIVEE"});
var group_ZONEDEDEPART = new ol.layer.Group({
                                layers: [lyr_Trsimportant_1,lyr_Important_2,lyr_Moyen_3,lyr_Faible_4,],
                                fold: "open",
                                title: "ZONE DE DEPART"});

lyr_GoogleMaps_0.setVisible(true);lyr_Trsimportant_1.setVisible(false);lyr_Important_2.setVisible(false);lyr_Moyen_3.setVisible(false);lyr_Faible_4.setVisible(false);lyr_Important_5.setVisible(false);lyr_Moyen_6.setVisible(false);lyr_Faible_7.setVisible(false);lyr_Trsfaible_8.setVisible(false);lyr_Commune_9.setVisible(false);lyr_Burkina_Faso_10.setVisible(true);
var layersList = [lyr_GoogleMaps_0,group_ZONEDEDEPART,group_ZONEDARRIVEE,lyr_Commune_9,lyr_Burkina_Faso_10];
lyr_Trsimportant_1.set('fieldAliases', {'DN': 'DN', 'Qualitativ': 'Qualitativ', });
lyr_Important_2.set('fieldAliases', {'DN': 'DN', 'Qualitativ': 'Qualitativ', });
lyr_Moyen_3.set('fieldAliases', {'DN': 'DN', 'Qualitativ': 'Qualitativ', });
lyr_Faible_4.set('fieldAliases', {'DN': 'DN', 'Qualitativ': 'Qualitativ', });
lyr_Important_5.set('fieldAliases', {'DN': 'DN', });
lyr_Moyen_6.set('fieldAliases', {'DN': 'DN', });
lyr_Faible_7.set('fieldAliases', {'DN': 'DN', });
lyr_Trsfaible_8.set('fieldAliases', {'DN': 'DN', });
lyr_Commune_9.set('fieldAliases', {'NOMDEP': 'NOM', });
lyr_Burkina_Faso_10.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NOMDEP': 'NOMDEP', 'PROV': 'PROV', 'NOM_REG': 'NOM_REG', 'BF': 'BF', });
lyr_Trsimportant_1.set('fieldImages', {'DN': 'Range', 'Qualitativ': 'TextEdit', });
lyr_Important_2.set('fieldImages', {'DN': 'Range', 'Qualitativ': 'TextEdit', });
lyr_Moyen_3.set('fieldImages', {'DN': 'Range', 'Qualitativ': 'TextEdit', });
lyr_Faible_4.set('fieldImages', {'DN': 'Range', 'Qualitativ': 'TextEdit', });
lyr_Important_5.set('fieldImages', {'DN': 'Range', });
lyr_Moyen_6.set('fieldImages', {'DN': 'Range', });
lyr_Faible_7.set('fieldImages', {'DN': 'Range', });
lyr_Trsfaible_8.set('fieldImages', {'DN': 'Range', });
lyr_Commune_9.set('fieldImages', {'NOMDEP': 'TextEdit', });
lyr_Burkina_Faso_10.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'NOMDEP': 'TextEdit', 'PROV': 'TextEdit', 'NOM_REG': 'TextEdit', 'BF': 'TextEdit', });
lyr_Trsimportant_1.set('fieldLabels', {'DN': 'no label', 'Qualitativ': 'no label', });
lyr_Important_2.set('fieldLabels', {'DN': 'no label', 'Qualitativ': 'no label', });
lyr_Moyen_3.set('fieldLabels', {'DN': 'no label', 'Qualitativ': 'no label', });
lyr_Faible_4.set('fieldLabels', {'DN': 'no label', 'Qualitativ': 'no label', });
lyr_Important_5.set('fieldLabels', {'DN': 'no label', });
lyr_Moyen_6.set('fieldLabels', {'DN': 'no label', });
lyr_Faible_7.set('fieldLabels', {'DN': 'no label', });
lyr_Trsfaible_8.set('fieldLabels', {'DN': 'no label', });
lyr_Commune_9.set('fieldLabels', {'NOMDEP': 'inline label - always visible', });
lyr_Burkina_Faso_10.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'NOMDEP': 'no label', 'PROV': 'no label', 'NOM_REG': 'no label', 'BF': 'no label', });
lyr_Burkina_Faso_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});