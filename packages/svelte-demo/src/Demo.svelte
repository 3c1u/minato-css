<script>
import { Button, Card, Spacing, ButtonGroup, TextInput } from '@minato-css/svelte'
</script>

<div>
  <h1 class="mcss-mx-4 mcss-my-4">@minato-css/svelte Demo</h1>
  <Card>
    <ButtonGroup>
      <Button>Normal Button</Button>
      <Spacing />
      <Button danger>Danger Button</Button>
      <Button primary>Primary Button</Button>
    </ButtonGroup>
    <TextInput placeholder="Text input"/>
  </Card>
</div>
