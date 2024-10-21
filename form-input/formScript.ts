let myName: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
let desig: HTMLInputElement  = document.getElementById("desig") as HTMLInputElement;
let Phone: HTMLInputElement  = document.getElementById("Phone") as HTMLInputElement;
let email: HTMLInputElement  = document.getElementById("email") as HTMLInputElement;
let add: HTMLInputElement  = document.getElementById("add") as HTMLInputElement;
let LinkedIn: HTMLInputElement  = document.getElementById("LinkedIn") as HTMLInputElement;
let pic: HTMLInputElement  = document.getElementById("pic") as HTMLInputElement;
let pass: HTMLInputElement  = document.getElementById("pass") as HTMLInputElement;
let deg: HTMLInputElement  = document.getElementById("deg") as HTMLInputElement
let uni: HTMLInputElement  = document.getElementById("uni") as HTMLInputElement
let pass2: HTMLInputElement  = document.getElementById("pass2") as HTMLInputElement;
let deg2: HTMLInputElement  = document.getElementById("deg2") as HTMLInputElement
let uni2: HTMLInputElement  = document.getElementById("uni2") as HTMLInputElement
let skill1: HTMLInputElement  = document.getElementById("skill1") as HTMLInputElement;
let skill_level1: HTMLInputElement  = document.getElementById("skill_level1") as HTMLInputElement;

let skill2: HTMLInputElement  = document.getElementById("skill2") as HTMLInputElement;
let skill_level2: HTMLInputElement  = document.getElementById("skill_level2") as HTMLInputElement;

let skill3: HTMLInputElement  = document.getElementById("skill3") as HTMLInputElement;
let skill_level3: HTMLInputElement  = document.getElementById("skill_level3") as HTMLInputElement;

let skill4: HTMLInputElement  = document.getElementById("skill4") as HTMLInputElement;
let skill_level4: HTMLInputElement  = document.getElementById("skill_level4") as HTMLInputElement;

let lang: HTMLInputElement  = document.getElementById("lang") as HTMLInputElement;
let lang2: HTMLInputElement  = document.getElementById("lang2") as HTMLInputElement;

let styear: HTMLInputElement  = document.getElementById("styear") as HTMLInputElement;
let endyear: HTMLInputElement  = document.getElementById("endyear") as HTMLInputElement;
let company: HTMLInputElement  = document.getElementById("company") as HTMLInputElement;
let comlocation: HTMLInputElement  = document.getElementById("comlocation") as HTMLInputElement;
let jobTitle: HTMLInputElement  = document.getElementById("jobTitle") as HTMLInputElement;
let achv1: HTMLInputElement  = document.getElementById("achv1") as HTMLInputElement;
let achv2: HTMLInputElement  = document.getElementById("achv2") as HTMLInputElement;
let achv3: HTMLInputElement  = document.getElementById("achv3") as HTMLInputElement;

let styear2: HTMLInputElement  = document.getElementById("styear2") as HTMLInputElement;
let endyear2: HTMLInputElement  = document.getElementById("endyear2") as HTMLInputElement;
let company2: HTMLInputElement  = document.getElementById("company2") as HTMLInputElement;
let comlocation2: HTMLInputElement  = document.getElementById("comlocation2") as HTMLInputElement;
let jobTitle2: HTMLInputElement  = document.getElementById("jobTitle2") as HTMLInputElement;
let achv12: HTMLInputElement  = document.getElementById("achv12") as HTMLInputElement;
let achv22: HTMLInputElement  = document.getElementById("achv22") as HTMLInputElement;
let achv32: HTMLInputElement  = document.getElementById("achv32") as HTMLInputElement;



//----------------   Education Add More -------------------------------------------------
let addEdu = document.getElementById("addEdu");
let eduDetails2 = document.getElementById("eduDetails2");
    addEdu?.addEventListener('click', ()=>{
        eduDetails2?.classList.remove('hideUnhide')
    });


//----------------   skill Add More -------------------------------------------------
let addSkill = document.getElementById("addSkill");
let expertiseDetails2 = document.getElementById("expertiseDetails2");

addSkill?.addEventListener('click', ()=>{
    expertiseDetails2?.classList.remove('hideUnhide')
    });


//----------------   skill Add More -------------------------------------------------
let addExp = document.getElementById("addExp");
let expDetails2 = document.getElementById("expDetails2");

addExp?.addEventListener('click', ()=>{
    expDetails2?.classList.remove('hideUnhide')
    });
    


    
