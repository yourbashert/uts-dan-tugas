const nav = document.querySelector('.navbar');
window.onscroll = function () { 
    var top = window.scrollY;
    console.log(top);
    if (top >= 680) {
        nav.classList.add('activated')
    }
    else { 
        nav.classList.remove('activated');
    }
}
document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#list-example'
})
