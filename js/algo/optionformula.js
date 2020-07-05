const SIXTEEN = 16;
   const VOLDIFF = 0.005;
	 const implied = { text: 20 };
	 const StrikePrice1 = 25;
	 const StrikePrice2 = 200;
   const DEFAULT_CONFIG = "Stock,100,1,2,20,1,1,1,2";
	 var GlobalConfig = localStorage.getItem('config');
	 let isEUR = false;
	 let defaultLot = 100;
	 var NearDate = "10/17/2014";
	 var NextDate = "11/21/2014";
   var nearDays = "10";
   var NearDays = 10;
   var nextDays = "40";
   var NextDays = 40;
   var farDays = "70";
   var FarDays = 70;
   var dt1text;
   var dt1atext;
   var dt2text;
   var dt2atext;

    var OptionExpirationDates = [
      "11/18/2018", "12/14/2018", "01/18/2019", "02/15/2019", "03/15/2019", "04/19/2019",
      "05/17/2019", "06/21/2019", "07/19/2019", "08/16/2019", "09/20/2019", "10/18/2019",
      "11/15/2019", "12/20/2019", "01/17/2020", "02/21/2020", "03/20/2020", "04/17/2020",

      "05/15/2020", "06/19/2020", "07/17/2020", "08/21/2020", "09/18/2020", "10/16/2020",
      "11/20/2020", "12/18/2020", "01/15/2021", "02/19/2021", "03/19/2021", "04/16/2021",
      "05/21/2021", "06/18/2021", "07/16/2021", "08/20/2021", "09/17/2021", "10/15/2021",
      "11/19/2021", "12/17/2021", "01/21/2022", "02/18/2022", "03/18/2022", "04/14/2022",
      "05/20/2022", "06/17/2022", "07/15/2022", "08/19/2022", "09/16/2022", "10/21/2022",
      "11/18/2022", "12/16/2022"
    ];


	 var OptionStockExpirationDates = [
      "11/18/2018", "12/14/2018", "01/18/2019", "02/15/2019", "03/15/2019", "04/19/2019",
      "05/17/2019", "06/21/2019", "07/19/2019", "08/16/2019", "09/20/2019", "10/18/2019",
      "11/15/2019", "12/20/2019", "01/17/2020", "02/21/2020", "03/20/2020", "04/17/2020",

      "05/15/2020", "06/19/2020", "07/17/2020", "08/21/2020", "09/18/2020", "10/16/2020",
      "11/20/2020", "12/18/2020", "01/15/2021", "02/19/2021", "03/19/2021", "04/16/2021",
      "05/21/2021", "06/18/2021", "07/16/2021", "08/20/2021", "09/17/2021", "10/15/2021",
      "11/19/2021", "12/17/2021", "01/21/2022", "02/18/2022", "03/18/2022", "04/14/2022",
      "05/20/2022", "06/17/2022", "07/15/2022", "08/19/2022", "09/16/2022", "10/21/2022",
      "11/18/2022", "12/16/2022"

    ];

   var OptionEURExpirationDates = [
      "11/09/2018", "12/07/2018", "01/04/2019", "02/08/2019", "03/08/2019", "04/05/2019",
      "05/03/2019", "06/07/2019", "07/05/2019", "08/02/2019", "09/06/2019", "10/04/2019",
      "11/08/2019", "12/06/2019", "01/03/2020", "02/07/2020", "03/06/2020", "04/03/2020",

      "05/01/2020", "06/05/2020", "07/02/2020", "08/07/2020", "09/04/2020", "10/02/2020",
      "11/06/2020", "12/04/2020", "01/08/2021", "02/05/2021", "03/05/2021", "04/02/2021",
      "05/07/2021", "06/04/2021", "07/02/2021", "08/06/2021", "09/03/2021", "10/01/2021",
      "11/05/2021", "12/03/2021", "01/07/2022", "02/04/2022", "03/04/2022", "04/01/2022",
      "05/06/2022", "06/03/2022", "07/01/2022", "08/05/2022", "09/02/2022", "10/07/2022",
      "11/04/2022", "12/02/2022"
    ];

    var OptionCLExpirationDates = [
      "11/14/2018", "12/13/2018", "01/16/2019", "02/13/2019", "03/16/2019", "04/16/2019",
      "05/16/2019", "06/17/2019", "07/17/2019", "08/15/2019", "09/17/2019",
      "10/17/2019", "11/15/2019", "12/16/2019", "01/15/2020", "02/14/2020", "03/17/2020", "04/16/2020",
      "05/14/2020", "06/17/2020", "07/16/2020", "08/17/2020", "09/17/2020",
      "10/15/2020", "11/17/2020", "12/16/2020", "01/14/2021", "02/17/2021", "03/17/2021", "04/15/2021",
      "05/17/2021", "06/17/2021", "07/15/2021", "08/17/2021", "09/16/2021",
      "10/15/2021", "11/16/2021", "12/15/2021", "01/14/2022", "02/16/2022", "03/17/2022", "04/14/2022",
      "05/17/2022", "06/16/2022", "07/15/2022", "08/17/2022", "09/15/2022",
      "10/17/2022", "11/16/2022", "12/15/2022"
    ];

    var OptionNGExpirationDates = [
      "11/26/2018", "12/25/2018", "01/25/2019", "02/22/2019", "03/25/2019", "04/24/2019",
      "05/28/2019", "06/25/2019", "07/26/2019", "08/27/2019", "09/25/2019",
      "10/28/2019", "11/25/2019", "12/26/2019", "01/28/2020", "02/25/2020", "03/26/2020", "04/27/2020",
      "05/26/2020", "06/25/2020", "07/28/2020", "08/26/2020", "09/26/2020",
      "10/27/2020", "11/24/2020", "12/28/2020", "01/26/2021", "02/23/2021", "03/26/2021", "04/27/2021",
      "05/25/2021", "06/25/2021", "07/27/2021", "08/26/2021", "09/27/2021",
      "10/26/2021", "11/24/2021", "12/28/2021", "01/26/2022", "02/23/2022", "03/28/2022", "04/26/2022",
      "05/25/2022", "06/27/2022", "07/26/2022", "08/26/2022", "09/27/2022",
      "10/26/2022", "11/25/2022", "12/27/2022"
    ];

    var OptionSIExpirationDates = [
      "11/26/2018", "12/21/2018", "01/24/2019", "02/21/2019", "03/25/2019", "04/23/2019",
      "05/28/2019", "06/25/2019", "07/25/2019", "08/27/2019", "09/25/2019",
      "10/28/2019", "11/26/2019", "12/26/2019", "01/28/2020", "02/25/2020", "03/24/2020", "04/27/2020",
      "05/26/2020", "06/25/2020", "07/28/2020", "08/26/2020", "09/24/2020",
      "10/27/2020", "11/25/2020", "12/28/2020", "01/26/2021", "02/23/2021", "03/25/2021", "04/27/2021",
      "05/26/2021", "06/24/2021", "07/27/2021", "08/26/2021", "09/27/2021",
      "10/26/2021", "11/23/2021", "12/28/2021", "01/26/2022", "02/23/2022", "03/28/2022", "04/26/2022",
      "05/26/2022", "06/27/2022", "07/26/2022", "08/25/2022", "09/27/2022",
      "10/26/2022", "11/22/2022", "12/27/2022"
    ];

   var OptionGCExpirationDates = [
     "11/26/2018", "12/21/2018", "01/24/2019", "02/21/2019", "03/25/2019", "04/23/2019",
     "05/28/2019", "06/25/2019", "07/25/2019", "08/27/2019", "09/25/2019",
     "10/28/2019", "11/26/2019", "12/26/2019", "01/28/2020", "02/25/2020", "03/24/2020", "04/27/2020",
     "05/26/2020", "06/25/2020", "07/28/2020", "08/26/2020", "09/24/2020",
     "10/27/2020", "11/25/2020", "12/28/2020", "01/26/2021", "02/23/2021", "03/25/2021", "04/27/2021",
     "05/26/2021", "06/24/2021", "07/27/2021", "08/26/2021", "09/27/2021",
     "10/26/2021", "11/23/2021", "12/28/2021", "01/26/2022", "02/23/2022", "03/28/2022", "04/26/2022",
     "05/26/2022", "06/27/2022", "07/26/2022", "08/25/2022", "09/27/2022",
     "10/26/2022", "11/22/2022", "12/27/2022"
    ];

   var OptionBONDExpirationDates = [
      "11/23/2018", "12/21/2018", "01/25/2019", "02/22/2019", "03/22/2019", "04/19/2019",
      "05/24/2019", "06/21/2019", "07/26/2019", "08/23/2019", "09/20/2019",
      "10/25/2019", "11/22/2019", "12/20/2019", "01/24/2020", "02/21/2020", "03/20/2020", "04/24/2020",
      "05/22/2020", "06/19/2020", "07/24/2020", "08/21/2020", "09/25/2020",
      "10/23/2020", "11/20/2020", "12/23/2020", "01/22/2021", "02/19/2021", "03/26/2021", "04/23/2021",
      "05/21/2021", "06/25/2021", "07/23/2021", "08/20/2021", "09/24/2021",
      "10/22/2021", "11/19/2021", "12/23/2021", "01/21/2022", "02/18/2022", "03/25/2022", "04/22/2022",
      "05/20/2022", "06/24/2022", "07/22/2022", "08/26/2022", "09/23/2022",
      "10/21/2022", "11/23/2022", "12/23/2022"
    ];

    function calcDaysWithName( e ) {
      switch(e) {
        case 'Stock':
          OptionExpirationDates = OptionStockExpirationDates;
          break;
        case 'ES':
          OptionExpirationDates = OptionStockExpirationDates;
          break;
        case 'YM':
          OptionExpirationDates = OptionStockExpirationDates;
          break;
        case 'NQ':
          OptionExpirationDates = OptionStockExpirationDates;
          break;
        case 'CL':
          OptionExpirationDates = OptionCLExpirationDates;
          break;
        case 'NG':
          OptionExpirationDates = OptionNGExpirationDates;
          break;
        case 'GC':
          OptionExpirationDates = OptionGCExpirationDates;
          break;
        case 'SI':
          OptionExpirationDates = OptionSIExpirationDates;
          break;
        case 'EUR':
          OptionExpirationDates = OptionEURExpirationDates;
          break;
        case 'GBP':
          OptionExpirationDates = OptionGBPExpirationDates;
          break;
        case 'CAD':
          OptionExpirationDates = OptionEURExpirationDates;
          break;
        case 'ZB':
          OptionExpirationDates = OptionBONDExpirationDates;
          break;
        default:
         //console.log( 'No Selection' );
      }

      //console.log( "NOW" );
      //console.log( OptionExpirationDates );
      calcDays();
    }

   function calcDays() {
      var today = moment();
      var tt = today;

      var arrayLength = OptionExpirationDates.length;

      var ctt = 0;
      var exp = 0;
      var OneDay = 24 * 60 * 60 * 1000;
      var dt1text = "Today: " + moment( today ).format('MM/DD/YYYY') + "";
      var dt2text = "";
      var dt1atext = "";
      var dt2atext = "";
      var nearMonth = "";
      var nextMonth = "";
      var farMonth = "";
      var tds = 0;

      for ( var s = 0; s < arrayLength; s++ ) {

        exp = moment(OptionExpirationDates[s], "MM/DD/YYYY");
        if ( exp >= tt ) {
          ctt++;
          if ( ctt > 15 ) break; // control how many months are shown per line/section

          tds = (exp - tt)/OneDay + 1;

          if ( ctt <= 3 ) {
            if ( nearMonth.length <= 1 ) {
              NearDate = OptionExpirationDates[s];
              var stkExpDate = moment(OptionExpirationDates[s], "MM/DD/YYYY"); //new Date(Date.parse(OptionExpirationDates[s]));
              nearMonth = stkExpDate.format("YYYY-MM"); //yyyymm.format(stkExpDate);
              //EXPDATEPLUSONE = yymmdd.format(new Date( cYear, cMonth, cDate ));
              NearDays = Math.round(tds);
              nearDays = tds.toFixed(0);
            }

            if ( ctt == 2 ) {
              NextDate = OptionExpirationDates[s];
              nextMonth = moment(OptionExpirationDates[s], "MM/DD/YYYY").format("YYYY-MM");
              NextDays = Math.round(tds);
              nextDays = tds.toFixed(0);
            }

            if ( ctt == 3 ) {
              farMonth = moment(OptionExpirationDates[s], "MM/DD/YYYY").format("YYYY-MM");
              FarDays = Math.round(tds);
              farDays = tds.toFixed(0);
            }

            dt1text += "  " + OptionExpirationDates[s] + " (" + tds.toFixed(0) + ")  ";
          } else if ( ctt <= 7 ) {
            dt2text += " " + OptionExpirationDates[s] + " (" + tds.toFixed(0) + ") ";
          } else if ( ctt <= 11 ) {
            dt1atext += " " + OptionExpirationDates[s] + " (" + tds.toFixed(0) + ") ";
          } else {
            dt2atext += " " + OptionExpirationDates[s] + " (" + tds.toFixed(0) + ") ";
          }
        }
      }


      //console.log( "Heres" );
      //console.log(  OptionExpirationDates );
      //console.log( "CalcDays:" + nextDays + ", " + nearDays );
     //console.log( "CalcDays:" + NextDays + ", " + NearDays );
      //OptionExpirationDates
      // dt1.text = "Today: 11/29/2008  12/19/2008 (21)  01/16/2008 (50)  02/20/2009 (85)";
      // dt2.text = "03/20/2009 (113)  04/17/2009 (141)  05/15/2009 (169)  06/19/2009 (205)";
    }


   //let RATE = localStorage.getItem('config').split(/,/)[8]/100;
   //let RANGE = localStorage.getItem('config').split(/,/)[4]/100;

    function getATMStrike( stk ){
      var strike = 50;

      //trace( "isEUR=" + isEUR );
      if ( isEUR ) {
        strike = (Math.floor((stk * 10000) / 100 ) * 100) / 10000;
        return strike;
      }

      if ( stk <= StrikePrice1 )
        strike = Math.round( stk / 2.5 ) * 2.5;
      else if ((stk > StrikePrice1) && (stk < StrikePrice2))
        strike = Math.round( stk / 5 ) * 5;
      else
        strike = Math.round( stk / 10 ) * 10;

      //trace( "getATMStrike 1= " + stk + " = " + strike );

      if ( strike <= 2.5 ) strike = 2.5;

      if ( strike > 1000 ) strike = Math.floor( strike / 100 ) * 100 + 50;

      //trace( "getATMStrike 2= " + stk + " = " + strike );

      return strike;
    }

    function getNextStrikeUp( stk ) {
      var atmStrike = getATMStrike( stk );
      var strike = atmStrike + 2.5;

      //trace( "isEUR2=" + isEUR );
      if ( isEUR ) {
        strike = (Math.floor((atmStrike * 10000) / 100 ) * 100 + 50) / 10000;
        return strike;
      }


      if ( stk <= StrikePrice1 )
        strike = atmStrike + 2.5;
      else if ((stk > StrikePrice1) && (stk < StrikePrice2))
        strike = atmStrike + 5;
      else
        strike = atmStrike + 10;

      if ( strike <= 2.5 ) strike = 2.5;

      return strike;
    }

    function getNextStrikeDown( stk ) {
      var atmStrike = getATMStrike( stk );
      var strike = atmStrike - 2.5;

      //trace( "isEUR3=" + isEUR );
      if ( isEUR ) {
        strike = (Math.floor((atmStrike * 10000) / 100 ) * 100 - 50) / 10000;
        return strike;
      }

      if ( stk <= StrikePrice1 )
        strike = atmStrike - 2.5;
      else if ((stk > StrikePrice1) && (stk < StrikePrice2))
        strike = atmStrike - 5;
      else
        strike = atmStrike - 10;

      if ( strike <= 2.5 ) strike = 2.5;

      return strike;
    }

    function getRate() {
      if (!GlobalConfig || GlobalConfig.length < 10)
        GlobalConfig = DEFAULT_CONFIG;
      return GlobalConfig.split(/,/)[8]/100;
    }

    function getRange() {
      if (!GlobalConfig || GlobalConfig.length < 10)
        GlobalConfig = DEFAULT_CONFIG;
      return GlobalConfig.split(/,/)[4]/100;
    }

    function getMultipler() {
      //console.log( GlobalConfig );
      if (!GlobalConfig || GlobalConfig.length < 10)
        GlobalConfig = DEFAULT_CONFIG;
      return GlobalConfig.split(/,/)[1]/1; //100;
    }

    function getContractUnit() {
      if (!GlobalConfig || GlobalConfig.length < 10)
        GlobalConfig = DEFAULT_CONFIG;
      return GlobalConfig.split(/,/)[2]/1; //100;
    }

    function setGlobalConfig(config) {
        GlobalConfig = config;
    }

