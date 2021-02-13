<script lang="ts">
import { CheckboxGroup, Checkbox } from '@minato-css/svelte'
</script>

<CheckboxGroup>
  <Checkbox value={10}>Katagiri Nanase</Checkbox>
  <Checkbox value={20}>Watarai Hinami</Checkbox>
  <Checkbox value={30}>Hotori Misaki</Checkbox>
  <Checkbox value={40} disabled>Kotoyose Fumino</Checkbox>
</CheckboxGroup>
