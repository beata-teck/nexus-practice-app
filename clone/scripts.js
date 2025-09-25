document.getElementById('toggleSidebar').addEventListener('click', function(){
  const sb = document.getElementById('sidebar');
  if(!sb) return;
  if(sb.style.display === 'none') sb.style.display = '';
  else sb.style.display = 'none';
});

// small interactive nicety: highlight nav on click
document.querySelectorAll('.sidebar nav a').forEach(a=>{
  a.addEventListener('click', ()=>{
    document.querySelectorAll('.sidebar nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  })
});
