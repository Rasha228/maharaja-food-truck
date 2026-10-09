const menu = [
  {category:'Non-vegetarian starters',items:[['Pind Wali Fish','12.99'],['Maharaja Mughlai Tikka','11.99'],['Chicken Soup','15.99'],['Butter Chicken Nachos','11.99'],['Tandoori Fish White','15.99'],['Tandoori Murga','24.00']]},
  {category:'Vegetarian starters',items:[['Kathi Roll','8.99'],['Indian Style Noodles','10.99'],['Delhi Steam / Tandoori Momos','12.99'],['Maharaja Burger','13.99'],['Afghani Chaap','12.99'],['Shahi Paneer Nachos','11.99'],['Samosa / Papdi / Tikki Chaat','8.99'],['Red Chaap','13.99'],['Honey Chili Fries','11.99']]},
  {category:'Main course',items:[['Maharaja Thali Veg / Non Veg','12.99'],['Chicken Dum Biryani','9.99'],['Paneer Lababdar / Chicken','15.99'],['Kadai Chicken / Paneer','15.99'],['Daal Makhni','15.50'],['Butter Chicken','15.99'],['Tari Wali Fish','15.99'],['Motor Wala Murga','17.99'],['Chili Mancho / Paneer / Chicken','15.99']]},
  {category:'Bread',items:[['Tandoori Roti','2.75'],['Tawa Roti','1.99'],['Dhaniya Garlic Naan','3.75'],['Butter Naan','2.75']]},
  {category:'Specialty dishes',items:[['Matka Lassi','7.99'],['Tandoori Chaa','2.99']]},
  {category:'Desserts',items:[['Rasmalai','4.99'],['Vanilla Jamun','4.99']]},
  {category:'Beverages',items:[['OREO Nutella','7.99'],['Gulab Jamun Shake','7.99'],['Rasmalai Shake','7.99']]}
];

const menuContainer = document.getElementById('full-menu-content');
menuContainer.className = 'full-menu-content';
menuContainer.innerHTML = menu.map(group => `<section class="full-menu-category"><h3>${group.category}</h3>${group.items.map(([name,price]) => `<div class="full-menu-item"><span>${name}</span><b>$${price}</b></div>`).join('')}</section>`).join('');

document.querySelectorAll('.menu-filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.menu-filters button').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.dish-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.type !== filter; });
  });
});

document.querySelectorAll('a[href="#full-menu"]').forEach(link => link.addEventListener('click', () => { document.getElementById('full-menu').open = true; }));
document.getElementById('year').textContent = new Date().getFullYear();
