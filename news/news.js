const topicsList = [
    {
        "title": "さき織り展2020終了しました",
        "content": `たくさんのご来場をいただきありがとうございました。
        次回の開催をお楽しみに！`
    },
    {
        "title": "みのりや営業しています",
        "content": `つくりっこの家クラブハウスの移転に伴いみのりやが復活しました。
        皆様のご来店をお待ちしております。`
    },
    {
        "title": "フェイスブックやってます！",
        "content": `メニューのＮＥＷＳからフェイスブックページに移動できます！随時更新中です`
    }
]

const newsList = [
    {
        "date": "2020年11月25日",
        "content": `りんご注文締め切りました！`
    },
    {
        "date": "2020年7月",
        "content": `法人情報更新しました。「法人概要」からどうぞ。`
    },
    {
        "date": "2019年5月21日",
        "content": `2018年度第三者評価結果を更新しました。「法人概要」からどうぞ。`
    } 
]

const topicsCont = document.querySelector('.topics-child-container')
const newsCont = document.querySelector('.news-child-container')

const layoutTopics = (list) => {
    for (item of list) {
        topicsCont.innerHTML += `
        <div class="topic-child">
            <h3 class="topic-title">
                ${item["title"]}　　
            </h3>
            <p class="topic-content">
                ${item["content"]}　　
            </p>
        </div>
        `
    }
}

const layoutNews = (list) => {
    for (item of list) {
        newsCont.innerHTML += `
        <div class="news-child">
            <p class="news-date">${item["date"]}</p>
            <p class="news-content">${item["content"]}</p>
        </div>
        `
    }
}

layoutTopics(topicsList)
layoutNews(newsList)