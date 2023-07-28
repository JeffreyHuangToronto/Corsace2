<template>
    <div class="mappool">
        <div class="mappool__main_content">
            <OpenTitle>
                {{ $t('open.mappool.title') }}
                <template #buttons>
                    <!-- <StageSelector>
                        <template #top_text>
                            STAGE
                        </template>
                        <template #bottom_text>
                            SELECT
                        </template>
                        <template #left_button>
                            <div @click.native="selectedStage = 1" />
                        </template>
                        <template #stage>
                            {{ stage.abbreviation }}
                        </template>
                        <template #right_button>
                            <div @click.native="selectedStage = 2" />
                        </template>
                    </StageSelector> -->
                    <div class="stage_selector">
                        <div class="stage_selector__text">
                            <span>
                                STAGE
                            </span>
                            <span>
                                SELECT
                            </span>
                        </div>
                        <div class="stage_selector_buttons">
                            <div
                                class="stage_selector_buttons__left"
                                @click="selectedStage -= 1"
                            />
                            <div class="stage_selector_buttons__selected">
                                {{ stage?.abbreviation }}
                            </div>
                            <a
                                class="stage_selector_buttons__right"
                                @click="selectedStage += 1"
                            />
                        </div>
                    </div>
                    <!-- TODO: NOT MAKE THIS A STATIC LINK LOL -->
                    <a 
                        href="https://docs.google.com/spreadsheets/d/1Bl-G_jKyxxMrTtgEJ6j2uYnHtDoPz8uG_flSKWkc734/edit#gid=2089223782"
                        class="qualifiers__button"
                    >
                        <div class="qualifiers__button_text">
                            {{ $t('open.qualifiers.mappool.sheets') }}
                        </div>
                        <img 
                            class="qualifiers__button_ico" 
                            src="../../Assets/img/site/open/mappool/sheets-ico.svg"
                        >
                    </a>
                    <a
                        :href="stage?.mappool?.[0].mappackLink || ''"
                        class="qualifiers__button"
                    >
                        <div class="qualifiers__button_text">
                            {{ $t('open.qualifiers.mappool.mappool') }}
                        </div>
                        <img 
                            class="qualifiers__button_ico"
                            src="../../Assets/img/site/open/mappool/dl-ico.svg"
                        >
                    </a>
                </template>
            </OpenTitle>
            <MappoolView
                v-if="stage?.mappool?.[0].isPublic"
                :pool="stage.mappool[0]"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch} from "vue-property-decorator";
import { namespace } from "vuex-class";

import MappoolView from "../../Assets/components/open/MappoolView.vue";
import OpenTitle from "../../Assets/components/open/OpenTitle.vue";
import StageSelector from "../../Assets/components/open/StageSelector.vue";

import { Tournament } from "../../Interfaces/tournament";
import { Stage } from "../../Interfaces/stage";

const openModule = namespace("open");

@Component({
    components: {
        StageSelector,
        MappoolView,
        OpenTitle,
    },
    head () {
        return {
            title: this.$store.state["open"].title,
            meta: [
                {hid: "description", name: "description", content: this.$store.state["open"].tournament.description},

                {hid: "og:site_name", property: "og:site_name", content: this.$store.state["open"].title},
                {hid: "og:title", property: "og:title", content: this.$store.state["open"].title},
                {hid: "og:url", property: "og:url", content: `https://open.corsace.io${this.$route.path}`}, 
                {hid: "og:description", property: "og:description", content: this.$store.state["open"].tournament.description},
                {hid: "og:image",property: "og:image", content: require("../../Assets/img/site/open/banner.png")},
                
                {name: "twitter:title", content: this.$store.state["open"].title},
                {name: "twitter:description", content: this.$store.state["open"].tournament.description},
                {name: "twitter:image", content: require("../../Assets/img/site/open/banner.png")},
                {name: "twitter:image:src", content: require("../../Assets/img/site/open/banner.png")},
            ],
            link: [{rel: "canonical", hid: "canonical", href: `https://open.corsace.io${this.$route.path}`}],
        };
    },
})
export default class Mappool extends Vue {

    @openModule.State tournament!: Tournament | null;

    selectedStage = 0;
    selectedMappool = 0;

    get stageList (): {
        ID: number; 
        name: string; 
        order: number;
    }[] {
        const stages = this.tournament?.stages.map<{
            ID: number; 
            name: string; 
            order: number;
        }>(s => {
            return {
                ID: s.ID,
                name: s.name,
                order: s.order,
            };
        }) || [];

        return stages;
    }

    @Watch("stageList", { immediate: true })
    onstageListChanged (list: {ID: number; name: string}[]) {
        if (list.length > 0)
            this.selectedStage = list[0]?.ID || 0;
        console.log(list);
    }

    get stage (): Stage | null {
        console.log(this.tournament?.stages.length);
        // console.log(this.tournament?.stages.forEach((s)=>{
        //     console.log(s.ID);
        // }));
        return this.tournament?.stages.find(s => s.ID === this.selectedStage) || null;
    }

    @Watch("stage", { immediate: true })
    onStageChanged (stage: Stage | null) {
        if (stage)
            this.selectedMappool = stage.mappool[0]?.ID || 0;
    }

    // cycleStage (direction: number){
    //     let newStage = this.selectedStage + direction;
    //     if (newStage > this.stageList.length - 1 || newStage < 1){
    //         return;
    //     }
    //     this.selectedStage = newStage;
    // }
}
</script>

<style lang="scss">
@import '@s-sass/_variables';
.mappool {
    background: linear-gradient(180deg, #1F1F1F 0%, #131313 100%);
    overflow: auto;

    &__main_content {
        align-self: center;
        position: relative;
        width: 65vw;
        padding: 35px;
        background: linear-gradient(180deg, #1B1B1B 0%, #333333 261.55%);
    }
}
</style>
```