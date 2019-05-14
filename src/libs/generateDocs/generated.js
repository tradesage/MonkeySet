
/**
 * @Summary Vector Absolute Value
 * @name MonkeySet.Indicator#abs
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns abs {array} from the abs simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').abs({real: 'close'}) */
/**
 * @Summary Vector Arccosine
 * @name MonkeySet.Indicator#acos
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns acos {array} from the acos simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').acos({real: 'close'}) */
/**
 * @Summary Accumulation/Distribution Line
 * @name MonkeySet.Indicator#ad
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns ad {array} from the ad indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ad() */
/**
 * @Summary Vector Addition
 * @name MonkeySet.Indicator#add
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @param options.inputs.real The input real
 * @returns add {array} from the add simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').add({real: 'close', real: 'close'}) */
/**
 * @Summary Accumulation/Distribution Oscillator
 * @name MonkeySet.Indicator#adosc
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns adosc {array} from the adosc indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').adosc({'short period': 4, 'long period': 6}) */
/**
 * @Summary Average Directional Movement Index
 * @name MonkeySet.Indicator#adx
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns dx {array} from the adx indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').adx({period: 6}) */
/**
 * @Summary Average Directional Movement Rating
 * @name MonkeySet.Indicator#adxr
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns dx {array} from the adxr indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').adxr({period: 6}) */
/**
 * @Summary Awesome Oscillator
 * @name MonkeySet.Indicator#ao
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns ao {array} from the ao indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ao() */
/**
 * @Summary Absolute Price Oscillator
 * @name MonkeySet.Indicator#apo
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.inputs.real The input real
 * @returns apo {array} from the apo indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').apo({'short period': 5, 'long period': 3, real: 'close'}) */
/**
 * @Summary Aroon
 * @name MonkeySet.Indicator#aroon
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns aroon_down {array} from the aroon indicator function
 * @returns aroon_up {array} from the aroon indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').aroon({period: 6}) */
/**
 * @Summary Aroon Oscillator
 * @name MonkeySet.Indicator#aroonosc
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns aroonosc {array} from the aroonosc indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').aroonosc({period: 4}) */
/**
 * @Summary Vector Arcsine
 * @name MonkeySet.Indicator#asin
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns asin {array} from the asin simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').asin({real: 'close'}) */
/**
 * @Summary Vector Arctangent
 * @name MonkeySet.Indicator#atan
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns atan {array} from the atan simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').atan({real: 'close'}) */
/**
 * @Summary Average True Range
 * @name MonkeySet.Indicator#atr
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns atr {array} from the atr indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').atr({period: 6}) */
/**
 * @Summary Average Price
 * @name MonkeySet.Indicator#avgprice
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.inputs.open The input open
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns avgprice {array} from the avgprice overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').avgprice() */
/**
 * @Summary Bollinger Bands
 * @name MonkeySet.Indicator#bbands
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.options.stddev The option stddev
 * @param options.inputs.real The input real
 * @returns bbands_lower {array} from the bbands overlay function
 * @returns bbands_middle {array} from the bbands overlay function
 * @returns bbands_upper {array} from the bbands overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').bbands({period: 3, stddev: 6, real: 'close'}) */
/**
 * @Summary Balance of Power
 * @name MonkeySet.Indicator#bop
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.open The input open
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns bop {array} from the bop indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').bop() */
/**
 * @Summary Commodity Channel Index
 * @name MonkeySet.Indicator#cci
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns cci {array} from the cci indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').cci({period: 5}) */
/**
 * @Summary Vector Ceiling
 * @name MonkeySet.Indicator#ceil
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns ceil {array} from the ceil simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ceil({real: 'close'}) */
/**
 * @Summary Chande Momentum Oscillator
 * @name MonkeySet.Indicator#cmo
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns cmo {array} from the cmo indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').cmo({period: 5, real: 'close'}) */
/**
 * @Summary Vector Cosine
 * @name MonkeySet.Indicator#cos
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns cos {array} from the cos simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').cos({real: 'close'}) */
/**
 * @Summary Vector Hyperbolic Cosine
 * @name MonkeySet.Indicator#cosh
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns cosh {array} from the cosh simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').cosh({real: 'close'}) */
/**
 * @Summary Crossany
 * @name MonkeySet.Indicator#crossany
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.inputs.real The input real
 * @param options.inputs.real The input real
 * @returns crossany {array} from the crossany math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').crossany({real: 'close', real: 'close'}) */
