<template>
    <div class="sheep_home_page">
        <header class="sheep_home_page_header">
            <div class="header_left">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </div>
            <div class="header_right">
                <span style="float:right;">
                    <ul class="header_right_ul">
                        <li class="header_right_li"></li>
                        <li>Twitter</li>
                    </ul>
                    <ul class="header_right_ul">
                        <li class="header_right_li"></li>
                        <li>Discord</li>
                    </ul>
                    <ul class="header_right_ul">
                        <li class="header_right_li"></li>
                        <li>Opensea</li>
                    </ul>
                    <span class="header_right_bt">Connect Wallet</span>
                </span>
            </div>
        </header>
        <div class="sheep_title">
            <span class="left_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
            <span class="center_title">Sheep A Sheep</span>
            <span class="rignt_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
        </div>
        <div class="intro-center_img">
            <img src="../../assets/img/dogSheep.png" alt="" class="mediu_sheep">
            <img src="../../assets/img/allSheep.png" alt="" class="mediu_all_sheep">
        </div>
        <div class="sheep_address_input">
            <span class="left_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
            <span class="center_address">
                <div style="text-align: left;margin-bottom: 1vmax;">Address</div>
                <input type="text">
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
        </div>
        <div class="sheep_address_input" style="margin-top:0;">
            <span class="left_img" style="text-align: left;">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                    style="margin-left:10vmax;margin-top: -1vmax;">
            </span>
            <span class="center_address">
                <div class="check_wallet">Check Wallet</div>
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                    style="margin-right:10vmax;margin-top: -1vmax;">
            </span>
        </div>
        <div class="sheep_address_input" style="margin-top:0;">
            <span class="left_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
            <span class="center_address">
                <div class="wallet_whitelist">Your wallet is not in whitelist yet..</div>
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
        </div>
        <div class="sheep_address_input">
            <span class="left_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep" style="margin-right:16vmax;">
            </span>
            <span class="center_address">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                    style="margin-top:13px;margin-left: 10vmax;">
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep" style="margin-right:7vmax;margin-top: 0;">
            </span>
        </div>
        <div class="sheep_content_intro">
            <div class="content_left"></div>
            <div class="content_right">
                <p style="font-size:2vmax;">What is this？？？<img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                        style="vertical-align:10px;margin-left: -2vmax;"></p>
                <p>Sheep A Sheep is a Dapp of play to earn built on BSC.</p>
                <p style="margin-top:1.5vmax;">In here, challenge the game and become the top sheep</p>
                <p>to win the super prize</p>
                <p style="margin-top:1.5vmax;">Total supply of 2000 NFTs will be availabel for tokens to</p>
                <p>airdrop. Tokens will be continuously bought back using</p>
                <p>particpant fees</p>
            </div>
        </div>
        <div class="sheep_footer_intro">
            <div class="sheep_footer_bt">Join the flock of sheep</div>
            <div>
                <img src="../../assets/img/footerIntro.png" alt="" class="large_img">
            </div>
            <img src="../../assets/img/footerTop.png" alt="" class="footer_top_img">
            <img src="../../assets/img/footerLeft.png" alt="" class="footer_left_img">
            <img src="../../assets/img/footerRight.png" alt="" class="footer_right_img">
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    name: 'HomePage',
}
</script>

<style lang="less" scoped>
.sheep_home_page_header {
    width: 100%;
    display: flex;
    margin-top: 4vh;

    .header_left {
        flex: 2;

        img {
            margin-left: 10vmax;
        }
    }

    .header_right {
        flex: 8;
        color: #313131;
        text-align: center;
        font-size: 1vmax;

        .header_right_ul {
            margin-right: 3.5vmax;
        }

        .header_right_li {
            width: 3vmax;
            height: 3vmax;
            border: solid 1px #313131;
            border-radius: 50%;
            margin-bottom: 5px;
        }

        .header_right_bt {
            display: inline-block;
            width: 11vmax;
            height: 3vmax;
            border: solid 1px #313131;
            border-radius: 10px;
            font-size: 0.9vmax;
            line-height: 3vmax;
            vertical-align: 2.5vmax;
            cursor: pointer;
            margin-right: 5vmax;
        }
    }
}

.sheep_title {
    margin-top: 8vh;
    text-align: center;

    .left_img {
        margin-right: 2vmax;
    }

    .center_title {
        font-size: 3.5vmax;
        vertical-align: 10px;
    }

    .rignt_img {
        float: right;
        margin-right: 5vmax;
    }
}

.small_sheep {
    width: 6vmax;
}

.mediu_sheep {
    width: 26vmax;
}

.mediu_all_sheep {
    width: 50vmax;
}

.intro-center_img {
    width: 98%;
    background: #cefc98;
    text-align: center;
    height: 22vmax;
    margin: auto;
    margin-top: 1vmax;
}

.sheep_address_input {
    margin-top: 2vmax;
    width: 100%;
    display: flex;

    .left_img {
        flex: 3.8;
        padding-right: 12vmax;
        text-align: right;
        // img{
        //     margin
        // }
    }

    .center_address {
        flex: 2.4;
        text-align: center;

        input {
            width: 18vmax;
            height: 3vmax;
            padding-left: 2px;
        }

        .check_wallet {
            text-align: center !important;
            width: 8vmax;
            height: 2.2vmax;
            border: solid 1px #313131;
            line-height: 2.2vmax;
            font-weight: bold;
            cursor: pointer;
            border-radius: 10px;
            font-size: 1vmax;
        }

        .wallet_whitelist {
            width: 30vmax;
            height: 5vmax;
            border: solid 1px #313131;
            text-align: center;
            line-height: 5vmax;
            border-radius: 10px;
            font-size: 1.6vmax;
            box-shadow: 4px 4px 8px #9c9c9c;
        }
    }

    .right_img {
        flex: 3.8;
        padding-right: 12vmax;
        text-align: right;

        img {
            margin-top: 2vmax;
        }
    }
}

.sheep_content_intro {
    display: flex;
    width: 100%;
    margin-top: 10vmax;

    .content_left {
        flex: 1;
    }

    .content_right {
        flex: 1;
        background: #fff;

        p {
            font-size: 1.4vmax;
        }

    }
}

.sheep_footer_intro {
    width: 98%;
    margin: auto;
    margin-top: 1.5vmax;
    height: 60vmax;
    background: #cefc98;
    padding-top: 20vmax;
    position: relative;

    .sheep_footer_bt {
        cursor: pointer;
        width: 30vmax;
        height: 3vmax;
        line-height: 3vmax;
        text-align: center;
        color: #fff;
        font-size: 2vmax;
        background: #60a80d;
        border-radius: 2vmax;
        margin: auto;
        margin-bottom: 1.5vmax;
    }

    .large_img {
        width: 97vmax;
    }

    .footer_top_img {
        width: 35vmax;
        position: absolute;
        top: -32.3vmax;
        left: 13vmax;
    }

    .footer_left_img {
        width: 7vmax;
        position: absolute;
        top: -1.35vmax;
        left: 0;
    }

    .footer_right_img {
        width: 20vmax;
        position: absolute;
        top: -3.35vmax;
        height: 30vmax;
        right: 0.5vmax;
    }
}
</style>
  