const donationSection=document.getElementById('donation-section');
const historySection=document.getElementById('history-section');

document.getElementById('donation-btn').addEventListener('click',function(){
  showSectionByID('donation-section');
  changeBtnBackGround('donation-btn','history-btn');
});

document.getElementById('history-btn').addEventListener('click',function(){
  showSectionByID('history-section');
  changeBtnBackGround('history-btn','donation-btn');
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