/**
 * @Summary Crossover
 * @name MonkeySet.Indicator#crossover
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.inputs.real The input real
 * @param options.inputs.real The input real
 * @returns crossover {array} from the crossover math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').crossover({real: 'close', real: 'close'}) */
/**
 * @Summary Chaikins Volatility
 * @name MonkeySet.Indicator#cvi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns cvi {array} from the cvi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').cvi({period: 5}) */
/**
 * @Summary Linear Decay
 * @name MonkeySet.Indicator#decay
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns decay {array} from the decay math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').decay({period: 3, real: 'close'}) */
/**
 * @Summary Double Exponential Moving Average
 * @name MonkeySet.Indicator#dema
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns dema {array} from the dema overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').dema({period: 3, real: 'close'}) */
/**
 * @Summary Directional Indicator
 * @name MonkeySet.Indicator#di
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns plus_di {array} from the di indicator function
 * @returns minus_di {array} from the di indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').di({period: 5}) */
/**
 * @Summary Vector Division
 * @name MonkeySet.Indicator#div
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @param options.inputs.real The input real
 * @returns div {array} from the div simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').div({real: 'close', real: 'close'}) */
/**
 * @Summary Directional Movement
 * @name MonkeySet.Indicator#dm
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns plus_dm {array} from the dm indicator function
 * @returns minus_dm {array} from the dm indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').dm({period: 6}) */
/**
 * @Summary Detrended Price Oscillator
 * @name MonkeySet.Indicator#dpo
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns dpo {array} from the dpo indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').dpo({period: 4, real: 'close'}) */
/**
 * @Summary Directional Movement Index
 * @name MonkeySet.Indicator#dx
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns dx {array} from the dx indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').dx({period: 3}) */
/**
 * @Summary Exponential Decay
 * @name MonkeySet.Indicator#edecay
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns edecay {array} from the edecay math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').edecay({period: 6, real: 'close'}) */
/**
 * @Summary Exponential Moving Average
 * @name MonkeySet.Indicator#ema
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns ema {array} from the ema overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ema({period: 3, real: 'close'}) */
/**
 * @Summary Ease of Movement
 * @name MonkeySet.Indicator#emv
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.volume The input volume
 * @returns emv {array} from the emv indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').emv() */
/**
 * @Summary Vector Exponential
 * @name MonkeySet.Indicator#exp
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns exp {array} from the exp simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').exp({real: 'close'}) */
/**
 * @Summary Fisher Transform
 * @name MonkeySet.Indicator#fisher
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns fisher {array} from the fisher indicator function
 * @returns fisher_signal {array} from the fisher indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').fisher({period: 3}) */
