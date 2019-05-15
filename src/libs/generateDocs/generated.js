
  /**
   * @Summary Vector Absolute Value
   * @name MonkeySet.Indicator#abs
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns abs {array} from the abs simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').abs({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "abs": [
        4993.28,
        5026.79,
        5011.4,
        5033.71,
        5069.38,
        5046.21,
        5048.99,
        5039.49,
        5019.74,
        5045.05,
        5064.92,
        5075.17
    ]
} */
  /**
   * @Summary Vector Arccosine
   * @name MonkeySet.Indicator#acos
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns acos {array} from the acos simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').acos({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "acos": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Accumulation/Distribution Line
   * @name MonkeySet.Indicator#ad
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns ad {array} from the ad indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ad()
 * 
 * console.log(result)
 * // returns: 
{
    "ad": [
        -44267.18036431886,
        -148410.48858210494,
        -254952.82191543828,
        -259745.45357633123,
        -655026.304015407,
        -698620.804015407,
        -704152.5649753003,
        -762552.2416837874,
        -795288.7442132122,
        -767271.6609264781,
        -792829.6065973445,
        -860659.6065973445
    ]
} */
  /**
   * @Summary Vector Addition
   * @name MonkeySet.Indicator#add
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @param options.input2 {array} The input real
 * @returns add {array} from the add simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').add({input1: 'close', input2: 'open'})
 * 
 * console.log(result)
 * // returns: 
{
    "add": [
        9990.56,
        10049.58,
        10017.8,
        10067.42,
        10131.76,
        10098.42,
        10097.98,
        10081.98,
        10038.48,
        10090.1,
        10133.84,
        10146.34
    ]
} */
  /**
   * @Summary Accumulation/Distribution Oscillator
   * @name MonkeySet.Indicator#adosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @returns adosc {array} from the adosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adosc({'short period': 2, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "adosc": [
        -221284.0780419706,
        -183166.63519678276,
        -161449.66656129842,
        -137997.69088571658,
        -95455.43811359047,
        -76880.70235415897,
        -83654.20291540702
    ]
} */
  /**
   * @Summary Average Directional Movement Index
   * @name MonkeySet.Indicator#adx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns dx {array} from the adx indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adx({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "dx": [
        31.962219277146446,
        34.203389315122365
    ]
} */
  /**
   * @Summary Average Directional Movement Rating
   * @name MonkeySet.Indicator#adxr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns dx {array} from the adxr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adxr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "dx": []
} */
  /**
   * @Summary Awesome Oscillator
   * @name MonkeySet.Indicator#ao
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns ao {array} from the ao indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ao()
 * 
 * console.log(result)
 * // returns: 
{
    "ao": []
} */
  /**
   * @Summary Absolute Price Oscillator
   * @name MonkeySet.Indicator#apo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @param options.input1 {array} The input real
 * @returns apo {array} from the apo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').apo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "apo": [
        12.765714285714239,
        7.510748299319857,
        13.327994816974751,
        25.762959260801836,
        14.989768078703491,
        10.628576258450266,
        3.9466589186849887,
        -5.9198278610083435,
        2.5004996411616958,
        11.59857768621896,
        15.460295756714913
    ]
} */
  /**
   * @Summary Aroon
   * @name MonkeySet.Indicator#aroon
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns aroon_down {array} from the aroon indicator function
   * @returns aroon_up {array} from the aroon indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').aroon({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "aroon_down": [
        0,
        16.666666666666668,
        0,
        83.33333333333334,
        66.66666666666667,
        50
    ],
    "aroon_up": [
        66.66666666666667,
        50,
        33.333333333333336,
        16.666666666666668,
        100,
        83.33333333333334
    ]
} */
  /**
   * @Summary Aroon Oscillator
   * @name MonkeySet.Indicator#aroonosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns aroonosc {array} from the aroonosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').aroonosc({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "aroonosc": [
        66.66666666666667,
        33.333333333333336,
        33.333333333333336,
        -66.66666666666667,
        33.333333333333336,
        33.333333333333336
    ]
} */
  /**
   * @Summary Vector Arcsine
   * @name MonkeySet.Indicator#asin
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns asin {array} from the asin simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').asin({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "asin": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Vector Arctangent
   * @name MonkeySet.Indicator#atan
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns atan {array} from the atan simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').atan({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "atan": [
        1.5705960576358207,
        1.5705973926864878,
        1.5705967817602302,
        1.5705976661674776,
        1.5705990640158134,
        1.5705981582710125,
        1.5705982673836234,
        1.570597894019581,
        1.5705971132924499,
        1.5705981127064528,
        1.5705988903127792,
        1.5705992890627498
    ]
} */
  /**
   * @Summary Average True Range
   * @name MonkeySet.Indicator#atr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns atr {array} from the atr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').atr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "atr": [
        22.054059120421396,
        19.297195060231893,
        17.319888851042343,
        18.139191740555333,
        19.34990080655353,
        20.90801292742845,
        18.798344106190378
    ]
} */
  /**
   * @Summary Average Price
   * @name MonkeySet.Indicator#avgprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns avgprice {array} from the avgprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').avgprice()
 * 
 * console.log(result)
 * // returns: 
{
    "avgprice": [
        4996.2331865678925,
        5023.6267779318505,
        5007.4,
        5033.852789647481,
        5063.987223281946,
        5050.71,
        5049.208533556597,
        5042.297002523732,
        5018.831613143055,
        5043.80437884024,
        5067.985434222795,
        5072.42
    ]
} */
  /**
   * @Summary Bollinger Bands
   * @name MonkeySet.Indicator#bbands
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.stddev {number} The option stddev
   * @param options.input1 {array} The input real
 * @returns bbands_lower {array} from the bbands overlay function
   * @returns bbands_middle {array} from the bbands overlay function
   * @returns bbands_upper {array} from the bbands overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').bbands({period: 6, stddev: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "bbands_lower": [
        4884.556984160491,
        4929.526162108772,
        4936.850277035478,
        4951.869398682568,
        4957.175000142494,
        4963.665393043114,
        4942.110263515317
    ],
    "bbands_middle": [
        5030.128333333333,
        5039.413333333334,
        5041.53,
        5042.919999999999,
        5044.8099999999995,
        5044.066666666666,
        5048.893333333333
    ],
    "bbands_upper": [
        5175.699682506175,
        5149.300504557896,
        5146.2097229645215,
        5133.97060131743,
        5132.444999857505,
        5124.4679402902175,
        5155.67640315135
    ]
} */
  /**
   * @Summary Balance of Power
   * @name MonkeySet.Indicator#bop
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns bop {array} from the bop indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').bop()
 * 
 * console.log(result)
 * // returns: 
{
    "bop": [
        -0.7801749367327483,
        0,
        0,
        0,
        0,
        -0.75,
        0,
        -0.7326498075922352,
        0,
        0,
        -0.4257397949203979,
        0
    ]
} */
  /**
   * @Summary Commodity Channel Index
   * @name MonkeySet.Indicator#cci
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns cci {array} from the cci indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cci({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "cci": [
        142.93917077101773,
        111.55195285723003
    ]
} */
  /**
   * @Summary Vector Ceiling
   * @name MonkeySet.Indicator#ceil
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns ceil {array} from the ceil simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ceil({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "ceil": [
        4994,
        5027,
        5012,
        5034,
        5070,
        5047,
        5049,
        5040,
        5020,
        5046,
        5065,
        5076
    ]
} */
  /**
   * @Summary Chande Momentum Oscillator
   * @name MonkeySet.Indicator#cmo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns cmo {array} from the cmo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cmo({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "cmo": [
        41.940826620492125,
        11.670648777797965,
        7.368793072981202,
        9.760716130142983,
        -4.443116158597362,
        33.1122798993826
    ]
} */
  /**
   * @Summary Vector Cosine
   * @name MonkeySet.Indicator#cos
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns cos {array} from the cos simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cos({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "cos": [
        -0.2778189005855557,
        0.9709194891238755,
        -0.8474051244131248,
        0.6382534579360335,
        0.4079918467117681,
        0.6879045424787675,
        -0.900183486756857,
        0.9303670359240273,
        0.8652936484879806,
        0.9401242465795412,
        0.7821780297319518,
        -0.07286723668874712
    ]
} */
  /**
   * @Summary Vector Hyperbolic Cosine
   * @name MonkeySet.Indicator#cosh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns cosh {array} from the cosh simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cosh({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "cosh": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Crossany
   * @name MonkeySet.Indicator#crossany
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.input1 {array} The input real
 * @param options.input2 {array} The input real
 * @returns crossany {array} from the crossany math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').crossany({input1: 'close', input2: 'open'})
 * 
 * console.log(result)
 * // returns: 
{
    "crossany": [
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        1,
        0,
        1,
        1
    ]
} */
  /**
   * @Summary Crossover
   * @name MonkeySet.Indicator#crossover
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.input1 {array} The input real
 * @param options.input2 {array} The input real
 * @returns crossover {array} from the crossover math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').crossover({input1: 'close', input2: 'open'})
 * 
 * console.log(result)
 * // returns: 
{
    "crossover": [
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        1
    ]
} */
  /**
   * @Summary Chaikins Volatility
   * @name MonkeySet.Indicator#cvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns cvi {array} from the cvi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cvi({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "cvi": [
        -16.862539667257956
    ]
} */
  /**
   * @Summary Linear Decay
   * @name MonkeySet.Indicator#decay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns decay {array} from the decay math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').decay({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "decay": [
        4993.28,
        5026.79,
        5026.623333333333,
        5033.71,
        5069.38,
        5069.213333333333,
        5069.046666666666,
        5068.879999999999,
        5068.713333333332,
        5068.546666666665,
        5068.379999999998,
        5075.17
    ]
} */
  /**
   * @Summary Double Exponential Moving Average
   * @name MonkeySet.Indicator#dema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns dema {array} from the dema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "dema": [
        5051.101008147879,
        5064.188989674187
    ]
} */
  /**
   * @Summary Directional Indicator
   * @name MonkeySet.Indicator#di
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns plus_di {array} from the di indicator function
   * @returns minus_di {array} from the di indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').di({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "plus_di": [
        61.84526740666586,
        58.78775413624824,
        54.43347657327394,
        43.00069616574742,
        57.93157839450292,
        67.64048589490227,
        62.61645767020394
    ],
    "minus_di": [
        24.12833780779224,
        23.902866456103286,
        27.68711729234327,
        42.61895860890248,
        33.090680204472314,
        25.3941604936795,
        23.507997534102355
    ]
} */
  /**
   * @Summary Vector Division
   * @name MonkeySet.Indicator#div
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @param options.input2 {array} The input real
 * @returns div {array} from the div simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').div({input1: 'close', input2: 'open'})
 * 
 * console.log(result)
 * // returns: 
{
    "div": [
        0.9991995645631223,
        1.0007963701448797,
        1.0009987216363054,
        1,
        1.0013827488256513,
        0.9988124009097009,
        1,
        0.9994050558355099,
        1.00019925319901,
        1,
        0.9992108772677415,
        1.00078877261066
    ]
} */
  /**
   * @Summary Directional Movement
   * @name MonkeySet.Indicator#dm
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns plus_dm {array} from the dm indicator function
   * @returns minus_dm {array} from the dm indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dm({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "plus_dm": [
        78.66550999703941,
        65.5545916641995,
        54.62882638683293,
        45.52402198902744,
        65.825837315521,
        83.45999182485977,
        69.54999318738315
    ],
    "minus_dm": [
        30.690594100758062,
        26.65423561686248,
        27.786480286249496,
        45.119883673106656,
        37.599903060922216,
        31.333252550768513,
        26.111043792307097
    ]
} */
  /**
   * @Summary Detrended Price Oscillator
   * @name MonkeySet.Indicator#dpo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns dpo {array} from the dpo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dpo({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "dpo": [
        -3.3383333333331393,
        -28.01333333333423,
        -7.819999999999709,
        26.460000000000946,
        1.4000000000005457,
        4.923333333334085,
        -9.403333333333649
    ]
} */
  /**
   * @Summary Directional Movement Index
   * @name MonkeySet.Indicator#dx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns dx {array} from the dx indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dx({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "dx": [
        43.87035940250509,
        42.187236509108544,
        32.56961259279083,
        0.44585271670350113,
        27.291014936768743,
        45.40923950500198,
        45.40923950500198
    ]
} */
  /**
   * @Summary Exponential Decay
   * @name MonkeySet.Indicator#edecay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns edecay {array} from the edecay math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').edecay({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "edecay": [
        4993.28,
        5026.79,
        5011.4,
        5033.71,
        5069.38,
        5046.21,
        5048.99,
        5039.49,
        5019.74,
        5045.05,
        5064.92,
        5075.17
    ]
} */
  /**
   * @Summary Exponential Moving Average
   * @name MonkeySet.Indicator#ema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns ema {array} from the ema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "ema": [
        4993.28,
        5002.854285714286,
        5005.2959183673465,
        5013.414227405247,
        5029.404448146605,
        5034.206034390432,
        5038.4300245645945,
        5038.732874688996,
        5033.306339063569,
        5036.661670759692,
        5044.735479114066,
        5053.431056510047
    ]
} */
  /**
   * @Summary Ease of Movement
   * @name MonkeySet.Indicator#emv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns emv {array} from the emv indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').emv()
 * 
 * console.log(result)
 * // returns: 
{
    "emv": [
        -21.00189073437716,
        17.101100454660436,
        33.48271385872385,
        -10.35799223536764,
        -27.208331043300714,
        -4.397617510471315,
        -8.204191557324219,
        20.25713500605869,
        42.92199626807782,
        85.63710544348177,
        -2.702922140771343
    ]
} */
  /**
   * @Summary Vector Exponential
   * @name MonkeySet.Indicator#exp
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns exp {array} from the exp simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').exp({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "exp": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Fisher Transform
   * @name MonkeySet.Indicator#fisher
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns fisher {array} from the fisher indicator function
   * @returns fisher_signal {array} from the fisher indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').fisher({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "fisher": [
        0.23365390533744956,
        0.4652571106733857,
        0.5836367320464756,
        0.18741109644807358,
        0.058750070411484584,
        0.3461515904058361,
        0.7707813424228024
    ],
    "fisher_signal": [
        0,
        0.23365390533744956,
        0.4652571106733857,
        0.5836367320464756,
        0.18741109644807358,
        0.058750070411484584,
        0.3461515904058361
    ]
} */
  /**
   * @Summary Vector Floor
   * @name MonkeySet.Indicator#floor
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns floor {array} from the floor simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').floor({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "floor": [
        4993,
        5026,
        5011,
        5033,
        5069,
        5046,
        5048,
        5039,
        5019,
        5045,
        5064,
        5075
    ]
} */
  /**
   * @Summary Forecast Oscillator
   * @name MonkeySet.Indicator#fosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns fosc {array} from the fosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').fosc({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "fosc": [
        -0.44783874266598783,
        -0.49674338739300883,
        -0.7590432970631917,
        0.35290036768705046,
        0.812767032845447,
        0.49072904618613683
    ]
} */
  /**
   * @Summary Hull Moving Average
   * @name MonkeySet.Indicator#hma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns hma {array} from the hma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').hma({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "hma": [
        5059.586666666667,
        5047.270158730161,
        5029.51888888889,
        5028.787301587302,
        5047.852857142858,
        5071.355396825398
    ]
} */
  /**
   * @Summary Kaufman Adaptive Moving Average
   * @name MonkeySet.Indicator#kama
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns kama {array} from the kama overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').kama({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "kama": [
        5046.21,
        5046.489470543863,
        5046.362299861177,
        5046.046653725554,
        5046.03150408424,
        5046.18885057599,
        5048.207219921528
    ]
} */
  /**
   * @Summary Klinger Volume Oscillator
   * @name MonkeySet.Indicator#kvo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @returns kvo {array} from the kvo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').kvo({'short period': 2, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "kvo": [
        0,
        -3196252.1551507656,
        12243545.34787855,
        903090.1264198311,
        -6206223.55933927,
        -5491851.367126494,
        -4577632.708387911,
        -4458484.016952004,
        852021.4873204008,
        -387397.3510014224,
        624440.7098992895
    ]
} */
  /**
   * @Summary Lag
   * @name MonkeySet.Indicator#lag
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns lag {array} from the lag math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').lag({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "lag": [
        4993.28,
        5026.79,
        5011.4,
        5033.71,
        5069.38,
        5046.21
    ]
} */
  /**
   * @Summary Linear Regression
   * @name MonkeySet.Indicator#linreg
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns linreg {array} from the linreg overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linreg({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "linreg": [
        5059.7519047619035,
        5057.349047619046,
        5053.181428571428,
        5031.724285714288,
        5029.770000000003,
        5048.493809523815,
        5065.500476190486
    ]
} */
  /**
   * @Summary Linear Regression Intercept
   * @name MonkeySet.Indicator#linregintercept
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns linregintercept {array} from the linregintercept indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linregintercept({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "linregintercept": [
        5000.504761904763,
        5021.477619047621,
        5029.878571428572,
        5054.11571428571,
        5059.849999999994,
        5039.639523809516,
        5032.286190476178
    ]
} */
  /**
   * @Summary Linear Regression Slope
   * @name MonkeySet.Indicator#linregslope
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns linregslope {array} from the linregslope indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linregslope({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "linregslope": [
        11.84942857142804,
        7.17428571428505,
        4.660571428571296,
        -4.47828571428434,
        -6.015999999998271,
        1.770857142859937,
        6.642857142861578
    ]
} */
  /**
   * @Summary Vector Natural Log
   * @name MonkeySet.Indicator#ln
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns ln {array} from the ln simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ln({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "ln": [
        8.515848287438182,
        8.522536888401858,
        8.519470596160279,
        8.523912565772035,
        8.530973801139003,
        8.526392745457509,
        8.526943502266738,
        8.525060165469123,
        8.521133418515795,
        8.526162843541373,
        8.530093621888748,
        8.532115300885904
    ]
} */
  /**
   * @Summary Vector Base-10 Log
   * @name MonkeySet.Indicator#log10
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns log10 {array} from the log10 simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').log10({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "log10": [
        3.6983859199596596,
        3.7012907424498365,
        3.6999590686494157,
        3.7018881915405837,
        3.704954847095878,
        3.702965319892113,
        3.7032045105352327,
        3.7023865877564623,
        3.700681223222802,
        3.7028654747585565,
        3.7045725901044064,
        3.705450594137051
    ]
} */
  /**
   * @Summary Moving Average Convergence/Divergence
   * @name MonkeySet.Indicator#macd
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @param options.signal period {number} The option signal period
   * @param options.input1 {array} The input real
 * @returns macd {array} from the macd indicator function
   * @returns macd_signal {array} from the macd indicator function
   * @returns macd_histogram {array} from the macd indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').macd({'short period': 2, 'long period': 4, 'signal period': 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "macd": [
        8.115982222222556,
        16.239663407407534,
        7.355156069135774,
        4.358212983044723,
        0.06330090368101082,
        -6.079228419839637,
        1.062726627414122,
        7.506390536221261,
        9.526752508323625
    ],
    "macd_signal": [
        8.115982222222556,
        10.437033989418264,
        9.556497440766124,
        8.07127330998858,
        5.783281193900704,
        2.3939927328320354,
        2.0136309884269172,
        3.5829908592253013,
        5.281208473253393
    ],
    "macd_histogram": [
        0,
        5.8026294179892695,
        -2.2013413716303507,
        -3.7130603269438573,
        -5.719980290219693,
        -8.473221152671673,
        -0.9509043610127952,
        3.9233996769959596,
        4.245544035070232
    ]
} */
  /**
   * @Summary Market Facilitation Index
   * @name MonkeySet.Indicator#marketfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns marketfi {array} from the marketfi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').marketfi()
 * 
 * console.log(result)
 * // returns: 
{
    "marketfi": [
        0.0001764907140521264,
        -0.00008308635879418242,
        -0.00010324534535568022,
        0.00011917431389189096,
        -0.00003686266829275546,
        0.0002752640814781681,
        0.00015802096886057796,
        0.00014089136376565267,
        -0.0000804468169870364,
        0.0001778373782898805,
        0.00032325512377161844,
        -0.00010319917440660474
    ]
} */
  /**
   * @Summary Mass Index
   * @name MonkeySet.Indicator#mass
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns mass {array} from the mass indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mass({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "mass": []
} */
  /**
   * @Summary Maximum In Period
   * @name MonkeySet.Indicator#max
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns max {array} from the max math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').max({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "max": [
        5069.38,
        5069.38,
        5069.38,
        5069.38,
        5069.38,
        5064.92,
        5075.17
    ]
} */
  /**
   * @Summary Mean Deviation Over Period
   * @name MonkeySet.Indicator#md
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns md {array} from the md math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').md({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "md": [
        19.63833333333347,
        15.446666666666715,
        13.330000000000078,
        11.940000000000055,
        10.13000000000026,
        9.634444444444853,
        14.133333333333363
    ]
} */
  /**
   * @Summary Median Price
   * @name MonkeySet.Indicator#medprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns medprice {array} from the medprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').medprice()
 * 
 * console.log(result)
 * // returns: 
{
    "medprice": [
        4997.186373135786,
        5022.463555863702,
        5005.9,
        5033.995579294962,
        5062.094446563893,
        5052.21,
        5049.4270671131935,
        5043.604005047466,
        5018.42322628611,
        5042.558757680479,
        5069.050868445593,
        5071.67
    ]
} */
  /**
   * @Summary Money Flow Index
   * @name MonkeySet.Indicator#mfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns mfi {array} from the mfi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mfi({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "mfi": [
        50.02154382614204,
        33.38211668909582,
        33.36907800322913,
        33.39607117238309,
        33.40530489466914,
        50.12765924497762
    ]
} */
  /**
   * @Summary Minimum In Period
   * @name MonkeySet.Indicator#min
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns min {array} from the min math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').min({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "min": [
        4993.28,
        5011.4,
        5011.4,
        5019.74,
        5019.74,
        5019.74,
        5019.74
    ]
} */
  /**
   * @Summary Momentum
   * @name MonkeySet.Indicator#mom
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns mom {array} from the mom indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mom({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "mom": [
        55.710000000000036,
        12.699999999999818,
        8.340000000000146,
        11.340000000000146,
        -4.460000000000036,
        28.960000000000036
    ]
} */
  /**
   * @Summary Mesa Sine Wave
   * @name MonkeySet.Indicator#msw
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns msw_sine {array} from the msw indicator function
   * @returns msw_lead {array} from the msw indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').msw({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "msw_sine": [
        0.16751443855533651,
        -0.6747155836207226,
        -0.9683113230608976,
        -0.045650453018441846,
        0.8124205025580571,
        0.9665296456334042
    ],
    "msw_lead": [
        -0.5786644891701045,
        -0.9989958016678102,
        -0.5081022584055594,
        0.6740898496453678,
        0.9867621955381742,
        0.5020279309390575
    ]
} */
  /**
   * @Summary Vector Multiplication
   * @name MonkeySet.Indicator#mul
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @param options.input2 {array} The input real
 * @returns mul {array} from the mul simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mul({input1: 'close', input2: 'open'})
 * 
 * console.log(result)
 * // returns: 
{
    "mul": [
        24952818.278399996,
        25248510.5441,
        25089072.959999997,
        25338236.3641,
        25663127.9244,
        25494512.6241,
        25492300.020099998,
        25411577.930099998,
        25192769.927599996,
        25452529.5025,
        25673674.2864,
        25737049.8489
    ]
} */
  /**
   * @Summary Normalized Average True Range
   * @name MonkeySet.Indicator#natr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns natr {array} from the natr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').natr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "natr": [
        0.43704203987589496,
        0.3821991142828941,
        0.34368336579777603,
        0.3613571965989341,
        0.38354230000799855,
        0.4128004574095633,
        0.37039831387304023
    ]
} */
  /**
   * @Summary Negative Volume Index
   * @name MonkeySet.Indicator#nvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns nvi {array} from the nvi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').nvi()
 * 
 * console.log(result)
 * // returns: 
{
    "nvi": [
        1000,
        1000,
        1000,
        1004.451849782496,
        1004.451849782496,
        1004.451849782496,
        1005.0052108480076,
        1005.0052108480076,
        1001.0665478257081,
        1001.0665478257081,
        1005.009262428199,
        1005.009262428199
    ]
} */
  /**
   * @Summary On Balance Volume
   * @name MonkeySet.Indicator#obv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns obv {array} from the obv indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').obv()
 * 
 * console.log(result)
 * // returns: 
{
    "obv": [
        0,
        29054,
        -3,
        29049,
        58108,
        29045,
        58102,
        29039,
        -22,
        29046,
        58111,
        87181
    ]
} */
  /**
   * @Summary Percentage Price Oscillator
   * @name MonkeySet.Indicator#ppo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @param options.input1 {array} The input real
 * @returns ppo {array} from the ppo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ppo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "ppo": [
        0.2551686208844199,
        0.1500560290902791,
        0.26584667080008695,
        0.5122467187997932,
        0.29775833520326966,
        0.2109501611936896,
        0.0783264169154549,
        -0.11761310483060543,
        0.04964597196747065,
        0.22991448678010468,
        0.305936611854995
    ]
} */
  /**
   * @Summary Parabolic SAR
   * @name MonkeySet.Indicator#psar
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.acceleration factor step {number} The option acceleration factor step
   * @param options.acceleration factor maximum {number} The option acceleration factor maximum
   * @returns psar {array} from the psar overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').psar({'acceleration factor step': 3.4, 'acceleration factor maximum': 5.351})
 * 
 * console.log(result)
 * // returns: 
{
    "psar": [
        4994.622845514179,
        4994.622845514179,
        5007.4,
        5007.4,
        5032.264453211368,
        5061.558850424934,
        5056.21,
        5051.722874759284,
        5045.651367900026,
        5019.59215876034,
        5039.974069224414
    ]
} */
  /**
   * @Summary Positive Volume Index
   * @name MonkeySet.Indicator#pvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns pvi {array} from the pvi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').pvi()
 * 
 * console.log(result)
 * // returns: 
{
    "pvi": [
        1000,
        1006.7110196103564,
        1003.6288772109716,
        1003.6288772109716,
        1010.7408169234532,
        1006.1211465242886,
        1006.1211465242886,
        1004.2280647610091,
        1004.2280647610091,
        1009.2914768738082,
        1009.2914768738082,
        1011.3340042262553
    ]
} */
  /**
   * @Summary Qstick
   * @name MonkeySet.Indicator#qstick
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns qstick {array} from the qstick indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').qstick({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "qstick": [
        1,
        1.6666666666666665,
        0.5,
        -0.16666666666666666,
        -0.16666666666666666,
        -2,
        -0.3333333333333333
    ]
} */
  /**
   * @Summary Rate of Change
   * @name MonkeySet.Indicator#roc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns roc {array} from the roc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').roc({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "roc": [
        0.011156995001281731,
        0.00252646321012014,
        0.0016642056112064784,
        0.0022528115445665615,
        -0.0008797920061230439,
        0.005738960526811218
    ]
} */
  /**
   * @Summary Rate of Change Ratio
   * @name MonkeySet.Indicator#rocr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns rocr {array} from the rocr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').rocr({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "rocr": [
        1.0111569950012818,
        1.00252646321012,
        1.0016642056112064,
        1.0022528115445666,
        0.9991202079938769,
        1.0057389605268112
    ]
} */
  /**
   * @Summary Vector Round
   * @name MonkeySet.Indicator#round
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns round {array} from the round simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').round({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "round": [
        4993,
        5027,
        5011,
        5034,
        5069,
        5046,
        5049,
        5039,
        5020,
        5045,
        5065,
        5075
    ]
} */
  /**
   * @Summary Relative Strength Index
   * @name MonkeySet.Indicator#rsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns rsi {array} from the rsi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').rsi({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "rsi": [
        70.97041331024606,
        65.36088192470353,
        54.59547112990095,
        63.771745732367165,
        69.56617577322254,
        72.30791540938479
    ]
} */
  /**
   * @Summary Vector Sine
   * @name MonkeySet.Indicator#sin
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns sin {array} from the sin simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sin({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sin": [
        -0.9606334672899093,
        0.23940623559012159,
        -0.5309468477337225,
        0.7698262943240481,
        -0.9129855710890075,
        0.7258011714216762,
        -0.4355108381777283,
        0.36662948390158123,
        -0.5012653008999917,
        -0.34083192484456326,
        0.6230549974156712,
        -0.9973416494949692
    ]
} */
  /**
   * @Summary Vector Hyperbolic Sine
   * @name MonkeySet.Indicator#sinh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns sinh {array} from the sinh simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sinh({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sinh": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Simple Moving Average
   * @name MonkeySet.Indicator#sma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns sma {array} from the sma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sma({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sma": [
        5030.128333333333,
        5039.413333333334,
        5041.53,
        5042.919999999999,
        5044.8099999999995,
        5044.066666666666,
        5048.893333333333
    ]
} */
  /**
   * @Summary Vector Square Root
   * @name MonkeySet.Indicator#sqrt
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns sqrt {array} from the sqrt simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sqrt({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sqrt": [
        70.66314456631547,
        70.89985895613616,
        70.79124239621734,
        70.94864339788323,
        71.19957865043865,
        71.03668066569553,
        71.0562453272054,
        70.98936540074153,
        70.85012350024522,
        71.02851540050658,
        71.16825134847701,
        71.24022739997396
    ]
} */
  /**
   * @Summary Standard Deviation Over Period
   * @name MonkeySet.Indicator#stddev
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns stddev {array} from the stddev math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stddev({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "stddev": [
        24.261891528807062,
        18.31452853742697,
        17.44662049408698,
        15.175100219571787,
        14.605833309584225,
        13.400212270591995,
        17.79717830300288
    ]
} */
  /**
   * @Summary Standard Error Over Period
   * @name MonkeySet.Indicator#stderr
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns stderr {array} from the stderr math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stderr({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "stderr": [
        9.904875740055164,
        7.476874966056195,
        7.122552991082807,
        6.195208722257975,
        5.962806479437908,
        5.4706137513220625,
        7.265667617281482
    ]
} */
  /**
   * @Summary Stochastic Oscillator
   * @name MonkeySet.Indicator#stoch
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.%k period {number} The option %k period
   * @param options.%k slowing period {number} The option %k slowing period
   * @param options.%d period {number} The option %d period
   * @returns stoch_k {array} from the stoch indicator function
   * @returns stoch_d {array} from the stoch indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stoch({'%k period': 6, '%k slowing period': 6, '%d period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "stoch_k": [],
    "stoch_d": []
} */
  /**
   * @Summary Stochastic RSI
   * @name MonkeySet.Indicator#stochrsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns stochrsi {array} from the stochrsi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stochrsi({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "stochrsi": [
        1
    ]
} */
  /**
   * @Summary Vector Subtraction
   * @name MonkeySet.Indicator#sub
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @param options.input2 {array} The input real
 * @returns sub {array} from the sub simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sub({input1: 'close', input2: 'open'})
 * 
 * console.log(result)
 * // returns: 
{
    "sub": [
        -4,
        4,
        5,
        0,
        7,
        -6,
        0,
        -3,
        1,
        0,
        -4,
        4
    ]
} */
  /**
   * @Summary Sum Over Period
   * @name MonkeySet.Indicator#sum
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns sum {array} from the sum math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sum({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sum": [
        30180.77,
        30236.480000000003,
        30249.18,
        30257.519999999997,
        30268.86,
        30264.399999999998,
        30293.36
    ]
} */
  /**
   * @Summary Vector Tangent
   * @name MonkeySet.Indicator#tan
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns tan {array} from the tan simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tan({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "tan": [
        3.4577685868930916,
        0.2465768153507286,
        0.6265560974763196,
        1.2061451211145668,
        -2.237754451338337,
        1.055089953042545,
        0.48380229651486756,
        0.39406972704858373,
        -0.5793007977995742,
        -0.3625392346645816,
        0.7965641755869681,
        13.687106782368057
    ]
} */
  /**
   * @Summary Vector Hyperbolic Tangent
   * @name MonkeySet.Indicator#tanh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns tanh {array} from the tanh simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tanh({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "tanh": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
} */
  /**
   * @Summary Triple Exponential Moving Average
   * @name MonkeySet.Indicator#tema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns tema {array} from the tema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "tema": []
} */
  /**
   * @Summary Vector Degree Conversion
   * @name MonkeySet.Indicator#todeg
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns degrees {array} from the todeg simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').todeg({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "degrees": [
        286093.86992708367,
        288013.8514985671,
        287132.06945186073,
        288410.3382927976,
        290454.07874802925,
        289126.53553671116,
        289285.8178037575,
        288741.50789838325,
        287609.91625299986,
        289060.072432476,
        290198.5395714009,
        290785.82131141
    ]
} */
  /**
   * @Summary Vector Radian Conversion
   * @name MonkeySet.Indicator#torad
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns radians {array} from the torad simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').torad({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "radians": [
        87.14917647398245,
        87.73403630632576,
        87.46543013444382,
        87.85481309056377,
        88.47737203475015,
        88.07297924706306,
        88.12149940026849,
        87.95569312132903,
        87.61099059406015,
        88.05273342773992,
        88.39953035011119,
        88.57842659844061
    ]
} */
  /**
   * @Summary True Range
   * @name MonkeySet.Indicator#tr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns tr {array} from the tr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tr()
 * 
 * console.log(result)
 * // returns: 
{
    "tr": [
        5.127055243214272,
        30.390551397905256,
        22.390000000000327,
        24.326705378555744,
        28.920042702852697,
        21.170000000000073,
        5.5128747592843865,
        7.433357805094602,
        22.235706188120275,
        25.403446136544517,
        28.69857353180305,
        8.25
    ]
} */
  /**
   * @Summary Triangular Moving Average
   * @name MonkeySet.Indicator#trima
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns trima {array} from the trima overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trima({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "trima": [
        5030.596666666666,
        5041.689166666666,
        5046.921666666666,
        5046.399166666665,
        5042.647499999999,
        5039.741666666666,
        5043.945833333332
    ]
} */
  /**
   * @Summary Trix
   * @name MonkeySet.Indicator#trix
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns trix {array} from the trix indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trix({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "trix": []
} */
  /**
   * @Summary Vector Truncate
   * @name MonkeySet.Indicator#trunc
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The input real
 * @returns trunc {array} from the trunc simple function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trunc({input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "trunc": [
        4993,
        5026,
        5011,
        5033,
        5069,
        5046,
        5048,
        5039,
        5019,
        5045,
        5064,
        5075
    ]
} */
  /**
   * @Summary Time Series Forecast
   * @name MonkeySet.Indicator#tsf
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns tsf {array} from the tsf overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tsf({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "tsf": [
        5071.601333333331,
        5064.523333333332,
        5057.842,
        5027.246000000005,
        5023.754000000004,
        5050.264666666675,
        5072.143333333347
    ]
} */
  /**
   * @Summary Typical Price
   * @name MonkeySet.Indicator#typprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns typprice {array} from the typprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').typprice()
 * 
 * console.log(result)
 * // returns: 
{
    "typprice": [
        4995.88424875719,
        5023.905703909135,
        5007.733333333333,
        5033.900386196641,
        5064.5229643759285,
        5050.21,
        5049.281378075462,
        5042.2326700316435,
        5018.862150857406,
        5043.389171786986,
        5067.673912297061,
        5072.836666666666
    ]
} */
  /**
   * @Summary Ultimate Oscillator
   * @name MonkeySet.Indicator#ultosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.medium period {number} The option medium period
   * @param options.long period {number} The option long period
   * @returns ultosc {array} from the ultosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ultosc({'short period': 2, 'medium period': 4, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "ultosc": [
        33.85543121694625,
        27.206782459220374,
        3.0327320292571733,
        52.919486654626105,
        68.7171716943809,
        79.45792254361183
    ]
} */
  /**
   * @Summary Variance Over Period
   * @name MonkeySet.Indicator#var
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns var {array} from the var math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').var({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "var": [
        588.6393805555999,
        335.42195554822683,
        304.38456666469574,
        230.2836666740477,
        213.33036666736007,
        179.56568889692426,
        316.7395555488765
    ]
} */
  /**
   * @Summary Vertical Horizontal Filter
   * @name MonkeySet.Indicator#vhf
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns vhf {array} from the vhf indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vhf({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "vhf": [
        0.43649777911616433,
        0.5328064693990089,
        0.43859339105849265,
        0.4272680323635755,
        0.45008965929468264,
        0.6337754402012379
    ]
} */
  /**
   * @Summary Variable Index Dynamic Average
   * @name MonkeySet.Indicator#vidya
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @param options.alpha {number} The option alpha
   * @param options.input1 {array} The input real
 * @returns vidya {array} from the vidya overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vidya({'short period': 2, 'long period': 5, alpha: 0.2, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "vidya": [
        5033.71,
        5038.722595655689,
        5039.6119660165,
        5039.748565560343,
        5039.728332246582,
        5037.260938707721,
        5039.131175769316,
        5042.630958048435,
        5044.3417142932885
    ]
} */
  /**
   * @Summary Annualized Historical Volatility
   * @name MonkeySet.Indicator#volatility
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns volatility {array} from the volatility indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').volatility({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "volatility": [
        0.07241387791853962,
        0.06578369278007616,
        0.06785761081538944,
        0.06945055092100334,
        0.05829425358408736,
        0.04965849822480278
    ]
} */
  /**
   * @Summary Volume Oscillator
   * @name MonkeySet.Indicator#vosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The option short period
   * @param options.long period {number} The option long period
   * @returns vosc {array} from the vosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vosc({'short period': 2, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "vosc": [
        0.01778185677001593,
        0.010324534535568022,
        0.005162000791506788,
        0.009750222247721346,
        0.009175837725314,
        0.012616342751628528,
        0.012042389210019268
    ]
} */
  /**
   * @Summary Volume Weighted Moving Average
   * @name MonkeySet.Indicator#vwma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @returns vwma {array} from the vwma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vwma({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "vwma": [
        5030.130771388419,
        5039.41429179429,
        5041.5306345819645,
        5042.920031028649,
        5044.809586972605,
        5044.067043646812,
        5048.894792756217
    ]
} */
  /**
   * @Summary Williams Accumulation/Distribution
   * @name MonkeySet.Indicator#wad
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns wad {array} from the wad indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wad()
 * 
 * console.log(result)
 * // returns: 
{
    "wad": [
        33.51000000000022,
        18.11999999999989,
        40.43000000000029,
        76.10000000000036,
        52.93000000000029,
        55.710000000000036,
        46.210000000000036,
        26.460000000000036,
        51.77000000000044,
        71.64000000000033,
        81.89000000000033
    ]
} */
  /**
   * @Summary Weighted Close Price
   * @name MonkeySet.Indicator#wcprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns wcprice {array} from the wcprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wcprice()
 * 
 * console.log(result)
 * // returns: 
{
    "wcprice": [
        4995.2331865678925,
        5024.626777931851,
        5008.65,
        5033.852789647481,
        5065.737223281947,
        5049.21,
        5049.208533556597,
        5041.547002523733,
        5019.081613143055,
        5043.804378840239,
        5066.985434222796,
        5073.42
    ]
} */
  /**
   * @Summary Wilders Smoothing
   * @name MonkeySet.Indicator#wilders
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns wilders {array} from the wilders overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wilders({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "wilders": [
        5030.128333333333,
        5033.271944444445,
        5034.308287037037,
        5031.880239197531,
        5034.075199331276,
        5039.21599944273,
        5045.208332868942
    ]
} */
  /**
   * @Summary Williams %R
   * @name MonkeySet.Indicator#willr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The option period
   * @returns willr {array} from the willr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').willr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "willr": [
        -22.93063418618736,
        -23.20738037516997,
        -40.74837307620105,
        -99.6477176689514,
        -39.33798393467709,
        -16.301990390352024,
        2.6246687011966516
    ]
} */
  /**
   * @Summary Weighted Moving Average
   * @name MonkeySet.Indicator#wma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns wma {array} from the wma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wma({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "wma": [
        5040.0028571428575,
        5045.391904761905,
        5045.4138095238095,
        5039.188095238096,
        5039.796666666668,
        5045.542380952383,
        5054.429047619049
    ]
} */
  /**
   * @Summary Zero-Lag Exponential Moving Average
   * @name MonkeySet.Indicator#zlema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The option period
   * @param options.input1 {array} The input real
 * @returns zlema {array} from the zlema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').zlema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "zlema": [
        5026.79,
        5027.57,
        5031.301428571428,
        5058.746734693877,
        5058.736239067055,
        5050.125885047896,
        5045.1670607484975,
        5029.545043391784,
        5035.563602422703,
        5056.859716016217,
        5070.696940011584
    ]
} */