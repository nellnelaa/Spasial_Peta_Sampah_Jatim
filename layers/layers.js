ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12287989.735707, -1058956.340752, 13038714.362318, -655000.788021]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JawaTimur_1 = new ol.format.GeoJSON();
var features_JawaTimur_1 = format_JawaTimur_1.readFeatures(json_JawaTimur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaTimur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JawaTimur_1.addFeatures(features_JawaTimur_1);
var lyr_JawaTimur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JawaTimur_1, 
                style: style_JawaTimur_1,
                popuplayertitle: 'Jawa Timur',
                interactive: false,
                title: '<img src="styles/legend/JawaTimur_1.png" /> Jawa Timur'
            });
var format_TimbulanTahunanton_2 = new ol.format.GeoJSON();
var features_TimbulanTahunanton_2 = format_TimbulanTahunanton_2.readFeatures(json_TimbulanTahunanton_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TimbulanTahunanton_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TimbulanTahunanton_2.addFeatures(features_TimbulanTahunanton_2);
var lyr_TimbulanTahunanton_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TimbulanTahunanton_2, 
                style: style_TimbulanTahunanton_2,
                popuplayertitle: 'Timbulan Tahunan (ton)',
                interactive: true,
    title: 'Timbulan Tahunan (ton)<br />\
    <img src="styles/legend/TimbulanTahunanton_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/TimbulanTahunanton_2_1.png" /> 0 - 34536<br />\
    <img src="styles/legend/TimbulanTahunanton_2_2.png" /> 34536 - 99515<br />\
    <img src="styles/legend/TimbulanTahunanton_2_3.png" /> 99515 - 134523<br />\
    <img src="styles/legend/TimbulanTahunanton_2_4.png" /> 134523 - 198833<br />\
    <img src="styles/legend/TimbulanTahunanton_2_5.png" /> 198833 - 659034<br />' });
var format_TimbulanHarianton_3 = new ol.format.GeoJSON();
var features_TimbulanHarianton_3 = format_TimbulanHarianton_3.readFeatures(json_TimbulanHarianton_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TimbulanHarianton_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TimbulanHarianton_3.addFeatures(features_TimbulanHarianton_3);
var lyr_TimbulanHarianton_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TimbulanHarianton_3, 
                style: style_TimbulanHarianton_3,
                popuplayertitle: 'Timbulan Harian (ton)',
                interactive: true,
    title: 'Timbulan Harian (ton)<br />\
    <img src="styles/legend/TimbulanHarianton_3_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/TimbulanHarianton_3_1.png" /> 0 - 145<br />\
    <img src="styles/legend/TimbulanHarianton_3_2.png" /> 145 - 296<br />\
    <img src="styles/legend/TimbulanHarianton_3_3.png" /> 296 - 450<br />\
    <img src="styles/legend/TimbulanHarianton_3_4.png" /> 450 - 758<br />\
    <img src="styles/legend/TimbulanHarianton_3_5.png" /> 758 - 1806<br />' });
var format_PenangananSampahton_4 = new ol.format.GeoJSON();
var features_PenangananSampahton_4 = format_PenangananSampahton_4.readFeatures(json_PenangananSampahton_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenangananSampahton_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenangananSampahton_4.addFeatures(features_PenangananSampahton_4);
var lyr_PenangananSampahton_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenangananSampahton_4, 
                style: style_PenangananSampahton_4,
                popuplayertitle: 'Penanganan Sampah (ton)',
                interactive: true,
    title: 'Penanganan Sampah (ton)<br />\
    <img src="styles/legend/PenangananSampahton_4_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PenangananSampahton_4_1.png" /> 0 - 13378<br />\
    <img src="styles/legend/PenangananSampahton_4_2.png" /> 13378 - 23530<br />\
    <img src="styles/legend/PenangananSampahton_4_3.png" /> 23530 - 36543<br />\
    <img src="styles/legend/PenangananSampahton_4_4.png" /> 36543 - 68475<br />\
    <img src="styles/legend/PenangananSampahton_4_5.png" /> 68475 - 617455<br />' });
var format_DATATPA_5 = new ol.format.GeoJSON();
var features_DATATPA_5 = format_DATATPA_5.readFeatures(json_DATATPA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DATATPA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DATATPA_5.addFeatures(features_DATATPA_5);
var lyr_DATATPA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DATATPA_5, 
                style: style_DATATPA_5,
                popuplayertitle: 'DATA TPA',
                interactive: true,
                title: '<img src="styles/legend/DATATPA_5.png" /> DATA TPA'
            });
