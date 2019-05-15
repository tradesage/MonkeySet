
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
        3299.11,
        3297.83,
        3263.12,
        3289.75,
        3267.32,
        3255.79,
        3249.52,
        3255.28,
        3265.31,
        3226.55,
        3225.53,
        3189.08
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
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @param options.input4 {array} The input volume
 * @returns ad {array} from the ad indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ad()
 * 
 * console.log(result)
 * // returns: 
{
    "ad": [
        -60449.99923152918,
        -254880.37752132988,
        -364056.4815901026,
        -530349.6783420867,
        -578629.4681825531,
        -587655.2681825531,
        -706727.1829786357,
        -734129.9212444836,
        -811793.0169832399,
        -1038254.3599582821,
        -1069905.2594114626,
        -1181189.8935538854
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
        6595.22,
        6589.66,
        6531.24,
        6568.5,
        6528.64,
        6511.58,
        6509.04,
        6509.56,
        6525.62,
        6460.1,
        6455.06,
        6386.16
    ]
} */
  /**
   * @Summary Accumulation/Distribution Oscillator
   * @name MonkeySet.Indicator#adosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @param options.input4 {array} The input volume
 * @returns adosc {array} from the adosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adosc({'short period': 2, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "adosc": [
        -139572.75389320997,
        -151409.84185772826,
        -135827.36464432173,
        -135831.31327602325,
        -196230.6101262495,
        -185291.621524896,
        -189787.604574088
    ]
} */
  /**
   * @Summary Average Directional Movement Index
   * @name MonkeySet.Indicator#adx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns dx {array} from the adx indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adx({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "dx": [
        74.39136248565667,
        76.61858284882517
    ]
} */
  /**
   * @Summary Average Directional Movement Rating
   * @name MonkeySet.Indicator#adxr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
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
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
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
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.input1 {array} The input real
 * @returns apo {array} from the apo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').apo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "apo": [
        -0.48761904761931874,
        -13.733696145124668,
        -4.126819997840357,
        -9.598169486993356,
        -13.465029939269243,
        -14.209514820426648,
        -9.485913159668598,
        -2.733453114788972,
        -15.370781082238864,
        -15.84047229691987,
        -26.82078500576381
    ]
} */
  /**
   * @Summary Aroon
   * @name MonkeySet.Indicator#aroon
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns aroon_down {array} from the aroon indicator function
   * @returns aroon_up {array} from the aroon indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').aroon({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "aroon_down": [
        83.33333333333334,
        66.66666666666667,
        50,
        100,
        100,
        100
    ],
    "aroon_up": [
        0,
        0,
        16.666666666666668,
        0,
        33.333333333333336,
        16.666666666666668
    ]
} */
  /**
   * @Summary Aroon Oscillator
   * @name MonkeySet.Indicator#aroonosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns aroonosc {array} from the aroonosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').aroonosc({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "aroonosc": [
        -83.33333333333334,
        -66.66666666666667,
        -33.333333333333336,
        -100,
        -66.66666666666667,
        -83.33333333333334
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
        1.5704932147527475,
        1.5704930971046607,
        1.5704898716327527,
        1.5704923523381142,
        1.5704902655677209,
        1.5704891816877018,
        1.570488589046419,
        1.5704891335677258,
        1.5704900771681423,
        1.5704863982433535,
        1.5704863002355525,
        1.5704827567473516
    ]
} */
  /**
   * @Summary Average True Range
   * @name MonkeySet.Indicator#atr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns atr {array} from the atr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').atr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "atr": [
        16.173527323571534,
        15.03876213109883,
        13.536033025486587,
        12.574559487356018,
        16.05737778831702,
        14.711174388107514,
        17.521105957748805
    ]
} */
  /**
   * @Summary Average Price
   * @name MonkeySet.Indicator#avgprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.input1 {array} The input open
 * @param options.input2 {array} The input high
 * @param options.input3 {array} The input low
 * @param options.input4 {array} The input close
 * @returns avgprice {array} from the avgprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').avgprice()
 * 
 * console.log(result)
 * // returns: 
{
    "avgprice": [
        3296.304646585681,
        3293.4962935046847,
        3267.1074162836712,
        3280.833028274961,
        3263.2839594689635,
        3256.04,
        3257.6887760827312,
        3254.8272469183535,
        3261.3593580492548,
        3231.602209940149,
        3227.9298578914963,
        3195.182473757072
    ]
} */
  /**
   * @Summary Bollinger Bands
   * @name MonkeySet.Indicator#bbands
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.stddev The option stddev
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
        3174.8493310597682,
        3165.5237317989317,
        3184.99381823347,
        3185.2635670577324,
        3172.76779652236,
        3155.8678863831738,
        3084.011153108881
    ],
    "bbands_middle": [
        3278.82,
        3270.5550000000003,
        3263.463333333333,
        3263.8283333333334,
        3253.295,
        3246.33,
        3235.211666666666
    ],
    "bbands_upper": [
        3382.790668940232,
        3375.586268201069,
        3341.9328484331963,
        3342.3930996089343,
        3333.82220347764,
        3336.792113616826,
        3386.4121802244513
    ]
} */
  /**
   * @Summary Balance of Power
   * @name MonkeySet.Indicator#bop
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input open
 * @param options.input2 {array} The input high
 * @param options.input3 {array} The input low
 * @param options.input4 {array} The input close
 * @returns bop {array} from the bop indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').bop()
 * 
 * console.log(result)
 * // returns: 
{
    "bop": [
        0,
        0,
        -1.1045936876252669,
        0,
        0,
        0,
        -1.1634985368288229,
        0,
        0,
        -2.6597984622860866,
        -0.5012432469672957,
        -1.2027502134134742
    ]
} */
  /**
   * @Summary Commodity Channel Index
   * @name MonkeySet.Indicator#cci
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns cci {array} from the cci indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cci({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "cci": [
        -109.4234691012162,
        -143.03916399371113
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
        3300,
        3298,
        3264,
        3290,
        3268,
        3256,
        3250,
        3256,
        3266,
        3227,
        3226,
        3190
    ]
} */
  /**
   * @Summary Chande Momentum Oscillator
   * @name MonkeySet.Indicator#cmo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns cmo {array} from the cmo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cmo({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "cmo": [
        -48.21584832280016,
        -39.644088325724006,
        2.649727767695163,
        -66.68073433213758,
        -56.95788469401666,
        -67.87058703835595
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
        0.9057231101071459,
        0.6657586282100462,
        -0.544698238635007,
        -0.8763852583476587,
        0.9979756416060035,
        0.45358642419446205,
        0.4417964288431099,
        0.8309346253009234,
        -0.36679672505226907,
        -0.9909893069974447,
        -0.6327822680622256,
        -0.9346735616458903
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
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0
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
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0
    ]
} */
  /**
   * @Summary Chaikins Volatility
   * @name MonkeySet.Indicator#cvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns cvi {array} from the cvi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cvi({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "cvi": [
        -240.77470954032813
    ]
} */
  /**
   * @Summary Linear Decay
   * @name MonkeySet.Indicator#decay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns decay {array} from the decay math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').decay({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "decay": [
        3299.11,
        3298.9433333333336,
        3298.776666666667,
        3298.6100000000006,
        3298.443333333334,
        3298.2766666666676,
        3298.110000000001,
        3297.9433333333345,
        3297.776666666668,
        3297.6100000000015,
        3297.443333333335,
        3297.2766666666685
    ]
} */
  /**
   * @Summary Double Exponential Moving Average
   * @name MonkeySet.Indicator#dema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns dema {array} from the dema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "dema": [
        3232.1842069625463,
        3208.32909734461
    ]
} */
  /**
   * @Summary Directional Indicator
   * @name MonkeySet.Indicator#di
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns plus_di {array} from the di indicator function
   * @returns minus_di {array} from the di indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').di({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "plus_di": [
        3.1118735424477837,
        9.481860557461193,
        8.813805702124887,
        11.1924115685924,
        7.419862675716563,
        6.76726939674834,
        4.7739416437174995
    ],
    "minus_di": [
        56.90117473669803,
        51.312294996935066,
        48.88773581637795,
        44.081036676616606,
        60.650571201703436,
        63.58102197928716,
        73.19778081479484
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
        1.000910163799145,
        1.0018226943675705,
        0.9984700684185404,
        1.0033549370949295,
        1.0018397458697705,
        1,
        0.9969320636167288,
        1.0003072876335164,
        1.0015335964984924,
        0.9978351966105364,
        0.9987614296817184,
        0.9974977166664581
    ]
} */
  /**
   * @Summary Directional Movement
   * @name MonkeySet.Indicator#dm
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns plus_dm {array} from the dm indicator function
   * @returns minus_dm {array} from the dm indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dm({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "plus_dm": [
        3.21073662830986,
        9.040550025660195,
        7.533791688050163,
        8.841799964371706,
        7.368166636976422,
        6.140138864147019,
        5.116782386789183
    ],
    "minus_dm": [
        58.70890427548329,
        48.924086896236076,
        41.787853078293516,
        34.82321089857793,
        60.22800350530707,
        57.68889653850512,
        78.45448134417137
    ]
} */
  /**
   * @Summary Detrended Price Oscillator
   * @name MonkeySet.Indicator#dpo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns dpo {array} from the dpo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dpo({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "dpo": [
        19.009999999999764,
        -7.4350000000004,
        26.28666666666686,
        3.491666666666788,
        2.494999999999891,
        3.1900000000000546,
        20.068333333334067
    ]
} */
  /**
   * @Summary Directional Movement Index
   * @name MonkeySet.Indicator#dx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns dx {array} from the dx indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dx({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "dx": [
        89.62934351218702,
        68.8066707367053,
        69.45036312661209,
        59.501670607053036,
        78.19945531982913,
        80.76067161155346,
        87.75468466466765
    ]
} */
  /**
   * @Summary Exponential Decay
   * @name MonkeySet.Indicator#edecay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns edecay {array} from the edecay math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').edecay({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "edecay": [
        3299.11,
        3297.83,
        3263.12,
        3289.75,
        3267.32,
        3255.79,
        3249.52,
        3255.28,
        3265.31,
        3226.55,
        3225.53,
        3189.08
    ]
} */
  /**
   * @Summary Exponential Moving Average
   * @name MonkeySet.Indicator#ema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns ema {array} from the ema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "ema": [
        3299.11,
        3298.744285714286,
        3288.565918367347,
        3288.9042274052476,
        3282.7373052894627,
        3275.038075206759,
        3267.7471965762566,
        3264.185140411612,
        3264.506528865437,
        3253.661806332455,
        3245.624147380325,
        3229.468676700232
    ]
} */
  /**
   * @Summary Ease of Movement
   * @name MonkeySet.Indicator#emv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input volume
 * @returns emv {array} from the emv indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').emv()
 * 
 * console.log(result)
 * // returns: 
{
    "emv": [
        1.6537318390762605,
        -23.63695071534421,
        -13.085379304347482,
        31.870073909986658,
        -6.600987101339923,
        8.69808149689706,
        1.7707478749887298,
        -7.002364095984299,
        -15.605012626494805,
        -8.535492161588135,
        -45.77823276278301
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
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns fisher {array} from the fisher indicator function
   * @returns fisher_signal {array} from the fisher indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').fisher({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "fisher": [
        -0.34282825441539394,
        -0.6777228111271604,
        -1.1020187871293534,
        -1.2653104687765406,
        -1.5852506238416826,
        -1.9694268140878486,
        -2.3771921903160194
    ],
    "fisher_signal": [
        0,
        -0.34282825441539394,
        -0.6777228111271604,
        -1.1020187871293534,
        -1.2653104687765406,
        -1.5852506238416826,
        -1.9694268140878486
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
        3299,
        3297,
        3263,
        3289,
        3267,
        3255,
        3249,
        3255,
        3265,
        3226,
        3225,
        3189
    ]
} */
  /**
   * @Summary Forecast Oscillator
   * @name MonkeySet.Indicator#fosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns fosc {array} from the fosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').fosc({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "fosc": [
        -0.03538984219202442,
        0.40924283010989776,
        0.58152722610321,
        -0.6452506030691857,
        -0.33520072670214834,
        -1.1361270335017386
    ]
} */
  /**
   * @Summary Hull Moving Average
   * @name MonkeySet.Indicator#hma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns hma {array} from the hma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').hma({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "hma": [
        3249.761111111111,
        3246.8077777777776,
        3255.0096825396818,
        3245.758888888888,
        3228.868888888888,
        3201.2123809523787
    ]
} */
  /**
   * @Summary Kaufman Adaptive Moving Average
   * @name MonkeySet.Indicator#kama
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns kama {array} from the kama overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').kama({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "kama": [
        3255.79,
        3255.0004992343106,
        3255.026199437527,
        3255.0927938225504,
        3248.8936363084485,
        3245.014180535004,
        3232.4895378344704
    ]
} */
  /**
   * @Summary Klinger Volume Oscillator
   * @name MonkeySet.Indicator#kvo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @param options.input4 {array} The input volume
 * @returns kvo {array} from the kvo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').kvo({'short period': 2, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "kvo": [
        0,
        -4703584.399810487,
        9361990.121082377,
        1732895.6507663387,
        -3374993.9304089863,
        -236131.97354649345,
        -2250632.5813623094,
        1166429.9088940478,
        -3558929.86456267,
        -4413492.398663321,
        469709.8015025882
    ]
} */
  /**
   * @Summary Lag
   * @name MonkeySet.Indicator#lag
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns lag {array} from the lag math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').lag({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "lag": [
        3299.11,
        3297.83,
        3263.12,
        3289.75,
        3267.32,
        3255.79
    ]
} */
  /**
   * @Summary Linear Regression
   * @name MonkeySet.Indicator#linreg
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns linreg {array} from the linreg overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linreg({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "linreg": [
        3258.7128571428557,
        3250.1285714285705,
        3251.2190476190444,
        3252.071904761902,
        3241.1857142857116,
        3231.317142857141,
        3204.4823809523787
    ]
} */
  /**
   * @Summary Linear Regression Intercept
   * @name MonkeySet.Indicator#linregintercept
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns linregintercept {array} from the linregintercept indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linregintercept({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "linregintercept": [
        3298.927142857144,
        3290.981428571429,
        3275.707619047622,
        3275.5847619047654,
        3265.40428571429,
        3261.34285714286,
        3265.940952380956
    ]
} */
  /**
   * @Summary Linear Regression Slope
   * @name MonkeySet.Indicator#linregslope
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns linregslope {array} from the linregslope indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linregslope({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "linregslope": [
        -8.042857142857699,
        -8.17057142857174,
        -4.897714285715484,
        -4.702571428572715,
        -4.843714285715639,
        -6.005142857143767,
        -12.29171428571544
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
        8.101408014110106,
        8.10101995539923,
        8.090439071890133,
        8.09856685303025,
        8.09172535599322,
        8.088190228727958,
        8.086262572108508,
        8.088033572448408,
        8.091109983604632,
        8.079168733924039,
        8.078852556812627,
        8.067487752929333
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
        3.518396796174801,
        3.518228264418013,
        3.51363304509635,
        3.5171628955956207,
        3.514191671184481,
        3.5126563849203523,
        3.5118192142875206,
        3.5125883499625883,
        3.513924418351802,
        3.5087383995084913,
        3.508601085533701,
        3.5036654139192733
    ]
} */
  /**
   * @Summary Moving Average Convergence/Divergence
   * @name MonkeySet.Indicator#macd
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.signal period The option signal period
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
        -1.7666725925923856,
        -5.715312197530693,
        -8.055623532510253,
        -8.047519524170184,
        -4.363893516057033,
        0.21120328984761727,
        -9.266098226264148,
        -8.962599002482875,
        -16.231872757064593
    ],
    "macd_signal": [
        -1.7666725925923856,
        -2.8948553368604735,
        -4.369360535617553,
        -5.420263103775448,
        -5.118443221570186,
        -3.595687075450814,
        -5.215804547111767,
        -6.28631724864637,
        -9.127904536765861
    ],
    "macd_histogram": [
        0,
        -2.8204568606702196,
        -3.6862629968927,
        -2.627256420394736,
        0.7545497055131536,
        3.806890365298431,
        -4.050293679152381,
        -2.6762817538365056,
        -7.103968220298732
    ]
} */
  /**
   * @Summary Market Facilitation Index
   * @name MonkeySet.Indicator#marketfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input volume
 * @returns marketfi {array} from the marketfi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').marketfi()
 * 
 * console.log(result)
 * // returns: 
{
    "marketfi": [
        -0.000136003536175223,
        -0.000058297608022784784,
        0.00010029360571236249,
        -0.0001483397239452095,
        -0.00021011197765494766,
        0.00011079350306898004,
        0.00019043201219831328,
        -0.000029596032291347814,
        -0.00013909525109991383,
        0.000058327128096428,
        0.0001769122414440895,
        0.0001474587678231066
    ]
} */
  /**
   * @Summary Mass Index
   * @name MonkeySet.Indicator#mass
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
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
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns max {array} from the max math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').max({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "max": [
        3299.11,
        3297.83,
        3289.75,
        3289.75,
        3267.32,
        3265.31,
        3265.31
    ]
} */
  /**
   * @Summary Mean Deviation Over Period
   * @name MonkeySet.Indicator#md
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns md {array} from the md math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').md({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "md": [
        16.74333333333334,
        15.490000000000084,
        10.047777777777734,
        10.298333333333327,
        10.173333333333327,
        13.526666666666642,
        21.491666666666635
    ]
} */
  /**
   * @Summary Median Price
   * @name MonkeySet.Indicator#medprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns medprice {array} from the medprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').medprice()
 * 
 * console.log(result)
 * // returns: 
{
    "medprice": [
        3294.9992931713614,
        3292.1625870093694,
        3268.5948325673426,
        3277.4160565499224,
        3262.2479189379274,
        3256.29,
        3260.857552165462,
        3254.8744938367063,
        3259.9087160985105,
        3233.1544198802976,
        3228.329715782992,
        3197.2849475141434
    ]
} */
  /**
   * @Summary Money Flow Index
   * @name MonkeySet.Indicator#mfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @param options.input4 {array} The input volume
 * @returns mfi {array} from the mfi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mfi({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "mfi": [
        33.32956307856083,
        33.393912979540325,
        50.06466232658233,
        33.388546422123696,
        33.45323530614687,
        33.56196535349596
    ]
} */
  /**
   * @Summary Minimum In Period
   * @name MonkeySet.Indicator#min
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns min {array} from the min math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').min({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "min": [
        3255.79,
        3249.52,
        3249.52,
        3249.52,
        3226.55,
        3225.53,
        3189.08
    ]
} */
  /**
   * @Summary Momentum
   * @name MonkeySet.Indicator#mom
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns mom {array} from the mom indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mom({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "mom": [
        -49.590000000000146,
        -42.54999999999973,
        2.1900000000000546,
        -63.19999999999982,
        -41.789999999999964,
        -66.71000000000004
    ]
} */
  /**
   * @Summary Mesa Sine Wave
   * @name MonkeySet.Indicator#msw
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
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
        -0.6580667500887017,
        -0.5688798531237601,
        0.46252198687437823,
        -0.9843524510928443,
        -0.9693989079640599,
        -0.8674942167029714
    ],
    "msw_lead": [
        0.06709936109609368,
        0.17928039807990315,
        0.9539788252114986,
        -0.5714424406213365,
        -0.5118803085328906,
        -0.26166272003844215
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
        10874229.462100001,
        10855895.728899999,
        10664267.734399999,
        10786267.8125,
        10655776.0624,
        10600168.5241,
        10591875.430399999,
        10593592.5984,
        10645922.846099999,
        10433210.752500001,
        10416945.9009,
        10195743.8864
    ]
} */
  /**
   * @Summary Normalized Average True Range
   * @name MonkeySet.Indicator#natr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns natr {array} from the natr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').natr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "natr": [
        0.4967619939729385,
        0.4627994944206784,
        0.41581777989870566,
        0.38509542699945853,
        0.49766399988585386,
        0.4560854925580451,
        0.5494094208282265
    ]
} */
  /**
   * @Summary Negative Volume Index
   * @name MonkeySet.Indicator#nvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input close
 * @param options.input2 {array} The input volume
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
        1008.1609012233691,
        1001.2871117212976,
        1001.2871117212976,
        1001.2871117212976,
        1001.2871117212976,
        1004.3722256686583,
        992.4500904144506,
        992.1363500130241,
        980.9247444914586
    ]
} */
  /**
   * @Summary On Balance Volume
   * @name MonkeySet.Indicator#obv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input close
 * @param options.input2 {array} The input volume
 * @returns obv {array} from the obv indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').obv()
 * 
 * console.log(result)
 * // returns: 
{
    "obv": [
        0,
        -45117,
        -90250,
        -45121,
        -90246,
        -135375,
        -180508,
        -135374,
        -90247,
        -135368,
        -180476,
        -225583
    ]
} */
  /**
   * @Summary Percentage Price Oscillator
   * @name MonkeySet.Indicator#ppo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.input1 {array} The input real
 * @returns ppo {array} from the ppo indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ppo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "ppo": [
        -0.014781959599931017,
        -0.4176196094601305,
        -0.12547704987737437,
        -0.29238311184778204,
        -0.4111411724097031,
        -0.43484131316261243,
        -0.2906058557227679,
        -0.08373250568253482,
        -0.4724148358727206,
        -0.4880562744674351,
        -0.830501475343877
    ]
} */
  /**
   * @Summary Parabolic SAR
   * @name MonkeySet.Indicator#psar
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.acceleration factor step The option acceleration factor step
   * @param options.acceleration factor maximum The option acceleration factor maximum
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @returns psar {array} from the psar overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').psar({'acceleration factor step': 3.4, 'acceleration factor maximum': 5.351})
 * 
 * console.log(result)
 * // returns: 
{
    "psar": [
        3312.7931118215424,
        3291.931393404089,
        3290.8474804187877,
        3274.0688448489605,
        3274.0688448489605,
        3253.79,
        3253.79,
        3255.5423874974254,
        3265.1549361687353,
        3256.7702404003176,
        3234.470309053717
    ]
} */
  /**
   * @Summary Positive Volume Index
   * @name MonkeySet.Indicator#pvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input close
 * @param options.input2 {array} The input volume
 * @returns pvi {array} from the pvi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').pvi()
 * 
 * console.log(result)
 * // returns: 
{
    "pvi": [
        1000,
        999.6120165741669,
        989.0909972689603,
        989.0909972689603,
        989.0909972689603,
        985.6006078370983,
        983.7025383021656,
        985.4462194060274,
        985.4462194060274,
        985.4462194060274,
        985.4462194060274,
        985.4462194060274
    ]
} */
  /**
   * @Summary Qstick
   * @name MonkeySet.Indicator#qstick
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input open
 * @param options.input2 {array} The input close
 * @returns qstick {array} from the qstick indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').qstick({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "qstick": [
        3.5,
        1.3333333333333333,
        0.5,
        2.1666666666666665,
        -0.8333333333333333,
        -2.5,
        -3.833333333333333
    ]
} */
  /**
   * @Summary Rate of Change
   * @name MonkeySet.Indicator#roc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns roc {array} from the roc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').roc({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "roc": [
        -0.015031326630515545,
        -0.012902423714988258,
        0.0006711368261050941,
        -0.019211186260354073,
        -0.012790299083040522,
        -0.02048965074528764
    ]
} */
  /**
   * @Summary Rate of Change Ratio
   * @name MonkeySet.Indicator#rocr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns rocr {array} from the rocr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').rocr({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "rocr": [
        0.9849686733694845,
        0.9870975762850117,
        1.0006711368261052,
        0.9807888137396459,
        0.9872097009169595,
        0.9795103492547124
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
        3299,
        3298,
        3263,
        3290,
        3267,
        3256,
        3250,
        3255,
        3265,
        3227,
        3226,
        3189
    ]
} */
  /**
   * @Summary Relative Strength Index
   * @name MonkeySet.Indicator#rsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns rsi {array} from the rsi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').rsi({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "rsi": [
        25.892075838599915,
        30.55884550208649,
        38.63380921249666,
        25.099161806039987,
        24.82452545493181,
        16.896386613010453
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
        0.42386984773375735,
        -0.7461671722636137,
        0.8386321176939987,
        -0.4816107130773855,
        0.06359731724754938,
        0.891212295576358,
        0.8971153300782876,
        0.5563700643241096,
        -0.9303011138824516,
        -0.1339410072260336,
        0.7743297755000939,
        -0.35550714923920446
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
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns sma {array} from the sma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sma({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sma": [
        3278.82,
        3270.5550000000003,
        3263.463333333333,
        3263.8283333333334,
        3253.295,
        3246.33,
        3235.211666666666
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
        57.43787948732091,
        57.42673593370948,
        57.12372536871173,
        57.35634228226204,
        57.160475855262085,
        57.05953031702943,
        57.00456122101108,
        57.0550611251973,
        57.1428910714185,
        56.802728807690215,
        56.79374965610212,
        56.47193993480302
    ]
} */
  /**
   * @Summary Standard Deviation Over Period
   * @name MonkeySet.Indicator#stddev
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns stddev {array} from the stddev math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stddev({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "stddev": [
        17.32844482337198,
        17.505211366844755,
        13.078252516643849,
        13.094127712600153,
        13.42120057960662,
        15.077018936137728,
        25.200085592964207
    ]
} */
  /**
   * @Summary Standard Error Over Period
   * @name MonkeySet.Indicator#stderr
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns stderr {array} from the stderr math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stderr({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "stderr": [
        7.074307975538989,
        7.1464726147229545,
        5.3391742321745665,
        5.345655253784506,
        5.479182192597011,
        6.155167205969519,
        10.287891862870662
    ]
} */
  /**
   * @Summary Stochastic Oscillator
   * @name MonkeySet.Indicator#stoch
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.%k period The option %k period
   * @param options.%k slowing period The option %k slowing period
   * @param options.%d period The option %d period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
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
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns stochrsi {array} from the stochrsi indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stochrsi({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "stochrsi": [
        0
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
        3,
        6,
        -5,
        11,
        6,
        0,
        -10,
        1,
        5,
        -7,
        -4,
        -8
    ]
} */
  /**
   * @Summary Sum Over Period
   * @name MonkeySet.Indicator#sum
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns sum {array} from the sum math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sum({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "sum": [
        19672.920000000002,
        19623.33,
        19580.78,
        19582.97,
        19519.77,
        19477.98,
        19411.269999999997
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
        0.46799054038006616,
        -1.1207773217596195,
        -1.5396270048450662,
        0.5495422344111731,
        0.06372632216273803,
        1.9648125429659606,
        2.030607925979569,
        0.6695714047571671,
        2.536285223784052,
        0.1351588824221077,
        -1.223690698336618,
        0.38035434383442157
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
   * @param options.period The option period
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
        189025.07914940504,
        188951.74055162826,
        186963.0040447292,
        188488.79065316258,
        187203.64631868416,
        186543.0259808983,
        186183.78144335127,
        186513.80513334664,
        187088.48180186283,
        184867.69738793577,
        184809.25569283243,
        182720.82452958057
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
        57.58033188547013,
        57.5579916710446,
        56.95218788767736,
        57.41696906748346,
        57.02549171626113,
        56.82425525350618,
        56.71482310940614,
        56.815354074321014,
        56.990410598296044,
        56.313920980223045,
        56.2961186218527,
        55.659946109500765
    ]
} */
  /**
   * @Summary True Range
   * @name MonkeySet.Indicator#tr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns tr {array} from the tr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tr()
 * 
 * console.log(result)
 * // returns: 
{
    "tr": [
        -6.1357995345451855,
        8.262519581212473,
        31.49844308596539,
        17.64326825088392,
        32.242732557912404,
        13.5300000000002,
        9.364936168735312,
        6.02238749742537,
        7.767191796703173,
        33.47146929312203,
        7.98015738705999,
        31.570763805955266
    ]
} */
  /**
   * @Summary Triangular Moving Average
   * @name MonkeySet.Indicator#trima
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns trima {array} from the trima overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trima({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "trima": [
        3278.6508333333336,
        3271.365,
        3263.855833333332,
        3259.682499999999,
        3254.2058333333325,
        3249.6024999999995,
        3239.6499999999996
    ]
} */
  /**
   * @Summary Trix
   * @name MonkeySet.Indicator#trix
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
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
        3299,
        3297,
        3263,
        3289,
        3267,
        3255,
        3249,
        3255,
        3265,
        3226,
        3225,
        3189
    ]
} */
  /**
   * @Summary Time Series Forecast
   * @name MonkeySet.Indicator#tsf
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns tsf {array} from the tsf overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tsf({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "tsf": [
        3250.6699999999983,
        3241.9579999999987,
        3246.321333333329,
        3247.369333333329,
        3236.341999999996,
        3225.311999999997,
        3192.190666666663
    ]
} */
  /**
   * @Summary Typical Price
   * @name MonkeySet.Indicator#typprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns typprice {array} from the typprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').typprice()
 * 
 * console.log(result)
 * // returns: 
{
    "typprice": [
        3296.369528780908,
        3294.0517246729128,
        3266.7698883782286,
        3281.5273710332813,
        3263.938612625285,
        3256.123333333333,
        3257.078368110308,
        3255.0096625578044,
        3261.7091440656736,
        3230.9529465868654,
        3227.3964771886613,
        3194.549965009429
    ]
} */
  /**
   * @Summary Ultimate Oscillator
   * @name MonkeySet.Indicator#ultosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period The option short period
   * @param options.medium period The option medium period
   * @param options.long period The option long period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns ultosc {array} from the ultosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ultosc({'short period': 2, 'medium period': 4, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "ultosc": [
        4.428214045473757,
        2.8455847998016717,
        166.15357513366618,
        11.315383460707967,
        2.8676289550663414,
        -4.838520463816179
    ]
} */
  /**
   * @Summary Variance Over Period
   * @name MonkeySet.Indicator#var
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns var {array} from the var math function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').var({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "var": [
        300.27499999664724,
        306.43242499791086,
        171.04068888910115,
        171.4561805538833,
        180.12862499803305,
        227.31650000065565,
        635.0443138927221
    ]
} */
  /**
   * @Summary Vertical Horizontal Filter
   * @name MonkeySet.Indicator#vhf
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns vhf {array} from the vhf indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vhf({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "vhf": [
        0.4697131745260066,
        0.37482530513369866,
        0.4867513611615242,
        0.4301540409369075,
        0.542183453727679,
        0.7755621121172047
    ]
} */
  /**
   * @Summary Variable Index Dynamic Average
   * @name MonkeySet.Indicator#vidya
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.alpha The option alpha
   * @param options.input1 {array} The input real
 * @returns vidya {array} from the vidya overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vidya({'short period': 2, 'long period': 5, alpha: 0.2, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "vidya": [
        3289.75,
        3286.4543230784566,
        3284.2680449689547,
        3282.684012701954,
        3281.582153166155,
        3279.1350838782546,
        3263.4541427104764,
        3263.2101268150095,
        3253.0903164106066
    ]
} */
  /**
   * @Summary Annualized Historical Volatility
   * @name MonkeySet.Indicator#volatility
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns volatility {array} from the volatility indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').volatility({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "volatility": [
        0.09223446737637853,
        0.09515584958010731,
        0.07717061606672354,
        0.08046921270926853,
        0.07737554283814757,
        0.09493840165971887
    ]
} */
  /**
   * @Summary Volume Oscillator
   * @name MonkeySet.Indicator#vosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period The option short period
   * @param options.long period The option long period
   * @param options.input1 {array} The input volume
 * @returns vosc {array} from the vosc indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vosc({'short period': 2, 'long period': 6})
 * 
 * console.log(result)
 * // returns: 
{
    "vosc": [
        0.005170859987890789,
        0.007386451770168541,
        0.006647389237876824,
        0.0022158455112509558,
        -0.00923296241445123,
        -0.02400720954968787,
        -0.03139659439293224
    ]
} */
  /**
   * @Summary Volume Weighted Moving Average
   * @name MonkeySet.Indicator#vwma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input close
 * @param options.input2 {array} The input volume
 * @returns vwma {array} from the vwma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vwma({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "vwma": [
        3278.818046227488,
        3270.553418412947,
        3263.4629142154417,
        3263.8279015943003,
        3253.295475146712,
        3246.332269937064,
        3235.2167820337604
    ]
} */
  /**
   * @Summary Williams Accumulation/Distribution
   * @name MonkeySet.Indicator#wad
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns wad {array} from the wad indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wad()
 * 
 * console.log(result)
 * // returns: 
{
    "wad": [
        -1.2800000000002,
        -35.99000000000024,
        -9.360000000000127,
        -31.789999999999964,
        -43.320000000000164,
        -58.95493616873546,
        -53.19493616873524,
        -43.164936168735494,
        -81.92493616873526,
        -88.71473064525708,
        -125.16473064525735
    ]
} */
  /**
   * @Summary Weighted Close Price
   * @name MonkeySet.Indicator#wcprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns wcprice {array} from the wcprice overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wcprice()
 * 
 * console.log(result)
 * // returns: 
{
    "wcprice": [
        3297.054646585681,
        3294.9962935046847,
        3265.8574162836712,
        3283.583028274961,
        3264.7839594689635,
        3256.04,
        3255.1887760827312,
        3255.0772469183535,
        3262.609358049255,
        3229.852209940149,
        3226.9298578914963,
        3193.182473757072
    ]
} */
  /**
   * @Summary Wilders Smoothing
   * @name MonkeySet.Indicator#wilders
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns wilders {array} from the wilders overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wilders({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "wilders": [
        3278.82,
        3273.936666666667,
        3270.8272222222226,
        3269.9076851851855,
        3262.681404320988,
        3256.4895036008234,
        3245.254586334019
    ]
} */
  /**
   * @Summary Williams %R
   * @name MonkeySet.Indicator#willr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period The option period
   * @param options.input1 {array} The input high
 * @param options.input2 {array} The input low
 * @param options.input3 {array} The input close
 * @returns willr {array} from the willr indicator function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').willr({period: 6})
 * 
 * console.log(result)
 * // returns: 
{
    "willr": [
        -94.75635308125477,
        -111.52263983342792,
        -92.6524414428043,
        -43.19203048397252,
        -115.87365333553876,
        -97.08353745435947,
        -106.85327371706374
    ]
} */
  /**
   * @Summary Weighted Moving Average
   * @name MonkeySet.Indicator#wma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns wma {array} from the wma overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wma({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "wma": [
        3272.117619047619,
        3263.7461904761903,
        3259.3819047619045,
        3259.9095238095233,
        3249.258571428571,
        3241.325714285714,
        3224.968571428571
    ]
} */
  /**
   * @Summary Zero-Lag Exponential Moving Average
   * @name MonkeySet.Indicator#zlema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period The option period
   * @param options.input1 {array} The input real
 * @returns zlema {array} from the zlema overlay function
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').zlema({period: 6, input1: 'close'})
 * 
 * console.log(result)
 * // returns: 
{
    "zlema": [
        3297.83,
        3277.6299999999997,
        3278.7842857142855,
        3276.708775510204,
        3261.0291253644314,
        3252.6550895460223,
        3253.2593496757304,
        3261.2138211969504,
        3243.101300854965,
        3226.7152148964037,
        3205.2565820688596
    ]
} */