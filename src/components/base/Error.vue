<template>
    <v-row class="bg" align="stretch">
      <v-col cols="12">
          <v-row>
            <v-col cols="4">
              <v-card color="red">
                  <v-btn color="red" class="red--text">dddjknkkd</v-btn>
                <slot name="content"></slot>
              </v-card>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Error extends Vue {
}
</script>
