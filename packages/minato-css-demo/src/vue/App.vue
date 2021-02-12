<template lang="pug">
div.container
  h2.section Text Input
  div.mcss-text-input-container
    input.mcss-text-input(type='text' placeholder='Text')
  div.mcss-text-input-container
    input.mcss-text-input(type='email' placeholder='Email')
  div.mcss-text-input-container
    input.mcss-text-input(type='password' placeholder='Password')
  div.mcss-text-input-container
    input.mcss-text-input(type='text' placeholder='Disabled' disabled)
  h2.section Checkbox
  div.mcss-checkbox-group
    label.mcss-checkbox-container
      input.mcss-checkbox(type='checkbox')
      span.mcss-checkbox-label Check me!
    label.mcss-checkbox-container
      input.mcss-checkbox(type='checkbox')
      span.mcss-checkbox-label Check me!
    label.mcss-checkbox-container
      input.mcss-checkbox(type='checkbox' disabled)
      span.mcss-checkbox-label Disabled
    label.mcss-checkbox-container
      input.mcss-checkbox(type='checkbox' disabled checked)
      span.mcss-checkbox-label Disabled (checked)
  h2.section Switch
  div.mcss-checkbox-group
    label.mcss-switch-container
      input.mcss-switch(type='checkbox')
      span.mcss-switch-label Do not disturb
    label.mcss-switch-container
      input.mcss-switch(type='checkbox' disabled)
      span.mcss-switch-label Disabled
    label.mcss-switch-container
      input.mcss-switch(type='checkbox' disabled checked)
      span.mcss-switch-label Disabled (checked)
  h2.section Radio Button 
  div.mcss-checkbox-group
    label.mcss-radio-container
      input.mcss-radio(type='radio' name='a' value='10')
      span.mcss-radio-label Katagiri Nanase
    label.mcss-radio-container
      input.mcss-radio(type='radio' name='a' value='20')
      span.mcss-radio-label Watarai Hinami
    label.mcss-radio-container
      input.mcss-radio(type='radio' name='a' value='30')
      span.mcss-radio-label Hotori Misaki
    label.mcss-radio-container
      input.mcss-radio(type='radio' name='a' value='40' disabled)
      span.mcss-radio-label Kotoyose Fumino
    label.mcss-radio-container
      input.mcss-radio(type='radio' name='b' value='40' disabled checked)
      span.mcss-radio-label Tachibana Asane
  h2.section Dropdown
  div.mcss-selector
    select.mcss-select
      option.mcss-option(disabled value=0 selected) Select
      option.mcss-option(value=1) Reizeiin Tohka
      option.mcss-option(value=2) Tadasugawa Rei
      option.mcss-option(value=3) Onabuta Ikuko
  div.mcss-selector.mcss-disabled
    select.mcss-select(disabled)
      option.mcss-option(disabled value=0 selected) Disabled
  h2.mcss-section Buttons
  div.mcss-button-group
    button.mcss-button(type='reset') Reset
    button.mcss-button(type='button' disabled) Disabled
    button.mcss-button(type='submit' data-primary) Submit
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
