(function () {
    //customers
    let customers = [];
    let index = 0;

    //object constructor
    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    //create customer function
    function createCustomer(name, img, text) {
        //full img
        let fullImg = `img/customer-${img}.jpg`;

        //create new customer object
        const customer = new Customer(name, fullImg, text);
        //add to all customers
        customers.push(customer);
    }

    createCustomer('john', '1', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`);
    createCustomer('bob', '2', `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
    createCustomer('peter', '3', `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `);
    createCustomer('arnold', '4', `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
    //console.log(customers);

    document.querySelectorAll('.btn').forEach(function(item){
        item.addEventListener('click', function(event){
            event.preventDefault();
            //console.log(event.target);
            if(event.target.parentElement.classList.contains('prevBtn')){
                if(index===0){
                    index=customers.length
                }
                index--;
                document.getElementById('customer-img').src=customers[index].img;
                document.getElementById('customer-name').textContent=customers[index].name;
                document.getElementById('customer-text').textContent=customers[index].text;
            }
            if(event.target.parentElement.classList.contains('nextBtn')){
                if(index===(customers.length-1)){
                    index = -1;
                }
                index++;
                console.log(index);
                document.getElementById('customer-img').src=customers[index].img;
                document.getElementById('customer-name').textContent=customers[index].name;
                document.getElementById('customer-text').textContent=customers[index].text;
            }
        });
    });


})();