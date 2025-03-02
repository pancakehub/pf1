---
layout: home

# Hero section
hero:
  name: Create.
  text: Share.Repeat.
  image:
    src: /header.png
    alt: Portfolio-ideas logo
  tagline: The boring journey of a fresher not so geek site 👓.
  actions:
    - theme: brand
      text: Projects
      link: /portfolio
    - theme: alt
      text: View on GitHub
      link: https://github.com/Karroat
    - theme: alt
      text: Resume
      link: https://drive.google.com/file/d/1vhvnb8JzY2E4LzxzcYh0HC6Juts2TV4V/view?usp=sharing
    - theme: alt
      text: LinkedIn
      link: https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=bhuvankandhi 


# Features section
features:
  - icon: 🤓
    title: The Developer, I go by  
             @Bhuvan.K,   
              ブヴァン,   
                Karroat 🥕.
    details: Coding for a lazier tomorrow. 😴
  - icon: 🎫
    title: Movies & Music
    details: Future in process...
  - icon: 🎮
    title: Games & Manga
    details: available for valo, id- carrot.
  - icon: 💾
    title: Old Archives.
    details: visit Bio> Old Archives> previous versions...



# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Portfolio-ideas
  - - meta
    - property: og:image
      content: https://user-images.githubusercontent.com/62628408/203779311-949cf214-92a7-4900-b997-55595fd12316.png
  - - meta
    - property: og:url
      content: https://portfolio-ideas.vercel.app
  - - meta
    - name: title
      content: Portfolio-ideas
  - - meta
    - name: twitter:card
      content: https://user-images.githubusercontent.com/62628408/203779311-949cf214-92a7-4900-b997-55595fd12316.png
  - - link
    - rel: icon
      type: image/svg
      href: logo.svg
---




<script setup>
import { ref } from 'vue'

const quote = '"Time, practice, and discipline are the architects of mastery. What you build today with patience will stand strong tomorrow." ⏳🔥'
</script>

<style scoped>
blockquote {
  text-align: center;
  font-style: italic;
  border-left: 4px solid #ddd;
  padding-left: 16px;
  margin: 20px 0;
}
</style>

> {{ quote }}
<!--
```
hello
```
### <Badge type="info">custom element</Badge>
-->
