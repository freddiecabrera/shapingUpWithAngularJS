(function(){

  var app = angular.module('store',[]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });





  var gems = [
    {
      name: 'Y-3 QASA HIGH',
      price: 400,
      description: 'The shoe with a cult following. The Qasa returns in a winter hi-cut form with a sophisticated mix of materials and our now instantly recognisable tubular rubber outsole.',
      color: 'Black',
      canPurchase: true,
      soldOut: false,
      images: 'http://cdn.yoox.biz/44/44877033lf_12_f.jpg'
    },
    {
      name: 'Copa Mundial Leather FG Cleats',
      price: 150,
      description: "The most popular football shoe of the past 20 years, and for good reason. Its perfect fit and comfort have made it the top choice of football players at all levels.",
      color: 'Black',
      canPurchase: true,
      soldOut: false,
      images: 'http://bit.ly/1HZsOlz'
    },
    {
      name: 'NMD Runner Primeknit Shoes',
      price: 170,
      description: "These men's shoes merge streetwise style with the latest adidas technologies. With a seamless adidas Primeknit upper for a sock-like fit, they feature an angled boost™ midsole with built-in EVA plugs.",
      color: 'Core Black',
      canPurchase: true,
      soldOut: false,
      images: 'http://bit.ly/1Y9I9BS'
    },

  ];












})();
