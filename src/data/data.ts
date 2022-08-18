type box = {
  id: number;
  mine: boolean;
  count: number;
};

export const boxes: box[] = [
  {
    id: 1,
    mine: false,
    count: 0,
  },
  {
    id: 2,
    mine: false,
    count: 0,
  },{
    id: 3,
    mine: false,
    count: 0,
  },{
    id: 4,
    mine: false,
    count: 0,
  },{
    id: 5,
    mine: true,
    count: 0,
  },{
    id: 6,
    mine: false,
    count: 0,
  },{
    id: 7,
    mine: true,
    count: 0,
  },{
    id: 8,
    mine: false,
    count: 0,
  },{
    id: 9,
    mine: false,
    count: 0,
  },{
    id: 10,
    mine: false,
    count: 0,
  },{
    id: 11,
    mine: false,
    count: 0,
  },{
    id: 12,
    mine: false,
    count: 0,
  },{
    id: 13,
    mine: true,
    count: 0,
  },{
    id: 14,
    mine: false,
    count: 0,
  },{
    id: 15,
    mine: false,
    count: 0,
  },{
    id: 16,
    mine: false,
    count: 0,
  },
];


function randomItem (items: box[]){

    let item =  items[Math.floor(Math.random()*items.length)];
    let value = 0
    let twentyPercent  = (items.length * 0.2).toFixed(0) 
    while (twentyPercent !== 0) {
        
    }
    if (item.mine) {
        return
    }else{

    }
}