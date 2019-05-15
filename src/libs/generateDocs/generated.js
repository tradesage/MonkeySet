
  /**
   * @Summary Vector Absolute Value
   * @name MonkeySet.Indicator#abs
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns abs - {array} the result from abs
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').abs({input1: 'close'})
 * 
 * result = {
    "abs": [
        6597.95,
        6579.42,
        6609.38,
        6629.07,
        6643.27,
        6662.75,
        6680.71,
        6683.74,
        6685.85,
        6713.42,
        6697.6,
        6670.95
    ]
} */
  /**
   * @Summary Vector Arccosine
   * @name MonkeySet.Indicator#acos
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns acos - {array} the result from acos
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').acos({input1: 'close'})
 * 
 * result = {
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
   * @returns ad - {array} the result from ad
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ad()
 * 
 * result = {
    "ad": [
        -6559.637818006227,
        -4941.008043783446,
        -20386.486928099752,
        -614560.2550563592,
        -690887.5818803172,
        -724647.8246957514,
        -738770.478265384,
        -775804.5874205882,
        -809602.5864129883,
        -828951.0864129883,
        -898420.3238835532,
        -923401.0525921236
    ]
} */
  /**
   * @Summary Vector Addition
   * @name MonkeySet.Indicator#add
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns add - {array} the result from add
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').add({input1: 'close', input2: 'open'})
 * 
 * result = {
    "add": [
        13196.9,
        13159.84,
        13219.76,
        13265.14,
        13280.54,
        13321.5,
        13358.42,
        13375.48,
        13363.7,
        13429.84,
        13402.2,
        13339.9
    ]
} */
  /**
   * @Summary Accumulation/Distribution Oscillator
   * @name MonkeySet.Indicator#adosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @returns adosc - {array} the result from adosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adosc({'short period': 2, 'long period': 6})
 * 
 * result = {
    "adosc": [
        -241387.54038194288,
        -193771.03996280383,
        -159633.2405006478,
        -133974.2896733064,
        -109716.96049092861,
        -109507.4086761151,
        -98115.42943278351
    ]
} */
  /**
   * @Summary Average Directional Movement Index
   * @name MonkeySet.Indicator#adx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns dx - {array} the result from adx
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adx({period: 6})
 * 
 * result = {
    "dx": [
        64.99698440087816,
        56.74970757700032
    ]
} */
  /**
   * @Summary Average Directional Movement Rating
   * @name MonkeySet.Indicator#adxr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns dx - {array} the result from adxr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').adxr({period: 6})
 * 
 * result = {
    "dx": []
} */
  /**
   * @Summary Awesome Oscillator
   * @name MonkeySet.Indicator#ao
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns ao - {array} the result from ao
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ao()
 * 
 * result = {
    "ao": []
} */
  /**
   * @Summary Absolute Price Oscillator
   * @name MonkeySet.Indicator#apo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.input1 {array} The first input
 * @returns apo - {array} the result from apo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').apo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * result = {
    "apo": [
        -7.059047619048215,
        4.018140589569157,
        13.391158622179319,
        18.481656511433357,
        23.59431667336412,
        27.1593659169921,
        23.98926032414238,
        19.468899883151607,
        25.187118848029968,
        15.724386440042508,
        0.32385273527597747
    ]
} */
  /**
   * @Summary Aroon
   * @name MonkeySet.Indicator#aroon
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns aroon_down - {array} the result from aroon
   * @returns aroon_up - {array} the result from aroon
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').aroon({period: 6})
 * 
 * result = {
    "aroon_down": [
        16.666666666666668,
        0,
        0,
        0,
        0,
        0
    ],
    "aroon_up": [
        100,
        100,
        83.33333333333334,
        100,
        83.33333333333334,
        66.66666666666667
    ]
} */
  /**
   * @Summary Aroon Oscillator
   * @name MonkeySet.Indicator#aroonosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns aroonosc - {array} the result from aroonosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').aroonosc({period: 6})
 * 
 * result = {
    "aroonosc": [
        83.33333333333334,
        100,
        83.33333333333334,
        100,
        83.33333333333334,
        66.66666666666667
    ]
} */
  /**
   * @Summary Vector Arcsine
   * @name MonkeySet.Indicator#asin
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns asin - {array} the result from asin
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').asin({input1: 'close'})
 * 
 * result = {
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
   * @param options.input1 {array} The first input
 * @returns atan - {array} the result from atan
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').atan({input1: 'close'})
 * 
 * result = {
    "atan": [
        1.5706447645683954,
        1.5706443377149626,
        1.5706450266741032,
        1.5706454760733903,
        1.5706457985170383,
        1.5706462386192197,
        1.5706466421068124,
        1.570646709964718,
        1.5706467571825746,
        1.5706473714200497,
        1.5706470195814815,
        1.5706464231091382
    ]
} */
  /**
   * @Summary Average True Range
   * @name MonkeySet.Indicator#atr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns atr - {array} the result from atr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').atr({period: 6})
 * 
 * result = {
    "atr": [
        18.34578212290459,
        18.254110425484416,
        17.771378392128724,
        16.403904802773685,
        19.098254002311357,
        17.727224893405996,
        19.683830485182817
    ]
} */
  /**
   * @Summary Average Price
   * @name MonkeySet.Indicator#avgprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns avgprice - {array} the result from avgprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').avgprice()
 * 
 * result = {
    "avgprice": [
        6598.996163495899,
        6579.581565458766,
        6609.947356228225,
        6634.367969791111,
        6638.721922802787,
        6659.33487057841,
        6679.011399950359,
        6690.311942801674,
        6679.624874851095,
        6715.67,
        6702.387905289379,
        6669.52115181791
    ]
} */
  /**
   * @Summary Bollinger Bands
   * @name MonkeySet.Indicator#bbands
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.stddev {number} The stddev option 
   * @param options.input1 {array} The first input
 * @returns bbands_lower - {array} the result from bbands
   * @returns bbands_middle - {array} the result from bbands
   * @returns bbands_upper - {array} the result from bbands
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').bbands({period: 6, stddev: 6, input1: 'close'})
 * 
 * result = {
    "bbands_lower": [
        6452.4410180055875,
        6433.54549070065,
        6489.669448792569,
        6534.677219038264,
        6548.797419514625,
        6594.095690613451,
        6607.400623741238
    ],
    "bbands_middle": [
        6620.3066666666655,
        6634.099999999999,
        6651.486666666666,
        6664.231666666667,
        6678.289999999999,
        6687.344999999998,
        6688.711666666664
    ],
    "bbands_upper": [
        6788.1723153277435,
        6834.654509299349,
        6813.303884540763,
        6793.786114295069,
        6807.782580485373,
        6780.594309386546,
        6770.022709592091
    ]
} */
  /**
   * @Summary Balance of Power
   * @name MonkeySet.Indicator#bop
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns bop - {array} the result from bop
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').bop()
 * 
 * result = {
    "bop": [
        -0.1596221859667657,
        -0.3546020581310252,
        -0.9429094893338736,
        -22.716856491738216,
        0,
        0,
        0,
        -1.2563474512938946,
        0,
        -0.75,
        -3.103139689644717,
        0
    ]
} */
  /**
   * @Summary Commodity Channel Index
   * @name MonkeySet.Indicator#cci
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns cci - {array} the result from cci
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cci({period: 6})
 * 
 * result = {
    "cci": [
        63.69515762172487,
        -101.47088945603292
    ]
} */
  /**
   * @Summary Vector Ceiling
   * @name MonkeySet.Indicator#ceil
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns ceil - {array} the result from ceil
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ceil({input1: 'close'})
 * 
 * result = {
    "ceil": [
        6598,
        6580,
        6610,
        6630,
        6644,
        6663,
        6681,
        6684,
        6686,
        6714,
        6698,
        6671
    ]
} */
  /**
   * @Summary Chande Momentum Oscillator
   * @name MonkeySet.Indicator#cmo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns cmo - {array} the result from cmo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cmo({period: 6, input1: 'close'})
 * 
 * result = {
    "cmo": [
        69.07027207477918,
        100,
        100,
        100,
        63.196463882750194,
        8.803951041442764
    ]
} */
  /**
   * @Summary Vector Cosine
   * @name MonkeySet.Indicator#cos
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns cos - {array} the result from cos
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cos({input1: 'close'})
 * 
 * result = {
    "cos": [
        0.8222588986419133,
        0.6018478630017806,
        0.8623298915865072,
        0.9524856982534801,
        -0.36379048250692514,
        -0.8429687295572664,
        -0.11298039242434443,
        0.0016294869935561528,
        0.8572800257051136,
        -0.9866635066075883,
        0.962279114798957,
        -0.2201808806503472
    ]
} */
  /**
   * @Summary Vector Hyperbolic Cosine
   * @name MonkeySet.Indicator#cosh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns cosh - {array} the result from cosh
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cosh({input1: 'close'})
 * 
 * result = {
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
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns crossany - {array} the result from crossany
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').crossany({input1: 'close', input2: 'open'})
 * 
 * result = {
    "crossany": [
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        1
    ]
} */
  /**
   * @Summary Crossover
   * @name MonkeySet.Indicator#crossover
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns crossover - {array} the result from crossover
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').crossover({input1: 'close', input2: 'open'})
 * 
 * result = {
    "crossover": [
        0,
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
   * @param options.period {number} The period option 
   * @returns cvi - {array} the result from cvi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').cvi({period: 6})
 * 
 * result = {
    "cvi": [
        116.7286199739923
    ]
} */
  /**
   * @Summary Linear Decay
   * @name MonkeySet.Indicator#decay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns decay - {array} the result from decay
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').decay({period: 6, input1: 'close'})
 * 
 * result = {
    "decay": [
        6597.95,
        6597.783333333333,
        6609.38,
        6629.07,
        6643.27,
        6662.75,
        6680.71,
        6683.74,
        6685.85,
        6713.42,
        6713.253333333333,
        6713.086666666666
    ]
} */
  /**
   * @Summary Double Exponential Moving Average
   * @name MonkeySet.Indicator#dema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns dema - {array} the result from dema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dema({period: 6, input1: 'close'})
 * 
 * result = {
    "dema": [
        6703.681799604351,
        6691.695423246997
    ]
} */
  /**
   * @Summary Directional Indicator
   * @name MonkeySet.Indicator#di
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns plus_di - {array} the result from di
   * @returns minus_di - {array} the result from di
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').di({period: 6})
 * 
 * result = {
    "plus_di": [
        72.82332301967699,
        80.53666025642497,
        87.00852631608231,
        78.2280611213795,
        95.04973536403747,
        85.09854269021186,
        63.48233200754216
    ],
    "minus_di": [
        17.895047413067527,
        14.841896813061872,
        12.61328172075167,
        20.9123650221832,
        14.807443828214836,
        24.68961066424916,
        46.431105001025465
    ]
} */
  /**
   * @Summary Vector Division
   * @name MonkeySet.Indicator#div
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns div - {array} the result from div
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').div({input1: 'close', input2: 'open'})
 * 
 * result = {
    "div": [
        0.9998484607399662,
        0.9998480340160658,
        0.999848722766316,
        0.9989451588063417,
        1.0009039861268263,
        1.0006007133470998,
        1.0004492558077545,
        0.9988044962894553,
        1.0011979903711523,
        0.9995533334722962,
        0.9989559406974317,
        1.0002998972851798
    ]
} */
  /**
   * @Summary Directional Movement
   * @name MonkeySet.Indicator#dm
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns plus_dm - {array} the result from dm
   * @returns minus_dm - {array} the result from dm
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dm({period: 6})
 * 
 * result = {
    "plus_dm": [
        75.59781839908464,
        84.00295930235097,
        88.99033644758872,
        74.15861370632393,
        106.04538161126874,
        88.37115134272395,
        73.64262611893663
    ],
    "minus_dm": [
        18.57683072510372,
        15.480692270919766,
        12.900576892433138,
        19.824497464655764,
        16.520414553879803,
        25.639091477112366,
        53.86236449967478
    ]
} */
  /**
   * @Summary Detrended Price Oscillator
   * @name MonkeySet.Indicator#dpo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns dpo - {array} the result from dpo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dpo({period: 6, input1: 'close'})
 * 
 * result = {
    "dpo": [
        -40.886666666665406,
        -24.719999999999345,
        -22.41666666666606,
        -20.961666666666133,
        -15.539999999999054,
        -6.634999999998399,
        -4.971666666664532
    ]
} */
  /**
   * @Summary Directional Movement Index
   * @name MonkeySet.Indicator#dx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns dx - {array} the result from dx
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').dx({period: 6})
 * 
 * result = {
    "dx": [
        60.548128614514084,
        68.87791707259946,
        74.67766953980987,
        57.81263842481261,
        73.042373858332,
        55.023178895200985,
        15.513323457611083
    ]
} */
  /**
   * @Summary Exponential Decay
   * @name MonkeySet.Indicator#edecay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns edecay - {array} the result from edecay
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').edecay({period: 6, input1: 'close'})
 * 
 * result = {
    "edecay": [
        6597.95,
        6579.42,
        6609.38,
        6629.07,
        6643.27,
        6662.75,
        6680.71,
        6683.74,
        6685.85,
        6713.42,
        6697.6,
        6670.95
    ]
} */
  /**
   * @Summary Exponential Moving Average
   * @name MonkeySet.Indicator#ema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns ema - {array} the result from ema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ema({period: 6, input1: 'close'})
 * 
 * result = {
    "ema": [
        6597.95,
        6592.655714285715,
        6597.434081632653,
        6606.472915451895,
        6616.986368179925,
        6630.061691557089,
        6644.532636826492,
        6655.734740590352,
        6664.33910042168,
        6678.362214586914,
        6683.858724704939,
        6680.170517646385
    ]
} */
  /**
   * @Summary Ease of Movement
   * @name MonkeySet.Indicator#emv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns emv - {array} the result from emv
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').emv()
 * 
 * result = {
    "emv": [
        -44.36221601330332,
        25.29038594872153,
        6.246237637519301,
        -1.6100002421393302,
        -59.36452885954641,
        -56.13437011362884,
        69.48426783563961,
        77.42755660739925,
        121.00240421058426,
        -22.292250130449403,
        51.43617374656024
    ]
} */
  /**
   * @Summary Vector Exponential
   * @name MonkeySet.Indicator#exp
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns exp - {array} the result from exp
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').exp({input1: 'close'})
 * 
 * result = {
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
   * @param options.period {number} The period option 
   * @returns fisher - {array} the result from fisher
   * @returns fisher_signal - {array} the result from fisher
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').fisher({period: 6})
 * 
 * result = {
    "fisher": [
        0.34282825441539394,
        0.7913738721291064,
        1.2614929493509068,
        1.3530063982171086,
        1.636478441570008,
        1.65648376942677,
        0.9578308064490357
    ],
    "fisher_signal": [
        0,
        0.34282825441539394,
        0.7913738721291064,
        1.2614929493509068,
        1.3530063982171086,
        1.636478441570008,
        1.65648376942677
    ]
} */
  /**
   * @Summary Vector Floor
   * @name MonkeySet.Indicator#floor
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns floor - {array} the result from floor
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').floor({input1: 'close'})
 * 
 * result = {
    "floor": [
        6597,
        6579,
        6609,
        6629,
        6643,
        6662,
        6680,
        6683,
        6685,
        6713,
        6697,
        6670
    ]
} */
  /**
   * @Summary Forecast Oscillator
   * @name MonkeySet.Indicator#fosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns fosc - {array} the result from fosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').fosc({period: 6, input1: 'close'})
 * 
 * result = {
    "fosc": [
        0.10297308719178917,
        -0.27583359017563747,
        -0.3029781802862603,
        0.10220324861743148,
        -0.3433767319637367,
        -0.6572377247619504
    ]
} */
  /**
   * @Summary Hull Moving Average
   * @name MonkeySet.Indicator#hma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns hma - {array} the result from hma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').hma({period: 6, input1: 'close'})
 * 
 * result = {
    "hma": [
        6680.51746031746,
        6691.533968253968,
        6694.170952380952,
        6704.892380952384,
        6708.700793650799,
        6692.401269841277
    ]
} */
  /**
   * @Summary Kaufman Adaptive Moving Average
   * @name MonkeySet.Indicator#kama
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns kama - {array} the result from kama
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').kama({period: 6, input1: 'close'})
 * 
 * result = {
    "kama": [
        6662.75,
        6666.895282889754,
        6674.381823827641,
        6679.478791015356,
        6694.5637727863095,
        6695.165167545557,
        6694.830680888144
    ]
} */
  /**
   * @Summary Klinger Volume Oscillator
   * @name MonkeySet.Indicator#kvo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @returns kvo - {array} the result from kvo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').kvo({'short period': 2, 'long period': 6})
 * 
 * result = {
    "kvo": [
        0,
        409282.90101812204,
        625041.9840371781,
        1579497.4656690885,
        1896470.1248286571,
        -34821.95312056318,
        3497264.430326555,
        -74723340.5578292,
        -2796228.939463325,
        12630665.119380191,
        13108897.81931796
    ]
} */
  /**
   * @Summary Lag
   * @name MonkeySet.Indicator#lag
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns lag - {array} the result from lag
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').lag({period: 6, input1: 'close'})
 * 
 * result = {
    "lag": [
        6597.95,
        6579.42,
        6609.38,
        6629.07,
        6643.27,
        6662.75
    ]
} */
  /**
   * @Summary Linear Regression
   * @name MonkeySet.Indicator#linreg
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns linreg - {array} the result from linreg
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linreg({period: 6, input1: 'close'})
 * 
 * result = {
    "linreg": [
        6658.5380952380965,
        6682.725714285717,
        6690.500952380954,
        6694.465238095238,
        6708.510000000002,
        6706.951428571434,
        6690.165238095238
    ]
} */
  /**
   * @Summary Linear Regression Intercept
   * @name MonkeySet.Indicator#linregintercept
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns linregintercept - {array} the result from linregintercept
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linregintercept({period: 6, input1: 'close'})
 * 
 * result = {
    "linregintercept": [
        6582.075238095235,
        6585.474285714282,
        6612.472380952378,
        6633.998095238093,
        6648.069999999997,
        6667.7385714285665,
        6687.258095238093
    ]
} */
  /**
   * @Summary Linear Regression Slope
   * @name MonkeySet.Indicator#linregslope
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns linregslope - {array} the result from linregslope
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').linregslope({period: 6, input1: 'close'})
 * 
 * result = {
    "linregslope": [
        15.292571428572273,
        19.45028571428709,
        15.605714285715175,
        12.093428571429104,
        12.08800000000102,
        7.842571428573381,
        0.5814285714290149
    ]
} */
  /**
   * @Summary Vector Natural Log
   * @name MonkeySet.Indicator#ln
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns ln - {array} the result from ln
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ln({input1: 'close'})
 * 
 * result = {
    "ln": [
        8.794514273705857,
        8.791701874537628,
        8.79624513116964,
        8.79921980184773,
        8.801359591126504,
        8.80428759122227,
        8.806979548307734,
        8.807432990095748,
        8.8077486317897,
        8.811863787153687,
        8.809504532251681,
        8.80551755755326
    ]
} */
  /**
   * @Summary Vector Base-10 Log
   * @name MonkeySet.Indicator#log10
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns log10 - {array} the result from log10
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').log10({input1: 'close'})
 * 
 * result = {
    "log10": [
        3.819409020089838,
        3.8181876106501673,
        3.8201607219353195,
        3.821452604996294,
        3.8223819036725013,
        3.823653517957105,
        3.8248226200648414,
        3.8250195473312405,
        3.8251566287771825,
        3.826943818043937,
        3.8259192066585923,
        3.8241876855475803
    ]
} */
  /**
   * @Summary Moving Average Convergence/Divergence
   * @name MonkeySet.Indicator#macd
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.signal period {number} The signal period option 
   * @param options.input1 {array} The first input
 * @returns macd - {array} the result from macd
   * @returns macd_signal - {array} the result from macd
   * @returns macd_histogram - {array} the result from macd
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').macd({'short period': 2, 'long period': 4, 'signal period': 6, input1: 'close'})
 * 
 * result = {
    "macd": [
        9.39119407407452,
        11.87629669135913,
        14.400971430453865,
        15.854980663484639,
        12.725787666494398,
        9.269072356031756,
        13.457976665664319,
        6.488297083413272,
        -3.7425180552800157
    ],
    "macd_signal": [
        9.39119407407452,
        10.101223393298694,
        11.329722832485885,
        12.622653641342671,
        12.652120505671736,
        11.685535320060312,
        12.191947133090029,
        10.562332833182385,
        6.475232579335985
    ],
    "macd_histogram": [
        0,
        1.7750732980604358,
        3.0712485979679798,
        3.232327022141968,
        0.07366716082266223,
        -2.4164629640285558,
        1.26602953257429,
        -4.074035749769113,
        -10.217750634616
    ]
} */
  /**
   * @Summary Market Facilitation Index
   * @name MonkeySet.Indicator#marketfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns marketfi - {array} the result from marketfi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').marketfi()
 * 
 * result = {
    "marketfi": [
        0.0004854923506380138,
        0.00021854173855457093,
        0.00008218747520902617,
        0.000023885065153837812,
        -0.00015973713866560528,
        -0.00028615071695944173,
        -0.0002686747345216659,
        0.0004938088595584549,
        -0.0005000444138547152,
        0.00031010155826033023,
        0.00017492089448460229,
        -0.00014873035817746666
    ]
} */
  /**
   * @Summary Mass Index
   * @name MonkeySet.Indicator#mass
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns mass - {array} the result from mass
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mass({period: 6})
 * 
 * result = {
    "mass": []
} */
  /**
   * @Summary Maximum In Period
   * @name MonkeySet.Indicator#max
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns max - {array} the result from max
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').max({period: 6, input1: 'close'})
 * 
 * result = {
    "max": [
        6662.75,
        6680.71,
        6683.74,
        6685.85,
        6713.42,
        6713.42,
        6713.42
    ]
} */
  /**
   * @Summary Mean Deviation Over Period
   * @name MonkeySet.Indicator#md
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns md - {array} the result from md
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').md({period: 6, input1: 'close'})
 * 
 * result = {
    "md": [
        24.723333333333358,
        28.14333333333343,
        24.24666666666659,
        19.20166666666667,
        16.853333333333616,
        12.10999999999952,
        11.198888888888177
    ]
} */
  /**
   * @Summary Median Price
   * @name MonkeySet.Indicator#medprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns medprice - {array} the result from medprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').medprice()
 * 
 * result = {
    "medprice": [
        6599.542326991799,
        6579.243130917533,
        6610.014712456448,
        6636.165939582223,
        6637.173845605574,
        6657.919741156819,
        6678.812799900719,
        6692.883885603347,
        6677.399749702192,
        6716.42,
        6703.675810578758,
        6669.09230363582
    ]
} */
  /**
   * @Summary Money Flow Index
   * @name MonkeySet.Indicator#mfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns mfi - {array} the result from mfi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mfi({period: 6})
 * 
 * result = {
    "mfi": [
        83.46333045189834,
        100,
        83.28375334859287,
        83.31738355558383,
        66.64488410968156,
        50.038684373848895
    ]
} */
  /**
   * @Summary Minimum In Period
   * @name MonkeySet.Indicator#min
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns min - {array} the result from min
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').min({period: 6, input1: 'close'})
 * 
 * result = {
    "min": [
        6579.42,
        6579.42,
        6609.38,
        6629.07,
        6643.27,
        6662.75,
        6670.95
    ]
} */
  /**
   * @Summary Momentum
   * @name MonkeySet.Indicator#mom
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns mom - {array} the result from mom
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mom({period: 6, input1: 'close'})
 * 
 * result = {
    "mom": [
        82.76000000000022,
        104.31999999999971,
        76.47000000000025,
        84.35000000000036,
        54.32999999999993,
        8.199999999999818
    ]
} */
  /**
   * @Summary Mesa Sine Wave
   * @name MonkeySet.Indicator#msw
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns msw_sine - {array} the result from msw
   * @returns msw_lead - {array} the result from msw
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').msw({period: 6, input1: 'close'})
 * 
 * result = {
    "msw_sine": [
        0.415701558462529,
        0.3992731575869569,
        0.21445296838306116,
        0.39995843223058325,
        0.36023433241222896,
        -0.5164757657142549
    ],
    "msw_lead": [
        -0.3491689775824559,
        -0.3659693660051955,
        -0.5390142988958179,
        -0.3652735650447665,
        -0.4049087864708366,
        -0.9707003269951081
    ]
} */
  /**
   * @Summary Vector Multiplication
   * @name MonkeySet.Indicator#mul
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns mul - {array} the result from mul
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').mul({input1: 'close', input2: 'open'})
 * 
 * result = {
    "mul": [
        43539542.152499996,
        43295346.9564,
        43690513.3644,
        43990972.5549,
        44093176.672900006,
        44365586.5625,
        44611843.9741,
        44725850.3076,
        44647103.42250001,
        45090148.3564,
        44904728.96000001,
        44488232.0025
    ]
} */
  /**
   * @Summary Normalized Average True Range
   * @name MonkeySet.Indicator#natr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns natr - {array} the result from natr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').natr({period: 6})
 * 
 * result = {
    "natr": [
        0.27534849908678233,
        0.2732360845701193,
        0.265889732277568,
        0.24535257002136876,
        0.2844787604873724,
        0.2646802570085702,
        0.29506787616730473
    ]
} */
  /**
   * @Summary Negative Volume Index
   * @name MonkeySet.Indicator#nvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns nvi - {array} the result from nvi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').nvi()
 * 
 * result = {
    "nvi": [
        1000,
        1000,
        1000,
        1002.979099401154,
        1005.1275611328143,
        1005.1275611328143,
        1005.1275611328143,
        1005.5834313188024,
        1005.5834313188024,
        1009.7300895898463,
        1007.3506868387432,
        1007.3506868387432
    ]
} */
  /**
   * @Summary On Balance Volume
   * @name MonkeySet.Indicator#obv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns obv - {array} the result from obv
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').obv()
 * 
 * result = {
    "obv": [
        0,
        -12904,
        0,
        12901,
        25794,
        38687,
        51587,
        64482,
        77386,
        90285,
        77389,
        64491
    ]
} */
  /**
   * @Summary Percentage Price Oscillator
   * @name MonkeySet.Indicator#ppo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.input1 {array} The first input
 * @returns ppo - {array} the result from ppo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ppo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * result = {
    "ppo": [
        -0.10707441621366438,
        0.06090459623925179,
        0.20269754820092742,
        0.27930625035452417,
        0.35586873502866195,
        0.4087475734029013,
        0.3604299338710511,
        0.2921354929541285,
        0.3771451448532715,
        0.235259108363884,
        0.004847971087272186
    ]
} */
  /**
   * @Summary Parabolic SAR
   * @name MonkeySet.Indicator#psar
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.acceleration factor step {number} The acceleration factor step option 
   * @param options.acceleration factor maximum {number} The acceleration factor maximum option 
   * @returns psar - {array} the result from psar
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').psar({'acceleration factor step': 3.4, 'acceleration factor maximum': 5.351})
 * 
 * result = {
    "psar": [
        6602.674723638115,
        6577.833099620379,
        6577.833099620379,
        6609.4844388664,
        6636.011868969447,
        6638.2035910699815,
        6659.764411753698,
        6680.545751938384,
        6680.6260362603825,
        6680.6260362603825,
        6718.42
    ]
} */
  /**
   * @Summary Positive Volume Index
   * @name MonkeySet.Indicator#pvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns pvi - {array} the result from pvi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').pvi()
 * 
 * result = {
    "pvi": [
        1000,
        1000,
        1000,
        1000,
        1000,
        1000,
        1002.6955836553975,
        1002.6955836553975,
        1003.0121261423155,
        1003.0121261423155,
        1003.0121261423155,
        999.0211035130612
    ]
} */
  /**
   * @Summary Qstick
   * @name MonkeySet.Indicator#qstick
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns qstick - {array} the result from qstick
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').qstick({period: 6})
 * 
 * result = {
    "qstick": [
        0,
        0.6666666666666666,
        -0.5,
        1,
        1.6666666666666665,
        -0.5,
        -0.8333333333333333
    ]
} */
  /**
   * @Summary Rate of Change
   * @name MonkeySet.Indicator#roc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns roc - {array} the result from roc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').roc({period: 6, input1: 'close'})
 * 
 * result = {
    "roc": [
        0.012543289961275884,
        0.015855500940812367,
        0.011569920325355821,
        0.012724258455560187,
        0.008178201397805587,
        0.0012307230497917254
    ]
} */
  /**
   * @Summary Rate of Change Ratio
   * @name MonkeySet.Indicator#rocr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns rocr - {array} the result from rocr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').rocr({period: 6, input1: 'close'})
 * 
 * result = {
    "rocr": [
        1.0125432899612758,
        1.0158555009408123,
        1.0115699203253559,
        1.0127242584555602,
        1.0081782013978056,
        1.0012307230497917
    ]
} */
  /**
   * @Summary Vector Round
   * @name MonkeySet.Indicator#round
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns round - {array} the result from round
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').round({input1: 'close'})
 * 
 * result = {
    "round": [
        6598,
        6579,
        6609,
        6629,
        6643,
        6663,
        6681,
        6684,
        6686,
        6713,
        6698,
        6671
    ]
} */
  /**
   * @Summary Relative Strength Index
   * @name MonkeySet.Indicator#rsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns rsi - {array} the result from rsi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').rsi({period: 6, input1: 'close'})
 * 
 * result = {
    "rsi": [
        84.53513603738959,
        84.99060393986537,
        85.35113016860849,
        89.35885279129995,
        75.19357135280087,
        56.94543497787245
    ]
} */
  /**
   * @Summary Vector Sine
   * @name MonkeySet.Indicator#sin
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns sin - {array} the result from sin
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sin({input1: 'close'})
 * 
 * result = {
    "sin": [
        0.5691136122112944,
        0.7986107623869027,
        -0.5063468752509517,
        0.3045833131059228,
        0.9314808021840164,
        0.5379625646721231,
        0.9935972176529285,
        -0.9999986723851877,
        0.5148504224792282,
        0.16277323099581684,
        -0.27206415644427645,
        -0.9754590610558895
    ]
} */
  /**
   * @Summary Vector Hyperbolic Sine
   * @name MonkeySet.Indicator#sinh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns sinh - {array} the result from sinh
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sinh({input1: 'close'})
 * 
 * result = {
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
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns sma - {array} the result from sma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sma({period: 6, input1: 'close'})
 * 
 * result = {
    "sma": [
        6620.3066666666655,
        6634.099999999999,
        6651.486666666666,
        6664.231666666667,
        6678.289999999999,
        6687.344999999998,
        6688.711666666664
    ]
} */
  /**
   * @Summary Vector Square Root
   * @name MonkeySet.Indicator#sqrt
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns sqrt - {array} the result from sqrt
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sqrt({input1: 'close'})
 * 
 * result = {
    "sqrt": [
        81.22776618866236,
        81.11362400978025,
        81.29809345857996,
        81.4191009530319,
        81.50625742849441,
        81.62566998193644,
        81.73561035436146,
        81.7541436258738,
        81.76704715226055,
        81.935462407922,
        81.83886607230089,
        81.6758838336017
    ]
} */
  /**
   * @Summary Standard Deviation Over Period
   * @name MonkeySet.Indicator#stddev
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns stddev - {array} the result from stddev
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stddev({period: 6, input1: 'close'})
 * 
 * result = {
    "stddev": [
        27.977608110179606,
        33.42575154989157,
        26.96953631234955,
        21.592407938067094,
        21.582096747562222,
        15.54155156442468,
        13.551840487571113
    ]
} */
  /**
   * @Summary Standard Error Over Period
   * @name MonkeySet.Indicator#stderr
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns stderr - {array} the result from stderr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stderr({period: 6, input1: 'close'})
 * 
 * result = {
    "stderr": [
        11.421810682248735,
        13.646005927713055,
        11.010267094119781,
        8.815063627714238,
        8.810854101817977,
        6.344811857332352,
        5.5325157116898716
    ]
} */
  /**
   * @Summary Stochastic Oscillator
   * @name MonkeySet.Indicator#stoch
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.%k period {number} The %k period option 
   * @param options.%k slowing period {number} The %k slowing period option 
   * @param options.%d period {number} The %d period option 
   * @returns stoch_k - {array} the result from stoch
   * @returns stoch_d - {array} the result from stoch
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stoch({'%k period': 6, '%k slowing period': 6, '%d period': 6})
 * 
 * result = {
    "stoch_k": [],
    "stoch_d": []
} */
  /**
   * @Summary Stochastic RSI
   * @name MonkeySet.Indicator#stochrsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns stochrsi - {array} the result from stochrsi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').stochrsi({period: 6, input1: 'close'})
 * 
 * result = {
    "stochrsi": [
        0
    ]
} */
  /**
   * @Summary Vector Subtraction
   * @name MonkeySet.Indicator#sub
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns sub - {array} the result from sub
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sub({input1: 'close', input2: 'open'})
 * 
 * result = {
    "sub": [
        -1,
        -1,
        -1,
        -7,
        6,
        4,
        3,
        -8,
        8,
        -3,
        -7,
        2
    ]
} */
  /**
   * @Summary Sum Over Period
   * @name MonkeySet.Indicator#sum
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns sum - {array} the result from sum
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').sum({period: 6, input1: 'close'})
 * 
 * result = {
    "sum": [
        39721.84,
        39804.6,
        39908.92,
        39985.39,
        40069.74,
        40124.06999999999,
        40132.26999999999
    ]
} */
  /**
   * @Summary Vector Tangent
   * @name MonkeySet.Indicator#tan
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns tan - {array} the result from tan
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tan({input1: 'close'})
 * 
 * result = {
    "tan": [
        0.6921343303809456,
        1.326931291911125,
        -0.5871846496233349,
        0.3197773086403504,
        -2.560487002752428,
        -0.6381761811670822,
        -8.794421725152668,
        -613.6892631482839,
        0.6005627181804021,
        -0.1649733976231416,
        -0.2827289424244826,
        4.43026232874844
    ]
} */
  /**
   * @Summary Vector Hyperbolic Tangent
   * @name MonkeySet.Indicator#tanh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns tanh - {array} the result from tanh
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tanh({input1: 'close'})
 * 
 * result = {
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
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns tema - {array} the result from tema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tema({period: 6, input1: 'close'})
 * 
 * result = {
    "tema": []
} */
  /**
   * @Summary Vector Degree Conversion
   * @name MonkeySet.Indicator#todeg
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns degrees - {array} the result from todeg
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').todeg({input1: 'close'})
 * 
 * result = {
    "degrees": [
        378034.6884383415,
        376972.9976439641,
        378689.57919817604,
        379817.73309678864,
        380631.3331658744,
        381747.4549507892,
        382776.4871508442,
        382950.0933627688,
        383070.98745754146,
        384650.63209871715,
        383744.21286682016,
        382217.2803427965
    ]
} */
  /**
   * @Summary Vector Radian Conversion
   * @name MonkeySet.Indicator#torad
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns radians - {array} the result from torad
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').torad({input1: 'close'})
 * 
 * result = {
    "radians": [
        115.15595138195987,
        114.83254187156531,
        115.35544251546283,
        115.6990978451805,
        115.94693459896371,
        116.28692473725219,
        116.60038587091037,
        116.6532693472458,
        116.69009579446289,
        117.17128306923772,
        116.89517198157222,
        116.43004173591572
    ]
} */
  /**
   * @Summary True Range
   * @name MonkeySet.Indicator#tr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns tr - {array} the result from tr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tr()
 * 
 * result = {
    "tr": [
        6.26479329263293,
        20.116900379621256,
        31.124986046496815,
        26.94001019499683,
        9.133591069981776,
        16.494411753697932,
        17.795751938383546,
        15.357718225350254,
        9.566536855998493,
        32.56999999999971,
        10.872079348879197,
        29.46685844406693
    ]
} */
  /**
   * @Summary Triangular Moving Average
   * @name MonkeySet.Indicator#trima
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns trima - {array} the result from trima
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trima({period: 6, input1: 'close'})
 * 
 * result = {
    "trima": [
        6618.452499999999,
        6635.1175,
        6652.5616666666665,
        6666.610000000001,
        6678.9366666666665,
        6688.115000000002,
        6692.679166666669
    ]
} */
  /**
   * @Summary Trix
   * @name MonkeySet.Indicator#trix
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns trix - {array} the result from trix
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trix({period: 6, input1: 'close'})
 * 
 * result = {
    "trix": []
} */
  /**
   * @Summary Vector Truncate
   * @name MonkeySet.Indicator#trunc
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns trunc - {array} the result from trunc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').trunc({input1: 'close'})
 * 
 * result = {
    "trunc": [
        6597,
        6579,
        6609,
        6629,
        6643,
        6662,
        6680,
        6683,
        6685,
        6713,
        6697,
        6670
    ]
} */
  /**
   * @Summary Time Series Forecast
   * @name MonkeySet.Indicator#tsf
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns tsf - {array} the result from tsf
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').tsf({period: 6, input1: 'close'})
 * 
 * result = {
    "tsf": [
        6673.8306666666695,
        6702.176000000005,
        6706.106666666669,
        6706.558666666668,
        6720.598000000004,
        6714.794000000007,
        6690.746666666668
    ]
} */
  /**
   * @Summary Typical Price
   * @name MonkeySet.Indicator#typprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns typprice - {array} the result from typprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').typprice()
 * 
 * result = {
    "typprice": [
        6599.011551327866,
        6579.3020872783545,
        6609.8031416376325,
        6633.800626388148,
        6639.205897070382,
        6659.52982743788,
        6679.445199933813,
        6689.8359237355635,
        6680.2164998014605,
        6715.42,
        6701.650540385839,
        6669.711535757213
    ]
} */
  /**
   * @Summary Ultimate Oscillator
   * @name MonkeySet.Indicator#ultosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.medium period {number} The medium period option 
   * @param options.long period {number} The long period option 
   * @returns ultosc - {array} the result from ultosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').ultosc({'short period': 2, 'medium period': 4, 'long period': 6})
 * 
 * result = {
    "ultosc": [
        125.24893733137931,
        85.76093915974536,
        68.43923429046933,
        90.67846611477067,
        54.96471097041408,
        11.905344807906959
    ]
} */
  /**
   * @Summary Variance Over Period
   * @name MonkeySet.Indicator#var
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns var - {array} the result from var
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').var({period: 6, input1: 'close'})
 * 
 * result = {
    "var": [
        782.7465555667877,
        1117.2808666750789,
        727.355888903141,
        466.23208056390285,
        465.7869000211358,
        241.5398250296712,
        183.65238060057163
    ]
} */
  /**
   * @Summary Vertical Horizontal Filter
   * @name MonkeySet.Indicator#vhf
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns vhf - {array} the result from vhf
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vhf({period: 6, input1: 'close'})
 * 
 * result = {
    "vhf": [
        0.8453513603738959,
        0.7128067484662565,
        0.7425134039492672,
        0.8316538233550602,
        0.5893916482493946,
        0.4559802447927862
    ]
} */
  /**
   * @Summary Variable Index Dynamic Average
   * @name MonkeySet.Indicator#vidya
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.alpha {number} The alpha option 
   * @param options.input1 {array} The first input
 * @returns vidya - {array} the result from vidya
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vidya({'short period': 2, 'long period': 5, alpha: 0.2, input1: 'close'})
 * 
 * result = {
    "vidya": [
        6629.07,
        6629.965557871815,
        6632.196688272046,
        6635.6870248518135,
        6636.375449955766,
        6637.019452834378,
        6649.968314729427,
        6656.233235050362,
        6658.972381206481
    ]
} */
  /**
   * @Summary Annualized Historical Volatility
   * @name MonkeySet.Indicator#volatility
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns volatility - {array} the result from volatility
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').volatility({period: 6, input1: 'close'})
 * 
 * result = {
    "volatility": [
        0.0366222805589029,
        0.019325966665926047,
        0.01777374376480095,
        0.021531483007342624,
        0.03405811101014245,
        0.04381093726958999
    ]
} */
  /**
   * @Summary Volume Oscillator
   * @name MonkeySet.Indicator#vosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @returns vosc - {array} the result from vosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vosc({'short period': 2, 'long period': 6})
 * 
 * result = {
    "vosc": [
        -0.05297226062351287,
        -0.02067317010142304,
        -0.0012922233995766187,
        0.014214457395399218,
        0.03230641993177825,
        -0.0025844134027585047,
        -0.012921232168694907
    ]
} */
  /**
   * @Summary Volume Weighted Moving Average
   * @name MonkeySet.Indicator#vwma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @returns vwma - {array} the result from vwma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').vwma({period: 6})
 * 
 * result = {
    "vwma": [
        6620.297031356994,
        6634.09241075005,
        6651.481841030678,
        6664.233099397826,
        6678.294158223925,
        6687.34651336788,
        6688.711520312178
    ]
} */
  /**
   * @Summary Williams Accumulation/Distribution
   * @name MonkeySet.Indicator#wad
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns wad - {array} the result from wad
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wad()
 * 
 * result = {
    "wad": [
        -18.529999999999745,
        11.430000000000291,
        31.11999999999989,
        45.32000000000062,
        64.80000000000018,
        82.76000000000022,
        85.78999999999996,
        91.0139637396178,
        118.5839637396175,
        102.7639637396178,
        76.11396373961725
    ]
} */
  /**
   * @Summary Weighted Close Price
   * @name MonkeySet.Indicator#wcprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns wcprice - {array} the result from wcprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wcprice()
 * 
 * result = {
    "wcprice": [
        6598.7461634959,
        6579.331565458766,
        6609.697356228225,
        6632.617969791111,
        6640.221922802787,
        6660.33487057841,
        6679.761399950359,
        6688.311942801673,
        6681.624874851095,
        6714.92,
        6700.637905289379,
        6670.02115181791
    ]
} */
  /**
   * @Summary Wilders Smoothing
   * @name MonkeySet.Indicator#wilders
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns wilders - {array} the result from wilders
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wilders({period: 6, input1: 'close'})
 * 
 * result = {
    "wilders": [
        6620.306666666666,
        6630.373888888888,
        6639.26824074074,
        6647.03186728395,
        6658.096556069959,
        6664.680463391633,
        6665.725386159694
    ]
} */
  /**
   * @Summary Williams %R
   * @name MonkeySet.Indicator#willr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns willr - {array} the result from willr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').willr({period: 6})
 * 
 * result = {
    "willr": [
        8.531136626422391,
        3.6577038555153765,
        -14.237989501694837,
        -17.013693673386204,
        -6.233138664137955,
        -35.49533918673543,
        -98.14231649234574
    ]
} */
  /**
   * @Summary Weighted Moving Average
   * @name MonkeySet.Indicator#wma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns wma - {array} the result from wma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').wma({period: 6, input1: 'close'})
 * 
 * result = {
    "wma": [
        6633.050476190476,
        6650.308571428572,
        6664.4914285714285,
        6674.309523809524,
        6688.363333333334,
        6693.880476190478,
        6689.19619047619
    ]
} */
  /**
   * @Summary Zero-Lag Exponential Moving Average
   * @name MonkeySet.Indicator#zlema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns zlema - {array} the result from zlema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).convert('ohlc').zlema({period: 6, input1: 'close'})
 * 
 * result = {
    "zlema": [
        6579.42,
        6591.245714285715,
        6616.2383673469385,
        6633.644548104956,
        6651.583248646397,
        6670.602320461712,
        6680.35308604408,
        6683.3922043172,
        6700.451574512285,
        6702.99398179449,
        6681.70427271035
    ]
} */