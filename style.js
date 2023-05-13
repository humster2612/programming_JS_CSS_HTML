function checkIfNotEmpty(input) {
    if (input.value.trim() === "") {
      input.setCustomValidity("To pole jest wymagane.");
    } else {
      input.setCustomValidity("");
    }
  }
  
  function checkLength(input, minLength, maxLength) {
    if (input.value.length < minLength) {
      input.setCustomValidity("To pole musi zawierać co najmniej " + minLength + " znaków.");
    } else if (input.value.length > maxLength) {
      input.setCustomValidity("To pole może zawierać maksymalnie " + maxLength + " znaków.");
    } else {
      input.setCustomValidity("");
    }
  }
  
  function checkEmail(input) {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(input.value)) {
      input.setCustomValidity("To pole musi zawierać poprawny adres email.");
    } else {
      input.setCustomValidity("");
    }
  }
  
  function checkPasswordStrength(input) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordPattern.test(input.value)) {
      input.setCustomValidity("To pole musi zawierać co najmniej 8 znaków, w tym jedną małą literę, jedną wielką literę i jedną cyfrę.");
    } else {
      input.setCustomValidity("");
    }
  }


  function checkDateOfBirth(input) {
    const dateOfBirth = new Date(input.value);
    const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    if (ageInYears < 18) {
      input.setCustomValidity("Musisz być pełnoletnia, aby wypełnić ten formularz.");
    } else {
      input.setCustomValidity("");
    }
  }

  


  const countrySelect = document.getElementById('country');
  const provinceInputDiv = document.getElementById('provinceInput');

  function showProvinceInput() {
    if (countrySelect.value === 'Polska') {
      provinceInputDiv.innerHTML = `
        <label>
          Województwo:
          <select id="province" name="province">
            <option value="">Wybierz województwo</option>
            <option value="dolnośląskie">dolnośląskie</option>
            <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
            <option value="lubelskie">lubelskie</option>
          </select>
        </label>
        <br>
      `;
    } else {
      provinceInputDiv.innerHTML = `
        <label>
          Województwo:
          <input type="text" id="province" name="province">
        </label>
        <br>
      `;
    }
  }

  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', function (event) {
    event.target.value = event.target.value.replace(/\D/g, '');
  });


