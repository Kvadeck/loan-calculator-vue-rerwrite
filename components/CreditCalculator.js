const app = Vue.createApp({
    template: `
    <div v-if="isSubmitted" class="form-is-submitted">
        Form is submitted! <span class="go-back-link" @click="goBackHandler">Back</span>
     </div>
     <div v-else>
         <form @keydown.enter.prevent @submit.prevent="submitHandler" class="form-calculator">
            <SumRange :price="price" @get-price-value="updatePrice"></SumRange>
            <DaysRange :day="day" @get-day-value="updateDay"></DaysRange>
            <CheckBox @change-checked="handleChecked" :error="isError"></CheckBox>
            <SubmitBtn></SubmitBtn>
          </form>
      </div>`,
    components: {
        SumRange: CalcSumRange,
        DaysRange: CalcDaysRange,
        CheckBox: CalcCheckbox,
        SubmitBtn: CalcSubmitBtn
    },
    data() {
        return {
            isSubmitted: false,
            isChecked: false,
            isError: false,
            price: getLocalStorage('calculator-price', '35'),
            day: getLocalStorage('calculator-day', '14'),
        };
    },
    methods: {
        handleChecked(newValue) {
            this.isChecked = newValue;
        },
        submitHandler() {
            if (this.isChecked) {
                setLocalStorage('calculator-price', this.price);
                setLocalStorage('calculator-day', this.day);
                return this.isSubmitted = true;
            } else {
                return this.isError = true;
            }
        },
        goBackHandler() {
            this.isSubmitted = false;
            this.isChecked = false
            this.isError = false;
        },
        updatePrice(data) {
            this.price = data;
        },
        updateDay(data) {
            this.day = data;
        },
    }
});

app.mount('#vue-calc')