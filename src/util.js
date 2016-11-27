
// Get list of items
export function getItems() {

  if (localStorage.getItem("list") === null) {
    const list = [];
    localStorage.setItem('list', JSON.stringify(list));
  } else {
    return JSON.parse(localStorage.getItem('list'))
  }
}

// http://stackoverflow.com/a/6860916
function idGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4());
}

// Add new items
export function addItems(val) {
  const list = getItems(),
        item = {},
        d    = new Date(),
        timeOptions = { hour: 'numeric', minute: 'numeric'},
        dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  item.id = idGenerator();
  item.task = val;
  item.time = d.toLocaleTimeString('en-us', timeOptions);
  item.date = d.toLocaleDateString('en-US', dateOptions);
  list.push(item);
  localStorage.setItem( 'list', JSON.stringify(list) );
}
