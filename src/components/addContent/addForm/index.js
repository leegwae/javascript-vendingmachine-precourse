import Form from '../../form/index.js';
import {
  ID_FORM_ADD,
  KEY_INPUT_NAME,
  KEY_INPUT_PRICE,
  KEY_INPUT_QUANTITY,
  LIST_KEY_INPUT,
  DICT_ID_INPUT,
  DICT_PLACEHOLDER_INPUT,
  DICT_TYPE_INPUT,
  ID_BUTTON_ADD,
  TEXT_BUTTON_ADD,
  ERROR_INVALID_NAME,
  ERROR_INVALID_PRICE,
  ERROR_INVALID_QUANTITY,
} from './const.js';
import createInput from '../../utils/createInput.js';

import Product from '../../../model/Product.js';
import { addProduct } from '../../../library/storage/products.js';
import isValidProductName from '../../../machine/utils/product/isValidProductName.js';
import isValidProductPrice from '../../../machine/utils/product/isValidProductPrice.js';
import isValidProductQuantity from '../../../machine/utils/product/isValidProductQuantity.js';

class AddForm extends Form {
  constructor() {
    super(ID_FORM_ADD);
    this.inputs = {};
    this.initInputs();
    this.initButton();
  }

  initInputs() {
    LIST_KEY_INPUT.forEach((inputKey) => {
      const input = createInput(
        DICT_ID_INPUT[inputKey],
        DICT_TYPE_INPUT[inputKey],
        DICT_PLACEHOLDER_INPUT[inputKey]
      );

      this.appendInput(input);
      this.inputs[inputKey] = input;
    });
  }

  initButton() {
    this.button.id = ID_BUTTON_ADD;
    this.button.innerText = TEXT_BUTTON_ADD;
  }

  getInputValueByKey(key) {
    return this.inputs[key].value;
  }

  onButtonClick() {
    const name = this.getInputValueByKey(KEY_INPUT_NAME);
    const price = this.getInputValueByKey(KEY_INPUT_PRICE);
    const quantity = this.getInputValueByKey(KEY_INPUT_QUANTITY);

    const isValidName = isValidProductName(name);
    const isValidPrice = isValidProductPrice(price);
    const isValidQuantity = isValidProductQuantity(quantity);
    if (!isValidName) alert(ERROR_INVALID_NAME);
    if (!isValidPrice) alert(ERROR_INVALID_PRICE);
    if (!isValidQuantity) alert(ERROR_INVALID_QUANTITY);

    if (!isValidName || !isValidPrice || !isValidQuantity) return;

    addProduct(new Product(name, price, quantity));
  }
}

export default AddForm;
