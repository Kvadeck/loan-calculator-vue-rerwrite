
const app = Vue.createApp({
    template: `
      <form id="formCalculator"
            class="form-calculator"
            name="formCalculator"
      >
      
      <SumRange></SumRange>
      
      <DaysRange></DaysRange>
      
      <CheckBox></CheckBox>
      
      <SubmitBtn></SubmitBtn>
      
      </form>`,
    components: {
        'SumRange': CalcSumRange,
        'DaysRange': CalcDaysRange,
        'CheckBox': CalcCheckbox,
        'SubmitBtn': CalcSubmitBtn
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        // rangePrice() {
        //     return (getLocalStorage("creditCalcPrice"))
        //         ? getLocalStorage("creditCalcPrice").replace(/ +/g, '') / 1000
        //         : 200
        // },
    },
    watch: {},
    created() {}
});

app.mount('#vue-calc')