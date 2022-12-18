<template>
  <div>
    <header-item></header-item>
    <Card
      v-for="card in cards"
      :key="card.id"
      :imageUrl="card.imageUrl"
      :imageTitle="card.imageTitle"
      :blogTitle="card.blogTitle"
      :blogText="card.blogText"
      :date="card.date"
      style="margin-top: 20px"
    />
  </div>
</template>

<script>
import Card from './CardComponent.vue'
import HeaderItem from './HeaderItem.vue'

export default {
  name: 'CardList',
  components: {
    Card,
    HeaderItem
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          imageUrl: '/images/anfahrt.jpg',
          imageTitle: 'Fahrt nach Arnhem Niederlande',
          blogTitle: 'Die Fahrt',
          blogText: 'Nach deiner anstrengenden Hospitation hast du es verdient, dich eine Weile vom Stress zu erholen. Deshalb möchte ich dich einladen, das Wochenende in Arnhem mit mir zu verbringen. Die Fahrt dorthin dauert ungefähr eine Stunde und 30 Minuten und kann locker auch nach der Arbeit angetreten werden. In Arnhem gibt es viele Möglichkeiten, wie wir unseren ersten Abend verbringen können - wir können ein Restaurant besuchen oder in unserer modernen Unterkunft kochen und uns dort aufhalten.',
          date: "März 31, 2023"
        },
        {
          id: 2,
          imageUrl: '/images/haus.jpg',
          imageTitle: 'Buitenplaats Petersburg',
          blogTitle: 'Unterkunft mit Stil und Picknick',
          blogText: 'Auch der Morgen des zweiten Tages lässt keine Wünsche offen. Ich habe bei der Unterkunft einen Picknickkorb reserviert, der uns an der Tür abgestellt wird. Mit diesen Leckereien werden wir sicher gestärkt in den Tag durchstarten können!'
        },
        {
          id: 3,
          imageUrl: '/images/seekuh.jpg',
          imageTitle: '(Optional) Burgers Zoo',
          blogTitle: 'Blog Title 3',
          blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  }
}
</script>
