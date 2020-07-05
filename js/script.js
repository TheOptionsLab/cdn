console.log("This is coming from script.js");
console.log(moment().format());
console.log(getRate());

function openTab(){
    return 'https://www.theoptionslab.com'
}

var ChartTitle = { text: 'API by TheOptionsLab.com', link : openTab(), padding: 5, triggerEvent:
        true, textStyle: {fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'normal',
        fontSize: 14} };

var BlackChartTitle = JSON.parse(JSON.stringify(ChartTitle));
var WhiteChartTitle = JSON.parse(JSON.stringify(ChartTitle));

BlackChartTitle['textStyle']['color'] = '#000000';
WhiteChartTitle['textStyle']['color'] = '#ffffff';