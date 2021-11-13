const loadHeader = (document) => {
    document.innerHTML += 
    `<div class="top-logo">
        <a href="/">
            <h1>つくりっこの家へようこそ</h1>
        </a>
    </div>
    <nav>
        <div class="nav-drop-down-wrapper">
            <div class="nav-drop-down">
                <div class="nav-item-title">
                    <p><a href="/katudou">活動</a></p>
                </div>
                <div class="nav-item-contents">
                    <div class="nav-link-container">
                        <div class=""><a href="/katudou/jishu-seihin">自主製品</a></div>
                        <div class=""><a href="/katudou/shops">お店</a></div>
                        <div class=""><a href="/katudou/C-member">Cメンバー</a></div>
                    </div>
                </div>
            </div>
            <div class="nav-drop-down">
                <div class="nav-item-title">
                    <a href="/news"><p>ニュース</p></a>
                </div>
                <div class="nav-item-contents">
                    <div class="nav-link-container">
                        <div class=""><a href=""></a></div>
                        <div class=""><a href=""></a></div>
                        <div class=""><a href=""></a></div>
                    </div>
                </div>
            </div>
            <div class="nav-drop-down">
                <div class="nav-item-title">
                    <a href="/riyou-kibou">
                        <p>利用希望の方</p>
                    </a>
                </div>
                <div class="nav-item-contents">
                    <div class="nav-link-container">
                        <div class=""><a href="/riyou-kibou">見学</a></div>
                    </div>
                </div>
            </div>
            <div class="nav-drop-down">
                <div class="nav-item-title">
                    <p><a href="/donation">寄付</a></p>
                </div>
                <div class="nav-item-contents">
                    <div class="nav-link-container">
                    </div>
                </div>
            </div>
            <div class="nav-drop-down">
                <div class="nav-item-title">
                    <p><a href="/houjin">法人</a></p>
                </div>
                <div class="nav-item-contents">
                    <div class="nav-link-container">
                        <div class=""><a href="/houjin">法人概要</a></div>
                        <div class=""><a href="/houjin/ayumi">あゆみ</a></div>
                        <div class=""><a href="/houjin/links">リンク</a></div>
                    </div>
                </div>
            </div>
            <div class="nav-drop-down">
                <div class="nav-item-title">
                    <p><a href="/access">アクセス</a></p>
                </div>
                <div class="nav-item-contents">
                    <div class="nav-link-container">
                    </div>
                </div>
            </div>
        </div>
    </nav>`
}

const header = document.querySelector('header')

loadHeader(header)

// ===================================

const navItemList = document.querySelectorAll('.nav-drop-down')

navItemList.forEach(item => {
    const itemTitle = item.querySelector('.nav-item-title')
    const itemContents = item.querySelector('.nav-item-contents')
    item.addEventListener('mouseover', () => {
        itemContents.style.display = "block"
        itemContents.querySelector('.nav-link-container').style.display = "flex"
    })
    item.addEventListener('mouseleave', () => {
        itemContents.style.display = "none"
    })
})