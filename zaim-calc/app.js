const app = Vue.createApp({
    data() {
        return {
            title: 'Оформление заявки',
            colorFilled: '#FF905A',
            colorEmpty: '#FFEBE0',
            rangeSumValue: '150',
            min: '10',
            max: '500',
        };
    },
    methods: {},
    computed: {
        rangeSumProgressStyle() {

            let sum = this.max - this.min;
            let current = this.rangeSumValue - this.min;
            const num = ((current / sum) * 100);

            // return `
            // linear-gradient(to right,
            // ${this.colorFilled} 0%,
            // ${this.colorFilled} 0%,
            // ${this.colorEmpty} 30%, ${this.colorEmpty} 100%)`
        }
    },
    watch: {
        rangeSumValue() {
            // linear-gradient(to right, #FF905A 0%, #FF905A 30%, #FFEBE0 30%, #FFEBE0 100%)
            // return
            // linear-gradient(to right,${colorFilled} 0%,
            // ${colorFilled} ${num}%,
            // ${colorEmpty} ${num}%,
            // ${colorEmpty} 100%
        }
    }
});

app.mount('#app');