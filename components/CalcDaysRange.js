const CalcDaysRange = {
    template: `<fieldset>
        <div class="range-info flex">
          <p>Срок</p>
          <div class="range-num date flex">
            <span class="range-info-text">
                {{dayDigit}}
            </span>
            <span class="range-info-text" >
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
            v-on:change="changeDataHandler"
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
        day: {
            type: String,
        }
    },
    data() {
        return {
            dataDays,
            dayIndex: this.day,
        }
    },
    computed: {
        progressDaysStyle() {
            return setProgressStyle(this.dayIndex, this.max, this.min, '#FF905A', '#FFEBE0')
        },
        dayDigit() {
            return this.dataDays[this.dayIndex][0];
        },
        dayString() {
            return this.dataDays[this.dayIndex][1];
        }
    },
    methods: {
        changeDataHandler() {
            this.$emit('get-day-value', this.dayIndex);
        }
    }
};