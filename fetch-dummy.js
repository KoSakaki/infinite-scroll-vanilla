(() => {

  window.fetchDummy = url => new Promise(resolve => {
    setTimeout(() => {
      const content = ('content '.repeat(6)+'<br>').repeat(3) + url + '<br><br>';
      resolve({text: async () => content});
    }, 100);
  });
})();