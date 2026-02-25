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

const btnInterview = document.getElementById('INTERVIEW-btn');
const btnRejected = document.getElementById('REJECTED-btn');
const notApplied = document.getElementById('not-applied');
btnInterview.addEventListener('click', function(){
    
       notApplied.innerText = btnInterview;
      
      console.log(btnInterview);
    
})
