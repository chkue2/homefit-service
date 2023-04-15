<template>
  <Modal @click-backdrop="closeMoveToSuggestModal">
    <p slot="header" class="move-title">어떤 전문가를 찾으세요?</p>
    <div slot="body" class="items">
      <p
        v-for="(item, index) in items"
        :key="index"
        class="item"
        @click="moveByServiceType(item.serviceType)"
      >
        {{ item.name }}
      </p>
    </div>
  </Modal>
</template>
<script>
import Modal from '@/components/common/CommonModalAutoHeight'
import commonMixins from '~/assets/js/commonMixins'
const ITEMS = [
  { name: '운동 전문가', serviceType: 'workout' },
  { name: '미술 전문가', serviceType: 'art' },
  { name: '요가명상 전문가', serviceType: 'meditation' },
  { name: '음악 전문가', serviceType: 'music' },
]
export default {
  name: 'MoveToSuggestModal',
  components: {
    Modal,
  },
  mixins: [commonMixins],
  data: () => ({
    items: ITEMS,
  }),
  methods: {
    closeMoveToSuggestModal() {
      this.$emit('close-move-to-suggest-modal')
    },
  },
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/_index.scss';
.move-title {
  font-size: 20px;
  font-weight: $medium;
  margin: 0;
}
.items {
  padding: 0 24px 24px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .item {
    width: calc(50% - 4px);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #e1e1eb;
    box-sizing: border-box;
    &:nth-child(n + 3) {
      margin-top: 8px;
    }
  }
}
</style>
