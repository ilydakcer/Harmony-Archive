fetch('https://musicbrainz.org/ws/2/artist/?query=rock&fmt=json')
.then(r=>r.json())
.then(d=>{
const c=document.getElementById('artists');
d.artists.slice(0,6).forEach(a=>{
c.innerHTML+=`<div class="col-md-4"><div class="card p-2">${a.name}</div></
div>`;
});
})
.catch(()=>fetch('data/sample.json').then(r=>r.json()));