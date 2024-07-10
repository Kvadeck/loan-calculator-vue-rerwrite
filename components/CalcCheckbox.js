const CalcCheckbox = {
    template: `<div class="checkbox-text">
        <label for="is_agree_public_offer" class="checkbox">
          <input v-on:change="changeHandler" v-model="checked" id="is_agree_public_offer" type="checkbox">
          <span class="checkbox-text__span">Стоимость услуги платная 249 ₸, каждые 6 дней</span>
          <span class="checkmark"></span>
        </label>
        <div v-if="error" class="checkbox-error">
          <span class="error">Вы должны согласиться с условиями</span>
        </div>
      </div>`,
    props: {
        error: {
            type: Boolean
        }
    },
    data() {
        return {
            checked: false,
        }
    },
    methods: {
        changeHandler() {
            this.$emit('change-checked', this.checked);
        }
    },
    emits:['change-checked']
};