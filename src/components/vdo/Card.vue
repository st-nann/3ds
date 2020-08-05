<template>
  <div>
    <v-row justify-xs="center">
      <v-col
        xs="12"
        sm="4"
        v-for="(item, index) in lists" :key="index"
      >
        <v-card class="mx-auto my-3 elevation-5">
          <youtube
            :video-id="item.id.videoId"
            style="background: #3C1D25;"
            player-width="100%"
            :player-height="280"
            :player-vars="{ start: 0, autoplay: 0 }"
          ></youtube>
          <v-card-text>
            <div class="text-truncate font-weight-bold black--text">
              {{ item.snippet.title }}
            </div>
            <div>
              <v-icon
                :size="18"
                color="gray darken-2"
                class="mr-1 mt-2"
                style="vertical-align: baseline !important;"
              >
                mdi-youtube-tv
              </v-icon>
              {{ item.snippet.channelTitle }}
            </div>
            <div class="caption">
              <v-icon
                :size="14"
                color="gray darken-2"
                class="mr-1"
              >
                mdi-progress-clock
              </v-icon>
              publish at {{ item.snippet.publishedAt | date }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { watchVdo } from "@/services/Function";
import { getIdFromURL, getTimeFromURL } from "vue-youtube-embed";

@Component({})

export default class Card extends Vue {
  @Prop({ default: [] }) public lists!: object[];
}
</script>
