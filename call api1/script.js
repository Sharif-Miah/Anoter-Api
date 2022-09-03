
const loadPhone = async(search) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
    const data = await res.json()
    displayPhone(data.data);

}


const displayPhone = phones => {
    // console.log(phones);

    phones = phones.slice(0,5)

    const phoneContainer = document.getElementById('phone-container')

    phoneContainer.innerHTML = ``;

    const displayShow = document.getElementById('display-show');

    if(phones.length === 0){
        displayShow.classList.remove('d-none')
    }else{
        displayShow.classList.add('d-none')
    }

    phones.forEach(phone => {
        // console.log(phone);

        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col')
        makeDiv.innerHTML = `
        
        <div class="card">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.brand}</h5>
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Show Data</button>
      </div>
    </div>

        `;
        phoneContainer.appendChild(makeDiv)

    })

    loadingSpiner(false)

}

document.getElementById('search-btn').addEventListener('click', function(){
    loadingSpiner(true)
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    loadPhone(searchValue)
    searchInput.value = ''
})


const loadingSpiner = (isLoading) => {
    const loading = document.getElementById('loading');
    if(isLoading){
        loading.classList.remove('d-none')
    }else{
        loading.classList.add('d-none')
    }
}

// loadPhone('')