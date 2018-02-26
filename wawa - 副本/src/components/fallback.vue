<template>
    <span class="fanhui-icon" @click="fallback()"></span> 
</template>
<script>
    
    export default { 
       methods:{         
			fallback() {
				this.$router.go(-1);
			}
       }
       
    }
</script>
<style>

</style>