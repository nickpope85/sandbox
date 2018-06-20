var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false, /* Set to "true" for infinite looping */
    autoplay: true, 
    path: 'data.json'
})