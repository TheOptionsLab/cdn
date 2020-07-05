const SocialCollectionLinks = {
  'Facebook': 'https://www.facebook.com/sharer.php?s=100&p[title]=The Options Labs&p[summary]=Options Strategy Analysis&p[url]=https://www.theoptionslab.com&p[images[0]=https://www.theoptionslab.com/2D.png',
  'Twitter': 'http://www.twitter.com/share?url=https://www.theoptionslab.com',
  'LinkedIn': 'http://www.linkedin.com/shareArticle?url=https://www.theoptionslab.com&title=The Options Lab',
  'Reddit': 'http://www.reddit.com/submit?url=https://www.theoptionslab.com&title=The Options Lab',
  'Pinterest': 'http://pinterest.com/pin/create/bookmarklet/?media=https://www.theoptionslab.com/2D.png&?url=https://www.theoptionslab.com&description=The Options Lab',
  'Tumblr': 'https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url=https://www.theoptionslab.com&title=The+Options+Lab'
};

function shareSocial( FROM, CHART, WHICH ) {

  let img = new Image();
  img.src = CHART.getDataURL({
    type: 'png',
    pixelRatio: 2
  });

  //console.log( "NEW Width = " + CHART.getEchartsInstance().getWidth() );

  window.open(SocialCollectionLinks[WHICH],   'Share the image','height=480,width=720');
}

