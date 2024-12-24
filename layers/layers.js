var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JALAN_LN_50K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_1 = format_JALAN_LN_50K_1.readFeatures(json_JALAN_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_1.addFeatures(features_JALAN_LN_50K_1);
var lyr_JALAN_LN_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_1, 
                style: style_JALAN_LN_50K_1,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_1.png" /> JALAN_LN_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_JALAN_LN_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JALAN_LN_50K_1];
lyr_JALAN_LN_50K_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_1.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_JALAN_LN_50K_1.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'KONRJL': 'inline label - always visible', 'MATRJL': 'inline label - always visible', 'FGSRJL': 'inline label - always visible', 'UTKRJL': 'inline label - always visible', 'TOLRJL': 'inline label - always visible', 'WLYRJL': 'inline label - always visible', 'AUTRJL': 'inline label - always visible', 'KLSRJL': 'inline label - always visible', 'SPCRJL': 'inline label - always visible', 'JPARJL': 'inline label - always visible', 'ARHRJL': 'inline label - always visible', 'STARJL': 'inline label - always visible', 'KLLRJL': 'inline label - always visible', 'MEDRJL': 'inline label - always visible', 'LOCRJL': 'inline label - always visible', 'JARRJL': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_JALAN_LN_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});