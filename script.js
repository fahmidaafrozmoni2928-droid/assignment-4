const allBtn = document.getElementById('btn-all');
const interviewBtn = document.getElementById('btn-interview');
const rejectBtn = document.getElementById('btn-reject');

function toggleStyle(id){
     allBtn.classList.add('bg-white', 'text-gray-600');
    interviewBtn.classList.add('bg-white', 'text-gray-600');
    rejectBtn.classList.add('bg-white', 'text-gray-600');


    allBtn.classList.remove('bg-blue-600', 'text-white');
    interviewBtn.classList.remove('bg-blue-600', 'text-white');
    rejectBtn.classList.remove('bg-blue-600', 'text-white');

    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-600', 'text-white');
    selected.classList.remove('bg-white', 'text-gray-600');
    console.log(selected);


}   

const btnInterview = document.querySelector('.INTERVIEW-btn');
const btnRejected = document.querySelector('.REJECTED-btn');
const notApplied = document.querySelector('.not-applied');
const card = document.querySelector('.card');
const interviewCount = document.getElementById('interview-count');
const rejectCount = document.getElementById('rejected-count');
const selectedCard = document.getElementById('selected-card');
let Counts = 0;
 document.addEventListener('click', function(e){
    if(e.target.classList.contains('INTERVIEW-btn')){
      
      const card =  e.target.closest('.card');
      const notApplied = card.querySelector('.not-applied');
        notApplied.style.display = "block";
        notApplied.innerText = btnInterview.innerText;

       notApplied.classList.remove('bg-[#F8FAFC]', 'py-3', 'px-2');
            
        
            notApplied.classList.add('text-green-800', 'border-2', 'border-green-800' );

      
      interviewCount.innerText++
      
     // countJ.innerText--;
      
      e.target.disabled = true;
      selectedCard.appendChild(card);
      
      png.style.display = "none";

     if(!card.classList.contains('interviewed')){
      Counts++;
      card.classList.add('interviewed');
     }
     // Counts++;
     let totalJobs = 8;
     countJ.innerText = Counts + "of" + totalJobs ;
     

    
 }

       
   if(e.target.classList.contains('REJECTED-btn')){
      const card =  e.target.closest('.card');
      const notApplied = card.querySelector('.not-applied');

        notApplied.innerText = btnRejected.innerText;
        notApplied.style.display = "block";
       notApplied.classList.remove('bg-[#F8FAFC]', 'py-3', 'px-2');
            
        
            notApplied.classList.add('text-red-800', 'border-2', 'border-red-800' );

      rejectCount.innerText++;
      e.target.disabled = true;


      png.style.display = "none";

      selectedCard.appendChild(card);
      
      
 }  
    
})


const png = document.getElementById('png');
const allCards = document.getElementById('all-cards')
document.addEventListener('click', function(e){
    if(e.target.classList.contains('interview-filter-btn')){
    allCards.classList.add('hidden');
   png.classList.remove('hidden');
   
  
    }

    if(e.target.classList.contains('reject-filter-btn')){
        allCards.classList.add('hidden');
       png.classList.remove('hidden');
        }
        
        
        if(e.target.classList.contains('all-filter-btn')){
            allCards.classList.remove('hidden');
           png.classList.add('hidden');
            }        
})

const totalCount = document.getElementById('total-count');

const countJ = document.getElementById('count');

function calculate(){
   const allCards = document.querySelectorAll('.card:not(.empty-card)');
  totalCount.innerText = allCards.length;
   countJ.innerText = allCards.length;
  
}
calculate();

const deleteBtn = document.querySelector('.btn-delete');


document.getElementById('all-cards').addEventListener('click', function(e){

       console.log(e.target);
    if(e.target.classList.contains('btn-delete')){
       e.target.closest('.card').remove();
       countJ.innerText--;
    }
})


