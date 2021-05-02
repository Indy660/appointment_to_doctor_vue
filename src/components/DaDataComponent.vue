<template>
    <div>
        <vue-dadata
            :locationOptions="{country: 'Россия'}"
            :placeholder="placeholder"
            :onChange="func"
            token="9a2454c5d3d8b2533223166390a270ac89e3b912"
        ></vue-dadata>
    </div>
</template>

<script>
import VueDadata from 'vue-dadata'
export default {
    name: "DaDataComponent",
    components: {
        'vue-dadata': VueDadata,
    },
    props: ['placeholder', 'func'],
}
</script>
