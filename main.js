(() => {
  const contents = document.getElementById('contents');

  const infiniteScrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;

      infiniteScrollObserver.unobserve(entry.target);
      loadContent();
    });
  });


  let i = 0;

  const max = 30;

  const loadContent = async () => {
    const url = `https://example.com/load?i=${i}`
    const response = await fetchDummy(url);

    contents.insertAdjacentHTML('beforeend', 
    `<div>
    #${i+1}<br> 
    ${await response.text()}
    </div>`);

    i++;

    if(i<max) infiniteScrollObserver.observe(contents.lastElementChild);
  };
  loadContent();
})();