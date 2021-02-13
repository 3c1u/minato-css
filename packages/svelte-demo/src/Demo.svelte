<script lang="ts">
import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Spacing,
  TextInput,
} from '@minato-css/svelte'

let disabled = false
let radioGroup = 10
</script>

<div>
  <h1 class="mcss-mx-4 mcss-my-4">@minato-css/svelte Demo</h1>
  <div class="content mcss-mx-4 mcss-my-4">
    <Card>
      <TextInput placeholder="Text input" />
      <CheckboxGroup>
        <Checkbox bind:checked={disabled}>Check me!</Checkbox>
        <Checkbox>Check me!</Checkbox>
        <Checkbox disabled>Check me!</Checkbox>
      </CheckboxGroup>
      <RadioGroup name="nukitashi">
        <Radio bind:group={radioGroup} value={10}>Katagiri Nanase</Radio>
        <Radio bind:group={radioGroup} value={20}>Watarai Hinami</Radio>
        <Radio bind:group={radioGroup} value={30}>Hotori Misaki</Radio>
      </RadioGroup>
      <ButtonGroup>
        <Button {disabled}>Normal Button</Button>
        <Spacing />
        <Button danger>Danger Button</Button>
        <Button primary>Primary Button</Button>
      </ButtonGroup>
    </Card>
  </div>
</div>
