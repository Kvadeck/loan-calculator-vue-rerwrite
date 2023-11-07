const CalcVue = Vue.createApp({
    data() {
        return {
            title: 'Оформление заявки'
        };
    },
    template: `
      <form id="formCalculator"
            class="form-calculator"
            name="formCalculator"
      >
      <fieldset>
        <div class="range-info">
          <div class="range-info-text">
            Сумма <strong class="range-info-text">ПОД 0,01%</strong>
          </div>
          <div class="range-info__num">
            <input id="numSum" type="text" class="range-info-text range-info__input" inputmode="numeric">
            <span class="range-info-text">&nbsp;₸</span>
          </div>
        </div>
        <input id="rangeSum" type="range" class="input-range w-30">
        <div class="range-ruler">
          <span class="range-info-text">10 000 ₸</span>
          <span class="range-info-text">500 000 ₸</span>
        </div>
      </fieldset>
      <fieldset>
        <div class="range-info flex">
          <p>Срок</p>
          <div class="range-num date flex">
            <span id="numTime" class="range-info-text" data-day="14">14</span>
            <span class="range-info-text" id="numDate">дней</span>
          </div>
        </div>
        <input type="range" min="0" max="40" value="14" class="input-range w-14" id="rangeTime"/>
        <div class="range-ruler">
          <span class="range-info-text">1 день</span>
          <span class="range-info-text">12 месяцев</span>
        </div>
      </fieldset>

      <div class="checkbox-text">
        <label for="id_is_agree_public_offer" class="checkbox">
          <input id="id_is_agree_public_offer" name="is_agree_public_offer" type="checkbox">
          <span class="checkbox-text__span">Стоимость услуги платная 249 ₸, каждые 6 дней</span>
          <span class="checkmark"></span>
        </label>
        <div id="id_is_agree_error" class="checkbox-error" style="display: none;">
          <span class="error">Вы должны согласиться с условиями</span>
        </div>
      </div>
      <fieldset class="box-fot">
        <div class="btn-box">
          <a id="submitCalculator" href="/questionary/registration/" class="btn-box__submit btn duration">Оформить
            заявку</a>
        </div>
      </fieldset>
      </form>`,
    methods: {},
    computed: {},
    watch: {},
});

CalcVue.mount('#vue-calc')