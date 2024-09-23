const donationSection=document.getElementById('donation-section');
const historySection=document.getElementById('history-section');
const totalTakaEl=document.getElementById('total-taka');
let totalAmount=parseFloat(totalTakaEl.innerText);

document.getElementById('donation-btn').addEventListener('click',function(){
  showSectionByID('donation-section');
  changeBtnBackGround('donation-btn','history-btn');
});

document.getElementById('history-btn').addEventListener('click',function(){
  showSectionByID('history-section');
  changeBtnBackGround('history-btn','donation-btn');
});

document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
  // const noakhaliTextField=document.getElementById('noakhali-text-field');
  // const noakhaliTaka=document.getElementById('noakhali-taka');
  // const noakhaliDonation = parseFloat(document.getElementById('noakhali-taka').innerText)+parseFloat(document.getElementById('noakhali-text-field').value);
  // document.getElementById('noakhali-taka').innerText=noakhaliDonation;
  // noakhaliTaka.innerText=noakhaliDonation;
  changeAmount('noakhali-text-field','noakhali-taka');
});

document.getElementById('feni-donate-btn').addEventListener('click',function(){
  changeAmount('feni-text-field','feni-taka');
});

document.getElementById('protest-donate-btn').addEventListener('click',function(){
  changeAmount('protest-text-field','protest-taka');
});

// common function
// show section
function showSectionByID(id){
  document.getElementById('donation-section').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
};

// btn background
function changeBtnBackGround(id1,id2){
  document.getElementById(id1).classList.add('btn-bg');
  document.getElementById(id2).classList.remove('btn-bg');
};

function changeAmount(textfield,donationTaka){
  if(isNaN(parseFloat(document.getElementById(textfield).value)) || parseFloat(document.getElementById(textfield).value)<=0){
    return alert('Invalid Donation Amount');
  }
  // updating section data
  const sectionDonation = parseFloat(document.getElementById(donationTaka).innerText)+parseFloat(document.getElementById(textfield).value);
  document.getElementById(donationTaka).innerText=sectionDonation;

  // updating total taka
  totalAmount-=parseFloat(document.getElementById(textfield).value);
  totalTakaEl.innerText=totalAmount;

  let txt='';
  if(textfield==='noakhali-text-field'){
    txt='famine-2024 at Noakhali';
  }
  else if(textfield==='feni-text-field'){
    txt='famine-2024 at Feni';
  }
  if(textfield==='protest-text-field'){
    txt='protest-2024';
  }

  const currentDate = new Date().toString();

    historySection.innerHTML+=
      `<div class="p-4 lg:p-8 mt-8 border rounded-xl space-y-4">
        <h3 class="font-bold text-lg">${parseFloat(document.getElementById(textfield).value)} Taka is Donated for ${txt}, Bangladesh</h3>
        <p class="text-base text-[#111111B3]">Date : ${currentDate}</p>
      </div>`;

      document.getElementById('my_modal_5').showModal();
};