/**
 * @Summary Vector Floor
 * @name MonkeySet.Indicator#floor
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns floor {array} from the floor simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').floor({real: 'close'}) */
/**
 * @Summary Forecast Oscillator
 * @name MonkeySet.Indicator#fosc
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns fosc {array} from the fosc indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').fosc({period: 6, real: 'close'}) */
/**
 * @Summary Hull Moving Average
 * @name MonkeySet.Indicator#hma
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns hma {array} from the hma overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').hma({period: 4, real: 'close'}) */
/**
 * @Summary Kaufman Adaptive Moving Average
 * @name MonkeySet.Indicator#kama
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns kama {array} from the kama overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').kama({period: 3, real: 'close'}) */
/**
 * @Summary Klinger Volume Oscillator
 * @name MonkeySet.Indicator#kvo
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns kvo {array} from the kvo indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').kvo({'short period': 5, 'long period': 4}) */
/**
 * @Summary Lag
 * @name MonkeySet.Indicator#lag
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns lag {array} from the lag math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').lag({period: 6, real: 'close'}) */
/**
 * @Summary Linear Regression
 * @name MonkeySet.Indicator#linreg
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns linreg {array} from the linreg overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').linreg({period: 5, real: 'close'}) */
/**
 * @Summary Linear Regression Intercept
 * @name MonkeySet.Indicator#linregintercept
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns linregintercept {array} from the linregintercept indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').linregintercept({period: 6, real: 'close'}) */
/**
 * @Summary Linear Regression Slope
 * @name MonkeySet.Indicator#linregslope
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns linregslope {array} from the linregslope indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').linregslope({period: 3, real: 'close'}) */
/**
 * @Summary Vector Natural Log
 * @name MonkeySet.Indicator#ln
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns ln {array} from the ln simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ln({real: 'close'}) */
/**
 * @Summary Vector Base-10 Log
 * @name MonkeySet.Indicator#log10
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns log10 {array} from the log10 simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').log10({real: 'close'}) */
/**
 * @Summary Moving Average Convergence/Divergence
 * @name MonkeySet.Indicator#macd
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.options.signal period The option signal period
 * @param options.inputs.real The input real
 * @returns macd {array} from the macd indicator function
 * @returns macd_signal {array} from the macd indicator function
 * @returns macd_histogram {array} from the macd indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').macd({'short period': 4, 'long period': 3, 'signal period': 4, real: 'close'}) */
/**
 * @Summary Market Facilitation Index
 * @name MonkeySet.Indicator#marketfi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.volume The input volume
 * @returns marketfi {array} from the marketfi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').marketfi() */
/**
 * @Summary Mass Index
 * @name MonkeySet.Indicator#mass
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns mass {array} from the mass indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').mass({period: 3}) */
/**
 * @Summary Maximum In Period
 * @name MonkeySet.Indicator#max
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns max {array} from the max math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').max({period: 3, real: 'close'}) */
/**
 * @Summary Mean Deviation Over Period
 * @name MonkeySet.Indicator#md
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns md {array} from the md math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').md({period: 6, real: 'close'}) */
/**
 * @Summary Median Price
 * @name MonkeySet.Indicator#medprice
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns medprice {array} from the medprice overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').medprice() */
/**
 * @Summary Money Flow Index
 * @name MonkeySet.Indicator#mfi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns mfi {array} from the mfi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').mfi({period: 5}) */
/**
 * @Summary Minimum In Period
 * @name MonkeySet.Indicator#min
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns min {array} from the min math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').min({period: 6, real: 'close'}) */
/**
 * @Summary Momentum
 * @name MonkeySet.Indicator#mom
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns mom {array} from the mom indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').mom({period: 6, real: 'close'}) */
/**
 * @Summary Mesa Sine Wave
 * @name MonkeySet.Indicator#msw
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns msw_sine {array} from the msw indicator function
 * @returns msw_lead {array} from the msw indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').msw({period: 5, real: 'close'}) */
/**
 * @Summary Vector Multiplication
 * @name MonkeySet.Indicator#mul
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @param options.inputs.real The input real
 * @returns mul {array} from the mul simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').mul({real: 'close', real: 'close'}) */
/**
 * @Summary Normalized Average True Range
 * @name MonkeySet.Indicator#natr
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns natr {array} from the natr indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').natr({period: 4}) */
/**
 * @Summary Negative Volume Index
 * @name MonkeySet.Indicator#nvi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns nvi {array} from the nvi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').nvi() */
/**
 * @Summary On Balance Volume
 * @name MonkeySet.Indicator#obv
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns obv {array} from the obv indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').obv() */
/**
 * @Summary Percentage Price Oscillator
 * @name MonkeySet.Indicator#ppo
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.inputs.real The input real
 * @returns ppo {array} from the ppo indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ppo({'short period': 3, 'long period': 6, real: 'close'}) */
/**
 * @Summary Parabolic SAR
 * @name MonkeySet.Indicator#psar
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.acceleration factor step The option acceleration factor step
 * @param options.options.acceleration factor maximum The option acceleration factor maximum
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @returns psar {array} from the psar overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').psar({'acceleration factor step': 4.900440079208508, 'acceleration factor maximum': 6.121620663820149}) */
/**
 * @Summary Positive Volume Index
 * @name MonkeySet.Indicator#pvi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns pvi {array} from the pvi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').pvi() */
