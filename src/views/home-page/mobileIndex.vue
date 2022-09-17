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
                <div style="text-align: left;margin-bottom: 1vmin;">Address</div>
                <input type="text">
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep">
            </span>
        </div>
        <div class="sheep_address_input" style="margin-top:1vmin;;">
            <span class="left_img" style="text-align: left;">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                    style="margin-left:10vmin;margin-top: -1vmin;">
            </span>
            <span class="center_address">
                <div class="check_wallet">Check Wallet</div>
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                    style="margin-right:10vmin;margin-top: -1vmin;">
            </span>
        </div>
        <div class="sheep_address_input" style="margin-top:1vmin;">
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
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep" style="margin-right:16vmin;">
            </span>
            <span class="center_address">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                    style="margin-top:13px;margin-left: 10vmin;">
            </span>
            <span class="right_img">
                <img src="@/assets/img/sheep.png" alt="" class="small_sheep" style="margin-right:7vmin;margin-top: 0;">
            </span>
        </div>
        <div class="sheep_content_intro">
            <div class="content_left"></div>
            <div class="content_right">
                <p style="font-size:2vmin;">What is this？？？<img src="@/assets/img/sheep.png" alt="" class="small_sheep"
                        style="vertical-align:10px;margin-left: -2vmin;"></p>
                <p>Sheep A Sheep is a Dapp of play to earn built on BSC.</p>
                <p style="margin-top:1.5vmin;">In here, challenge the game and become the top sheep</p>
                <p>to win the super prize</p>
                <p style="margin-top:1.5vmin;">Total supply of 2000 NFTs will be availabel for tokens to</p>
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
            margin-left: 10vmin;
        }
    }

    .header_right {
        flex: 8;
        color: #313131;
        text-align: center;
        font-size: 1vmin;

        .header_right_ul {
            margin-right: 3.5vmin;
        }

        .header_right_li {
            width: 3vmin;
            height: 3vmin;
            border: solid 1px #313131;
            border-radius: 50%;
            margin-bottom: 5px;
        }

        .header_right_bt {
            display: inline-block;
            width: 28vmin;
            height: 6vmin;
            border: solid 1px #313131;
            border-radius: 10px;
            font-size: 0.9vmin;
            line-height: 6vmin;
            vertical-align: 2.5vmin;
            cursor: pointer;
            margin-right: 5vmin;
        }
    }
}

.sheep_title {
    margin-top: 8vh;
    text-align: center;

    .left_img {
        margin-right: 2vmin;
    }

    .center_title {
        font-size: 3.5vmin;
        vertical-align: 10px;
    }

    .rignt_img {
        float: right;
        margin-right: 5vmin;
    }
}

.small_sheep {
    width: 6vmin;
}

.mediu_sheep {
    width: 26vmin;
}

.mediu_all_sheep {
    width: 50vmin;
}

.intro-center_img {
    width: 98%;
    background: #cefc98;
    text-align: center;
    height: 22vmin;
    margin: auto;
    margin-top: 1vmin;
}

.sheep_address_input {
    margin-top: 2vmin;
    width: 100%;
    display: flex;

    .left_img {
        flex: 3.8;
        padding-right: 12vmin;
        text-align: right;
        // img{
        //     margin
        // }
    }

    .center_address {
        flex: 2.4;
        text-align: center;

        input {
            width: 18vmin;
            height: 3vmin;
            padding-left: 2px;
        }

        .check_wallet {
            text-align: center !important;
            width: 23vmin;
            height: 4.2vmin;
            border: solid 1px #313131;
            line-height: 4.2vmin;
            font-weight: bold;
            cursor: pointer;
            border-radius: 10px;
            font-size: 1vmin;
        }

        .wallet_whitelist {
            width: 55vmin;
            height: 8vmin;
            border: solid 1px #313131;
            text-align: center;
            line-height: 8vmin;
            border-radius: 10px;
            font-size: 1.6vmin;
            box-shadow: 4px 4px 8px #9c9c9c;
        }
    }

    .right_img {
        flex: 3.8;
        padding-right: 12vmin;
        text-align: right;

        img {
            margin-top: 2vmin;
        }
    }
}

.sheep_content_intro {
    display: flex;
    width: 100%;
    margin-top: 10vmin;

    .content_left {
        flex: 1;
    }

    .content_right {
        flex: 1;
        background: #fff;

        p {
            font-size: 1.4vmin;
        }

    }
}

.sheep_footer_intro {
    width: 98%;
    margin: auto;
    margin-top: 1.5vmin;
    height: 60vmin;
    background: #cefc98;
    padding-top: 20vmin;
    position: relative;

    .sheep_footer_bt {
        cursor: pointer;
        width: 30vmin;
        height: 3vmin;
        line-height: 3vmin;
        text-align: center;
        color: #fff;
        font-size: 2vmin;
        background: #60a80d;
        border-radius: 2vmin;
        margin: auto;
        margin-bottom: 1.5vmin;
    }

    .large_img {
        width: 97vmin;
    }

    .footer_top_img {
        width: 35vmin;
        position: absolute;
        top: -32.3vmin;
        left: 13vmin;
    }

    .footer_left_img {
        width: 7vmin;
        position: absolute;
        top: -1.35vmin;
        left: 0;
    }

    .footer_right_img {
        width: 20vmin;
        position: absolute;
        top: -3.35vmin;
        height: 30vmin;
        right: 0.5vmin;
    }
}
</style>
  