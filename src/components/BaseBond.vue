<script setup>
import { ref, computed } from "vue";
import { getRotation } from '../utils'

// bondOrderType 0 C-H
// bondOrderType 13 C=C
// bondOrderType 14 C≡C
// bondOrderType 15 C=C/C-C 苯环


const { bondAtom1, bondAtom2, bondOrderType, bondOrder, color } = defineProps({
    bondAtom1: Object,
    bondAtom2: Object,
    bondOrderType: String,
    bondOrder: String,
    color: String,
});
const bondAtom1Info = computed(() => {
    return window.atomInfos[bondAtom1.symbol]
});
const bondAtom2Info = computed(() => {
    return window.atomInfos[bondAtom2.symbol]
});
const bondInfo = computed(() => {
    const { x: x1, y: y1, z: z1 } = bondAtom1
    const { x: x2, y: y2, z: z2 } = bondAtom2
    const x = (x1 + x2) / 2,
        y = (y1 + y2) / 2,
        z = (z1 + z2) / 2,
        length = Math.pow(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2), 0.5)

    return {
        position: `${x} ${y} ${z}`,
        length,
        rotation: getRotation([x, y, z], [x1, y1, z1])
    }
});

</script>
 
<template>
    <a-entity :position="bondInfo.position" :scale="`1 ${bondInfo.length / 0.2} 1`" :rotation="bondInfo.rotation">
        <template v-if="bondOrderType == 15">
        
            <a-entity :position="`${bondOrder==='1'?'':'-'}0.1 0 0`">
                <a-cylinder :color="bondAtom1Info.color" height="0.1" radius="0.05" position="0 -0.05 0"></a-cylinder>
                <a-cylinder :color="bondAtom2Info.color" height="0.1" radius="0.05" position="0 0.05 0"></a-cylinder>
            </a-entity>
            <a-entity :position="`${bondOrder==='1'?'-':''}0.1 0 0`">
                <a-cylinder :color="bondAtom1Info.color" height="0.05" radius="0.05" position="0 0 0"></a-cylinder>
            </a-entity>
        </template>
        <template v-else-if="bondOrderType == 14">
            <a-entity position="0.15 0 0">
                <a-cylinder :color="bondAtom1Info.color" height="0.1" radius="0.05" position="0 -0.05 0">
                </a-cylinder>
                <a-cylinder :color="bondAtom2Info.color" height="0.1" radius="0.05" position="0 0.05 0">
                </a-cylinder>
            </a-entity>
            <a-entity position="0 0 0">
                <a-cylinder :color="bondAtom1Info.color" height="0.1" radius="0.05" position="0 -0.05 0">
                </a-cylinder>
                <a-cylinder :color="bondAtom2Info.color" height="0.1" radius="0.05" position="0 0.05 0">
                </a-cylinder>
            </a-entity>
            <a-entity position="-0.15 0 0">
                <a-cylinder :color="bondAtom1Info.color" height="0.1" radius="0.05" position="0 -0.05 0">
                </a-cylinder>
                <a-cylinder :color="bondAtom2Info.color" height="0.1" radius="0.05" position="0 0.05 0">
                </a-cylinder>
            </a-entity>
        </template>
        <template v-else-if="bondOrderType == 13">
            <a-entity position="0.14 0 0">
                <a-cylinder :color="bondAtom1Info.color" height="0.1" radius="0.07" position="0 -0.05 0">
                </a-cylinder>
                <a-cylinder :color="bondAtom2Info.color" height="0.1" radius="0.07" position="0 0.05 0">
                </a-cylinder>
            </a-entity>
            <a-entity position="-0.14 0 0">
                <a-cylinder :color="bondAtom1Info.color" height="0.1" radius="0.07" position="0 -0.05 0">
                </a-cylinder>
                <a-cylinder :color="bondAtom2Info.color" height="0.1" radius="0.07" position="0 0.05 0">
                </a-cylinder>
            </a-entity>
        </template>
        <template v-else>
            <a-cylinder :color="color || bondAtom1Info.color" height="0.1" radius="0.1" position="0 -0.05 0">
            </a-cylinder>
            <a-cylinder :color="color || bondAtom2Info.color" height="0.1" radius="0.1" position="0 0.05 0">
            </a-cylinder>
        </template>
    </a-entity>
</template>

<style scoped>
</style>
