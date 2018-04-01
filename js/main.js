$(function(){
  const jqxhr = $.get('./news/data.json');
  jqxhr.done( data => {
    const body = $('.appLayout_body');

    data.forEach(news => {
      const card = createCard(news);
      body.append(card);
    });
  });
  jqxhr.fail( _ => {
    console.error('エラー');
  });
});

function createCard(news) {
  const card = $('<div>');
  card.addClass('news');

  const title = $('<div>');
  title.addClass('news_title');
  title.text(news.title);

  const description = $('<div>');
  description.addClass('news_description');
  description.text(news.description);

  card.append(title).append(description);

  return card;
};