/**
 * @Summary Qstick
 * @name MonkeySet.Indicator#qstick
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.open The input open
 * @param options.inputs.close The input close
 * @returns qstick {array} from the qstick indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').qstick({period: 6}) */
/**
 * @Summary Rate of Change
 * @name MonkeySet.Indicator#roc
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns roc {array} from the roc indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').roc({period: 4, real: 'close'}) */
/**
 * @Summary Rate of Change Ratio
 * @name MonkeySet.Indicator#rocr
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns rocr {array} from the rocr indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').rocr({period: 3, real: 'close'}) */
/**
 * @Summary Vector Round
 * @name MonkeySet.Indicator#round
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns round {array} from the round simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').round({real: 'close'}) */
/**
 * @Summary Relative Strength Index
 * @name MonkeySet.Indicator#rsi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns rsi {array} from the rsi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').rsi({period: 6, real: 'close'}) */
/**
 * @Summary Vector Sine
 * @name MonkeySet.Indicator#sin
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns sin {array} from the sin simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').sin({real: 'close'}) */
/**
 * @Summary Vector Hyperbolic Sine
 * @name MonkeySet.Indicator#sinh
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns sinh {array} from the sinh simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').sinh({real: 'close'}) */
/**
 * @Summary Simple Moving Average
 * @name MonkeySet.Indicator#sma
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns sma {array} from the sma overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').sma({period: 3, real: 'close'}) */
/**
 * @Summary Vector Square Root
 * @name MonkeySet.Indicator#sqrt
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns sqrt {array} from the sqrt simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').sqrt({real: 'close'}) */
/**
 * @Summary Standard Deviation Over Period
 * @name MonkeySet.Indicator#stddev
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns stddev {array} from the stddev math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').stddev({period: 6, real: 'close'}) */
/**
 * @Summary Standard Error Over Period
 * @name MonkeySet.Indicator#stderr
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns stderr {array} from the stderr math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').stderr({period: 4, real: 'close'}) */
/**
 * @Summary Stochastic Oscillator
 * @name MonkeySet.Indicator#stoch
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.%k period The option %k period
 * @param options.options.%k slowing period The option %k slowing period
 * @param options.options.%d period The option %d period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns stoch_k {array} from the stoch indicator function
 * @returns stoch_d {array} from the stoch indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').stoch({'%k period': 6, '%k slowing period': 6, '%d period': 5}) */
/**
 * @Summary Stochastic RSI
 * @name MonkeySet.Indicator#stochrsi
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns stochrsi {array} from the stochrsi indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').stochrsi({period: 3, real: 'close'}) */
/**
 * @Summary Vector Subtraction
 * @name MonkeySet.Indicator#sub
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @param options.inputs.real The input real
 * @returns sub {array} from the sub simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').sub({real: 'close', real: 'close'}) */
/**
 * @Summary Sum Over Period
 * @name MonkeySet.Indicator#sum
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns sum {array} from the sum math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').sum({period: 5, real: 'close'}) */
/**
 * @Summary Vector Tangent
 * @name MonkeySet.Indicator#tan
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns tan {array} from the tan simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').tan({real: 'close'}) */
/**
 * @Summary Vector Hyperbolic Tangent
 * @name MonkeySet.Indicator#tanh
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns tanh {array} from the tanh simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').tanh({real: 'close'}) */
/**
 * @Summary Triple Exponential Moving Average
 * @name MonkeySet.Indicator#tema
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns tema {array} from the tema overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').tema({period: 3, real: 'close'}) */
/**
 * @Summary Vector Degree Conversion
 * @name MonkeySet.Indicator#todeg
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns degrees {array} from the todeg simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').todeg({real: 'close'}) */
/**
 * @Summary Vector Radian Conversion
 * @name MonkeySet.Indicator#torad
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns radians {array} from the torad simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').torad({real: 'close'}) */
/**
 * @Summary True Range
 * @name MonkeySet.Indicator#tr
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns tr {array} from the tr indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').tr() */
/**
 * @Summary Triangular Moving Average
 * @name MonkeySet.Indicator#trima
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns trima {array} from the trima overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').trima({period: 4, real: 'close'}) */
/**
 * @Summary Trix
 * @name MonkeySet.Indicator#trix
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns trix {array} from the trix indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').trix({period: 5, real: 'close'}) */
/**
 * @Summary Vector Truncate
 * @name MonkeySet.Indicator#trunc
 * @function
 * @param options {object} Options to pass along to the simple function
 * @param options.inputs.real The input real
 * @returns trunc {array} from the trunc simple function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').trunc({real: 'close'}) */
