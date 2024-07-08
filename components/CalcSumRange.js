const CalcSumRange = {
    template: `<fieldset>
        <div class="range-info">
          <div class="range-info-text">
            Сумма <strong class="range-info-text">ПОД 0,01%</strong>
          </div>
          <div class="range-info__num">
          
            <input
                @focus="focusInHandler"
                @focusout="focusOutHandler" 
                :value="priceInputValue"
                @input="changePriceHandler"
                class="range-info-text range-info__input"
            >
                
            <span class="range-info-text">&nbsp;{{currency}}</span>
          </div>
        </div>
        
        <input 
            :style="progressPriceStyle"
            v-model="priceValue"
            type="range" 
            :min="priceMin"
            :max="priceMax"
            class="input-range w-30"
        >
        
        <div class="range-ruler">
          <span class="range-info-text">{{ priceMin }} 000 {{currency}}</span>
          <span class="range-info-text">{{ priceMax }} 000 {{currency}}</span>
        </div>
      </fieldset>`,
    props: {
        currency: {
            type: String,
            default: '₽'
        },
        max: {
            type: Number,
            default: 100
        },
        min: {
            type: Number,
            default: 10
        },
        decimal: {
            type: Number,
            default: 1000
        },
        price: {
            type: Number,
            default: 40
        }
    },

    data() {
        // TODO: Set value for priceValue from localStorage if exist.
        return {
            priceMax: this.max,
            priceMin: this.min,
            decimalPlace: this.decimal,
            priceValue: this.price,
        }
    },
    computed: {
        progressPriceStyle() {
            return setProgressStyle(this.priceValue, this.priceMax, this.priceMin, '#FF905A', '#FFEBE0')
        },
        priceInputValue: {
            get() {
                return formatInputPrice(this.priceValue * this.decimalPlace)
            },
        }
    },
    methods: {
        focusInHandler({target}) {
            target.value = target.value.replace(/ +/g, '');
        },
        focusOutHandler({target}) {

            const maxDecimal = this.priceMax * this.decimalPlace;
            const minDecimal = this.priceMin * this.decimalPlace;

            // Set priceMax value if current is bigger and opposite
            if (target.value > maxDecimal) {
                this.priceValue = this.priceMax;
                target.value = maxDecimal;
            } else if (target.value < minDecimal) {
                this.priceValue = this.priceMin;
                target.value = minDecimal;
            } else {
                this.priceValue = Math.round(target.value / this.decimalPlace);
                target.value = formatInputPrice(this.priceValue * this.decimalPlace)
            }

        },
        changePriceHandler({target}) {

            const maxDecimal = this.priceMax * this.decimalPlace;

            if (target.value > maxDecimal) {
                target.value = maxDecimal;
            }

            // Removes zeros in the beginning
            target.value = target.value.replace(/^0+/, '');

            // Removes letters from input
            target.value = target.value.replace(/\D/g, '');
        }
    },
};