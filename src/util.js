
// Get list of items
export function getItems() {

  if (localStorage.getItem("list") === null) {
    const list = [];
    localStorage.setItem('list', JSON.stringify(list));
    return list;
  } else {
    return JSON.parse(localStorage.getItem('list'))
  }
}


// http://stackoverflow.com/a/6860916
function idGenerator() {
  const S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4());
}

function condCheck(val) {

  let obj;

  if (val.indexOf('!') !== -1 && val.indexOf(' --') !== -1) {

    const task = val.split('!'),
          sub = task[1].split(' --');

    obj = {
      task : sub[0],
      important : true,
      subject : sub[1].toLowerCase()
    }
  } else if (val.indexOf(' --') !== -1) {
    const task = val.split(' --')

    obj = {
      task : task[0],
      important : false,
      subject : task[1]
    }
  } else if (val.indexOf('!') !== -1) {
    const task = val.split('!')

    obj = {
      task : task[1],
      important : true,
      subject : null
    }
  } else {
    obj = {
      task : val,
      important : false,
      subject : null
    }
  }

  return obj;
}

// Add new items
export function addItems(val) {
  let list = getItems();
  const item = {},
        d    = new Date(),
        timeOptions = { hour: 'numeric', minute: 'numeric'},
        dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  console.log();
  // itemConditions(val, ' -- ', 'subject');

  item.id = idGenerator();
  item.task = condCheck(val).task;
  item.important = condCheck(val).important;
  item.tag = condCheck(val).subject;
  item.time = d.toLocaleTimeString('en-us', timeOptions);
  item.date = d.toLocaleDateString('en-US', dateOptions);
  item.complete = false;
  list.push(item);
  localStorage.setItem( 'list', JSON.stringify(list) );
}


// Update items
export function updateItems(index, toggle) {
  let list = getItems();
  const item = list[index];

  item.complete = toggle;
  list.splice(index, 1, item)
  localStorage.setItem( 'list', JSON.stringify(list) );
}

// Remove items
export function removeItems(index) {
  let list = getItems();
  list.splice(index, 1);
  localStorage.setItem( 'list', JSON.stringify(list) );
}

export function removeComp(list) {
  const newList = list.filter(function( obj ) {
    return obj.complete === false;
  });

  localStorage.setItem( 'list', JSON.stringify(newList) );
}