/**
 * @Summary Time Series Forecast
 * @name MonkeySet.Indicator#tsf
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns tsf {array} from the tsf overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').tsf({period: 4, real: 'close'}) */
/**
 * @Summary Typical Price
 * @name MonkeySet.Indicator#typprice
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns typprice {array} from the typprice overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').typprice() */
/**
 * @Summary Ultimate Oscillator
 * @name MonkeySet.Indicator#ultosc
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.medium period The option medium period
 * @param options.options.long period The option long period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns ultosc {array} from the ultosc indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').ultosc({'short period': 4, 'medium period': 4, 'long period': 6}) */
/**
 * @Summary Variance Over Period
 * @name MonkeySet.Indicator#var
 * @function
 * @param options {object} Options to pass along to the math function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns var {array} from the var math function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').var({period: 4, real: 'close'}) */
/**
 * @Summary Vertical Horizontal Filter
 * @name MonkeySet.Indicator#vhf
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns vhf {array} from the vhf indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').vhf({period: 5, real: 'close'}) */
/**
 * @Summary Variable Index Dynamic Average
 * @name MonkeySet.Indicator#vidya
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.options.alpha The option alpha
 * @param options.inputs.real The input real
 * @returns vidya {array} from the vidya overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').vidya({'short period': 4, 'long period': 5, alpha: 4.4549397858010185, real: 'close'}) */
/**
 * @Summary Annualized Historical Volatility
 * @name MonkeySet.Indicator#volatility
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns volatility {array} from the volatility indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').volatility({period: 6, real: 'close'}) */
/**
 * @Summary Volume Oscillator
 * @name MonkeySet.Indicator#vosc
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.short period The option short period
 * @param options.options.long period The option long period
 * @param options.inputs.volume The input volume
 * @returns vosc {array} from the vosc indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').vosc({'short period': 3, 'long period': 6}) */
/**
 * @Summary Volume Weighted Moving Average
 * @name MonkeySet.Indicator#vwma
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.close The input close
 * @param options.inputs.volume The input volume
 * @returns vwma {array} from the vwma overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').vwma({period: 6}) */
/**
 * @Summary Williams Accumulation/Distribution
 * @name MonkeySet.Indicator#wad
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns wad {array} from the wad indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').wad() */
/**
 * @Summary Weighted Close Price
 * @name MonkeySet.Indicator#wcprice
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns wcprice {array} from the wcprice overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').wcprice() */
/**
 * @Summary Wilders Smoothing
 * @name MonkeySet.Indicator#wilders
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns wilders {array} from the wilders overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').wilders({period: 6, real: 'close'}) */
/**
 * @Summary Williams %R
 * @name MonkeySet.Indicator#willr
 * @function
 * @param options {object} Options to pass along to the indicator function
 * @param options.options.period The option period
 * @param options.inputs.high The input high
 * @param options.inputs.low The input low
 * @param options.inputs.close The input close
 * @returns willr {array} from the willr indicator function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').willr({period: 4}) */
/**
 * @Summary Weighted Moving Average
 * @name MonkeySet.Indicator#wma
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns wma {array} from the wma overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').wma({period: 5, real: 'close'}) */
/**
 * @Summary Zero-Lag Exponential Moving Average
 * @name MonkeySet.Indicator#zlema
 * @function
 * @param options {object} Options to pass along to the overlay function
 * @param options.options.period The option period
 * @param options.inputs.real The input real
 * @returns zlema {array} from the zlema overlay function
 * @example
 * monkeyset.fetch('sets').last(20).convert('ohlc').zlema({period: 4, real: 'close'}) */