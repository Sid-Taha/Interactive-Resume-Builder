//-------------- contact section ---------------------
let contact = document.getElementById('contact')
let contact_btn = document.getElementById('contact_btn')

contact_btn?.addEventListener('click', ()=>{
  contact!.classList.toggle('hide')
})

//-------------- education section ---------------------
let education = document.getElementById('education')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', ()=>{
  education!.classList.toggle('hide')
})

//-------------- language section ---------------------
let language = document.getElementById('language')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
  language!.classList.toggle('hide')
})

//-------------- language section ---------------------
let skill = document.getElementById('skill')
let skill_btn = document.getElementById('skill_btn')

skill_btn?.addEventListener('click', ()=>{
  skill!.classList.toggle('hide')
})

//-------------- ref section ---------------------
let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
  ref_section!.classList.toggle('hide')
})

//-------------- exp section ---------------------
let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
  exp_section!.classList.toggle('hide')
})

//-------------- print section ---------------------
let print_btn = document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
  window.print()
})