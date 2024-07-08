const CalcDaysRange = {
    template: `<fieldset>
        <div class="range-info flex">
          <p>Срок</p>
          <div class="range-num date flex">
            <span id="numTime" class="range-info-text">
                {{dayDigit}}
            </span>
            <span id="numDate" class="range-info-text" >
                {{dayString}}
            </span>
          </div>
        </div>
        
        <input
            :style="progressDaysStyle"
            type="range" 
            :min="min" 
            :max="max"
            v-model="dayIndex"
            @input="changeHandler"
            class="input-range w-14" 
        />
        
        <div class="range-ruler">
          <span class="range-info-text">{{timeStart}}</span>
          <span class="range-info-text">{{timeEnd}}</span>
        </div>
        
      </fieldset>`,
    props: {
        max: {
            type: Number,
            default: 40
        },
        min: {
            type: Number,
            default: 0
        },
        timeStart: {
            type: String,
            default: '1 день'
        },
        timeEnd: {
            type: String,
            default: '12 месяцев'
        },
    },
    data() {
        return {
            dataDays,
            dayIndex: 14,
            max: this.max,
            min: this.min,
            dayDigit: 14,
            dayString: 'дней'
        }
    },
    computed: {
        progressDaysStyle() {
            return setProgressStyle(this.dayIndex, this.max, this.min, '#FF905A', '#FFEBE0')
        },
    },
    methods: {
        changeHandler({target}) {
            this.dayDigit = this.dataDays[target.value][0];
            this.dayString = this.dataDays[target.value][1];
        }
    }
};