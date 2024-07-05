const CalcCheckbox = {
    template: `<div class="checkbox-text">
        <label for="id_is_agree_public_offer" class="checkbox">
          <input id="id_is_agree_public_offer" name="is_agree_public_offer" type="checkbox">
          <span class="checkbox-text__span">Стоимость услуги платная 249 ₸, каждые 6 дней</span>
          <span class="checkmark"></span>
        </label>
        <div id="id_is_agree_error" class="checkbox-error" style="display: none;">
          <span class="error">Вы должны согласиться с условиями</span>
        </div>
      </div>`,
    data() {
        return {}
    }
};