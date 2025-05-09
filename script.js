const minInput = document.querySelector('.min-input');
        const maxInput = document.querySelector('.max-input');
        const minRange = document.querySelector('.min-range');
        const maxRange = document.querySelector('.max-range');

        const rangeGap = 100;

        function updateInputsFromRange() {
            minInput.value = minRange.value;
            maxInput.value = maxRange.value;
        }

        function updateRangesFromInput() {
            minRange.value = minInput.value;
            maxRange.value = maxInput.value;
        }

        minRange.addEventListener('input', () => {
            if (parseInt(minRange.value) + rangeGap > parseInt(maxRange.value)) {
                minRange.value = parseInt(maxRange.value) - rangeGap;
            }
            updateInputsFromRange();
        });

        maxRange.addEventListener('input', () => {
            if (parseInt(maxRange.value) - rangeGap < parseInt(minRange.value)) {
                maxRange.value = parseInt(minRange.value) + rangeGap;
            }
            updateInputsFromRange();
        });

        minInput.addEventListener('input', () => {
            if (parseInt(minInput.value) + rangeGap > parseInt(maxInput.value)) {
                minInput.value = parseInt(maxInput.value) - rangeGap;
            }
            updateRangesFromInput();
        });

        maxInput.addEventListener('input', () => {
            if (parseInt(maxInput.value) - rangeGap < parseInt(minInput.value)) {
                maxInput.value = parseInt(minInput.value) + rangeGap;
            }
            updateRangesFromInput();
        });