<template>
    <h2 class='text-4xl'>{{title}}</h2>
</template>
<script>
export default {
    props: {
        title : {
            type : String,
            default: '페이지 제목을 써주세요'
        }
    }
}
</script>