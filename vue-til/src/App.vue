<template>
    <div id="app">
        <AppHeader />
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
    name: 'App',
    components: { AppHeader },
    data: () => ({}),
};
</script>

<style>
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
}
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    overflow: auto !important;
}

h1,
p,
ul {
    margin: 0;
    padding: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}

a {
    color: #000;
}

img {
    max-width: 100%;
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
}

#app {
    font-family: 'Roboto', 'GmarketSansMedium', system-ui, -apple-system,
        Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
        Segoe UI Emoji;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
}
strong {
    font-weight: bold;
}
::-webkit-scrollbar {
    width: 10px;
    height: 7px;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
}
::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px #fff;
}

</style>
