<template lang="pug">
div.container
  h2.section Text Input
  div.text-input-container
    input.text-input(type='text' placeholder='Text')
  div.text-input-container
    input.text-input(type='email' placeholder='Email')
  div.text-input-container
    input.text-input(type='password' placeholder='Password')
  div.text-input-container
    input.text-input(type='text' placeholder='Disabled' disabled)
  h2.section Checkbox
  div.checkbox-group
    label.checkbox-container
      input.checkbox(type='checkbox')
      span.checkbox-label Check me!
    label.checkbox-container
      input.checkbox(type='checkbox')
      span.checkbox-label Check me!
    label.checkbox-container
      input.checkbox(type='checkbox' disabled)
      span.checkbox-label Disabled
    label.checkbox-container
      input.checkbox(type='checkbox' disabled checked)
      span.checkbox-label Disabled (checked)
  h2.section Switch
  div.checkbox-group
    label.switch-container
      input.switch(type='checkbox')
      span.switch-label Do not disturb
    label.switch-container
      input.switch(type='checkbox' disabled)
      span.switch-label Disabled
    label.switch-container
      input.switch(type='checkbox' disabled checked)
      span.switch-label Disabled (checked)
  h2.section Radio Button 
  div.checkbox-group
    label.radio-container
      input.radio(type='radio' name='a' value='10')
      span.radio-label Katagiri Nanase
    label.radio-container
      input.radio(type='radio' name='a' value='20')
      span.radio-label Watarai Hinami
    label.radio-container
      input.radio(type='radio' name='a' value='30')
      span.radio-label Hotori Misaki
    label.radio-container
      input.radio(type='radio' name='a' value='40' disabled)
      span.radio-label Kotoyose Fumino
    label.radio-container
      input.radio(type='radio' name='b' value='40' disabled checked)
      span.radio-label Tachibana Asane
  h2.section Dropdown
  div.selector
    select.select
      option.option(disabled value=0 selected) Select
      option.option(value=1) Reizeiin Tohka
      option.option(value=2) Tadasugawa Rei
      option.option(value=3) Onabuta Ikuko
  div.selector.disabled
    select.select(disabled)
      option.option(disabled value=0 selected) Disabled
  h2.section Buttons
  div.button-group
    button.button(type='reset') Reset
    button.button(type='button' disabled) Disabled
    button.button.primary(type='submit') Submit
</template>
<script lang="ts">
import '@minato-css/minato-css';
</script>
<style lang="scss" scoped>
$typo-secondary: #888;
$typo-tertiary: #aab;

.heading {
  color: $typo-tertiary;
  text-shadow: 0 -1px 0 $typo-secondary;
  font-size: 24px;
}

.section {
  color: $typo-secondary;
  font-size: 18px;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  padding: 20px 20px 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dddfe5;
  font-family: "Open Sans", sans-serif;
}
</style>
