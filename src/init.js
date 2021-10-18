for(let i = 1; i <= 31; i++) {
    const datesContainer = document.querySelector('.bacc-calendar__dates')
    datesContainer.innerHTML += `
    <div class="calendar__date flex align-center">
        <span class="date-number">${i}</span>
    </div>
    `
}