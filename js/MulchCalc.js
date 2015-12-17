/**
 * Top Soil Calculator Plugin-- created by Jeremy
 */
function calc() {
    var d = document;
    var length = parseFloat( d.getElementById( 'length' ).value );
    var width = parseFloat( d.getElementById( 'width' ).value );
    var depth = parseFloat( d.getElementById( 'depth' ).value );
    var cubicYards = roundVal(( length * width * (depth/12) )/27);
    var msg = 'You need:<br><br><div style="padding-left:15px;">' + cubicYards + ' (cubic) yards of mulch.<br><br>' + roundVal((cubicYards*27)/2) + ' 2 Cubic Foot Bags.<br><br>' + roundVal((cubicYards*27)/3) + ' 3 Cubic Foot Bags.</div>';

    // Show Result    
    var yards = d.getElementById('yards');        
    yards.innerHTML = msg;
    showDiv('divResult');
    
    // Hide Calc
    hideDiv('divCalc');
    
}
function roundVal(val){
	var dec = 2;
	var result = Math.round(val*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
function getElem(whichLayer) {
    if (document.getElementById)
        elem = document.getElementById(whichLayer);
    else if (document.all)
        elem = document.all[whichLayer];
    else if (document.layers)
        elem = document.layers[whichLayer];
    return elem;
}
function hideDiv(whichLayer) {
    var elem, vis;
    elem = getElem(whichLayer);
    vis = elem.style;
    vis.display = 'none';
}
function showDiv(whichLayer) {
    var elem, vis;
    elem = getElem(whichLayer);
    vis = elem.style;
    vis.display = 'block';
}
function startOver(){
    hideDiv('divResult');
    showDiv('divCalc');
}