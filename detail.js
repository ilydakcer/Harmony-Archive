const id=new URLSearchParams(location.search).get('id');
fetch(`https://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
.then(r=>r.json())
.then(d=>{
document.getElementById('detail').innerHTML=d.releases.map(r=>r.title).join('<br>');
});