var format_PenguranganSampahton_6 = new ol.format.GeoJSON();
var features_PenguranganSampahton_6 = format_PenguranganSampahton_6.readFeatures(json_PenguranganSampahton_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenguranganSampahton_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenguranganSampahton_6.addFeatures(features_PenguranganSampahton_6);
var lyr_PenguranganSampahton_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PenguranganSampahton_6, 
                style: style_PenguranganSampahton_6,
                popuplayertitle: 'Pengurangan Sampah (ton)',
                interactive: true,
    title: 'Pengurangan Sampah (ton)<br />\
    <img src="styles/legend/PenguranganSampahton_6_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/PenguranganSampahton_6_1.png" /> 0 - 1117<br />\
    <img src="styles/legend/PenguranganSampahton_6_2.png" /> 1117 - 10629<br />\
    <img src="styles/legend/PenguranganSampahton_6_3.png" /> 10629 - 18888<br />\
    <img src="styles/legend/PenguranganSampahton_6_4.png" /> 18888 - 29618<br />\
    <img src="styles/legend/PenguranganSampahton_6_5.png" /> 29618 - 92582<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_JawaTimur_1.setVisible(true);lyr_TimbulanTahunanton_2.setVisible(true);lyr_TimbulanHarianton_3.setVisible(true);lyr_PenangananSampahton_4.setVisible(true);lyr_DATATPA_5.setVisible(true);lyr_PenguranganSampahton_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JawaTimur_1,lyr_TimbulanTahunanton_2,lyr_TimbulanHarianton_3,lyr_PenangananSampahton_4,lyr_DATATPA_5,lyr_PenguranganSampahton_6];
lyr_JawaTimur_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TimbulanTahunanton_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Nama Kota/Kabupaten': 'Nama Kota/Kabupaten', 'Timbulan Sampah Tahunan': 'Timbulan Sampah Tahunan', });
lyr_TimbulanHarianton_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Nama Kota/Kabupaten': 'Nama Kota/Kabupaten', 'Timbulan Sampah Harian': 'Timbulan Sampah Harian', 'Timbulan Sampah Tahunan': 'Timbulan Sampah Tahunan', });
lyr_PenangananSampahton_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Nama Kota/Kabupaten': 'Nama Kota/Kabupaten', 'Penanganan Sampah': 'Penanganan Sampah', });
lyr_DATATPA_5.set('fieldAliases', {'Kabupaten/Kota': 'Kabupaten/Kota', 'TPA': 'TPA', 'Lat-text': 'Lat-text', 'Long-text': 'Long-text', });
lyr_PenguranganSampahton_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Nama Kota/Kabupaten': 'Nama Kota/Kabupaten', 'Pengurangan Sampah': 'Pengurangan Sampah', });
lyr_JawaTimur_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TimbulanTahunanton_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Nama Kota/Kabupaten': 'TextEdit', 'Timbulan Sampah Tahunan': 'TextEdit', });
lyr_TimbulanHarianton_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Nama Kota/Kabupaten': 'DateTime', 'Timbulan Sampah Harian': 'TextEdit', 'Timbulan Sampah Tahunan': 'TextEdit', });
lyr_PenangananSampahton_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Nama Kota/Kabupaten': 'TextEdit', 'Penanganan Sampah': 'TextEdit', });
lyr_DATATPA_5.set('fieldImages', {'Kabupaten/Kota': 'TextEdit', 'TPA': 'TextEdit', 'Lat-text': 'TextEdit', 'Long-text': 'TextEdit', });
lyr_PenguranganSampahton_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Nama Kota/Kabupaten': 'TextEdit', 'Pengurangan Sampah': 'TextEdit', });
lyr_JawaTimur_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TimbulanTahunanton_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Nama Kota/Kabupaten': 'inline label - always visible', 'Timbulan Sampah Tahunan': 'inline label - always visible', });
lyr_TimbulanHarianton_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Nama Kota/Kabupaten': 'inline label - always visible', 'Timbulan Sampah Harian': 'inline label - always visible', 'Timbulan Sampah Tahunan': 'hidden field', });
lyr_PenangananSampahton_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Nama Kota/Kabupaten': 'no label', 'Penanganan Sampah': 'no label', });
lyr_DATATPA_5.set('fieldLabels', {'Kabupaten/Kota': 'inline label - always visible', 'TPA': 'inline label - always visible', 'Lat-text': 'hidden field', 'Long-text': 'hidden field', });
lyr_PenguranganSampahton_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Nama Kota/Kabupaten': 'inline label - always visible', 'Pengurangan Sampah': 'inline label - always visible', });
lyr_PenguranganSampahton_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});