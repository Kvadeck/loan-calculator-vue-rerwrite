const CalcDaysRange = {
    template: `<fieldset>
        <div class="range-info flex">
          <p>Срок</p>
          <div class="range-num date flex">
            <span id="numTime" class="range-info-text">14</span>
            <span class="range-info-text" id="numDate">дней</span>
          </div>
        </div>
        <input type="range" min="0" max="40" value="14" class="input-range w-14" id="rangeTime"/>
        <div class="range-ruler">
          <span class="range-info-text">1 день</span>
          <span class="range-info-text">12 месяцев</span>
        </div>
      </fieldset>`,
    data() {
        return {
            dataDays
        }
    }
};