// All string, return void
	 function getIV(opt, type, spot, strike, days) {

		let currentOpt = opt;
		let currentDays = days;
		let currentTime = (parseFloat(days)/365).toFixed(2) / 1.0;
		let currentRate = getRate();
		let currentSpot = parseFloat((spot));
		let currentStrike = parseFloat((strike));

    //console.log( currentOpt + "," + currentDays + "," + currentTime + "," + currentRate + "," + currentSpot + "," + currentStrike );
		let currentIV = calculateIV( opt, type, spot, strike, days );

		if ( implied != null ) {
			implied.text = ( currentIV * 100 ).toFixed(2) + "%";
			if ( currentIV >= 3.00 ) implied.text += " !";
			if ( currentIV >= 10.00 ) implied.text += " !";
		}

		return implied.text;

	}

	/* the main function to calculate IV, it returns a IV */
	// All string, return number
	 function calculateIV(opt, type, spot, strike, days)  {

		var rate  = getRate();
		var cc  = 0.0;
		var diff  = 10000.0;
		var optNum  = parseFloat(opt);
		var optType = type;
		var spotPrice  = parseFloat((spot));
		var strikePrice  = parseFloat((strike));
		var daysNum  = (parseFloat(days)/365).toFixed(2) / 1.0;
		var absNum ;
		var prevAbsNum ;


     //console.log( optNum + "," + optType + "," + spotPrice + "," + strikePrice + "," + daysNum  );
     //trace("WHY N/A: " + type + " " + spotPrice + " " + strikePrice + " " + opt );
		if ((type == "c") && ((spotPrice - strikePrice) >= parseFloat(opt) )) {
			implied.text = "N/A";
			//trace( "Got N/A 1" )
			return 0;
		}

     //console.log( "Here1");

		if ((type == "p") && ((strikePrice - spotPrice) >= parseFloat(opt) )) {
			implied.text = "N/A";
			//trace( "Got N/A 2" )
			return 0;
		}

     //console.log( "Here2");

		for ( var iv  = 0.01; iv < 10.00; iv += 0.0001 ) {
      //console.log( iv );
			cc = BlackScholes( optType, spotPrice, strikePrice, daysNum, rate, iv );
      //console.log( cc );
			absNum = Math.abs( cc - optNum );
      //console.log( absNum );

			if ( absNum <= diff ) {
				diff = absNum;
				continue;
			}
			if (((absNum - prevAbsNum) > 0.01) || ((absNum > diff) && (diff <= VOLDIFF))) {
				break;
			}
			prevAbsNum = absNum;
		}

   //console.log( "Get IV = " + iv );
		return iv;

	}


	function formula(x, y) {
		console.log( "HereD");
		return (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
	}


	// all Number except 1st one, return number,
	function BlackScholes(CallPutFlag, S , X , T , r , v )  {

		var d1 ;
		var d2 ;

		d1=(Math.log(S/X)+(r+v*v/2)*T)/(v*Math.sqrt(T));
		d2=d1-v*Math.sqrt(T);


		if (CallPutFlag=="c") {
			return S*CND(d1)-X*Math.exp(-r*T)*CND(d2);
		} else {
			return X*Math.exp(-r*T)*CND(-d2)-S*CND(-d1);
		}

	}


	 function CND( X ) {
		var L ;
		var K ;
		var w ;

		var a1  = 0.31938153, a2  = -0.356563782, a3 = 1.781477937, a4  = -1.821255978, a5  = 1.330274429;

		L = Math.abs(X);
		K = 1.0 / (1.0 + 0.2316419 * L);
		w = 1.0 - 1.0 / Math.sqrt(2.0 * Math.PI) * Math.exp(-L *L / 2) * (a1 * K + a2 * K *K + a3 * Math.pow(K,3) + a4 * Math.pow(K,4) + a5 * Math.pow(K,5));

		if (X < 0.0) {
			w= 1.0 - w;
		}
			return w;
	}


	// all Number except 1st one, return number,
     function getDelta(CallPutFlag, S , X , r , sigma , time )  {
    	var time_sqrt  = Math.sqrt(time);
    	var d1  = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    	var delta ;

    	if (CallPutFlag=="c") {
    		delta = CND(d1);
    	} else {
    		delta = -CND(-d1);
    	}
    	return delta;
    }

     function option_price_delta_call_black_scholes(S , X , r , sigma , time )  {
    	var time_sqrt  = Math.sqrt(time);
    	var d1  = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    	var delta  = CND(d1);

    	return delta;
    }

     function option_price_delta_put_black_scholes(S , X , r , sigma , time )  {
    	var time_sqrt  = Math.sqrt(time);
    	var d1  = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    	var delta  = -CND(-d1);
    	return delta;
    }

     function getGamma(S , X , r , sigma , time )  {
    	var time_sqrt  = Math.sqrt(time);
    	var d1  = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    	var gamma  = n(d1)/(S*sigma*time_sqrt);
    	return gamma;
    }

	// all Number except 1st one, return number,
     function getTheta(CallPutFlag, S , X , r , sigma , time )  {
    	var time_sqrt  = Math.sqrt(time);
    	var d1  = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    	var d2  = d1-(sigma*time_sqrt);
    	var theta ;

    	if (CallPutFlag=="c") {
    		theta = -(n(d1)*S*sigma)/(2*time_sqrt)-r*X*Math.exp(-r*time)*CND(d2);
    	} else {
    		theta = -(n(d1)*S*sigma)/(2*time_sqrt)+r*X*Math.exp(-r*time)*CND(-d2);
    	}
    	return theta/352;
    }


     function option_price_theta_put_black_scholes(S , X , r , sigma , time )  {
    	var time_sqrt  = Math.sqrt(time);
    	var d1  = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
    	var d2  = d1-(sigma*time_sqrt);
    	var theta  = -(n(d1)*S*sigma)/(2*time_sqrt)-r*X*Math.exp(-r*time)*CND(d2);
    	return theta;
    }


	function n(z) {  // normal distribution function
		return (1.0/Math.sqrt(2.0*Math.PI))*Math.exp(-0.5*z*z);
	}


	function getVega(S, X, r, sigma, time) {
		var time_sqrt = Math.sqrt(time);
		var d1 = (Math.log(S/X) + r * time ) / (sigma * time_sqrt) + 0.5 * sigma * time_sqrt;
		var vega = S * time_sqrt * n(d1);
		return vega/100;
	}

	function doUtilLog( a ) {

		//console.log( "Logging from doUtilLog with " + a );
		//let configs = localStorage.getItem('config').split(/,/);
		//console.log( "Interest rate = " + configs[8] );
		//OptionChart.doChartLog( a );
	}

  function doLongCall( dataFromChild, flag ) {

   //console.log( "doLongCall" );
    //console.log( "CalcDays:" + NextDays + ", " + NearDays );
   //console.log( dataFromChild );
    let deltas = [];
    let delta;

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days: leg1.days,
        month: leg1.month,
        strike: Math.round(leg1.strike * 100 ) / 100,
        iv: leg1.iv,
        price: flag ? leg1.bid : leg1.ask, //leg1.price,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice: dataFromChild.price,
        delta: 0
      }];
      legs.underlying = {};
     //console.log( "With real data" );
     //console.log( legs );
      return legs;
    }


    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;

    let callPrice = BlackScholes( "c", dataFromChild.price, strikePrice,
      dataFromChild.days/365, getRate(), parseFloat(dataFromChild.iv)/100.0 );

    callPrice = parseFloat( callPrice.toFixed(2));

    delta = 100 * -1 * getDelta('c', dataFromChild.price, strikePrice, getRate(),
      parseFloat(dataFromChild.iv)/100.0, dataFromChild.days / 365)/1.0;

    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days: dataFromChild.days,
      strike: Math.round(strikePrice * 100 ) / 100,
      iv: dataFromChild.iv,
      price: callPrice,
      spotPrice: dataFromChild.price,
      delta: deltas[0]
    }];

    legs.underlying = {};
   //console.log( "Without real data" );
   //console.log( legs );
    return legs;
  }


  function doShortPut( dataFromChild ) {

	  /*
    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMPut;
      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Put",
        lots: "1",
        days: leg1.days,
        month: leg1.month,
        strike: Math.round(leg1.strike * 100 ) / 100,
        iv: leg1.iv,
        price: leg1.bid, //leg1.price,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice: dataFromChild.price,
        delta: 0
      }];
      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }
	  */

    let legs = doLongPut( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.underlying = { };

    return legs;
  }

  function doCoveredCall( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Call",
        lots: "1",
        days: leg1.days,
        month: leg1.month,
        strike: Math.round(leg1.strike * 100 ) / 100,
        iv: leg1.iv,
        price: leg1.bid, //leg1.price,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice: dataFromChild.price,
        delta: 0
      }];
      legs.underlying = {selectedOption: "underlying", isLong: true, purchaseLot: defaultLot, purchasePrice: dataFromChild.price / 1.0 };
     //console.log( "With real data" );
     //console.log( legs );
      return legs;
    }


	   let legs = doLongCall( dataFromChild );
	   legs.opts[0].trade = "Short";
	   //console.log( this.state.selectedOption + ", " + this.state.isLong + ", " + this.state.purchaseLot + ", " + this.state.purchasePrice );
	   legs.underlying = {selectedOption: "underlying", isLong: true, purchaseLot: defaultLot, purchasePrice: dataFromChild.price / 1.0 };

	   return legs;
  }

  function doMarriedPut( dataFromChild ) {
    let legs = doLongPut( dataFromChild );
    legs.opts[0].trade = "Long";
    //console.log( this.state.selectedOption + ", " + this.state.isLong + ", " + this.state.purchaseLot + ", " + this.state.purchasePrice );
    legs.underlying = {selectedOption: "underlying", isLong: true, purchaseLot: defaultLot, purchasePrice: dataFromChild.price / 1.0 };

    return legs;
  }

  function doBullCallSpread( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;

    let callPrice1 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice1 = parseFloat( callPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doBullPutSpread( dataFromChild, flag ) {


    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMPut;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.ask : leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.bid : leg2.ask,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let putPrice1 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice1 = parseFloat( putPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }


  function doModifiedPutButterfly( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearOTMPut;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;
      let leg3 = dataFromChild.twelveOptions.nearIITMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    let strikeNextDownPrice = getNextStrikeDown( strikeDownPrice /1.0) / 1.0;

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice3 =  BlackScholes( "p",  dataFromChild.price,  strikeNextDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice3 = parseFloat( putPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeNextDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeNextDownPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;

  }

  function doDiagonalBullCallSpread( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nextITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
      //console.log( "With real put" );
      //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    //console.log( "doDiagonalBullCallSpread:" + NextDays + ", " + NearDays );

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    //console.log( strikePrice + ", " + strikeUpPrice + ", " + strikeDownPrice);

    let callPrice1 =  BlackScholes( "c",  dataFromChild.price,  strikeDownPrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice1 = parseFloat( callPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NextDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikeDownPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;


  }

  function doSplitStrikeLong( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
      //console.log( "With real put" );
      //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    //console.log( "doSplitStrikeLong:" + NextDays + ", " + NearDays );

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    //console.log( strikePrice + ", " + strikeUpPrice + ", " + strikeDownPrice);

    let callPrice1 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice1 = parseFloat( callPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice1 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice1 = parseFloat( putPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;



  }

  function doCollar( dataFromChild ) {
    let legs = doSplitStrikeLong( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";

    legs.underlying = {selectedOption: "underlying", isLong: true, purchaseLot: defaultLot, purchasePrice: dataFromChild.price / 1.0 };

    return legs;
  }

  function doCallCalendarSpread( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nextATMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
      //console.log( "With real put" );
      //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;
  }

  function doPutCalendarSpread( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nextATMPut;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
      //console.log( "With real put" );
      //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeDownPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;
  }

  function doCallRatioBackspread( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Long",
        type: "Call",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.ask,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
      //console.log( "With real put" );
      //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    let strikeNextDownPrice = getNextStrikeDown( strikeDownPrice /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Long",
      type: "Call",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doPutRatioBackspread( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearOTMPut;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Long",
        type: "Put",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.ask,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Long",
      type: "Put",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doReverseCallCalendarBackspread( dataFromChild ) {
    let legs = doCallCalendarSpread( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.underlying = {};

    return legs;
  }

  function doReversePutCalendarBackspread( dataFromChild ) {
    let legs = doPutCalendarSpread( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.underlying = {};

    return legs;
  }

  function doShortCall( dataFromChild ) {
    let legs = doLongCall( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.underlying = {};

    return legs;
  }

  function doLongPut( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMPut;
      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days: leg1.days,
        month: leg1.month,
        strike: Math.round(leg1.strike * 100 ) / 100,
        iv: leg1.iv,
        price: flag ? leg1.bid : leg1.ask, //leg1.price,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice: dataFromChild.price,
        delta: 0
      }];
      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


   //console.log( "doLongPut" );
   //console.log( dataFromChild );
    let deltas = [];
    let delta;

    let strikePrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));

    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;

    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days: dataFromChild.days,
      strike: Math.round(strikePrice * 100 ) / 100,
      iv: dataFromChild.iv,
      price: putPrice,
      spotPrice: dataFromChild.price,
      delta: deltas[0]
    }];

    legs.underlying = {};

    return legs;

  }

  function doCoveredPut( dataFromChild ) {
    let legs = doLongPut( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.underlying = {selectedOption: "underlying", isLong: false, purchaseLot: defaultLot, purchasePrice: dataFromChild.price / 1.0 };
    return legs;
  }

  function doMarriedCall( dataFromChild ) {
    let legs = doLongCall( dataFromChild );
    legs.underlying = {selectedOption: "underlying", isLong: false, purchaseLot: defaultLot, purchasePrice: dataFromChild.price / 1.0 };
    return legs;
  }

  function doBearCallSpread( dataFromChild ) {
    let legs = doBullCallSpread( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.underlying = {};

    return legs;
  }

  function doBearPutSpread( dataFromChild ) {
    let legs = doBullPutSpread( dataFromChild, true );
    legs.opts[0].trade = "Long";
    legs.opts[1].trade = "Short";
    legs.underlying = {};

    return legs;
  }

  function doModifiedCallButterfly( dataFromChild ) {


    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;
      let leg3 = dataFromChild.twelveOptions.nearOTMCall;

      let legs = {};
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100) / 100,
        iv:  leg3.iv,
        price: leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    let strikeNextDownPrice = getNextStrikeDown( strikeDownPrice /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeNextDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeNextDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice3 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice3 = parseFloat( callPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeNextDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;


  }

  function doDiagonalBearPutSpread( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nextATMPut;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;


      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

   //console.log( "doDiagonalBullCallSpread:" + NextDays + ", " + NearDays );

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    //console.log( strikePrice + ", " + strikeUpPrice + ", " + strikeDownPrice);

    let putPrice1 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice1 = parseFloat( putPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NextDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doSplitStrikeShort( dataFromChild ) {
    let legs = doSplitStrikeLong( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";

    legs.underlying = {};

    return legs;
  }

  function doShortCallCondor( dataFromChild ) {
    let legs = doLongCallCondor( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Long";
    legs.opts[3].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doShortPutCondor( dataFromChild ) {
    let legs = doLongPutCondor( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Long";
    legs.opts[3].trade = "Short";

    legs.underlying = {};

    return legs;
  }


  function doLongIronCondor( dataFromChild,  flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;
      let leg3 = dataFromChild.twelveOptions.nearOTMCall;
      let leg4 = dataFromChild.twelveOptions.nearIITMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.ask : leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: flag ? leg3.bid : leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: flag ? leg4.bid : leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    let strikeNextDownPrice = getNextStrikeDown( strikeDownPrice /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeNextDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeNextDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeNextDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;

  }

  function doShortIronCondor( dataFromChild ) {
    let legs = doLongIronCondor( dataFromChild, true );
    legs.opts[0].trade = "Long";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Short";
    legs.opts[3].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doLongIronButterfly( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;
      let leg3 = dataFromChild.twelveOptions.nearOTMCall;
      let leg4 = dataFromChild.twelveOptions.nearITMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.ask : leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: flag ? leg3.bid : leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: flag ? leg4.bid : leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;
  }

  function doShortIronButterfly( dataFromChild ) {
    let legs = doLongIronButterfly( dataFromChild, true );
    legs.opts[0].trade = "Long";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Short";
    legs.opts[3].trade = "Short";
    legs.underlying = {};

    return legs;
  }

  function doLongStraddle( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;

      let legs = {};

     //console.log( "Inside longStraddle 2" );
      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.bid : leg2.ask,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];


     //console.log( "Inside longStraddle 3" );
      legs.underlying = {};
     //console.log( "from long straddle" );
     //console.log( "Inside longStraddle 4" );
     //console.log( legs );
      return legs;
    }



    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doShortStraddle( dataFromChild ) {
    let legs = doLongStraddle( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Short";
    //console.log( this.state.selectedOption + ", " + this.state.isLong + ", " + this.state.purchaseLot + ", " + this.state.purchasePrice );
    legs.underlying = {};

    return legs;
  }


  function doLongStrangle( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.bid : leg2.ask,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doShortStrangle( dataFromChild ) {
    let legs = doLongStrangle( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doLongGut( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearOTMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.bid : leg2.ask,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];


      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doShortGut( dataFromChild ) {
    let legs = doLongGut( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doLongStrip( dataFromChild ) {
    let legs = doLongStraddle( dataFromChild );
    legs.opts[1].lots = "2";

    legs.underlying = {};

    return legs;
  }

  function doShortStrip( dataFromChild ) {
    let legs = doLongStraddle( dataFromChild, true );
    legs.opts[1].lots = "2";
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doLongStrap( dataFromChild ) {
    let legs = doLongStraddle( dataFromChild );
    legs.opts[0].lots = "2";

    legs.underlying = {};

    return legs;
  }

  function doShortStrap( dataFromChild ) {
    let legs = doLongStraddle( dataFromChild, true );
    legs.opts[0].lots = "2";
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doLongButterfly( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;
      let leg3 = dataFromChild.twelveOptions.nextOTMCall;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: flag ? leg3.bid : leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice3 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice3 = parseFloat( callPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;
  }

  function doShortButterfly( dataFromChild ) {
    let legs = doLongButterfly( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Short";

    legs.underlying = {};

    return legs;
  }

  function doCalendarStraddle( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;
      let leg3 = dataFromChild.twelveOptions.nextATMCall;
      let leg4 = dataFromChild.twelveOptions.nextATMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];


      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NextDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NextDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;

  }

  function doCalendarStrangle( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearOTMCall;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;
      let leg3 = dataFromChild.twelveOptions.nextOTMCall;
      let leg4 = dataFromChild.twelveOptions.nextITMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NextDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      NextDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NextDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  NextDays,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;

  }

  function doBox( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearATMCall;
      let leg2 = dataFromChild.twelveOptions.nearOTMCall;
      let leg3 = dataFromChild.twelveOptions.nearOTMPut;
      let leg4 = dataFromChild.twelveOptions.nearATMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.bid,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: leg3.ask,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];


      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }



    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeUpPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      NearDays/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  NearDays / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  NearDays,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;

  }

  function doRatioCallSpread( dataFromChild ) {


    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }

    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice1 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice1 = parseFloat( callPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doRatioPutSpread( dataFromChild ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearOTMPut;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "2",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];


      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let putPrice1 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice1 = parseFloat( putPrice1.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice1,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "2",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }];

    legs.underlying = {};

    return legs;

  }

  function doLongCallLadder( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearITMCall;
      let leg2 = dataFromChild.twelveOptions.nearATMCall;
      let leg3 = dataFromChild.twelveOptions.nearOTMCall;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Short",
        type: "Call",
        lots: "1",
        days: leg3.days,
        month: leg3.month,
        strike: Math.round(leg3.strike * 100) / 100,
        iv: leg3.iv,
        price: flag ? leg3.ask : leg3.bid,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice: dataFromChild.price,
        delta: 0
      }];


      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice3 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice3 = parseFloat( callPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;

  }

  function doLongPutLadder( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearOTMPut;
      let leg2 = dataFromChild.twelveOptions.nearATMPut;
      let leg3 = dataFromChild.twelveOptions.nearITMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Short",
        type: "Put",
        lots: "1",
        days: leg3.days,
        month: leg3.month,
        strike: Math.round(leg3.strike * 100) / 100,
        iv: leg3.iv,
        price: flag ? leg3.ask : leg3.bid,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice: dataFromChild.price,
        delta: 0
      }];


      legs.underlying = {};
      //console.log( "With real put" );
      //console.log( legs );
      return legs;
    }



    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice3 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice3 = parseFloat( putPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );


    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }];

    legs.underlying = {};

    return legs;

  }

  function doShortCallLadder( dataFromChild ) {
    let legs = doLongCallLadder( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Long";

    legs.underlying = {};

    return legs;
  }

  function doShortPutLadder( dataFromChild ) {
    let legs = doLongPutLadder( dataFromChild, true );
    legs.opts[0].trade = "Short";
    legs.opts[1].trade = "Long";
    legs.opts[2].trade = "Long";

    legs.underlying = {};

    return legs;
  }


  function doLongCallCondor( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearIITMCall;
      let leg2 = dataFromChild.twelveOptions.nearITMCall;
      let leg3 = dataFromChild.twelveOptions.nearATMCall;
      let leg4 = dataFromChild.twelveOptions.nearOTMCall;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Short",
        type: "Call",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: flag ? leg3.ask : leg3.bid,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Long",
        type: "Call",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: flag ? leg4.bid : leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    let strikeNextDownPrice = getNextStrikeDown( strikeDownPrice /1.0) / 1.0;

    let callPrice =  BlackScholes( "c",  dataFromChild.price,  strikeNextDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice = parseFloat( callPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('c',  dataFromChild.price,  strikeNextDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice2 =  BlackScholes( "c",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice2 = parseFloat( callPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice3 =  BlackScholes( "c",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice3 = parseFloat( callPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let callPrice4 =  BlackScholes( "c",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    callPrice4 = parseFloat( callPrice4.toFixed(2));
    delta = 100 * 1 *  getDelta('c',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeNextDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: callPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Short",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Long",
      type: "Call",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: callPrice4,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;
  }


  function doLongPutCondor( dataFromChild, flag ) {

    if ( dataFromChild.twelveOptions && Object.keys(dataFromChild.twelveOptions).length === SIXTEEN ) {
      let leg1 = dataFromChild.twelveOptions.nearIITMPut;
      let leg2 = dataFromChild.twelveOptions.nearITMPut;
      let leg3 = dataFromChild.twelveOptions.nearATMPut;
      let leg4 = dataFromChild.twelveOptions.nearOTMPut;

      let legs = {};

      legs.opts = [{
        id: 1,
        which: "Option 1",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg1.days,
        month: leg1.month,
        strike: Math.round( leg1.strike * 100 ) / 100,
        iv:  leg1.iv,
        price: flag ? leg1.bid : leg1.ask,
        bid: leg1.bid,
        ask: leg1.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 2,
        which: "Option 2",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg2.days,
        month: leg2.month,
        strike: Math.round( leg2.strike * 100 ) / 100,
        iv:  leg2.iv,
        price: flag ? leg2.ask : leg2.bid,
        bid: leg2.bid,
        ask: leg2.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 3,
        which: "Option 3",
        trade: "Short",
        type: "Put",
        lots: "1",
        days:  leg3.days,
        month: leg3.month,
        strike: Math.round( leg3.strike * 100 ) / 100,
        iv:  leg3.iv,
        price: flag ? leg3.ask : leg3.bid,
        bid: leg3.bid,
        ask: leg3.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }, {
        id: 4,
        which: "Option 4",
        trade: "Long",
        type: "Put",
        lots: "1",
        days:  leg4.days,
        month: leg4.month,
        strike: Math.round( leg4.strike * 100 ) / 100,
        iv:  leg4.iv,
        price: flag ? leg3.bid : leg4.ask,
        bid: leg4.bid,
        ask: leg4.ask,
        spotPrice:  dataFromChild.price,
        delta: 0
      }];

      legs.underlying = {};
     //console.log( "With real put" );
     //console.log( legs );
      return legs;
    }


    let deltas = [];
    let delta;

    let strikePrice = getATMStrike( dataFromChild.price /1.0) / 1.0;
    let strikeUpPrice = getNextStrikeUp( dataFromChild.price /1.0) / 1.0;
    let strikeDownPrice = getNextStrikeDown( dataFromChild.price /1.0) / 1.0;
    let strikeNextDownPrice = getNextStrikeDown( strikeDownPrice /1.0) / 1.0;

    let putPrice =  BlackScholes( "p",  dataFromChild.price,  strikeNextDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice = parseFloat( putPrice.toFixed(2));
    delta = 100 * -1 *  getDelta('p',  dataFromChild.price,  strikeNextDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice2 =  BlackScholes( "p",  dataFromChild.price,  strikeDownPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice2 = parseFloat( putPrice2.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeDownPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice3 =  BlackScholes( "p",  dataFromChild.price,  strikePrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice3 = parseFloat( putPrice3.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikePrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let putPrice4 =  BlackScholes( "p",  dataFromChild.price,  strikeUpPrice,
      dataFromChild.days/365,  getRate(), parseFloat( dataFromChild.iv)/100.0 );
    putPrice4 = parseFloat( putPrice4.toFixed(2));
    delta = 100 * 1 *  getDelta('p',  dataFromChild.price,  strikeUpPrice,  getRate(),
      parseFloat( dataFromChild.iv)/100.0,  dataFromChild.days / 365)/1.0;
    deltas.push( delta.toFixed(2)/1.0 );

    let legs = {};
    legs.opts = [{
      id: 1,
      which: "Option 1",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeNextDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice,
      spotPrice:  dataFromChild.price,
      delta: deltas[0]
    }, {
      id: 2,
      which: "Option 2",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeDownPrice * 100 ) / 100,
      iv:  dataFromChild.iv,
      price: putPrice2,
      spotPrice:  dataFromChild.price,
      delta: deltas[1]
    }, {
      id: 3,
      which: "Option 3",
      trade: "Short",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikePrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice3,
      spotPrice:  dataFromChild.price,
      delta: deltas[2]
    }, {
      id: 4,
      which: "Option 4",
      trade: "Long",
      type: "Put",
      lots: "1",
      days:  dataFromChild.days,
      strike: Math.round( strikeUpPrice * 100) / 100,
      iv:  dataFromChild.iv,
      price: putPrice4,
      spotPrice:  dataFromChild.price,
      delta: deltas[3]
    }];

    legs.underlying = {};

    return legs;

  }



function buildStrategy( name, data ) {

    let legs = {};

    switch(name) {
      case 'longCall':
        legs = doLongCall( data );
        break;
      case 'shortPut':
        legs = doShortPut( data );
        break;
      case 'coveredCall':
        legs = doCoveredCall( data );
        break;
      case 'marriedPut':
        legs = doMarriedPut( data );
        break;
      case 'bullCallSpread':
        legs = doBullCallSpread( data );
        break;
      case 'bullPutSpread':
        legs = doBullPutSpread( data );
        break;
      case 'modifiedPutButterfly':
        legs = doModifiedPutButterfly( data );
        break;
      case 'diagonalBullCallSpread':
        legs = doDiagonalBullCallSpread( data );
        break;
      case 'splitStrikeLong':
        legs = doSplitStrikeLong( data );
        break;
      case 'collar':
        legs = doCollar( data );
        break;
      case 'callCalendarSpread':
        legs = doCallCalendarSpread( data );
        break;
      case 'putCalendarSpread':
        legs = doPutCalendarSpread( data );
        break;
      case 'callRatioBackspread':
        legs = doCallRatioBackspread( data );
        break;
      case 'putRatioBackspread':
        legs = doPutRatioBackspread( data );
        break;
      case 'reverseCallCalendarBackspread':
        legs = doReverseCallCalendarBackspread( data );
        break;
      case 'reversePutCalendarBackspread':
        legs = doReversePutCalendarBackspread( data );
        break;
      case 'shortCall':
        legs = doShortCall( data );
        break;
      case 'longPut':
        legs = doLongPut( data );
        break;
      case 'coveredPut':
        legs = doCoveredPut( data );
        break;
      case 'marriedCall':
        legs = doMarriedCall( data );
        break;
      case 'bearCallSpread':
        legs = doBearCallSpread( data );
        break;
      case 'bearPutSpread':
        legs = doBearPutSpread( data );
        break;
      case 'modifiedCallButterfly':
        legs = doModifiedCallButterfly( data );
        break;
      case 'diagonalBearPutSpread':
        legs = doDiagonalBearPutSpread( data );
        break;
      case 'splitStrikeShort':
        legs = doSplitStrikeShort( data );
        break;
      case 'shortCallCondor':
        legs = doShortCallCondor( data );
        break;
      case 'shortPutCondor':
        legs = doShortPutCondor( data );
        break;
      case 'longIronCondor':
        legs = doLongIronCondor( data );
        break;
      case 'shortIronCondor':
        legs = doShortIronCondor( data );
        break;
      case 'longIronButterfly':
        legs = doLongIronButterfly( data );
        break;
      case 'shortIronButterfly':
        legs = doShortIronButterfly( data );
        break;
      case 'longStraddle':
        legs = doLongStraddle( data );
        break;
      case 'shortStraddle':
        legs = doShortStraddle( data );
        break;
      case 'longStrangle':
        legs = doLongStrangle( data );
        break;
      case 'shortStrangle':
        legs = doShortStrangle( data );
        break;
      case 'longGut':
        legs = doLongGut( data );
        break;
      case 'shortGut':
        legs = doShortGut( data );
        break;
      case 'longStrip':
        legs = doLongStrip( data );
        break;
      case 'shortStrip':
        legs = doShortStrip( data );
        break;
      case 'longStrap':
        legs = doLongStrap( data );
        break;
      case 'shortStrap':
        legs = doShortStrap( data );
        break;
      case 'longButterfly':
        legs = doLongButterfly( data );
        break;
      case 'shortButterfly':
        legs = doShortButterfly( data );
        break;
      case 'calendarStraddle':
        legs = doCalendarStraddle( data );
        break;
      case 'calendarStrangle':
        legs = doCalendarStrangle( data );
        break;
      case 'box':
        legs = doBox( data );
        break;
      case 'ratioCallSpread':
        legs = doRatioCallSpread( data );
        break;
      case 'ratioPutSpread':
        legs = doRatioPutSpread( data );
        break;
      case 'longCallLadder':
        legs = doLongCallLadder( data );
        break;
      case 'longPutLadder':
        legs = doLongPutLadder( data );
        break;
      case 'shortCallLadder':
        legs = doShortCallLadder( data );
        break;
      case 'shortPutLadder':
        legs = doShortPutLadder( data );
        break;
      case 'longCallCondor':
        legs = doLongCallCondor( data );
        break;
      case 'longPutCondor':
        legs = doLongPutCondor( data );
        break;
      default:
       //console.log( 'Neither' );
        legs = doLongCall( data );
        break;
    }
    return legs;
  }

  function constructStrategy( name, volcalc ) {

    // Create the strategy on the fly based on the strategy selected, also based on the data from VolCalculation.
	  //console.log( "Constructing strategy for " + name + " with input:" );
	  //console.log( volcalc );
    let config = localStorage.getItem('config');
    let configs = [];
    //console.log( config );
    if ( config && config.length >= 18 ) {
      configs = config.split(/,/);
      //console.log( configs );
      let underlying = configs[0]; // Stock, EUR, etc;
      //console.log( "WHAT" );
      //console.log( underlying );
      if ("NG,EUR,GBP,CAD".indexOf(underlying) >= 0) {
        isEUR = true;
      }
      //console.log( "isEUR=" + isEUR );
      defaultLot = configs[1]/1.0; // Use Multipler as default purchase lot for underlying
      //console.log( "defaultLot=" + defaultLot);
    }

	   let legs = buildStrategy( name, volcalc );
	   return legs;
  }


