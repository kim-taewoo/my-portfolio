
<template>
  <v-combobox
    hide-details
    v-model="chips"
    :items="items"
    label="분류"
    prepend-inner-icon="filter_list"
    chips
    clearable
    solo
    multiple
  >
    <template v-slot:selection="data">
      <v-chip :selected="data.selected" close @input="remove(data.item)">
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>


<script>
export default {
  data() {
    return {
      chips: ["DATA", "DEV", "BIZ"],
      items: ["DATA", "DEV", "BIZ"]
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</script>