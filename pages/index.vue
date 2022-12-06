<template>
    <div>
        <div class="container-title">
            <h1>MY FAVORITE THING IS A WALK</h1>
            <!--산책메이트 매칭 프로그램 산소의 소개 : 내가 가장 좋아하는건 산책이야-->
        </div>

        <div class="third custom">
            <img class="custom-img" src="/images/back4.jpg" alt="back">
            <!--배너 이미지-->
            <div class="custom-description-bk"></div>
            <div class="custom-logo">
                <img src="/images/1.jpg" alt="logo">
                <!--로고 이미지-->
            </div>

            <div  class="custom-name">
                <p>Heo Hyung-Goo</p>
                <!--각 조원의 이름-->
            </div>

            <div class="custom-description">
                <p><b>초대 멤버 [허형구]</b><br> 운동형 외톨이 <br> 섬세한 코딩능력과 멈추지 않는 끈기로 산소 개발에 임했습니다.  <br> 우리조의 브레인</p>
                <!--각 조원의 소개사항-->
            </div>

            <div class="custom-botton">
                <a href="https://gitlab.com/hbrotheta" target="_blank">Read More</a>
                <!--Read More 버튼을 누르면 해당 조원의 깃페이지로 넘어감-->
            </div>
        </div>

        <div class="first custom">
            <img class="custom-img" src="/images/12.jpg" alt="back">
            <div class="custom-description-bk"></div>
            <div class="custom-logo">
                <img src="/images/2.jpg" alt="logo">
            </div>

            <div class="custom-name">
                <p>An Min-Hee</p>
                <!--각 조원의 이름-->
            </div>

            <div class="custom-description">
                <p><b>초대 멤버 [안민희]</b><br> 핑크늑대 <br> 꼼꼼한 검증과 센스넘치는 아이디어로 산소 개발에 임했습니다.  <br> 우리조의 팀장님</p>
                <!--각 조원의 소개사항-->
            </div>
            <div class="custom-botton">
                <a href="https://gitlab.com/sksskek9604" target="_blank">Read More</a>
                <!--Read More 버튼을 누르면 해당 조원의 깃페이지로 넘어감-->
            </div>
        </div>
        <div class="second custom">
            <img class="custom-img" src="/images/back3.jpg" alt="back">
            <div class="custom-description-bk"></div>
            <div class="custom-logo">
                <img src="/images/3.jpg" alt="logo">
            </div>

            <div class="custom-name">
                <p>Park Joo-eul</p>
                <!--각 조원의 이름-->
            </div>

            <div class="custom-description">
                <p><b>초대 멤버 [박주을]</b><br> 키보드샷건 장전 <br> 디자인찾아 삼만리로 산소 개발에 임했습니다.  <br> 우리조의 디자이너</p>
                <!--각 조원의 소개사항-->
            </div>
            <div class="custom-botton">
                <a href="https://github.com/WinterFlower90" target="_blank">Read More</a>
                <!--Read More 버튼을 누르면 해당 조원의 깃페이지로 넘어감-->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'auth',
    data() {
        return {

        }
    },
    mounted() {
        this.$store.commit(this.$menuConstants.FETCH_SELECTED_MENU, 'DASH_BOARD')
    },
}
</script>

<style>

.container-title {
    width: 66%;
    height: auto;
    padding: 20px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #000000;
    opacity: 0.5;
    margin: 20px auto;
    overflow: auto;
    text-align: center;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 1px;
}

/*박스*/
.custom {
    display: inline-block;
    position: relative;
    width: 400px;
    min-width: 400px;
    height: 500px;
    border-radius: 30px;
    overflow:hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    margin: 31px;
    margin-top: 60px;
}
.custom-img {
    height: 70%;
}
.custom:hover {
    box-shadow: -1px 10px 29px 0px rgba(0, 0, 0, 0.8);
}

/*그라데이션 박스*/
.custom-description-bk {
    background-image: linear-gradient(0deg , #B0324A, #FDD9E6);
    position: absolute;
    top: 55%;
    left: -5px;
    height: 65%;
    width: 128%;
}
.second .custom-description-bk {
    background-image: linear-gradient(-20deg , #270180, #d9bcf5)
}
.third .custom-description-bk {
    background-image: linear-gradient(-20deg , #025ca1, #c8f0fa)
}

/*로고 박스*/
.custom-logo {
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    bottom: 35%;
    left: 30px;
    overflow:hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
}
.custom-logo img {
    height: 100%;
}

/*설명글*/
.custom-name {
    position: absolute;
    color: #fff;
    font-size: 28px;
    left: 125px;
    bottom: 30.5%;
    font-weight: 700;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.custom-description {
    position: absolute;
    color: #fff;
    font-weight: 520;
    font-size: 13px;
    left: 33px;
    bottom: 14%;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
/*버튼 박스*/
.custom-botton {
    position: absolute;
    color: #fff;
    right: 30px;
    bottom: 5%;
    padding: 9px 20px;
    border: 0.9px solid #fff;
    border-radius: 15px;
    box-shadow:0 8px 8px rgba(0,0,0,0.2);
    cursor: pointer;
}
.custom-botton:hover{
    background-color: #404040;
}
.custom-botton a {
    color: #fff;
    text-decoration: none;
}
h1, p{
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
}
</style>