//----------------   form submit -------------------------------------------------
    let form = document.getElementById('form')
    form?.addEventListener('submit', (e)=>{
        e.preventDefault();

        localStorage.setItem('myName', myName.value);
        console.log(localStorage.getItem('myName'));

        localStorage.setItem('desig', desig.value);
        console.log(localStorage.getItem('desig'));

        localStorage.setItem('Phone', Phone.value);
        console.log(localStorage.getItem('Phone'));

        localStorage.setItem('email', email.value);
        console.log(localStorage.getItem('email'));

        localStorage.setItem('add', add.value);
        console.log(localStorage.getItem('add'));

        localStorage.setItem('LinkedIn', LinkedIn.value);
        console.log(localStorage.getItem('LinkedIn'));

        localStorage.setItem('pic', pic.value);
        console.log(localStorage.getItem('pic'));

        localStorage.setItem('pass', pass.value);
        console.log(localStorage.getItem('pass'));

        localStorage.setItem('deg', deg.value);
        console.log(localStorage.getItem('deg'));

        localStorage.setItem('uni', uni.value);
        console.log(localStorage.getItem('uni'));

        localStorage.setItem('pass2', pass2.value);
        console.log(localStorage.getItem('pass2'));

        localStorage.setItem('deg2', deg2.value);
        console.log(localStorage.getItem('deg2'));

        localStorage.setItem('uni2', uni2.value);
        console.log(localStorage.getItem('uni2'));

        localStorage.setItem('skill1', skill1.value);
        console.log(localStorage.getItem('skill1'));

        localStorage.setItem('skill_level1', skill_level1.value);
        console.log(localStorage.getItem('skill_level1'));

        localStorage.setItem('skill2', skill2.value);
        console.log(localStorage.getItem('skill2'));

        localStorage.setItem('skill_level2', skill_level2.value);
        console.log(localStorage.getItem('skill_level2'));

        localStorage.setItem('skill3', skill3.value);
        console.log(localStorage.getItem('skill3'));

        localStorage.setItem('skill_level3', skill_level3.value);
        console.log(localStorage.getItem('skill_level3'));

        localStorage.setItem('skill4', skill4.value);
        console.log(localStorage.getItem('skill4'));

        localStorage.setItem('skill_level4', skill_level4.value);
        console.log(localStorage.getItem('skill_level4'));

        localStorage.setItem('lang', lang.value);
        console.log(localStorage.getItem('lang'));

        localStorage.setItem('lang2', lang2.value);
        console.log(localStorage.getItem('lang2'));

        localStorage.setItem('styear', styear.value);
        console.log(localStorage.getItem('styear'));

        localStorage.setItem('endyear', endyear.value);
        console.log(localStorage.getItem('endyear'));

        localStorage.setItem('company', company.value);
        console.log(localStorage.getItem('company'));

        localStorage.setItem('comlocation', comlocation.value);
        console.log(localStorage.getItem('comlocation'));

        localStorage.setItem('jobTitle', jobTitle.value);
        console.log(localStorage.getItem('jobTitle'));

        localStorage.setItem('achv1', achv1.value);
        console.log(localStorage.getItem('achv1'));

        localStorage.setItem('achv2', achv2.value);
        console.log(localStorage.getItem('achv2'));

        localStorage.setItem('achv3', achv3.value);
        console.log(localStorage.getItem('achv3'));

        localStorage.setItem('styear2', styear2.value);
        console.log(localStorage.getItem('styear2'));

        localStorage.setItem('endyear2', endyear2.value);
        console.log(localStorage.getItem('endyear2'));

        localStorage.setItem('company2', company2.value);
        console.log(localStorage.getItem('company2'));

        localStorage.setItem('comlocation2', comlocation2.value);
        console.log(localStorage.getItem('comlocation2'));

        localStorage.setItem('jobTitle2', jobTitle2.value);
        console.log(localStorage.getItem('jobTitle2'));

        localStorage.setItem('achv12', achv12.value);
        console.log(localStorage.getItem('achv12'));

        localStorage.setItem('achv22', achv22.value);
        console.log(localStorage.getItem('achv22'));

        localStorage.setItem('achv32', achv32.value);
        console.log(localStorage.getItem('achv32'));
        

        if (pic.files && pic.files[0]) {
            const reader = new FileReader();
            reader.onload = function () {
              const base64Image = reader.result as string;
              localStorage.setItem('form_profilePic', base64Image);
              console.log(localStorage.getItem('form_profilePic'));
            window.location.href = "../simple_layout/simpleLayout.html";
            };
            reader.readAsDataURL(pic.files[0]);
          } else {
            window.location.href = "../simple_layout/simpleLayout.html";
          }
       
    })


