<template>
    <div class="">
        <ion-card class="back">
            <ion-card-header>
                <ion-card-subtitle>Now</ion-card-subtitle>
                <ion-card-title>{{this.resData[0].name}}</ion-card-title>
                <ion-card-subtitle>{{this.resData[0].weather[0].description}}</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
        <ion-card class="back">
            <ion-card-content id="temp">
                <img style="width: auto" :src="this.resData[0].url" alt="">
                <div>
                    <ion-icon class="ion-padding-right" name="md-thermometer"></ion-icon>
                    <ion-label> {{Math.round(this.resData[0].main.temp_min)}}°</ion-label> /
                    <ion-label style="font-weight: bold; font-size: 20px">{{Math.round(this.resData[0].main.temp)}}°</ion-label> /
                    <ion-label>{{Math.round(this.resData[0].main.temp_max)}}°</ion-label>
                </div>
                <div>
                    <span>Wind </span>
                    <ion-label>{{Math.round(this.resData[0].wind.speed)}} mph</ion-label>,
                    <ion-label>{{this.resData[0].wind.deg}}</ion-label>
                </div>
            </ion-card-content>
        </ion-card>
        <div id="carroussel">
            <ion-card v-for="(i,index) in this.resData[1].list" v-bind:key="i.dt" class="back">
                <ion-card-header>
                    <ion-card-subtitle v-if="index < 1 || i.dt_day !== resData[1].list[index -1].dt_day">{{i.dt_day}}</ion-card-subtitle>

                    <ion-card-title>{{i.dt_hour}}</ion-card-title>
                </ion-card-header>

                <ion-card-content id="temp">
                    <img style="width: auto" :src="i.weather[0].url" alt="">
                    <div>
                        <ion-icon class="ion-padding-right" name="md-thermometer"></ion-icon>
                        <ion-label style="font-weight: bold; color: white; font-size: 20px">{{Math.round(i.main.temp)}}°</ion-label>
                    </div>
                    <div>
                        <span>Wind </span>
                        <ion-label>{{Math.round(i.wind.speed)}} mph</ion-label>
                    </div>
                </ion-card-content>
            </ion-card>
        </div>
    </div>
</template>
<style>
    #temp{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #carroussel{
        display: inline-flex;
        overflow-x: scroll;
        scroll-snap-type: x proximity;
        overscroll-behavior: contain;
        width: 100%;
    }

    #carroussel > *{
        min-width: 160px;
        scroll-snap-align: center;
    }
</style>
<script>
    export default {
        name: "home",
        props: [
            'resData'
        ],
        mounted() {
            console.log(this)
        }
    };
</script>