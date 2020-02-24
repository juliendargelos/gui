import { TextField, TextFieldParameters } from '~/fields/text-field'
import { NumberField, NumberFieldParameters } from '~/fields/number-field'
import { ColorField, ColorFieldParameters } from '~/fields/color-field'
import { SelectField, SelectFieldParameters } from '~/fields/select-field'
import { CheckboxField, CheckboxFieldParameters } from '~/fields/checkbox-field'
import { FileField, FileFieldParameters } from '~/fields/file-field'
import { ImageField, ImageFieldParameters } from '~/fields/image-field'
import { MethodField, MethodFieldParameters } from '~/fields/method-field'

export {
  TextField,
  TextFieldParameters,

  NumberField,
  NumberFieldParameters,

  ColorField,
  ColorFieldParameters,

  SelectField,
  SelectFieldParameters,

  CheckboxField,
  CheckboxFieldParameters,

  FileField,
  FileFieldParameters,

  ImageField,
  ImageFieldParameters,

  MethodField,
  MethodFieldParameters
}

export const Fields = {
  text: TextField,
  color: ColorField,
  number: NumberField,
  select: SelectField,
  checkbox: CheckboxField,
  file: FileField,
  image: ImageField,
  method: MethodField
}
